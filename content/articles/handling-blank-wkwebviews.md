---
title: Handling Blank WKWebViews
summary: "IOS's WKWebview is a massive improvement over the now-deprecated UIWebView, but I've noticed that they occasionally fail to render, seemingly at random times. Read on for how I've dealt with this issue, and what you can do about it."
shouldShowTableOfContents: true
shouldShowUpdatedAt: false
createdAt: "2020-12-12T00:00:00.140Z"
tags: 
  - How To
  - Programming
---

If you simply want to see how I've handled WKWebViews rendering as white screens, go to the "My Solution" section. But if you're serious about understanding the issue, I recommend you read this entire post.

## How WKWebViews Work
Many teams have had the displeasure of being forced to migrate from UIWebViews to WKWebViews. While the amount of work is not trivial, I think that the changes themselves are relatively straightforward, and usually bring with them welcome memory and speed improvements. There's one change, however, that caught many developers by surprise:

**When you initialize a webview, a process OUTSIDE of your application's main process gets created. This external process manages the rendering and management of the web content**. 

You can actually see this happening when running your app in an XCode simulator: start your app, initialize a view that instantiates a WKWebView, and look in Activity Monitor for something with the name "WebContent" in it. The same thing happens on a real IOS device. That process's memory doesn't even count towards the memory that your app uses, so if your webview uses a lot of memory, your app won't necessarily get killed or receive a memory warning. IOS will simply kill the WebContent process, instead.

On one hand, this is great because the death of a webview process doesn't necessarily mean the death of your entire app. But the downside is that, when problems occur with your WKWebView instances (*and they WILL occur*), your code will need to be able to gracefully handle these failure scenarios. Otherwise, when a WKWebView crashes and you leave its dead corpse around in your views, yor users will see an ugly, blank white screen.

<div class="imageContainer">
  <img class="" :src="'/blankwkwebview.jpg'" />
  <span class="titleImageCaption text--secondary">An IOS component that uses WKWebView in the center to display information. It has just crashed, which is why it's just a white rectangle. <a href="https://blog.embrace.io/bug-of-the-month-blank-webviews/">Taken From embrace.io</a></span>
</div>

Even if your IOS and HTML/JS code is [simple and clean](https://www.youtube.com/watch?v=UigzN-4JR14), there are certain scenarios that will prompt IOS to *kill your webview*. Unhelpfully, Apple doesn't document *why* IOS would ever kill WebContent processes, but from my own testing and reading posts from stackoverflow/github, I THINK it can happen under the following scenarios:
- **Low system memory**: if a device is running low on memory, IOS may deem it necessary to kill your webview. Note that your app delegate's `applicationDidReceiveMemoryWarning()` function will NOT necessarily be called, since the webcontent process is seperate from your app's process.
- **Your app has been backgrounded**: just like how your safari tabs sometimes get killed when you've left them alone for a while, your app's webviews will sometimes get killed as well if your app has been left in the background, *even if your app itself hasn't been killed*.
- **Your webviews are not visible**: if you have a webview that's in a view controller, and that view controller is NOT on top of the view stack, IOS may deem it acceptable for killing. There's absolutely no documentation for this, but I have seen this happen many times in my own apps, especially when memory is low. IOS will prioritize the currently-displaying webview, while killing the ones not currently showing.

One important note: when I mention memory problems as being a cause for IOS to kill webviews, I don't necessarily mean memory leaks. It could simply mean that your web pages are requesting too much memory, too quickly. Again, Apple doesn't mention any of this in their documentation. This is simply from what I've read, and also after having dedicated many hours to debugging this particular issue myself.

**Sounds scary, right?** If your primary interface for your app is a webview, and there's a possibility that your interface simply doesn't show up, should you be using WKWebViews at all? There are many [Github issues for WKWebView-based frameworks](https://github.com/Telerik-Verified-Plugins/WKWebView/issues/41) that reference this particular issue, and some users in these threads echo sentiments like this, lamenting the fact that they've chosen to use WKWebView-based frameworks. 

These issue threads don't have clear solutions, but they all boil down to the same sentiment: *"It's probably resource related. Manage your memory, both IOS and JS (if you control it), and be ready to handle failures as best as you can."*

The optimist in me says that Apple simply didn't plan for people to use WKWebViews like this, and that the concept itself is being stretched too thin (i.e. WKWebViews being used as a replacement for an entire application framework). The pessimist in me, however, says that Apple knows about this and simply doesn't care, because they'd rather you use their native controls for both performance reasons and vendor lock in. The realist in me says that it's probably a little bit of both.

## How WKWebViews Fail
In general, I found that there were two ways that WKWebView could fail, manifesting as a blank white screen:
1. The WebView rendering successfully, but IOS kills its WebContent process at some later point in time (i.e. after being backgrounded, or after returning into view after being invisible).
2. The WebView never rendering at all.

### Killed After Being Rendered
The first case, where the webview loads, but is then later killed, is the easy, frequent case. It can largely be attributed to IOS' aggressive memory management, and you can actually handle it pretty gracefully through the delegate callback `WKNavigationDelegate.webViewWebContentProcessDidTerminate`, which is documented [here](https://developer.apple.com/documentation/webkit/wknavigationdelegate/1455639-webviewwebcontentprocessdidtermi). I found that something simple like the following works pretty well (pseudo-code, don't copy and paste this):
```swift
  public init() {
    let configuration = WKWebViewConfiguration()
    self.webView = WKWebView(frame: CGRect.zero, configuration: configuration)
    webview.navigationDelegate = self;
    self.webview = webview;
  }

  ...

  func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
    // Some other logic should probably go here
    // to try to restore state in the webview itself
    // as best as you can
    self.webview.reload();
  }
```
When IOS terminates your webview, it invokes the delegate callback. When this happens, I found that calling `self.webview.reload()` was enough to restore it. To get even fancier, you can do things like restore the scroll position with `self.webview.scrollView.setContentOffset()`, but the general idea should remain the same.

### Killed Before being Rendered
The *second* case of the webview simply showing a white screen from the get-go, however, is MUCH more difficult to track down and handle. This was an issue that I dealt with on other apps that I had worked on in the past.

The tricky part about this second case is that, unlike the first case, the `webViewWebContentProcessDidTerminate` delegate callback is usually NOT called. In addition, no other useful delegate callbacks are invoked either, such as memory warnings. Anecdotally, when I've encountered this issue, memory usage seemed fine, and I didn't see any crash reports or Jetsam Events in the device logs. This case would not happen very often: I would say that, on average, it would happen once for every 200 webview loads. And when I say "loads", I mean loading from a file on disk, so this rules out network failures.

In the past, I actually thought the issue was due to some peculiarity of the app I was working on at the time, rather than WKWebView itself. But just to make sure, I built a simple test app that loads a WKWebView using an HTML file on disk over and over again, and alerts if the contents of the view are blank after some amount of buffer time (i.e. 5 seconds).

Sure enough, every single time I ran this app, I'd get the alert that the webview didn't load. Sometimes it would take 2 hours to see the alert. Sometimes it would take 10 minutes. Once, it took 6 hours. But sure enough, out of about 6 runs, it happened all 6 times. 

After pouring through the device logs (which were exhausting to look at), the only commonality that I saw between all six runs was the following error, right before IOS attempts set the WKWebView's process to foreground priority:

```
RBSAssertionErrorDomain; code: 2; reason: "Specified target process does not exist".
```

To me, this implies that IOS had killed the webview process before WKWebView could finish initializing. I know that the process was getting killed because I was able to trace the PID for the WebContent process in the logs: I could see it being created, and then later in the logs, I saw the error above saying that the target process doesn't exist. 

But as to *why* this was happening, I had no idea: perhaps the device had started the process, context-switched to do something else, and then switched back to the app, only to find that the WKWebView process had been killed. So then, why was the IOS delegate callback not being invoked? I had no idea, but perhaps it was because the code to initialize the delegate logic had not been initialized yet, either. But I had no way of knowing for sure.

But I had stumbled upon [something interesting](https://github.com/ionic-team/cordova-plugin-ionic-webview/issues/286): a setting on a private API that forces the webview to always run at foreground priority. Using private APIs usually makes apps ineligible to be submitted to the App Store, but I was curious to see if this would fix the issue in my test app. So, I added the following lines to my test app (again, pseudocode, but the idea remains the same):

```swift
  let configuration = WKWebViewConfiguration()
  config.setValue("TRUE", forKey: "alwaysRunsAtForegroundPriority");
  self.webView = WKWebView(frame: CGRect.zero, configuration: configuration)
```

I ran my test app again for **24 hours** and did not see the alert. So while I don't have definitive proof, I suspect that there is either a bug in WKWebView itself, or a race condition that goes something like this:
- a web view is initialized
- a process is spawned for the web view
- the process is backgrounded briefly because the webview isn't showing (hasn't yet been added to a parent view that's onscreen, or that paren't hasn't been yet been fully rendered)
- IOS sees this backgrounded process and says, "eh, it's not being used, lets kill it".
- The app is ready to show the webview but the process was just killed. Hence, none of the delegate callback stuff works.

If true, then this is why setting `alwaysRunsAtForegroundPriority` fixes the problem. The WebContent process is never backgrounded, so that split-second opportunity for IOS to kill the process never happens, leaving your webview [safe and sound](https://www.youtube.com/watch?v=47dtFZ8CFo8).

While this seems like an easy fix (it MAY also fix case #1 above, although I didn't tes that), using that config option isn't a solution unless you're willing to risk getting banned from the App Store (and if that happens, where else are you gonna sell your app? That's an article for another day).

## My Solution(s)
So I decided to do something different: taking inspiration from [this snippet I found on GitHub](https://github.com/IjzerenHein/WKWebView/blob/master/src/ios/MyMainViewController.m), I added logic to periodically check if the webview had died. It looked something like this:
```swift
  public init() {
    let configuration = WKWebViewConfiguration()
    self.webView = WKWebView(frame: CGRect.zero, configuration: configuration)
    webview.navigationDelegate = self;
    self.webview = webview;

    // Important: this needs to be a weak reference, 
    // otherwise you'll get memory leaks!
    self.timer = Timer.scheduledTimer(timeInterval: 3, 
      target: self, selector: #selector(checkForDeadWebViews),
      userInfo: nil, repeats: true);
  }

  ...

  func checkForDeadWebViews() {
    // TODO: There needs to be synchronization logic here: we don't want
    // webViewWebContentProcessDidTerminate firing twice!
    if (self.webview.title?.isEmpty) {
       webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
         self.webViewWebContentProcessDidTerminate(self.webView);
       }
    }
  }

  func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
    self.webview.reload();
  }
```

Since my app was in complete control of its web content, I knew that every webview had a title. So if a webview DIDN'T have a title, then I knew that something had gone wrong, and I needed to reload the entire webview.

This WOULD have worked well, but there was one problem! While `webview.reload()` worked fine for the case where IOS was killing our WebContent process and invoking the delegate callback, I found that it didn't do ANYTHING for the second case! Calling `webview.reload()` simply did nothing, which was extremely unfortunate. Instead, I found that I had to break the clean encapsulation of my code and do something like the following:

```swift
  public init() {
    // ... Stuff I only want to initialize once
    self.initializeWebView();
  }

  function initializeWebView() {
    let configuration = WKWebViewConfiguration()
    self.webView = WKWebView(frame: CGRect.zero, configuration: configuration)
    webview.navigationDelegate = self;
    self.webview = webview;


    if (self.timer != nil) {
      self.timer.invalidate();
    }

    // Important: this needs to be a weak reference, 
    // otherwise you'll get memory leaks!
    self.timer = Timer.scheduledTimer(timeInterval: 3, 
      target: self, selector: #selector(checkForDeadWebViews),
      userInfo: nil, repeats: true);
  }

  func checkForDeadWebViews() {
    if (self.webview.title?.isEmpty) {
       webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
         self.webViewWebContentProcessDidTerminate(self.webView);
       }
    }
  }

  func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
    self.initializeWebView();
  }
```

If it's not clear, the difference between this snippet and the earlier one is that, instead of simple calling `reload()` on the webview, I am constructing an entirely new webview, along with a new timer. This is undoubtedly a heavier solution, but I found that simply throwing the old webview away and creating a new one effectively worked around the issue. 

The end result of my solution is that, on the off chance that IOS kills my webviews and I actually get alerted about it, the view gets restored in a mostly-transparent fashion. When IOS kills my webview before I even get a chance to display it, this manifests to the user as a view that takes a little longer to load than normal. This sucks, but honestly, users are used to this. As an iphone/safari user myself, pages randomly taking a long time to load is a daily occurrence for me. It's annoying and frustrating, and as a developer, you wish that there was a better alternative, but your users will get over it.

## Summary
Taken as a whole, this post isn't a dig at Apple (I'm sure it's the same, if not worse, for Android phones). It's just a reminder of how complicated these devices and their associated software can be, and the lengths that companies like Apple have gone to make programming for their devices as easy as possible. Want to display a web page in your app. Sure, it's three lines of code! Go crazy! It's commendable, but those abstractions, while appreciated, can be leaky at times. 

One final note: if anyone has any suggestions or improvements, *please* include them in the comments below. I'd love to hear about your experiences with WKWebView, and how you've dealt with these problems (or maybe you've *never* dealth with these problems, and I just write terrible code!)