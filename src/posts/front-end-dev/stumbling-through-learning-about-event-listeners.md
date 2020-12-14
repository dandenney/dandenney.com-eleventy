---
path: "/posts/front-end-dev/stumbling-through-learning-about-event-listeners"
title: Stumbling Through Learning About Event Listeners
summary: In which I think I figure something out but I'm wrong
date: "2016-09-15"
tags:
  - front-end-dev
layout: layouts/post.njk
---

**Disclaimer:** In this post, I am sharing something that I've been learning. It's in no way a how-to and in fact I'd love feedback on better ways to do what I've done.

I had been progressing pretty well lately in learning vanilla JS and it felt awesome. Then I hit a wall in doing something that I thought was straight forward. I ended up putting about 5-6 hours into grokking how to get a value out of an event listener, that time being split between attempts, googling, reading Stack Overflows, reading the docs, pairing with a coworker, and _maybe_ an hour sitting like this.

![GIF](/img/posts/front-end-dev/stumbling-through-learning-about-event-listeners/gif-matt-damon-crying.gif)

## (If this, then that) \* 999

The fun part of front-end development is that there are likely 999 ways to solve the problem that I was facing. Having chosen one, I then tried about 423 ways to achieve it before getting it to work. If I wasn’t so focused on improving my skills I might have switched away to a different solution, but I had to know that I could do this.

## A reduced test case

The original problem was that I wanted to validate 2 datetime-local inputs. If the second datetime value is after the first, then submit a form to Firebase. The problem with sharing that for help was that there was so much unnecessary code (the date conversions, Firebase submission, etc.)

In this pen I simplified it and named the variables and functions in a way to describe what I was trying to achieve because I knew I needed help.

<div class="cp_embed_wrapper"><iframe id="cp_embed_OREBzg" src="//codepen.io/dandenney/embed/OREBzg?height=265&amp;theme-id=0&amp;slug-hash=OREBzg&amp;default-tab=js%2Cresult&amp;user=dandenney&amp;embed-version=2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" name="CodePen Embed" title="CodePen Embed 2" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div>

To make it simple, this is comparing the value of two selects with numbers from 1-4\. I knew how to get those values and compare them within the event listener, but I didn’t know how to get that value to bubble up to the parent function. (I wanted to do this because I knew I could then conditionally submit the form based on the true/false result of the comparison.) It turns out [that you can’t](http://stackoverflow.com/questions/26373208/returning-a-variable-from-a-listener-function-javascript), at least not directly. I had stumbled into some [complex territory](http://stackoverflow.com/questions/23667086/why-is-my-variable-unaltered-after-i-modify-it-inside-of-a-function-asynchron), obliviously.

Reiterating from above, I could have opted to do something different like disable/enable the submit button from the event listeners. However, this became more about learning how to get that value out of there because it seems like an important concept to understand.

## A solution

I know about 422 ways that you cannot return a value out of an event listener and use it in a separate function. I now know one way that you can and I’m sharing it here. It’s not elegant and it may not even be "right", but it works. Hopefully a few people more advanced than I am will chime in with 1 of the 999 other ways that you can do this.

<div class="cp_embed_wrapper"><iframe id="cp_embed_OREBzg" src="//codepen.io/dandenney/embed/OREBzg?height=265&amp;theme-id=0&amp;slug-hash=OREBzg&amp;default-tab=js%2Cresult&amp;user=dandenney&amp;embed-version=2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" name="CodePen Embed" title="CodePen Embed 1" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div>

The “solution” was creating a retrieval function that can be shared between the two. The least technical explanation of this ever is that it is necessary because nothing is “listening” for updates from the event listener. I was trying to update the parent function or variables in it, but that can’t work without calling the function again.

As a workaround, I created a retrieval function to sit in the middle of the two. It runs when the select event happens and its value is then updated. Since that function now has an updated value, it can be used as a check on whether or not to proceed in a separate function.

In this example, if the second select value is greater than the first, then sending should be allowed. If not, then it shouldn’t. 5-6 hours and a blog post later, the “simple” thing that I was trying to do is working.
