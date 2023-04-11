---
backgroundFooter: "#010101"
backgroundPost: "#010101"
colorLink: "#fdd259"
colorText: "#fefcea"
date: "2023-04-09"
gradientTitle: "linear-gradient(to top, #955235, #ee763b)"
layout: layouts/post.njk
strapiSeries: true
summary: Cloning, yarning, and command lining
tags:
  - front-end-dev
thumb: "posts/strapi-repo-setup.png"
thumbAlt: "An illustration of an outline of a web project, with a person sketching the wireframe on a whiteboard, in the style of a technical drawing, viewed from a top-down perspective, with a computer and a notebook in the background. --v 5 --ar 3:2"
title: "Strapi Series, Part 3: Repo Setup"
---

With the main decisions made, it's time to get things set up! The goal is to have a URL for the marketing site, for the logged-in experience, and Strapi. The marketing site will get the Storybook that will have all of the components for the project and we'll want to at least have everything talking to each other. 

## Marketing Site

For this, I just popped into Vercel and used the basic Next 13 project. We have a marketing site! [https://strapi-series-marketing.vercel.app](https://strapi-series-marketing.vercel.app). However, until I add Strapi hosting the repo is the best link [https://github.com/dandenney/strapi-series-marketing](https://github.com/dandenney/strapi-series-marketing)

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-vercel-setup.png" alt="Screenshot of the Vercel UI" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-vercel-setup.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-vercel-setup.png 768w" />

## Customer Site

Dubbed Studio, this was another round of using an existing project in Vercel. I chose the Supabase option so that I'd get auth for free and have something ready for when I want to work with data. It's live at [https://strapi-series-studio.vercel.app](https://strapi-series-studio.vercel.app), but the repo is the best link for now [https://github.com/dandenney/strapi-series-studio](https://github.com/dandenney/strapi-series-studio)

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-studio.png" alt="Screenshot of the Vercel UI" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-studio.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-screenshot-studio.png 768w" />

## CMS

Ooh, this was something that I didn't think of. Strapi is/uses a database and therefore needs Postgresql. I was thinking it was similar to Sanity where you could spin it up on Netlify or Vercel. It looks like I'll need to use Digital Ocean or some others, so I'm going to hold off on that part for now. I can get so much of the work done locally and share via video, as well as putting the code up. The only thing that would be missing at that point is the ability for others to see the site live. I think that may be ok, at least for now. The repo is up at [https://github.com/dandenney/strapi-series-cms](https://github.com/dandenney/strapi-series-cms)

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-strapi.png" alt="Screenshot of the Vercel UI" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-strapi.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-screenshot-strapi.png 768w" />

## Component Documentation

Storybook 7 dropped! I'm excited for this because we've been fighting with a series of Next challenges with it at DataCamp and now I'll be able to share my learnings with the new version. Ran the basic setup deets and got it running within the marketing site app.

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-storybook.png" alt="Screenshot of the Vercel UI" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshot-storybook.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-screenshot-storybook.png 768w" />