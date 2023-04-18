---
backgroundCode: "#1b1316"
backgroundPost: "#050810"
colorLink: "#f8e850"
colorText: "#f3f5f8"
date: "2023-04-17"
gradientTitle: "linear-gradient(45deg, #5adaff, #39b4f0)"
layout: layouts/post.njk
socialImageFilename: "og-strap-series-part-6-coming-soon-qa.png"
strapiSeries: true
summary: Nerding out over design and AI
tags:
  - front-end-dev
thumb: "posts/strapi-coming-soon-qa.png"
thumbAlt: "An illustration of a mysterious book of spells with a glowing, arcane symbol on the cover, surrounded by flickering candles and an ominous mist, in the style of dark fantasy art, photorealistic, viewed from a top-down perspective --v 5 --ar 3:2"
title: "Strapi Series, Part 6: Coming Soon QA"
---

First things first, I want to swap over to TypeScript. Well, want is a bit strong but I will. One cool thing that I learned from some ChatGPT prompts is that it will essentially document a component for you. I'm not going to paste the whole output here, but I recommend trying something like this, followed by pasting the code:

<div class="chatgpt-prompt">

```markdown
here is JSX code for a component
```

</div>

I followed up by asking it to convert the component to TypeScript and got what I would expect:

```jsx
interface ComingSoonProps {
  buttonText?: string;
  inputLabel?: string;
  text?: string;
  title: string;
}

const ComingSoon: FunctionComponent<ComingSoonProps> = ({
  buttonText = 'Notify Me',
  inputLabel = 'Enter your email',
  text,
  title,
}) => {
  ...
```

I made some small changes, using `FC` instead of `FunctionComponent` just for reducing characters. I then installe TypeScript, renamed the file with the `.tsx` extension, and ran a build to make sure all is well. The styles were missing, so I realized that I needed to add `ts, tsx` to the `tailwind.config.js`.

## Story Time

The styles were missing in Storybook by default, too. A quick Google search led me to an article with a fix.

<img class="full-to-half-bleed" height="715" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-storybook-minus-css.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-storybook-minus-css.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/screenshot-storybook-minus-css.png 768w" width="1144" />

<figure><blockquote><p>Storybook does not work with Tailwind CSS by default. As a result, if we create a React component using Tailwind utility classes and then create a story based on this component, the Tailwind CSS changes will not be reflected in the Storybook environment.</p></blockquote><figcaption>Elijah Asaolu on <a href="https://blog.logrocket.com/building-next-js-app-tailwind-storybook">LogRocket's blog</a></figcaption></figure>

I wanted to share that article since it gave me the answer to what I'm looking for, but I went to the [Storybook docs for adding Tailwind](https://storybook.js.org/recipes/tailwindcss#tailwindcss), since I knew it was written before version 7. 

I know writing docs are hard, especially for a tool with so many possible implementations. However, this part on what to do with PostCSS is confusing. It has you add `@storybook/addon-styling` with `postCSS` set to `true`, but then there's a note below. At that point, I wasn't sure if I even need `@storybook/addon-styling`, but it seems to work without it.

<figure><blockquote><p>Note: Using Vite, @storybook/nextjs, or @storybook/preset-create-react-app with react-scripts@2.0.0 and up? You don't need to set postCss to true.</p></blockquote><figcaption><a href="https://storybook.js.org/recipes/tailwindcss#build-tailwind-next-to-storybook">Storybook docs</a></figcaption></figure>

## So Close and Yet...

I'm not sure you'll be able to see it in the screenshots, but there's a small difference in the weight of the font. It's the ever-controversial `font-smoothing` property, but there are some other classes that could lead to unexpected differences. (This is one of my challenges with Storybook or pure component development. I defer to wanting to replicate the environment in the preview.)

<img class="full-to-half-bleed" height="715" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-initial-storybook-display.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-initial-storybook-display.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/screenshot-initial-storybook-display.png 768w" width="1144" />

The problem is that the `html` element doesn't get the classes that a page in the Next app does. 

```html
<html class="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01'] js-focus-visible" lang="en" data-js-focus-visible="">
```

Most of that is set in the `_document.jsx` file, the exception being the `js-focus-visible` which is dynamic. This is the HTML in the Storybook iframe.

```html
<html lang="en">
```

I didn't ask the right questoin for ChatGPT to help here, it wanted to add classes within the component. Google searches won on this one, but again I don't really understand what they're saying here.

Unfortunately, [the docs](https://storybook.js.org/docs/react/configure/story-rendering#adding-to-body) are a little weird here again. They say "You can accomplish this by creating a file called preview-body.html inside your .storybook directory and adding tags like this:"

```html
<!--  .storybook/preview-body.html -->

<div id="custom-root"></div>
```

That outputs a `div` before the contents of the time and closes it, but I found [this workaround](https://issuehunt.io/r/storybookjs/storybook/issues/10403).

```jsx
// preview.js
import React from 'react'

export const decorators = [
 Story => (<div className="new"><Story /></div>)
]
```

Boom! We now get a `div` that wraps the content with the classes that are on the `html` element in the app. 

<div class="full-to-half-bleed">

```html
<div id="story--marketing-comingsoon--base--primary-inner" data-name="Base">
  <div class="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']">
    ...
```

</div>

## We Can Finally Test The Component!

This felt like another round for ChatGPT, so I asked it to give me 5 versions of each with different lengths. It works really well for these examples, but it feels like overkill to paste them in here. 

This is a great example of how challenging creating components that allow for content from a CMS can be. This one is highly restrictive, but character counts provide a wildly different experience, especially when they're in the title. I think this would be solved with a combination of some styling tweaks and some suggestions in Strapi itself. 

<img class="full-to-half-bleed" height="1084"  src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshots-coming-soon-qa.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshots-coming-soon-qa.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/screenshots-coming-soon-qa.png 768w" width="1144" />

My only beef with how this particular one is built is that there is sizable padding by default. It's especially noticeable in landscape views on small screens. What was built was perfect for the character counts that exist in the original version, but I want some more flexibility. I fixed it up with a minimum of 1 rem padding, using a flex column with a min-height of the screen, and then resetting that when it goes horizontal for the height to adjust by the text at larger screens.

<img class="full-to-half-bleed" height="2305" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshots-coming-soon-qa-revised.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshots-coming-soon-qa-revised.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/screenshots-coming-soon-qa-revised.png 768w" width="1144" />

## Learning In Two Ways

There's the learnings of how to work around all of the tooling and the component thinking itself, but this also shows how challenging it is to share this part in a blog post. The screenshots are gonna be lame on mobile unless I divide them all up, but that feels like overkill. I think I will start recording a video for future components, especially for the testing part. 

That'll do it for now, [here's the PR](https://github.com/dandenney/strapi-series-marketing/pull/4) for the changes in this post. Next up, I'll do a little review of the page to try to plan out some components and see what global changes we'll want to make before I go component-by-component. 




