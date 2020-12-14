---
path: "/blips/async-cloud-typography"
title: Async Cloud Typography
date: "2020-04-08"
tags:
  - blips
layout: layouts/post.njk
---

The recent update to Lighthouse 6 tightened up a little more on requests, which reduced my overall score. I recently changed over to using fonts from [Hoefler & Co.](https://www.typography.com/webfonts), using Sentinel right here in these words. Unfortunately, the webfont option from typography.com is handled via a CSS file instead of JS, which means that you can't make the request `async` without a little trickery.

Luckily, I found [Making Cloud.typography Fast(er)](https://csswizardry.com/2019/08/making-cloud-typography-faster), which includes a [fix from the folks over at Filament Group](https://www.filamentgroup.com/lab/load-css-simpler).

`<link rel="stylesheet" href="https://cloud.typography.com/[number]/[number]/css/fonts.css" media="print" onload="this.media='all'" />`

## Before

**Mobile**
![Screenshot of Lighthouse performance score of 95](/img/blips/async-cloud-typography/before-mobile.jpg)

**Desktop**
![Screenshot of Lighthouse performance score of 97](/img/blips/async-cloud-typography/before-desktop.jpg)

## After

**Mobile**
![Screenshot of Lighthouse performance score of 100](/img/blips/async-cloud-typography/after-mobile.jpg)

**Desktop**
![Screenshot of Lighthouse performance score of 99](/img/blips/async-cloud-typography/after-desktop.jpg)
