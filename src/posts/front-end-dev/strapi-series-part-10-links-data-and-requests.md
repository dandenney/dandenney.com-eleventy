---
backgroundPost: "#050100"
codeHighlighting: true
colorLink: "#fcdf80"
colorText: "#fffffc"
date: "2023-05-11"
gradientTitle: "linear-gradient(to bottom, #f9bf65, #e99e4f)"
layout: layouts/post.njk
strapiSeries: true
summary: The first collection and another single type
tags:
  - front-end-dev
thumb: "posts/strapi-page-links-data.png"
thumbAlt: "As the sun sets outside, John sits in his dimly lit room, eyes glued to his computer screen. He's recording his latest tutorial, his voice laced with excitement as he explains the intricacies of coding. His computer desk is cluttered with books, papers, and empty coffee cups. John's hands dance over his keyboard, his eyes flicking back and forth between his notes and the screen. The camera lens captures the glow of the computer screen on his face, as well as the occasional flicker of frustration. --ar 3:2 --seed 3249781 --v 5.1"
title: "Strapi Series, Part 10: Links Data and Requests"
---

As I mentioned in the last post, some things are easier to talk through and show in video than in text and screenshots. I took that as an opportunity to make a video for creating page links, authentication links text, and formatting a request from Strapi. It took some extra time as I'm stumbling through learning how to plan and edit a video, plus I grabbed some new toys.

You can choose your own adventure. [Watch the video](https://www.youtube.com/watch?v=IwCXIKr_Bec) or read on for an explanation of what I did.

## Creating a Page Link Collection

I believe I mentioned this, but this is the opposite of how I think. I think of these as a collection of Page Links, but I made a Page Link Collection. Each item in the collection has two required attributes: `text` and `hash`. For now, I didn't add any regex to ensure that a hash is present when adding data. Once that was created, I added content for the three links: features, testimonials, and pricing.

## Creating an Authentication Links Single Type

The authentication links are mainly a concession and have limited options. I don't believe that anyone should be able to change the routes for authentication, but that they should be able to change the text used for the calls to action. To avoid confusion when someone changes "sign in" to "log in", I named the fields `NewCustomerLinkText` and `ExistingCustomerLinkText`. Each had the default value of what was in the UI already.

## Making Data Available

Once all of the content was in, I went into the Roles area to allow for "finding" the data by anonymous requests.

Here is the [PR in the CMS](https://github.com/dandenney/strapi-series-cms/pull/2) for showing the code that's added based on the content additions.

## Requesting Page Links Data

With the data available, I now needed to get it into the next-app. Earlier on, I had created a function that would get all of the data from a path in the CMS, but passing that down into the components would be wasting some valuable bits. Instead, I made a new function, `getPageLinks`, that makes the request and formats the data that I want to go to the page. 

I didn't know the exact syntax for how to reduce the data down to what I wanted, but I knew how to phrase it for ChatGPT: "I'm going to give you a JSON object, and I want you to write a js function to trim it to the following format [{id, hash, text}]". Before that was readily available, I would've looked at prior times I've done it, googled, or, worst-case scenario, tried to coax it out of CoPilot. I love CoPilot for more straightforward things, but I'm not sure how I would've prompted it for this. It gave me the `trimJSON` function, which I applied to the data before returning it.

```jsx
import axios from 'axios'

function trimJSON(jsonObj) {
  const trimmedArr = jsonObj.data.map((obj) => {
    return {
      id: obj.id,
      hash: obj.attributes.Hash,
      text: obj.attributes.Text,
    }
  })
  return trimmedArr
}

export async function getPageLinks() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/page-links`
    )
    return trimJSON(response.data)
  } catch (error) {
    console.error(error)
  }
}

```

If this data was going into a lot of pages, I'd maybe have to think about how to handle that. However, this data will only go into the index page for now. We can wonder about the potential blog part later. Either way, I'm aiming for static builds so it should only affect build times. The page now looks like this:

<div class="full-to-half-bleed">

```jsx
import Head from 'next/head'
import { getPageLinks } from '@/sources/getPageLinks'

export default function Home({ pageLinks }) {
  return (
    <>
      <Head>
        <title>
          Be the First to Know: Join the BandCamp Launch List Today!
        </title>
        <meta
          name="description"
          content="Sign up to get notified when BandCamp's music theory courses go live and take your skills to the next level."
        />
      </Head>
      <main></main>
    </>
  )
}

export async function getStaticProps() {
  const pageLinks = await getPageLinks()
  return {
    props: { pageLinks },
  }
}
```

</div>

Here's a [PR for those changes](https://github.com/dandenney/strapi-series-marketing/pull/6) and in the next post, I'll refactor the components to pass the data in a way I recently learned.










