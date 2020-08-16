---
path: "/posts/front-end-dev/simple-side-nav-flexbox-vs-grid"
thumb: "/img/posts/front-end-dev/simple-side-nav-flexbox-vs-grid/thumb.jpg"
thumb2x: "/img/posts/front-end-dev/simple-side-nav-flexbox-vs-grid/thumb@2x.jpg"
title: "Simple side nav: Flexbox vs. Grid"
summary: A popular question with a pretty clear answer in this case
date: "2020-08-16"
tags:
  - front-end-dev
layout: layouts/post.njk
---

I've seen more and more nav "sidebars" recently and wanted to try it on my site. My goal was to shift the layout in the tablet-range of viewport sizes and look something like the image below. This led to a popular question in CSS layout these days.

<img class="full-to-half-bleed" loading="lazy" src="/img/posts/front-end-dev/simple-side-nav-flexbox-vs-grid/sidebar.svg" />

## Is this a better job for Flexbox or Grid?

As usual, it depends. I went with Grid because I don't care about how my site looks in IE11. That's a privilege that I don't have at work, so I might use Flexbox to achieve the same thing based on the difference in CSS vs. HTML. My goal was to have the layout elements to be this simple:

```jsx
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
```

## Flexbox

In using Flexbox, there's always the trade-off of an additional HTML element to separate the child elements, which feels yucky.

```jsx
<body>
  <header></header>
  <div class="yucky">
    <main></main>
    <footer></footer>
  </div>
</body>
```

Internal content aside, here's a minimal amount of CSS to achieve the layout.

```css
@media screen and (min-width: 700px) {
  body {
    display: flex;
  }

  .yucky {
    flex-grow: 1;
  }
}
```

The `flex-grow` is technically optional if you don't want to ensure that your content and footer take up the full width of the remaining space.

## Grid

Grid has no trade-off if you are not supporting IE11 and some additional CSS if you are. Even without it, it's about 2x the CSS of the Flexbox solution but still so small that it's barely worth mentioning.

We get to keep the ideal HTML structure and here's some minimal CSS to achieve the same layout. With Grid, there are multiple ways to achieve the same goal and this one uses named areas.

```css
body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "header main" "header footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

To make things work with IE11, we get to add more than double the CSS. This also feels yucky, but I would not be reminded of the yuck every time I view my DOM structure in dev tools.

```css
@media all and (-ms-high-contrast: none) and (min-width: 700px) {
  body {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-rows: 1fr 1fr;
  }

  header {
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
  }

  main {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }

  footer {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
}
```

Technically, you don't ever have to see this CSS. If you're using tooling, Autoprefixer could handle this, but I feel it's important to understand what you're adding.

## A little more info

Without going too far into custom content, I wanted to touch on a couple of things that would vary from the example code. By default, the code was set up to keep things equal, but I want the nav to be 80px and the footer height to be dependent on the content. The following code handles those:

```css
body {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr auto;
  gap: 1px 1px;
  grid-template-areas: "header main" "header footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

That's all for now, but I'll continue adding these as I work on the rest of the site.
