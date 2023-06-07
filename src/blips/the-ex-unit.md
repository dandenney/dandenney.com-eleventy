---
date: "2022-05-26"
layout: layouts/blip.njk
summary: Another neat thing I learned from Andy
title: The ex unit is a thing that exists
tags:
  - blips
---

Today Andy Bell tweeted about creating a hero component and mentioned the `ex` unit. I hadn't heard of it and thought it was one of the newfangled additions to CSS. I was so surprised that the first result was a [Stack Overflow from 11 years ago](https://stackoverflow.com/questions/918612/what-is-the-value-of-the-css-ex-unit). 

<figure><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I love how back in the day this component would have been a right pain in the arse, but modern CSS makes it an absolute doddle, thanks to aspect-ratio, flexbox and ex units <a href="https://t.co/IzFOYY0Soz">pic.twitter.com/IzFOYY0Soz</a></p></blockquote><figcaption>&mdash; Andy Bell (@hankchizljaw) <a href="https://twitter.com/hankchizljaw/status/1529816909524283392?ref_src=twsrc%5Etfw">May 26, 2022</a></figcaption></figure><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<p class="mb-0 mt-6">The <code>ex</code> unit on MDN:</p>

<figure><blockquote><p>Represents the <a href="https://en.wikipedia.org/wiki/X-height">x-height</a> of the element's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font">font</a>. On fonts with the "x" letter, this is generally the height of lowercase letters in the font; 1ex ≈ 0.5em in many fonts.</p></blockquote><figcaption>MDN</figcaption></figure>

Thankfully, he also [shared a gist](https://gist.github.com/hankchizljaw/6e1c18818038b941b9cba9f3c821b8c9) with some CSS for me to kick the tires on very quickly.

```css
.cutout-hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  aspect-ratio: 1920/839;
}

.cutout-hero :is(img, picture, video) {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.cutout-hero__heading {
  font-size: var(--size-mega);
  width: min-content;
  line-height: 1;
  transform: translateY(0.8ex);
}
```

As I do, I [made a CodePen](https://codepen.io/dandenney/pen/XWZVdLg) right away. I'd recommend playing with it in [full screen view](https://codepen.io/dandenney/full/XWZVdLg).

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="XWZVdLg" data-user="dandenney" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/XWZVdLg">
  Untitled</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<p class="mt-6">I'll definitely try playing with this more. I've done this with `em` and `px` before, but I dig this more. Funnily, I probably have come across it before when I read <a href="https://every-layout.dev/rudiments/units/">Every Layout</a>, but ¯\_(ツ)_/¯</p>