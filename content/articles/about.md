---
title: About this Site
summary: "How's it going? Thanks for stopping by. Below you'll find a meta blog post about this site, why it was created, how it was created, and what kind of content you'll expect to find."
shouldShowTableOfContents: true
shouldShowUpdatedAt: true
createdAt: "2020-11-01T23:41:34.140Z"
tags: 
  - Life
  - Misc
  - Gaming
  - Technology
  - Programming
  - Opinion
---

## Why This Site was Created
My brother, who's in the music scene, told me that [cassette tapes](https://en.wikipedia.org/wiki/Cassette_tape) are sort-of back in style. Arguments about music fidelity aside, I can definitely see the appeal: compared to music-streaming services like spotify, you actually own the music, and the artist will actually make a couple bucks off of your purchase, as opposed to the fraction of the penny they'll make from spotify. And when compared to CDs, cassette tapes function as neat little display pieces, with tiny little labels and pieces of artwork you can display around your apartment. I don't see the industry shifting back to physical media any time soon, but I can see the niche appeal. 

<div class="imageContainer">
  <img class="limitedMedium" :src="'/tapess.jpg'" />
    <span class="titleImageCaption">See, even the Album Text on a Cassette tape is cool to look at! <a href="https://unsplash.com/photos/0TKmh-MCg0A">Image from Ignat Kushanrev, here</a></span>
</div>

So how does this relate to starting a blog in 2020? Well, in the past few years, much like how people consume much of their music through music aggregation platforms like spotify or youtube/apple music, many people consume news and information through news aggregation platforms like facebook, apple news, and reddit. Unless it reaches somebody's front page with billions of upvotes and thousands of little gold stars all over it, your average person (myself included) probably won't see it. 

So in a way, a blog is kind of like a cassette tape: both are mediums of content with very limited appeal in 2020. Most people would rather get their content served to them in a preselected, curated list, rather than do the work of discovering content on their own.

**But that sucks**. Much like how music aggregation services harm music artists (low pay, only the big boys at the top benefit from this system), content aggregation services harm content creators: no one benefits except for the big, dominant voices at the top. This means that only companies like Apple, Amazon, Facebook, Reddit, and MSNNBCXfinityWarnerIHop have any real impact. 

But like most other human beings on the planet, I want to engage in discourse. I want to discuss, debate, listen, and learn. And I'm beginning to feel less and less comfortable doing so on platforms that are designed to stamp out voices like my own. 

And on top of that, these platforms are ultimately data-collection/advertising-platforms first, and content-platforms second, which is *creepy as hell*.

<div class="imageContainer">
  <img class="limitedMedium" :src="'/zuck_fb.jpg'" />
    <span class="titleImageCaption">Mark Zuckerberg professionally describing his userbase in the early days of The Facebook (yes, this is real. There's countless sources on the internet backing this up. Do a quick google search if you don't believe me). <a href="https://medium.com/@stevejennings1/were-not-dumb-fucks-mark-1bf63983dd0">Image from here</a></span>
</div>


So instead of writing another reddit post, or sharing something on facebook or stackoverflow, and giving these big tech companies free content to monetize and sell to advertisers, I've starting selling my own cassette tapes of tech content. The difference I'm making, however, is that nothing on this site is monetized. Nothing is tracking you, and I'm not here to sell anything. The only thing you'll see on this site is a donation link at the bottom, which will go to domain costs (and maybe some toys for my dog) and simply gives people a way to let me know that they support my content.

So, one of the primary reasons of starting to that blog is to become a part of the change I want to see: a shift back to the internet of yesterday, where smaller voices could actually reach people. Where content could simply exist on the internet without a monetary purpose, without a desire to collect your data, where content doesn't simply exist for advertisers to analyze and aggregate into a dystopian, consumerist black hole. 

## How This Site Was Created
This site was created with Nuxt.js, generated statically (using their "content" module) using nuxt-generate and hosted on GitHub pages. Miraculously, I even managed to develop and build it on Windows using Microsoft's Windows Subsystem for Linux (WSL2), so for anyone searching out there, it *can* be done. I'm even running Windows on Bootcamp (i.e. on a Macbook)! I'll write a tutorial later with a more in-depth explanation later, but I followed [this guide as the foundation](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/).

Nuxt.js is *very* opinionated, meaning that it values convention over configuration, which I'm not a huge fan of (having come from a Java/Spring and Ruby/Rails background, which I also didn't like). And like all other modern web development stacks, when things don't work, *they fail spectacularly*. Obtuse error messages that read like an ancient foreign language, stack traces a million lines long, etc. That's not really a fault of Nuxt.js.

But all things considered, Nuxt.js seems *very* powerful, and it got this blog up and running *very* quickly. In particular, its static site generation and content modules are *amazing* and, most importantly, allowed me to host this site for free (aside from domain costs). And because it's statically generated, **it's fast as hell to load and use**. So overall, my opinion of Nuxt.js is positive, and I'm curious to see how it evolves over time. I'm just not sure how eager I am to update my dependencies any time soon...

I chose Nuxt.js on a whim after surveying several different static site generation tools (jekyll, gatsby, hugo, etc). I know a little bit of angular, and wanted to give Vue a shot since it seems more lightweight as less opinionated. I know nothing about Vue, and I was able to get this blog up and running in GitHub Pages in about 12 working hours (ran into WSL/Bootcamp-related issues, so your time could be less).