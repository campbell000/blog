---
title: About this Site
summary: "How's it going? Thanks for stopping by. Below you'll find a meta blog post about this site, why it was created, how it was created, and what kind of content you'll expect to find."
shouldShowTableOfContents: true
shouldShowUpdatedAt: true
tags: 
  - Life
  - Misc
  - Gaming
  - Technology
  - Programming
  - Opinion
---

## Why This Site was Created
### A Blog in 2020 is Kinda Like a Cassette Tape
My brother, who's in the music scene, told me that [cassette tapes](https://en.wikipedia.org/wiki/Cassette_tape) are sort-of back in style. Arguments about music fidelity aside, I can definitely see the appeal: compared to music-streaming services like spotify, you actually own the music, and the artist will actually make a couple bucks off of your purchase, as opposed to the fraction of the penny they'll make from spotify. And when compared to CDs, cassette tapes function as neat little display pieces, with tiny little labels and pieces of artwork you can display around your apartment. I don't see the industry shifting back to physical media any time soon, but I can see the niche appeal. 

So how does this relate to starting a blog in 2020? Well, in the past few years, much like how people consume much of their music through music aggregation platforms like spotify or youtube/apple music, many people consume news and information through news aggregation platforms like facebook, apple news, and reddit. Unless it reaches somebody's front page with billions of upvotes and thousands of little gold stars all over it, your average person (myself included) probably won't see it. So in a way, a blog is kind of like a cassette tape: both are mediums of content with very limited appeal in 2020.

**But that sucks**. Much like how music aggregation services harm music artists (low pay, only the big boys at the top benefit from this system), content aggregation services harm content creators: no one benefits except for the big, dominant voices (apple, NBCXfinityWarnerIHop, washington post, etc). Like most other human beings on the planet, I want to engage in discourse. I want to discuss, debate, listen, and learn. And I'm beginning to feel less and less comfortable doing so on platforms that are designed to stamp out voices like my own. 

And on top of that, these platforms are ultimately data-collection/advertising-platforms first, and content-platforms second, which is *creepy as hell*. So instead of writing another reddit post, or sharing something on facebook or stackoverflow, I've starting selling my own cassette tapes of tech content (except nothing on this site will ever be monetized! The worst you'll see is donation links, which will solely go to me and/or my dog). 

So, one of the primary reasons of starting to that blog is to become a part of the change I want to see: a shift back to the internet of yesterday, where smaller voices could actually reach people. Where content could simply exist on the internet without a monetary purpose, without a desire to collect your data, where content doesn't simply exist for advertisers to analyze and aggregate into a dystopian, consumerist black hole. 

### Putting my "Jack of all Trades, Master of None" Skillset to Good Use
The second reasons for me starting this blog is a bit more personal. I often have frank discussions with myself about who I'm supposed to be, and whether or not I've met all of the standards I've set out for myself. **I always come up short**. I can hear you say, "your expectations of yourself are simply too high!", but the only point of reference I have is my own. In many different areas, I've tried to ["be the best, like no one ever was"](https://www.youtube.com/watch?v=rg6CiPI6h2g): athlete, bodybuilder, musician, `game developer`, competitive gamer, etc, never achieving anything remotely resembling real success. And if you're not the best at something, then does anything else matter? When I was younger, the answer was, undoubtedly, **no**.

But as I've gotten older, I've realized that I *do* have one really great quality: I try *really* hard. I'm persistent. I'm stubborn. I have siblings that all taunt me and force me to keep up, even when I'm awful at something. And this had led to me being *kinda good* at *a lot of things*. So, as a result, I have a TON of novice-to-intermediate-level skills in my dumb little brain. And I'd like to think that this gives me an upper-hand in the ability to teach and impart knowledge, since *I am very familiar with having to learn, and then re-learn and re-train, over and over again* to truly grasp skills and concepts. 

Therefore, while it's taken me 20-some years of soul-searching for me to get to this point, I think I've finally figured out a way to put my "jack-of-all-trades" talent to good use: I intend to use this blog to document technical problems and concepts in a way that average people like me can understand them. I want to make content for people that aren't experts in the the stuff that they're looking for, but *they know what they're looking for*. And maybe sprinkle some other fun posts in along the way. To let people know that it's OK if they don't spend every second of their lives getting better at something, because that's something that I, myself, used to fear. 

## How This Site Was Created
This site was created with Nuxt.js, generated statically (using their "content" module) using nuxt-generate and hosted on GitHub pages. Miraculously, I even managed to develop and build it on Windows using Microsoft's Windows Subsystem for Linux (WSL2), so for anyone searching out there, it *can* be done. I'm even running Windows on Bootcamp (i.e. on a Macbook)! I'll write a tutorial later with a more in-depth explanation later, but I followed [this guide as the foundation](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/). Nuxt.js is *very* opinionated, which I didn't like so much, but it got this blog up and running *very* quickly, and static site generation is *amazing* and, most importantly, **free**. And because it's statically generated, **it's fast as hell to load and use**. So overall, Nuxt.js seems like a very useful and powerful framework, and a great fit for certain use cases. 

I chose Nuxt.js on a whim after surveying several different static site generation tools (jekyll, gatsby, hugo, etc). I know a little bit of angular, and wanted to give Vue a shot since it seems more lightweight as less opinionated. I know nothing about Vue, and I was able to get this blog up and running in GitHub Pages in about 12 working hours (ran into WSL/Bootcamp-related issues, so your time could be less).