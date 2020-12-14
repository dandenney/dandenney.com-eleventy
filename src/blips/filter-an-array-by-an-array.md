---
path: "/blips/filter-an-array-by-an-array"
title: Filter an array by an array
date: "2019-12-04"
tags:
  - blips
layout: layouts/post.njk
---

I needed to do something that was out of the realm of the normal docs and examples today, and I got a bit stuck. I had a list of 15 items that I needed to filter down to 3 specific items. I tried a bunch of things, but then luckily, [Jared](https://twitter.com/jaredsilver) shared a solution.

In hindsight, it's so simple but still doesn't feel intuitive to me. I want to doc it here in case I need it again.

```js
const things = [{ id: 1 }, { id: 2 }, { id: 3 }];
const wantedThings = [1, 2];

const chosen = things.filter(thing => wantedThings.includes(thing.id));
```

The odd part to me is flipping the arrays. I kept wanting to wriite it in where `thing` includes a `wantedThing`. TIL.

Here's pen if you wanna see the `console.log`.

<iframe
  height="265"
  style="width: 100%;"
  scrolling="no"
  title="NWPqENL"
  src="https://codepen.io/dandenney/embed/NWPqENL?height=265&theme-id=default&default-tab=js,result"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen={true}
>
  See the Pen <a href="https://codepen.io/dandenney/pen/NWPqENL">NWPqENL</a> by
  Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>) on{' '}
  <a href="https://codepen.io">CodePen</a>.
</iframe>
