---
path: "/posts/front-end-dev/playing-with-data-uris"
title: Playing With Data URIs
summary: Sharing some benefits of using data URIs for images
date: "2013-03-21"
tags:
  - front-end-dev
layout: layouts/post.njk
---

![](/img/posts/front-end-dev/playing-with-data-uris/grossness.jpg)

Following up on [my post yesterday,](/posts/front-end-dev/going-live-with-number-five) I thought I should quickly play with data URIs to see what they can do for performance. This is strictly sharing my learning and testing, not an explanation of how data URIs work.

## I have no idea what I'm doing.

I really don't have a grasp on this tech yet. I've read about them in lots of posts, but haven't really messed with them much. I mean, I understand that they are a way of writing the code for an asset directly into the HTML. How that works, how to troubleshoot or how to explain oddities are currently beyond my skillzzz.

Chris' recent post on [using them with SVGS](http://css-tricks.com/using-svg) convinced me to try them out. Plus, Neil really digs them and actually [made an encoder.](http://base64.neil.mixture.io) You know, for kicks while he was coding out a project.

## I feel dirty and better at the same time.

Using them is kind of like drinking a natural vegetable shake. You know it's good for you, but it's icky and makes you shudder. The code that makes them is insane. Putting Sublime Text into full screen mode with my 1440x900 resolution, it takes 3-4 full swipes to scroll past the code.

It is really easy, though. You drag your image into an encoder, copy, and paste the code into the src="" of your image. Boom!

## The Results (Home Page Only So Far)

I'm not 100% sure about the results. What I can see is that the page weight went down (very surprisingly, but thanks to gzip). The page load time went down, but the requests stayed the same. This was a little bit of a WTF moment for me. I'll spend a little more time trying to dig up an answer because I was expecting it to be reduced by the 10 SVGs that are now data URIs.

#### Page Weight

<small>linked SVG</small> 229 KB vs. 185 KB <small>data URI</small>

#### HTTP Requests:

<small>linked SVG</small> 20 vs. 20 <small>data URI</small>

#### Page Load Time:

<small>linked SVG</small> 1.67 seconds vs. 1.29 seconds <small>data URI</small>
