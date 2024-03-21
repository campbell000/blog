---
title: "Reddirect: an Optimized \"old\" Reddit Experience for the iPhone!"
titleImage: "/appIconRounded.png"
containImage: true
summary: "An overview of the Safari Extension I created, which enhances the reddit experience on iOS"
shouldShowTableOfContents: true
shouldShowUpdatedAt: false
shouldHideDonate: true
createdAt: "2024-02-19T23:41:34.140Z"
tags: 
  - Programming
  - How To
---

## TL;DR
This app makes old.reddit.com *much* nicer to use on iOS. [Get it Here!](https://apps.apple.com/us/app/reddirect-for-reddit/id6478085041)

## Overview
Put simply, Reddit is awesome. Whether you're looking for advice, opinions, information, or simply something to laugh at, reddit has you covered. I've been an avid user for over 10 years, and I can't imagine my life without it.

But unfortunately, Reddit Inc has been making tons of user-hostile changes over the years, starting with its infamous site redesign and culminating towards [killing off all third party apps](https://arstechnica.com/gadgets/2023/06/reddits-new-api-pricing-will-kill-off-apollo-on-june-30/). Becoming fed up with these changes, I decided to take matters into my own hands.

So, without further ado, here's "Reddirect" (sigh...."For Reddit")! Reddirect is an iOS Safari extension that optimizes the reddit experience on iOS platforms. The app takes a minimal, but effective, approach in improving the reddit experience on mobile devices.

They say a picture is worth a thousand words, so take a look at reddit on the iPhone as it normally appears:
<div class="imageContainer">
  <img :src="'/oldlight.jpg'" style="height: 500px; object-fit: contain;"/>
  <span class="text--secondary">What is this? An app for ants?</span>
</div>

There are *many* problems with old.reddit.com on mobile:
- Impossible to use without switching to landscape or zooming in
- Modals are often impossible to submit or close
- Chat is impossible to use
- Elements are frequently larger than the viewport
- Misclicks are extremely common (in my experience) due to how small the site's buttons/links are
- Ads and useless garbage take up too much of the screen.

The site was, clearly, not designed for mobile devices.

Now, take a look at old.reddit.com with Reddirect's changes:
<div class="imageContainer">
  <img :src="'/redditlight.jpg'" style="height: 500px; object-fit: contain;"/>
  <span class="text--secondary">An actually-usable interface!</span>
</div>

No more panning, zooming, and rotating your device to  use a text-driven website! No more ads! No more useless clutter taking up 40% of the screen! Video thumbnails automatically resize to fit the width of your screen! Isn't modern web development **amazing?**

And here's dark mode, in case you're curious:
<div class="imageContainer">
  <img :src="'/redditdark.jpg'" style="height: 500px; object-fit: contain;"/>
  <span class="text--secondary">An actually-usable interface!</span>
</div>

## Changes
At a high level, Reddirect makes the following changes to old.reddit.com:
- Redirects all reddit.com links to "old.reddit.com" (i.e. it's "old" interface)
- Removes all custom subreddit themes and styles to force a uniform look and feel
- Hides the sidebar (which is rarely interacted with, IMO) behind a bottom sheet popup
- Removes all "Promoted" posts and, as well as the nags about signing in, reddit gold, etc
- Adds a Dark Mode
- Many more tweaks to make things a little nicer on iOS

## Privacy
This app needs a few Safari Permissions to run since it needs to examine and modify the page that the user is on.

**But rest assured:** this plugin does not save, store, or transmit any webpage data to me, Apple, or any third party companies. All webpage and image data stays *directly* on your phone, where it belongs.

## FAQ
1. **Why does this app cost money?** Because I spent a lot of time on it, and I think software that makes one's life better deserves to be paid for. It also helps me prioritize fixing it when reddit changes things and breaks it.

2. **I think I found a bug! What do I do?** Contact me at <a href="mailto:contactme@nevermeant.dev">contactme@nevermeant.dev</a> with some details on how to reproduce it. I will add your name/tag/whatever in my app as a thanks. 

3. **This app sucks! Who do I complain to?** Any and all feedback is appreciated. Contact me about your ideas.

## Closing Remarks
What started as a simple weekend project quickly became a larger undertaking as I began to realize how *ill-suited* old.reddit.com is for small screens. The site uses TONS of hardcoded sizes and makes lots of assumptions about screen sizes: almost every day, I'd find a new rule that I'd have to fix, or a new design challenge to work around.

After diving into old.reddit's design, I quickly began to realize *why* reddit had decided to redesign the site from the ground up. I think we can all agree that the end result is *[unequivocally terrible](https://www.reddit.com/)*, but at the very least, I can understand the motivation behind a complete redesign.

Do I think that my app perfects the reddit experience? Probably not. There are likely other bugs and layout quirks that I've missed, or better solutions for things that I overlooked.

Nevertheless, I'm proud of how the app turned out. My main metric for measuring the quality of my apps is "Do I still want to use it?", and I can emphatically say that I can't imagine using reddit WITHOUT my app.

## Questions?
For questions about the app, you can email me directly at: <a href="mailto:contactme@nevermeant.dev">contactme@nevermeant.dev</a>