---
path: "/posts/front-end-dev/getting-closer-to-critical-css-by-default"
title: Getting Closer To Critical CSS By Default
summary: How adopting CSS-In-JS tooling is improving performance
date: "2019-10-20"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

A few years back, the concept of [Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) was introduced, and I’ve been aspiring to it ever since. (Read: I’ve never successfully implemented in an existing work production project). I love the principle of only shipping the necessary CSS to a visitor, but even with generators and tooling, I fell short of it in the SCSS-based Rails apps that I’ve worked in.

## A Game Changer

I’ve found that using a CSS-In-JS approach in the right tooling setup allows for "necessary CSS" by default. I was so excited by this that I shared a [tweet](https://twitter.com/dandenney/status/1154800003673710593?s=20) with my findings and an excellent [post from Brent Jackson](https://t.co/W2CwoUeRZa?amp=1). The tweet shared stats from 3 projects that I had in production that used different techniques for styling.

I got a reply that didn’t share my excitement. **Insert record scratching sound and the music stopping**.

<blockquote>
  "The keyword <em>different</em> missing here. Completely unjust comparison."
  <br />
  <small>- Person on Twitter</small>
</blockquote>

I was pretty sure that it wasn’t unjust, but it’s sat with me for a bit, and I wanted to gather some more evidence. **I'm now sure that it doesn't matter.** The stats that come back from CSS Stats should change per page, based on the content.

What I want to strive for is that the CSS that is delivered to a page is only what is necessary for that page, regardless of what project it is. We are now able to build in a way that each page (or single-page-app content load) is its own experience. This is possible by default right now when using a slew of static site generators and front-end frameworks. There's movement in the web components world that will make it possible without them, with combinations of Shadow DOM and Scoping. A lot of this is argued for in the [micro frontends](https://micro-frontends.org) methodology as well.

## The New Style

I’ve adopted a CSS-In-JS approach in a few projects recently, using [Gatsby](https://www.gatsbyjs.org/) and [Next](https://nextjs.org/). I’ve used [Emotion](https://emotion.sh/docs/introduction) in them all and [Theme UI](https://theme-ui.com/) in some. With some guidance from [jxnblk](https://twitter.com/jxnblk/status/1148328820468068355?s=20), I’ve been rethinking what is truly global, as well.

This is wildly different to me, but what I’ve learned is that what is genuinely global is only `body { margin: 0 }`. It’s arguable in a couple of work projects that the `font-family` would be as well, but our design system has introduced `text` components that handle that. I have set it as global in my personal projects, but I’m going to remove it from globals in my personal site because I change the font for some sections.

Every other bit of CSS is only applied if there is something on the page that calls it. This is truly magical to me, and it’s what I’ve wanted for so long. I’m dumping in some [CSS Stats](https://cssstats.com/) data that shows how this approach varies.

<CustomTable>

| Approach  | Gzipped  | File Size | Description                                                                                               |
| --------- | -------- | --------- | --------------------------------------------------------------------------------------------------------- |
| CSS-In-JS | **2kb**  | 7kb       | [Personal site heavy page](https://www.dandenney.com/learning-to-cook)                                    |
| CSS-In-JS | **2kb**  | 10kb      | [Personal site home](https://www.dandenney.com)                                                           |
| CSS-In-JS | **895B** | 4kb       | [Side project home](https://www.truecrimeresearchers.com)                                                 |
| CSS-In-JS | **1kb**  | 5kb       | [Side project "collection"](https://www.truecrimeresearchers.com/cases)                                   |
| CSS-In-JS | **3kb**  | 25kb      | [Side project "show page A"](https://www.truecrimeresearchers.com/cases/emma-fillipoff)                   |
| CSS-In-JS | **3kb**  | 19kb      | [Side project "show page B"](https://www.truecrimeresearchers.com/cases/mitrice-richardson)               |
| CSS-In-JS | **4kb**  | 20kb      | [Work project A home](https://www.datacamp.com/resources)                                                 |
| CSS-In-JS | **4kb**  | 18kb      | [Work project A "show page"](https://www.datacamp.com/resources/whitepapers/what-data-fluency-looks-like) |
| SCSS      | **95kb** | 549kb     | [Work project B pages](https://www.datacamp.com/pricing)                                                  |
| Hybrid    | **35kb** | 169kb     | [Work project C home](https://www.datacamp.com)                                                           |
| Hybrid    | **36kb** | 171kb     | [Work project C page](https://www.datacamp.com)                                                           |

</CustomTable>

### Work Project B and C

There is some important context to these. Each are using SCSS from our design system. B then has its own set of SCSS and C uses a little (from a legacy port) and styled components via Emotion.

One important part is the “Work project B pages” entry, as that value stays the same regardless of the page that you’re on. This is, of course, the result of architectural decisions. It could be handled in a better way, even within a Rails app, but the complexity increases dramatically. We would have to create multiple CSS files that get created by the asset pipeline and are imported on a page-by-page basis, or use multiple site layout files in order to serve up those assets. We’d also have to work out concatenating them with the base CSS or inlining them to avoid multiple requests. Those techniques would limit the amount of spillage, but it wouldn't work similar to styled components unless we found tooling to handle that or put the styles inline into partials. It is valuable work that would increase perf, but it's wildly different how much work it is compared to getting it out of the box.

One funny sidenote is that you can’t get a perfect score in Lighthouse anymore with even a single CSS file request, so unless we inlined everything, we’d be behind right from the start.

In the hybrid, you can start to see small amounts of variance in file size based on content, buth there's that front-loaded "global" SCSS that remains a constant.

The most exciting part for me is the difference between the pages in my side project. While the end result for the visitor is similar, you can see that I’m sending wildly different amounts of CSS to the page, even on multiple show pages. (These have similar but varied amounts of content.) This means that I have made some questionable decisions on styling or that I’m repeating too much in loops, but the visitors aren’t affected by this because the tooling is fixing it for me.

## Critical vs. Necessary

In those examples, I haven’t yet truly hit Critical CSS as I understand it. In a critical scenario, only CSS necessary for above-the-fold items would be added initially. While I’m going to look into additional lazy loading techniques, I’m wondering if it is necessary to pursue critical anymore. With this current approach, I’m only shipping the necessary CSS for a page and that CSS is 4kb or less in all of the items I’ve built so far. It feels like at this point, it’s more important to set a performance budget and make sure that all pages stay below a threshold. I’ll keep thinking through that as I work out what I’m doing that is shipping 19kb vs. 25kb to pages with very similar content.

## The New Goals

Even if it’s no longer necessary to focus on critical CSS instead of necessary CSS, this doesn’t mean I get to put my feet up. It’s important to remember that the JS part of the CSS-In-JS brings perf issues in addition to solving others. In Lighthouse, the worst offender in the above examples has a **100** perf on desktop, but only a **62** on mobile with simulated 4g. I’m apt to focus heavily on getting **100** on 4g mobile Lighthouse audits, by any means necessary.

## How about you?

Have you tried this and have stats or learnings to share? Are you still hesitant to shift towards a CSS-In-JS approach? Are you unable to use it and have found some good workarounds for SCSS-only approaches? Do you want to tell me I'm ugly and I can't CSS good? I’d love to hear your thoughts, [@ me](https://twitter.com/dandenney).
