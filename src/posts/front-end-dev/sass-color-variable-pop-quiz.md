---
path: "/posts/front-end-dev/sass-color-variable-pop-quiz"
title: Sass Color Variable Pop Quiz
summary: Sharing results from asking when people set variables
date: "2013-01-21"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

## I had a question about color variables

Each project has some really easy to define colors that can get you started. Base font color, a highlight color, link color, etc. Once you're a few hundred lines in though, you start coming across more colors that are used for shading, borders, highlights, etc.

I knew [Nick](http://twitter.com/nickawalsh) and [Drew](http://twitter.com/drewbarontini) would have answers, so I popped some questions into the Envy Design Campfire.

### How many times do you have to use a color before it should be a variable and how do you conjure up names beyond the first 6 or 7?

Nick chimed in with "if I use it more than three-ish times, it's usually time to variableize it or if it's a completely different color that doesn't fall into a sass-adjustment case (e.g blue theme, random green button appears)". Drew followed up with a gist of examples that was something like this:

```
  Variables
  Brand Colors
  $color-brand-a: #606E67
  $color-brand-b: #C98344
  Base Colors
  $color-base: #636365
  $color-body: #EFEDDF
  $color-border: #A9A9A9
  $color-header: #3F4944
  $color-input: #DCD7CE
  Button Colors
  $color-btn-a: #228B9B
  $color-btn-b: #783737
  $color-btn-c: #BFBEB2
  Utility Colors
  $color-error: $color-btn-b
  $color-success: $color-header
  Container Colors
  $color-block-a: $color-header
  $color-block-b: desaturate(darken($color-body, 4%), 11%)
  $color-block-c: #D4D5C2
  $color-card-a: lighten($color-body, 4%)
  $color-card-b: $color-block-b
```

### To the Twitters!

I thought that this might be something cool that other people would have an opinion on. So I tweeted the questions and I'm sharing the answers below. Please chime in if you have a method. I love learning how other people approach these types of things.

Daniel Peplow aka [@danielpeplow](http://twitter.com/danielpeplow)

How many times before variableizing? **1**

Naming approach? **red1, red2, darkred1, darkred2, primarybrand, secondarybrand depending on what is required**

Chris Brauckmuller aka [@cbrauckmuller](http://twitter.com/cbrauckmuller)

How many times before variableizing? **1**

Naming approach? **It depends. For neutrals I usually have $gray, $gray-light and $gray-dark. For the main brand colors, I would name the original color something like $brand-green. Then if I needed variants of that, I might do \$brand-green-lighterX, where X just represents how many percent lighter it is versus the original.**

Sample? [https://github.com/cbrauckmuller/helium/blob/master/scss/config.scss](https://github.com/cbrauckmuller/helium/blob/master/scss/config.scss)

Elyse Holladay aka [@elyseholladay](http://twitter.com/elyseholladay)

How many times before variableizing? **3**

Naming approach? **In a small/personal project, sometimes I'll just say 'blue' 'darkblue', etc. In the large apps I work on, especially ones that require theming, I try to cut down on # of available colors by using darken/lighten in SASS rather than 2 different shades of blue. I name "global" colors like black/white by their names. For themable colors, I go primary/secondary/tertiary/highlight/error/success, and so on.**

Sample? [https://gist.github.com/4550373](https://gist.github.com/4550373)

Chase Woodford aka [@chase1263070](http://twitter.com/chase1263070)

How many times before variableizing? **2**

Naming approach? **I try to stick to a `groupName-differentiator` naming convention.**

Sample? [https://github.com/chasewoodford/chasewoodford.com/blob/master/css/sass/\_variables.scss](https://github.com/chasewoodford/chasewoodford.com/blob/master/css/sass/_variables.scss)
