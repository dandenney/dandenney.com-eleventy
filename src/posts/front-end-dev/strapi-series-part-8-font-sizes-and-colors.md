---
backgroundCode: "#3a323f"
backgroundPost: "#120713"
codeHighlighting: true
colorLink: "#26dcc5"
colorText: "#f4eae2"
date: "2023-04-20"
gradientTitle: "linear-gradient(to bottom, #fe9d4c, #f76d4e, #fd5ebf)"
layout: layouts/post.njk
summary: Identifying patterns and planning for implementation
tags:
  - front-end-dev
thumb: "posts/strapi-colors-shapes.png"
thumbAlt: "abstract shapes and colors, with letters, postpunk 80s retro --v 5 --ar 3:2"
title: "Strapi Series, Part 8: Font Sizes and Colors"
---

<style>
  table {
    width: 100%;
  }

  th, td {
    color: #f493b6;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 0.5rem;
    text-align: left;
  }
  tr:nth-child(odd) td {
    background: #201b23;
    color: #fe9d4c;
  }

  @media screen and (min-width: 480px) {
    th, td {
      font-size: 1.125rem;
      padding: 0.5rem;
      text-align: left;
    }
  }
</style>

I chose to [use a template](https://tailwindui.com/templates/salient) to minimize the front-end part of the series, but I want to do a bit of auditing of what I've chosen. Tailwind will handle classes well, but there will be scenarios where large blocks will have rich text editing. In those, we'll need some element selectors to apply styles since things will be out of our control. I debated swapping some classes to use `clamp` in the sections, but I don't see enough patterns to make it worthwhile. The most common is almost all of the `h2` elements have the same pattern. There's 1 anomaly, which increases by one level at the medium breakpoint. Below, I'm sharing a table of the sizes for my fellow nerds:

|    | base     | sm     | md     |
|----|----------|--------|--------|
| a           | 1.125rem | 1rem   |        |
| h1          | 3rem     | 4.5rem |        |
| p           | 1.125rem |        |        |
| p           | 1rem     |        |        |
| a           | 0.875rem |        |        |
| p           | 1rem     |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| p           | 1.125rem |        |        |
| h3          | 1.125rem |        |        |
| p           | 1rem     |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| h3          | 0.875rem |        |        |
| p           | 1.25rem  |        |        |
| p           | 0.875rem |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| p           | 1.125rem |        |        |
| a           | 0.875rem |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| p           | 1.125rem |        |        |
| blockquote  | 1.125rem |        |        |
| figcaption  | 1rem     |        |        |
| div         | 0.875rem |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| p           | 1.125rem |        |        |
| a           | 0.875rem |        |        |
| p           | 3rem     |        |        |
| h3          | 1.125rem |        |        |
| p           | 1rem     |        |        |
| li          | 0.875rem |        |        |
| h2          | 2rem     | 2.5rem | 3rem   |
| p           | 1.125rem |        |        |
| h3          | 1.125rem |        |        |
| p           | 0.875rem |        |        |

For the most part, it follows the trends you see on landing pages lately. There's a large heading, some smaller headings followed by text slightly larger than the base, sometimes a CTA, and the small heading + large heading + paragraph combo. I won't bother messing with the classes already coded for me, but this helps clarify sizes for the `long-form` styles for rich text blocks.

## Colors

The page has both dark and light sections, so that gives me a baseline of how to swap things out.

|    | light     | dark     
|----|----------|--------|-
| bg | white | slate-900   |      
| subhead text          | slate-700     | slate-400 |    
| primary text          | slate-700     | slate-200 |    
| slider | slate-200 | slate-500|
| testimonials | slate-50 | slate-700 |

That's the plan for now, but final decisions will be made when I create the components. I'll update the table with any changes, but not the image parts. There's at least one gradient background that will either just get hidden or replaced. 