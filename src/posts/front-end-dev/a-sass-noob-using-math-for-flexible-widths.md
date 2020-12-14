---
path: "/posts/front-end-dev/a-sass-noob-using-math-for-flexible-widths"
title: A Sass Noob using Math for Flexible Widths
summary: Sharing as I learn about mixins
date: "2012-06-18"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

So, now that I'm working with Compass and Sass one of the first things that I want to take advantage of is the math. One of my biggest pain points with responsive web design is using the calculator for the conversions to fluid widths. It bugged me so much that I learned a bunch of javascript to make a smoother way of doing [flexible math](http://responsv.com/flexible-math)

**DISCLAIMER**: I am new to writing mixins. There may be much, much better ways to do this. I am just sharing my learning. So, if you know of a better way please pop it in the comments.

## The Calculator is not my friend

The entire goal of flexible math was to be able to take known widths and divide them fast without having to then move decimals and add percentage signs. Sass does that stuff for you without the need to leave your editor, which is the bees knees.

This isn't fancy, I'm not trying to make a grid or anything. I just want to able to say my column is 320px wide in a 960px container.

```
  @mixin flexible-width ($context, $target) {
    width: (($target / $context) * 100%);
  }
```

## What does that do?

So, what this little mixin does is sets up "flexible-width", which is made up of a context and a target. Then it divides them, leaving a decimal. Then it multiplies that decimal by 100%. (This took a little figuring out on where to put the ‘%')

So now anytime I need a percentage width where I know the context and the target, all I have to do is call my mixin with the pixel widths:

```
  .boom-dan-does-sass-now {
    @include flexible-width (960, 320);
  }
```

The actual compiled CSS is:

```
  .boom-dan-does-sass-now {
    width: 33.333%;
  }
```

## Boom!

Now I won't have to do any actual conversions and won't even have to leave the CSS file to have flexible percentage widths. Thanks again to [@parenteau](http://twitter.com/parenteau) for the nudge. I'll be sharing my learnings as I go.

## Accuracy <strike>Disclaimer</strike> Update

By default, the number was going to 3 decimal points. Sharing this post led the awesome [Chris Coyier](http://twitter.com/chriscoyier) to chime in on a solution for that. You just update your config.rb with this funky little stuff and set how deep you want the rabbit hole to go:

`Sass::Script::Number.precision = 10`

Also, there is a much better way to do the percentage. Sass actually has a built-in function called percentage so a mixin isn't necessary.

```
  .mo-better-percentage {
    width: percentage(320px / 960px);
  }
```
