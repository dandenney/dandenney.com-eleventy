---
path: "/posts/front-end-dev/im-down-with-svg"
title: I'm Down With SVG
summary: Sharing the benefits of SVG over PNG
date: "2012-09-30"
tags:
  - front-end-dev
layout: layouts/post.njk
---

After coming across a couple of articles [Wrangling SVGs](http://samsoff.es/posts/wrangling-svgs) and [Pixel Fitting](http://dcurt.is/pixel-fitting) , I wanted to check out what SVG can do. While many people are using them for icons and logos, I was particularly interested in how they can render [Ricardo Gimenes'](http://ricardogimenes.com) awesome illustrations for the [Front-End Conf site.](http://frontendconf.com)

The crazy cool part about SVG is that you can just save one out from Illustrator and put it into an image tag. Of course, not for IE8 and lower but that's luckily not a concern. (There are polyfills for them for those, though.) Let's get right into comparing a transparent png and an svg of a character. I chose the one for [Gio Difeterici](http://www.gdifeterici.com/) because it has a good level of detail and it's just so cool.

### Original size from the site

![Gio DiFeterici character as a png](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.png)

<small>Transparent .png, 401px x 466px, 21kb</small>

![Gio DiFeterici character as svg](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.svg)

<small>SVG, 401px x 466px, 15kb</small>

I'm using a retina MBP, so at regular size I can see the png start to lose detail. On the other hand, the svg is shimmering like Ricardo just finished making it in Illustrator. It looks amazing.

### Resizing with CSS to 50%

![Gio DiFeterici character as a png](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.png)

<small>Transparent .png, 200px x 232px, 21kb</small>

![Gio DiFeterici character as svg](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.svg)

<small>SVG, 200px x 232px, 15kb</small>

This would represent shrinking an image down for the pixel density. They both look really good and each have minor issues. The png gets a little blurry in the top of the hair and the svg has some sharp pixel issues on the tip of the paintbrush. Of the two, I'd still pick the svg. It is slightly more sharp and 6kb smaller.

### Flexible width set to fill 100% of the container

![Gio DiFeterici character as a png](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.png)

<small>Transparent .png, Set to 100% width, 21kb</small>

![Gio DiFeterici character as svg](/img/posts/front-end-dev/im-down-with-svg/gio-difeterici.svg)

<small>SVG, Set to 100% width, 15kb</small>

This is where the magic happens. The clarity is fantastic scaling up. There are some slight pixel issues around the tip of the paint brush, which is why Sam Soffes recommends making the svg the actual intended size. The cool part is that even with doing a small and large version, there will only be 2 versions instead of doing 2 small and 2 large ones to include the retina screens.

### I'll be using SVG for the realign

Based on what I have seen here, I will be converting all of the characters to svg for the realign. I would love to have a good solution for a red curtain background that I use as it is one of the biggest hits for file size. If I find a good solution for that, I will definitely share.
