---
title: About This Site
summary: "How's it going? Thanks for stopping by. Below you'll find a meta blog post about this site, why it was created, how it was created, and what kind of content you'll expect to find."
shouldShowTableOfContents: true
shouldShowUpdatedAt: true
createdAt: "2020-11-01T23:41:34.140Z"
tags: 
  - Life
  - Technology
  - Programming
  - Opinion
  - Misc
---

## About Me
I'm a professional software developer with a variety of interests. I'm a jack-of-all trades, master-of-none. I don't have any particular specialty, and I don't excel in any particular area. But, I'm pretty stubborn, so I'm usually able to handle most tasks given to me.

The coolest programming project [I've ever completed on my own is linked here](https://www.youtube.com/watch?v=0fLwrLrBcj8). It started as a failed Master's Degree project, but I continued working on it after my degree, and managed to find success.

## What Kind of Content Should I Expect on This Blog?
Lots of different things! Below are some examples:
- General Technology Posts and How-Tos
- Programming Tutorials
- Short Essays and Opinions
- Video game / Anime / Music Reviews and Analyses
- Much more!

I'm the only contributor to this blog, but I wouldn't be opposed to guest contributions!

## Why This Blog Exists
When I first started writing this "About" page, I began by indiscriminately dumping my pent-up frustrations about how **coporate, soulless, and lame** the mainstream internet has become. I soon realized that I had *a lot* more to say on the subject than I realized, so I moved it <NuxtLink to="/why-start-a-blog-in-2020">to its own separate post.</NuxtLink> 

So, if you can't be bothered to read that post, then this short excerpt will do: *I want to start a shift back to the way the internet used to be, where smaller voices could actually reach people. Where content could simply exist on the internet without a monetary purpose, without a desire to collect your data, where content doesn't simply exist for advertisers to analyze and aggregate into a dystopian, consumerist black hole.*

Big news and content aggregation companies like reddit, facebook and twitter wield too much power over the internet, so by starting a blog (and maybe inspire other to do the same), I hope to decentralize some of that power, and make the internet a better, less corporate place.

## Is This Site Monetized in Any Way?
Nope. Nothing on this site is monetized. Nothing is tracking you, I'm not here to sell anything, and I won't accept payments to write about something. The only thing you'll see on this site is a donation link at the bottom, which will go to domain costs (and maybe some toys for my dog). It also simply gives people a way to let me know that they support my content. 

I even took the time to dynamically shove the donate link to the very bottom of the screen if your screen is tiny; I know how annoying those bottom bars can be on mobile devices.

## How This Site Was Created
This site was created with Nuxt.js, generated statically (using their "content" module) using nuxt-generate and hosted on GitHub pages. Miraculously, I managed to do it using the following tech stack:
- Macbook running Bootcamp, running...
- Windows with Windows Subsystem For Linux (WSL2) installed, running...
- Ubuntu

I ran into a few problems with this setup (a few bootcamp-related issues, and then a few WSL2-related issues), but miraculously, this all seemed to work out. I'll write a tutorial later with a more in-depth explanation later, but I followed [this guide as the foundation](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/). It'll be a shame when Apple takes away Bootcamp (when Apple giveth, they take away twice as much), but for now, I love the flexibility that their Intel-based Macs offer. RIP Intel.

As for my feelings about Nuxt.js: it's *very* opinionated, meaning that it values convention over configuration, which I'm not a huge fan of. I like my code explicit and verbose, rather than implicit and magical. And like all other modern web development stacks, when things don't work, *they fail spectacularly*. Obtuse error messages that read like an ancient foreign language, stack traces a million lines long, etc. That may not really a fault of Nuxt.js, but rather its underlying technologies (webpack, babel, etc), but it still makes Nuxt.js a little unpleasant to debug.

But when things work, *damn, do they work*. Nuxt.js got this blog up and running *very* quickly. In particular, its static site generation and content modules are *amazing* and, most importantly, allowed me to host this site for free (aside from domain costs). And because it's statically generated, **it's fast as hell to load and use**. So overall, my opinion of Nuxt.js is positive, and I'm curious to see how it evolves over time.

I also chose Vuetify for the Material Design theme library. I appreciate the work that that group does. I really do. But for whatever reason, I have run into many, many issues along the way: build issues, style issues, buggy animations, documented features not quite working right, etc. My suspicion is that is probably works great with client side rendering. So just a word of caution if you decide to pick up Nuxt.js with Vuetify