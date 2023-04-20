---
backgroundCode: "#2d2d2d"
backgroundFooter: "#f2ede9"
backgroundPost: "#f2ede9"
canonical: "https://www.dandenney.com/posts/front-end-dev/strapi-series-part-4-a-fake-company"
colorLink: "#956552"
colorText: "#3c3a39"
date: "2023-04-10"
gradientTitle: "linear-gradient(to bottom, #919777, #70765a)"
layout: layouts/post.njk
socialImageFilename: "og-strapi-series-part-4-a-fake-company.jpg"
strapiSeries: true
summary: Creating some details to make the project fun 
tags:
  - front-end-dev
thumb: "posts/strapi-series-fake.png"
thumbAlt: "An illustration of an outline of a web project, with a person sketching the wireframe on a whiteboard, in the style of a technical drawing, viewed from a top-down perspective, with a computer and a notebook in the background. --v 5 --ar 3:2"
title: "Strapi Series, Part 4: A Fake Company"
---

This part will show my nerdy sense of humor. Just to be sure, I know that there is a real company named BandCamp and they do music sales. I'm mainly keeping the name because it's a play on DataCamp and music is my life force. I'm keeping it mostly trimmed down to the designs and not putting it in titles, so hopefully I get to keep it. My inner teenager also snickers occasionally as I hear "one time, at band camp" in my head. 

I figure this is a good chance to explore some of the interesting things I've seen around copy creation via ChatGPT. So I'll use design assets from the community and content from there. 

## Logo

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/Screen_Shot_2023-04-10_at_10.04.53_PM.png" alt="Screenshot of a logo named Beplay" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/Screen_Shot_2023-04-10_at_10.04.53_PM.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/Screen_Shot_2023-04-10_at_10.04.53_PM.png 768w" />

I grabbed [one from Creative Market](https://creativemarket.com/sore.studios/7505097-Letter-B-Play-Button-Video-Logo) because I haven't found a good AI logo generator yet. They're more like creating a collage by picking fonts and icons. I also knew this was "it" immediately because this project is in no way associated with my day job and and this totally doesn't look like our logo softened and flipped around. 🤪

## Designs

I'm not using AI to generate web layouts. I've seen some interesing things on Youtube for that, but I'll get too wrapped up in the details of the design. What I need is something that looks great and creates some interesting challenges for creating components with Strapi. I've considered buying [Tailwind UI](https://tailwindui.com) for a while, so I pulled the trigger on it 💸. It's not just for this post series, but for all of these crazy ideas I get where I want to code something but don't want to lose time to the design and styling. 

This means that I won't have specific design files like a Figma to outline what I'll be building, but I'm ok with screenshots with some tweaks that I discuss in posts around implementation. Worst case scenario, there's a handy [Figma plugin called html.to.design](https://www.figma.com/community/plugin/1159123024924461424/html.to.design) that I've used to bring in HTML/CSS and have something editable.

## Content

This is a chance to grow my skills with prompting and to learn how good ChatGPT can be at it (with my skills considered). 

<div class="chatgpt-prompt">

```markup
You are the head of marketing for an online education company that teaches people music theory 
```

It went on a long rant about the role and task, but I really just wanted to frame it for the content.

```markup
Write a slogan for the company, our company name is BandCamp
```

</div>

<figure>
  <blockquote>
    <p>"Discover the Musician Within - Join BandCamp Today!"</p>
  </blockquote>
  <figcaption>— ChatGPT</figcaption>
</figure>

Works for me! I'm going to try to not get too hung up on these things as the real goal will be to try several items for each component, to test flexibility.

<div class="chatgpt-prompt">

```markup
Create a headline, single line of text, and CTA text for a page asking people to sign up to get informed when we launch
```

<figure>
  <blockquote>
    <p>Headline: "Be the First to Know: Join the BandCamp Launch List Today!"</p>
    <p>Single line of text: "Sign up to get notified when BandCamp's music theory courses go live and take your skills to the next level."</p>
    <p>CTA text: "Join the Launch List" or "Sign Up Now"</p>
  </blockquote>
  <figcaption>— ChatGPT</figcaption>
</figure>

```markup
Rewrite those, with some mentions of music 
```

</div>

<figure>
  <blockquote>
    <p>Headline: "Join the Music Revolution: Be the First to Know When BandCamp Launches!"</p>
    <p>Single line of text: "Never miss a beat! Sign up to receive updates on BandCamp's music theory courses and elevate your musical skills."</p>
    <p>CTA text: "Join the Music Movement" or "Stay Tuned for Launch"</p>
  </blockquote>
  <figcaption>— ChatGPT</figcaption>
</figure>

## No Battle Plan Survives Contact With the Enemy

When I was initially dreaming this up in my notebook, I was thinking that I would create all of the copy and the initial design for the marketing page, the dashboard, and a course. However, that puts too much emphasis on making this specific thing when what I am really trying to focus on is making flexible, but defensive components. I need to test with lots of variations of copy and styles.






