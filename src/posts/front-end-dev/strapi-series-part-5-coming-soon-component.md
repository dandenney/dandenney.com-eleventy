---
backgroundFooter: "#140a1d"
backgroundPost: "#2d1743"
colorLink: "#fa7090"
colorText: "#ffffdf"
date: "2023-04-10"
gradientTitle: "linear-gradient(to bottom, #87d0a5, #51bca2)"
layout: layouts/post.njk
strapiSeries: true
summary: Nerding out over design and AI
tags:
  - front-end-dev
thumb: "posts/strapi-email-launch.png"
thumbAlt: "An illustration of a monstrous creature with multiple tentacles reaching out to grab dozens of email icons, which are scattered throughout a chaotic, cluttered background. The creature's many eyes are fixed hungrily on the colorful icons, and its sharp teeth are bared in a menacing grin. The style is highly detailed and somewhat dark, with rich shadows and bright highlights creating a sense of depth and dimensionality. The perspective is slightly overhead, with the viewer looking down on the scene from a vantage point just above the creature's many limbs --v 5 --ar 3:2"
title: "Strapi Series, Part 5: A Coming Soon Component"
---

<style>
  /* If I like this, I should move it up to posts, at least for the series */
  .circle {
    align-items: center;
    background: #56ba9f;
    border: 0.25rem solid #fad368;
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

It's go time! Apps are set up, we have visual styles, and even some words ready to go. This is a better starting spot than I'm used to for building out something new. That said, we're not going to go too crazy. I think it makes sense to start with what would probably be the first thing to go live, a "give us your email in exchange for getting to know when we launch" component.

## Cutting My Teeth

This component will be seen somewhat as a practice component. Part of this is because I have been exposed to Strapi a bit and I know there's going to be some boilerplate involved with getting this component on a screen. I want to be sure to write about all of that, so we're going to treat this one like a one-off.

## Coming Soon, Lirrally

<img alt="Screenshot of a component for email notifcation of launch" class="full-to-half-bleed" height="424" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-launch-component-screenshot.png" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-launch-component-screenshot.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_2304,q_auto/v1681092603/posts/strapi-launch-component-screenshot.png 768w" width="1144" />

The icons are to point out specific items that I know will go into Strapi. While technically this component could be reused if we had a newsletter in the future, I'm not going add style options to this. Fonts, colors, and shapes will all be handled by the code in the component, but the content will be editable. We need to allow for changes in case we're not getting the number of signups to hit our OKR!

<dl>
  <dt>
    <span class="circle">1</span>
    Title
  </dt>
  <dd>
    This will be as-is, but we'll test out a few options just to be sure that the component won't break if someone adds a lot more or less text.
  </dd>
  <dt>
    <span class="circle">2</span>
    Text
  </dt>
  <dd>
    I want to figure out what a good word is for these kinds of things. I wish I could see a collection of what people use or what would make sense to people other than me. Just in case, I asked ChatGPT and popped the deets below. One small change I plan on making is reducing the font size on small screens. It feels like the hierarchy gets lost at the moment. Before I get too far into future designs, I do want to normalize some of these into a set of standards to use. 
  </dd>
  <dt>
    <span class="circle">3</span>
    Label / Placeholder Text
  </dt>
  <dd>
    Just in case someone has a better idea, plus I need to look at the markup and make sure it has a label as it's created.
  </dd>
  <dt>
    <span class="circle">4</span>
    Button Text
  </dt>
  <dd>
    The uh, text in the button
  </dd>
</dl>

### ChatGPT Break

`When using the CMS strapi, what are good field names for a heading and a paragraph`

<div class="full-to-half-bleed">
  <figure>
    <blockquote>
      <p>
        When using Strapi as a CMS, field names for a heading and a paragraph may depend on the specific needs of your project and how you want to structure your content. However, here are some general suggestions:
      </p><p>
        Heading: "Title", "Heading", "Subtitle", "Heading Text", "Headline", "Main Title"
        Paragraph: "Content", "Body", "Text", "Description", "Main Text", "Copy"
      </p><p>
        Ultimately, the choice of field names will depend on the context of your content and the structure of your website or application. It's also a good practice to choose clear and descriptive field names to make it easier for other team members to understand the purpose of each field.
      </p>
    </blockquote>
    <figcaption>— ChatGPT</figcaption>
  </figure>
</div>

That's it! All of the styles will go into the component, as will the form itself. There won't be a light/dark toggle for this one, but there will be for all of the things for the actual product. For this version, I'm not going to make the form work, but I think that would be a good idea for a future one. We'll need an account creation form, so I'll save it for that. 

One decision I'll make in the browser is whether this component sits on a shape like it is or if I extend that color across the whole body. Either way, it won't be white surrounding it. It'll be a complimentary color or solid. 

## A Lazy Step

I know I'm going to use a template for the posts and that template is built in Next 13, with Tailwind already set up. This series isn't about Tailwind and certainly not about setting it up in Next, so I just replaced the content of the marketing site repo with it so that it would be easy to move forward. [PR](https://github.com/dandenney/strapi-series-marketing/pull/2)

## Adding Data In Strapi

For this component, we want use a Single Type in Strapi. From their docs, "Single types are content-types that can only manage one entry.
", which is perfect for this. There may be a reason in the future to add a series of form components, but everything about this one is single-use. 

There's only four fields that we want for this one and I used some generic names for them: title, text, inputLabel, and buttonText. We first create the single type and then a the inputs individually. In thinking about this component, I figured we wouldn't want default text for the title and text, so I made them required. Here's a screenshot with an idea of the Strapi settings.

<img alt="Screenshot of a Strapi's UI for adding a single collection and fields" height="1276" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshots-data.png" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-screenshots-data.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-screenshots-data.png 768w" width="762" />

Strapi automatically adds items to the REST API, but you have to give permissions in order to use it. Here's an example of allowing "find". 

<img alt="Screenshot of a Strapi's UI for adding permissions" height="476" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-permissions-api.png" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-permissions-api.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-permissions-api.png 768w" width="762"  />

With all of that set up, adding content to the item outputs it in the API. Here's examples from the ChatGPT suggestions and seeing the data in API route.

<img alt="Screenshot of a Strapi's UI for content and the code output in the API"  height="498" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-initial-api-data.png" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-initial-api-data.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-initial-api-data.png 768w" width="762" />

## Requesting the Data

Soooo normally I would have written out an example of directly querying the data, but I thought it was worth using ChatGPT like the Strapi docs and asking "write a function for getting Strapi data from the REST API in Next.js". It gave a good response that I've seen in the docs and in videos, just I'm just going to start there, with some minor changes. It offered up...

```jsx
import axios from 'axios';

export async function getStrapiData(endpoint) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
```

Before creating that, I needed to install Axios and add the local URL for Strapi to my `.env`. ChatGPT also handed me the deets for importing the data with `getStaticProps`, so I copied that since I normally would copy and paste from another component. I've yet to type that enough times to commit it to memory, despite building hundreds of pages in Next. Also, CoPilot automates the imports. AI is making me faster, but mainly for not having to go copy/paste or move to google searches for docs. 

```jsx
import { ComingSoon } from '@/components/ComingSoon';

(other code)

export async function getStaticProps() {
  const data = await getStrapiData('/coming-soon');
  return {
    props: { data },
  };
}
```

## How Many Props Would A Component Take If A Component Could Take Props?

The focus of this series is Strapi and creating components for Strapi. Technically, that means I could pass the glob of `data` into the component as a single prop and work with it from within the component. For keeping the components flexible, I think it's better to pass the data items as individual props. I haven't done a ton of work with Storybook, but I think that this will make it easier to test components in there as well. Instead of faking a glob, I'll be able to test individual data easily. I won't pop the whole component code in here because it's mostly markup, but here are some of the important parts for the data.

I updated the `getStaticProps` to ensure I pass data with a specific name. I'm getting ahead of myself, but I'm picturing pages with multiple components. Data needed to be destructured and then I target the attributes section.

```jsx
export async function getStaticProps() {
  const { data } = await getStrapiData('/coming-soon');
  const comingSoonData = data.attributes;
  return {
    props: { comingSoonData },
  };
}

```

I'm intentionally not destructuring within the props to avoid naming collisions. That's another future problem, but I'd rather handle most of them now and share, rather than do refactor posts in the rest of the series. I'll have to do enough of that from things I don't think about.

```jsx
<ComingSoon 
  buttonText={comingSoonData.buttonText} 
  inputLabel={comingSoonData.inputLabel} 
  text={comingSoonData.text} 
  title={comingSoonData.title}  
/>
```

Within the component itself, I'm applying the static text when the optional data is `null`.

```jsx
{buttonText || 'Notify Me'}
placeholder={inputLabel || 'Enter your email'}
{text}
{title}
```

I cannot understate how refreshing it was to just do this by just grabbing the data and passing it through. I'd prefer to keep doing that and not bring in my nemesis, but it's probably irresponsible. TypeScript is one thing that I both hate and respect how valuable it is at the same time. It feels very important for components created via a CMS, so I will need to use it. This post is already quite long, so I'll roll that into the next post. 

The "happy path" styles can be the last part for this one and when we'll get to documenting the component in Storybook, testing various text, and adding types in the next post. Here's the [PR for all of the component work](https://github.com/dandenney/strapi-series-marketing/pull/3) up until now.

Here's a preview of the styles. I don't love the mobile version, but I'm not sure I'd want to make the text much smaller. Maybe I would for this component only, with this specifc text, but we'll figure that out in Storybook in the next post. Here's some screens of it for now.

<img height="260" alt="Screenshot of a Coming Soon component styled by Tailwind" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-happy-path-coming-soon.png" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/strapi-happy-path-coming-soon.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/strapi-happy-path-coming-soon.png 768w" width="762" />



