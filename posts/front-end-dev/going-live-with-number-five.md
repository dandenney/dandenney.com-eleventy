---
path: "/posts/front-end-dev/going-live-with-number-five"
title: Going Live With Number Five
summary: Launching the site for the 5th Front-End Conf
date: "2013-03-20"
tags:
  - front-end-dev
layout: layouts/post.njk
---

![](/img/posts/front-end-dev/going-live-with-number-five/stage.png)

## A Month (or so) Late

I have been planning to write this since before I launched this year's [Front-End Design Conference](http://frontendconf.com) site. Instead of timing it with the launch of the site, I'm piggybacking on the launch of the app that I used to build it: [Mixture.io](http://mixture.io)

I got lucky and scored a copy of the alpha for the app and have been chatting and learning from [Neil Kinnish](http://twitter.com/neiltak) as they have been building it.

### Goals for this year's site

I really dug the look of the '12 version, but felt pretty horrible about the markup and the performance. It was done in a rush and those things suffered.

For the '13 version I wanted to significantly reduce the HTTP requests, make better use of preprocessors, reduce page weight, reduce the amount of text and move away from Rails.

### From Prototype to Production

I began using Mixture to prototype mainly for the ability to use some includes and fake some data (attendee profiles). I quickly learned that all of the front-end best practices were baked into the app: CSS minification, JS concatenation and minification, image optimization, S3 asset hosting and gzipping to mention a few.

Luckily, Neil offered to let me test using their pro option to host the site and I was no longer building a prototype!

I still have some loose ends and can do some more optimization, but here is how the new version is stacking up. Keep in mind I haven't had to even think about minifiying, S3, etc. It was all done for me with Mixture.

### Home Visual Comparison: [2012](http://frontenddesignconf.heroku.com) vs. [2013](http://frontenddesignconference.com)

There is one major change that is kind of cheating the comparison. I realized it was pretty irresponsible to automatically load all of the attendee profiles.

#### Home Page Weight

<small>2012</small> 1.8 MB vs. 229 KB <small>2013</small>

#### Home HTTP Requests:

<small>2012</small> 261 vs. 20 <small>2013</small>

#### Home Page Load Time:

<small>2012</small> 13.83 seconds vs. 1.67 seconds <small>2013</small>

### Prior Year Visual Comparison: [2012](http://frontenddesignconf.heroku.com/2011) vs. [2013](http://frontenddesignconference.com/2011)

The page is actually a little heavier but that is because I added in 9 sponsor logos. Overall, I'm still happy with the improvement in reducing the requests and load time.

#### Prior Year (2011) Page Weight

<small>2012</small> 625 KB vs. 641 KB <small>2013</small>

#### Prior Year (2011) HTTP Requests:

<small>2012</small> 54 vs. 39 <small>2013</small>

#### Prior Year (2011) Page Load Time:

<small>2012</small> 6.47 seconds vs. 2.28 seconds <small>2013</small>

### Wanna play?

It's hard to explain how rad Mixture is without a video. If you want to play, [download Mixture](http://mixture.io) and [grab the front-end-conf repo.](https://github.com/dandenney/front-end-conf)
