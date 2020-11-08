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
### Putting my "Jack Of All Trades, Master of None" Skillset To Use
I think the best way to describe the genesis of this site is to briefly explain a picture that I had recently taken of myself. It was one of the first times in a long while that I had actually taken a good, hard, critical look at myself. While I had intended for my analysis to be physical, my thoughts drifted towards a lot more than that. Behold: 

<div class="imageContainer">
<img class="small" :src="'self.png'"/>
</div>

Looking at it now, I can't help but think how utterly *ridiculous* this picture looks to me. It may not look ridiculous to *you*, so if not, let me fill in the blanks:
- I'm a 20-something software developer
- I'm wearing a Super Mario shirt (which is secretly a Splatoon)
- I'm in a gym, a place I frequently find myself in
- I'm listening to music, something I frequently do

My outfit isn't ironic (goddamn do I love Nintendo and Splatoon), and my description above isn't a humblebrag to show off how quirky, zany, and varied my interests are. **I'm aware that none of my interests, nor any combination or permutation of them, are unique.** But I started to think to myself that this picture does a pretty good job of representing one of the core personality issues that I struggle with: "Who am I supposed to be? What archetype am I supposed to fit into? What am I supposed to be really good at?" Throughout various periods of my life, I've grappled with this question, grazing from interest to interest, trying to find *something* that suits me, something that complements my funny, stupid little brain:
- An athlete
- A musician
- A bodybuilder
- An electronic music composer
- A Programmer (tm)
- A game developer
- A competitive video gamer

Sure, I make a living as a programmer, and I think that I'm competent enough to handle most tasks that your average company will throw at me, but for all the time I've spent, for all the frustration that I've endured in trying to *truly* excel at something, I used to consider all of these endeavors as "failed attempts".

To elaborate: I don't have any championship trophies to show for it. I don't have a kick-ass body to show off (just a lot of aches and pains due to poor form in my earlier years). I swore off being a musician after putting in countless hours of practice, and failing to make the regional band tryout in high school, and I don't have a small-but-dedicated fanbase on spotify for my music. I've been described by fellow competitors as "the best scrub\*" in the local competitive video game scene, and I have about 3 unfinished, nonfunctional videogames in GitHub. I am kind of like a swiss army knife, but these blades are somewhat dull.
<span class="disclaimer">\*A "scrub" is someone who is percieved as not a threat. So being the best scrub is not really a compliment, but not quite an insult</span>.

But this isn't a post for me to whine and complain. I've been blessed with many, many things in my life (family, friends, loved ones, etc). I could have been born in a 3rd world country, with physical or mental disabilities, with far less privilege than I have now. And statistically, *very* few people achieve greatness. And while I'm being frank about I myself, I don't want to make it sound like I have NO great qualities: if there's one thing that I'm *really* good at, it's that I try *really* hard. I'm persistent. I'm stubborn. And this had led to me being *kinda good* at *a lot of things*. 

So, as a result, I have a TON novice-to-intermediate-level skills in my head. And I'd like to think that this gives me an upper-hand in the ability to teach and impart knowledge, since *I am very familiar with having to learn, and then re-learn and re-train, over and over again* to truly grasp skills and concepts. 

Therefore, while it's taken me 20-some years of soul-searching for me to get to this point, I think I've finally figured out a way to put my "jack-of-all-trades" talent to good use: I intend to use this blog to document technical problems and concepts in a way that average people like me can understand them. I want to make content for people that aren't experts in the the stuff that they're looking for, but *they know what they're looking for*. And maybe sprinkle some other fun posts in along the way. To let people know that it's OK if they don't spend every second of their lives getting better at something, because that's something that I, myself, used to fear. 

### A Blog in 2020 is Kinda Like Buying a Cassette Tape in 2020
My brother, who's in the music scene, told me that [cassette tapes](https://en.wikipedia.org/wiki/Cassette_tape#/media/File:Compactcassette.jpg) are, for some reason, sort-of back in style. Arguments about music fidelity aside, I can definitely see the appeal: compared to streaming services like spotify, you actually own the music. And the artist will actually make a couple bucks off of your purchase, as opposed to the fraction of the penny they'll make from your spotify listen. Compared to CDs, cassette tapes function as neat little display pieces, with tiny little labels and pieces of artwork you can display around your apartment. So I can see the appeal.

Similarly, in the past few years, I've found myself wanting to consume content from mainstream aggregation sites like reddit and facebook less and less: sure, the built-in audience is massive, but I'm beginning to feel less comfortable contributing content to what is ultimately a data-collection platform first, and a content-platform second. [Hacker News](https://news.ycombinator.com/) is actually one site that I can tolerate, but I've started to curate individual sites that I've particularly enjoyed. And after having done so, I've started to enjoy and appreciate the internet a whole lot more. Call me the internet-tech equivalent of a cassette-tape-buying hipster, but I encourage any readers to at least TRY and move away from mainstream content aggregation platforms, just for a bit, to see how they like it. 

And before anyone mentions [Medium](https://medium.com/): really? Medium? A site where content is paywalled behind subscriptions? A site that is antithetical to the internet itself, that information should be free? C'mon. Medium is garbage. As long as people are willing to put up with stuff on this site that may not be super relevant (that's why I have tags), nothing on this site will ever be monetized.

And one other thing: there's a certain kind of retro, nostalgic charm in creating a blog in 2020. People don't really do that anymore: most people stick their thoughts on Facebook, Instagram, or Reddit these days. And the tech-minded folks usually put their stuff on Medium dev.to. It kind of feels like "sticking it to the man" in a way, or the tech equivalent of [going off the grid].(https://www.youtube.com/watch?v=zmwk_OiUtxQ) These big tech companies are so, so ravenous for content, so it feels kind of nice to truly own something*, rather than simply hand over my content for these tech companies to consume and monopolize. 
<span class="disclaimer">\* This site is hosted on GitHub Pages, which is owned by Microsoft, I know.</span>

## How This Site Was Created
This site was created with Nuxt.js, generated statically (using their "content" module) using nuxt-generate and hosted on GitHub pages. Miraculously, I even managed to develop and build it on Windows using Microsoft's Windows Subsystem for Linux (WSL2), so for anyone searching out there, it *can* be done. I'm even running Windows on Bootcamp (i.e. on a Macbook)! I'll write a tutorial later with a more in-depth explanation later, but I followed [this guide as the foundation](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/). Nuxt.js is *very* opinionated, which I didn't like so much, but it got this blog up and running *very* quickly, and static site generation is *amazing* and, most importantly, **free**. So overall, Nuxt.js seems like a very useful and powerful framework, and a great fit for certain use cases. 

I chose Nuxt.js on a whim after surveying several different static site generation tools (jekyll, gatsby, hugo, etc). I know a little bit of angular, and wanted to give Vue a shot since it seems more lightweight as less opinionated. I know nothing about Vue, and I was able to get this blog up and running in GitHub Pages in about 12 working hours (ran into WSL/Bootcamp-related issues, so your time could be less). I will say that knowing a little about modern web-development certainly helps.