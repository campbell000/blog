---
title: "Croppi: A Safari Extension for Easily Cropping Images"
titleImage: /cropi.jpg
containImage: true
summary: "An overview of the Safari Extension I created, which allows users to easily crop images and save them, without leaving Safari."
titleImageCaptionHTML: "A Screenshot of Croppi in Action!"
shouldShowTableOfContents: true
shouldShowUpdatedAt: false
createdAt: "2022-12-29T23:41:34.140Z"
tags: 
  - Programming
  - How To
---

## Overview
Croppi is a simple iOS Safari extension that allows users to easily take screenshots, crop them, and save them to either the clipboard, or a file that can be saved. I created it because, given how often I send silly memes to my friends, I quickly became frustrated with how many steps it took to take a screenshot, crop the relevant section, and send it.

Not only that, but after the process, I'm left with hundreds of soon-to-be useless photos in Camera roll, taking up space.

<div class="imageContainer">
  <img :src="'/croppi2.jpg'" style="height: 300px; object-fit: contain;"/>
  <span class="text--secondary">Simply tap on the "Croppi" row in the Safari Extensions tab to start cropping!</span>
</div>

So, I created an extension reduces the friction of taking and cropping screenshots, simultaneously avoiding the need to store the images!

## Privacy
The plugin works INSIDE the web page that you're viewing, so it needs permissions to read/access the page that you're on.

**But rest assured:** this plugin does not, in any way, send, store, or transmit any website data. All webpage and image data stays *directly* on your phone, where it belongs.

## Limitations
As with most things in life, there are unfortunately some limitations that users should be aware of.
- The free version places a watermark in the images. Purchasing the premium version (which can be done in the app) removes this watermark. Please support indie developers like me!
- ~Invoking the extension while zoomed in makes it difficult to use.~ Fixed!
- Invoking the extension while zoomed out makes the interface smaller. This affects sites that are, by default, zoomed out to fit your iphone's width, such as old.reddit.com. iOS's implementation of "browser.tabs.get/setZoom" is absolutely busted, so there's not much I can do about this.

## Closing Remarks
Overall, it was a little more time consuming than I expected (roughly 2 weeks' worth of my after-hours free time), but this was a fun little app to create. While some of iOS16's new features make this app somewhat obsolete (before iOS16, one could not take a screenshot and NOT save it to Camera Roll!), I still think that it's a nifty little extension that should save users some time and frustration when taking screenshots in Safari!

On one final note: Apple, *please* fix your Safari extension APIs!

## Questions?
For questions about the app, you can email me directly at: <a href="mailto:contactme@nevermeant.dev">contactme@nevermeant.dev</a>