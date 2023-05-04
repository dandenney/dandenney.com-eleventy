---
backgroundCode: "#eacba7"
backgroundPost: "#fcefde"
codeHighlighting: true
colorText: "#020e13"
date: "2023-05-03"
gradientTitle: "linear-gradient(to bottom, #a95639, #5f2b16)"
layout: layouts/post.njk
strapiSeries: true
summary: Learning valuable lessons from initial creation attempts
tags:
  - front-end-dev
thumb: "posts/strapi-thinking-in-data.png"
thumbAlt: "An illustration of a boxer being punched in the face by another boxer, with the boxing ring in the background, in the style of an oil painting, viewed from an overhead perspective --v 5 --ar 3:2"
title: "Strapi Series, Part 9: Thinking In Data"
---

<style>
  /* If I like this, I should move it up to posts, at least for the series */
  .circle {
    align-items: center;
    background: #a95639;
    border: 0.25rem solid #5f2b16;
    border-radius: 50%;
    color: #fff;
    display: flex;
    font-weight: bold;
    height: 2.5rem;
    margin-right: 1rem;
    justify-content: center;
    width: 2.5rem;
  }

  dt {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  dd {
    margin-inline-start: 3.5rem;
  }

  dd:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>

I learned a ton in trying to create these, and this is my third attempt at creating this blog post. Between attempts two and three, I even started to make a video instead. I am going to do the videos, but I figured out some important things that I want to be sure to share in text and images as well. 

## Everyone Has A Plan Until They Get Punched In The Mouth

That quote from Mike Tyson is a close second to my favorite quote about web development: "No plan survives contact with the enemy," by Moltke the Elder. I'm leading with the Tyson one here because it's how I feel after trying to get this blog post written. If I was just creating the header and the footer like the original plan, it would have been maybe 30 minutes of learning. I have made things more challenging by trying to write the post as I stumble through things. The stumbling was way too much for anyone to endure, and it's challenging to write about the UI without screenshots. I would need so many screenshots to make sense of things that video feels like the better choice from now on. This post will make a good transition point, with the future ones focusing on the implementation in Strapi and then hooking up the data in code.

## The Plan

I'm breaking this down into pieces with an idea of how I was thinking about creating items. One important note is that my day-to-day is often implementing designs from Figma, with very little CMS usage. That's changing, and it's why I'm doing this series, but it's important for grokking how I was applying code component thinking to data organization. 

<img class="full-to-half-bleed" height="376" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-header-and-footer-data.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-header-and-footer-data.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_2272,q_auto/v1681092603/posts/strapi-header-and-footer-data.png 768w" width="1144" />

<dl>
  <dt>
    <span class="circle">1</span>
    Logo
  </dt>
  <dd>
    The logo will need to be able to be altered when the theme changes, so I know I need it to be SVG to avoid image swapping. I want it in the CMS for this scenario I've run into over my years in marketing/growth where campaigns apply styles to site items. The blocker that I hit is that adding an SVG via the media upload will return an image as a URL and the existing Babel config won't parse the code from an SVG that comes from a URL. There is technically a way to use a rich text field and paste in the SVG code, but that felt too hacky. The result is that the logo will not go into the CMS.
  </dd>
  <dt>
    <span class="circle">2</span>
    Page Links
  </dt>
  <dd>
    A "collection" of page links that I originally thought would use a shared "link" component that had the attributes that links could have: <code>text</code>, <code>slug</code>, maybe <code>target</code> if the need arose in the future. Using a component led to some interesting challenges since it was the sole item in a Page Link. This meant that when creating a relation, you could only use the ID, which felt rough for the UX in the admin. I also learned that while I think it's a collection of "Page Links", Strapi sees it as a "Page Link" collection. That's important for naming because you need singular and plural for collections. The result is that there will be a "Page Link" collection and each "Page Link" will have <code>text</code> and <code>hash</code> attributes. 
  </dd>
  <dt>
    <span class="circle">3</span>
    Text for the existing customer link
  </dt>
  <dd>
    Since this would lead to the page for authentication, it doesn't seem like a good idea to allow for full customization. This plan remained the same, with the only oddity being how to think about naming a "sign in" link something that makes sense if it's changed to "log in." The result will be an optional field named <code>NewCustomerLinkText</code>.
  </dd>
  <dt>
    <span class="circle">4</span>
    Text for the new customer link
  </dt>
  <dd>
    Similar to 3, this will only allow a text change since it goes to the registration page. The style of the button won't be customizable because it's the same throughout the UI for authentication-based inputs. The result will be an optional field named <code>ExistingCustomerLinkText</code>.
  </dd>
  <dt>
    <span class="circle">5</span>
    Social icons and links. 
  </dt>
  <dd>
    These have the same problem as the logo, plus one. We could get away without a hover style on the logo, but these should have default and hover styles that work well with the light and dark theme. Arguably, the social links for a company don't change often, so it's not a major deal to not have these customizable. The result is that they will be handled in the code until a possible future, where I work out adding SVG code in a clean way.
  </dd>
  <dt>
    <span class="circle">6</span>
    Header
  </dt>
  <dd>
    I originally had a "Header" component that had the fields for the customer links and a relation with the "Page Links". It was a single type because I could see the potential for having another header for the authenticated experience, but they wouldn't be the same patterns with different content. Once I realized the footer would only query the "Page Links" and I was ready to grab data from the API, I realized I'd be requesting that data twice. It'd be the same if I had created a "Footer" as well. The result is that there is no "Header component, but I will need to add "Authentication Links" or something to that effect.
  </dd>
  <dt>
    <span class="circle">7</span>
    Footer
  </dt>
  <dd>
    With all of the other changes, it became apparent that we didn't need a "Footer" component. It might group things in the admin, but it would increase the data requests. The result is no "Footer" for now. 
  </dd>
</dl>

## The Recovery

The main thing that I have learned is to think about the data and not the UI or the component composition in the front-end. The tasks from here are to create a "Page Links" collection and a "Authentication Links" collection. With those two created, request them into the page and pass the data into `<Header>` and `<Footer>` components.

One part that I'm curious about, but won't be a problem yet is how would this be handled in a site with multiple pages using the header and footer. This marketing site is technically one page, but with an alternative layout for authentication pages. I imagine creating a blog portion in the future and that would likely use the "X Links" collections. Will I need to request that data for every page that uses the header and the footer? It's a future problem but something I'm already mindful of. My end-goal is to have all of the marketing site build and export static, to see how performant I can get a Next.js site with Strapi as a CMS.

## The Championship Rounds

I'm going to start the video process now, with the plan that has formed from here. I'll figure out what to do about blog posts as I work through them. I may only link to them, write short summary posts, or try out some of the new AI tools for generating posts from transcripts. Either way, I'm winning this bout. 






