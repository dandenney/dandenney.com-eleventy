---
backgroundFooter: "#fff"
backgroundPost: "#fff"
canonical: "https://www.dandenney.com/posts/front-end-dev/strapi-series-part-2-architectural-decisions"
colorLink: "#627884"
colorText: "#111"
date: "2023-04-09"
gradientTitle: "linear-gradient(45deg, #8299a8, #555b53)"
layout: layouts/post.njk
socialImageFilename: "og-strapi-series-part-2-architectural-decisions.jpg"
strapiSeries: true
summary: Basic decisions around the tech stack
tags:
  - front-end-dev
thumb: "posts/architectural-decisions.png"
thumbAlt: "An illustration of an outline of a web project, with a person sketching the wireframe on a whiteboard, in the style of a technical drawing, viewed from a top-down perspective, with a computer and a notebook in the background. --v 5 --ar 3:2"
title: "Strapi Series, Part 2: Architectural Decisions"
---

Calling this an architecture decision record (ADR) may be a stretch, but for the sake of the project there are some decisions that I'm making that I want to document.

<figure>
  <blockquote>
    <p>An architecture decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.</p>
  </blockquote>
  <figcaption>— <a href="https://github.com/joelparkerhenderson/architecture-decision-record#what-is-an-architecture-decision-record">Joel Parker Henderson</a></figcaption>
</figure>

## CMS

Surprise, Strapi! 

## Marketing Site

The marketing site will be a standalone Next.js app, hosted on Vercel. This isn't likely the decision I would make if I was truly building this project. I would likely look for something with less JS overhead, but I'm choosing this because the learnings will help me directly in my day job. I'm going to spend some of the time experimenting with things to see how performant I can get the static pages.

I host this site on Netlify, but since these will be demos about Next.js I figure I should use Vercel.

## Signed-in Experience

The customer dashboards and the learning UI will be in a standalone Next.js app, hosted on Vercel. There is some nuance with those that I will need to spec out later, but to get things started I want to have a basic experience that I can auth into. I want to learn components having varied functionality, so I want the experience of authing and interaction. However, the goal of this isn't building the full architecture, so I want to rely on [Next's authentication with Vercel](https://vercel.com/guides/application-authentication-on-vercel). 

## Component Documentation

The documentation will be in Storybook, but I'm debating where to put it at the moment. The most clear divide would be to make it a standalone setup and hosted separately. However, there are benefits to having it live with a next-app, especially with the things coming in v7. If I do host it, the choice is whether it goes in the marketing or the signed-in experience. It doesn't truly matter, just a weird consideration. 

## Images 

I'm going to try the default local upload option within Strapi for images, but we'll see how it goes. It'll be the most cost effective for the series sake, but tf there are challenges I will use the wonder that is Cloudinary. 

## Data

I would like to create some parts of the real UI to understand how I would combine customer data and Strapi content. This will mean I'll have to make some part of the dashboards and courses real and functional. I'm not 100% on what I will use for that. I've been intrigured by [Supabase](https://supabase.com) and I have experience with [Firebase](https://firebase.google.com). This will be a later decision, once I have a series of components working. Before the data portion, I'll stub some fake customer data to be able to make components. 