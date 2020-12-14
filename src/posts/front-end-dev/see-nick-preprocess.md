---
path: "/posts/front-end-dev/see-nick-preprocess"
title: See Nick Preprocess
summary: The launch of Assembling Sass at Code School
date: "2012-08-15"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

> Alright  
> Stop whatcha doin'  
> 'cause Nick's about to ruin  
> the way of writin' styles that ya used to.

You can save the time of reading this and just [get started learning Sass](http://www.codeschool.com/courses/assembling-sass) from Nick on Code School if you like.

![Nick Walsh](/img/posts/front-end-dev/see-nick-preprocess/nick-walsh.png)

## We launched Assembling Sass today at Code School.

I have been pumped about [this course](http://www.codeschool.com/courses/assembling-sass) since I got hired on. It took me about 10 minutes to fall in love with Sass once I was lucky enough to have Michael Parenteau show me how to get started. In Assembling Sass, Nick Walsh will be showing you a bunch of rad stuff that Sass can do and how it will help with your workflow.

## You should be using a preprocessor.

Of course, I recommend Sass and definitely recommend taking the course that Nick put together but the main thing is that you should really start using one. Start small, get a site converted over to one and just learn as you go. I was hesitant and just sat around reading articles about how cool they are for too long. You really won't understand how useful they are until you dive in.

So, here are the benefits of using Sass in my own words. Fortunately, you'll learn all of these in [Assembling Sass.](http://www.codeschool.com/courses/assembling-sass)

### You will write less code.

In vanilla CSS, you continually have to repeat things with the same meaning and you have to be redundant. (wink, wink) For real, though, how many times have you duplicated a class name to style containing elements? .nav li, .nav a .nav a span, etc. Nesting allows for a clean organization for things like that so you'll only write the .nav once. I'm simplifying the benefit, but that alone is enough reason to use a preprocessor.

### You will copy and paste less.

How many times can you copy and paste vendor prefixes before you go insane? I don't know the number yet, but thankfully I rarely do it anymore so I will get there more slowly. Mixins and @extend drastically reduce the amount of copying and pasting that you have to do within your stylesheet.

### You can share styles.

Have you ever wanted something to share the same style of something else, but different? You know, like you want the button to have the same rounded corners, border and colors but a larger font or a different font. I always wished that rather than adding classes to things in the HTML that I could just call a class in another class in my stylesheet. That is what @extend does, so no more pitching coins into the mall fountain for me.

### You will learn to write better code.

Once you stray away from the workflow of repeating elements, copying and pasting, chaining elements, etc. you will begin to focus more on your organization. Once you're organized, you'll look for other ways to improve your code. The programmatic benefits of Sass are tremendous. There are many ways to to get creative and make your code work for you.

### You will get to results more <strike>raptorly</strike> rapidly.

Designing in the browser and rapid prototyping are not just buzz words, they are new workflows as a front-end dev. More and more, things are getting into the browser and markup earlier. Using a combination of variables and built-in functions, you can alter the appearance of a site very quickly. Store a few colors and use color functions like lighten and darken on them and you can completely change the look of a site in seconds.

Nested media queries will become one of your best friends if you do any responsive work. Rather than bouncing around to different media query zones, you can nest them directly with elements. This is very important when you are making changes for when the design breaks instead of using set breakpoints.

Also, you won't do math anymore. No more calculator or cool generator that someone lovingly put hours and hours of work into. You simply let Sass do the math. No need to figure out what percentage 248px is of 1024px and paste in an answer when you can just put them in something like this:

    width: percentage(248px / 1024px)

Ok, I'm done twisting your arm. [Go try out Level 1 for free.](http://www.codeschool.com/courses/assembling-sass) If you're not a Code School user, that will let you decide on whether or not you dig the teaching style and want to sign up to take the course (and any others).

If you want to read a more professionally written preprocessor pitch article, check out [Preprocess THIS!](http://cognition.happycog.com/article/preprocess-this)

Whatever you do now, start using a preprocessor. If you try it for a month and don't like it, I'll buy you beers to help drown your sorrows of forever writing vanilla CSS.
