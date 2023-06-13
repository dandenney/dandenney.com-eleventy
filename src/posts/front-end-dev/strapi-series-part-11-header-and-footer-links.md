---
backgroundPost: "#ffffff"
codeHighlighting: true
colorLink: "#4945ff"
colorText: "#312f2d"
date: "2023-06-12"
gradientTitle: "linear-gradient(to bottom, #5a595e, #312f2d)"
layout: layouts/post.njk
strapiSeries: true
summary: Refactoring components to use the links data
tags:
  - front-end-dev
thumb: "posts/strapi-link-components.png"
thumbAlt: "As the sun sets outside, John sits in his dimly lit room, eyes glued to his computer screen. He's recording his latest tutorial, his voice laced with excitement as he explains the intricacies of coding. His computer desk is cluttered with books, papers, and empty coffee cups. John's hands dance over his keyboard, his eyes flicking back and forth between his notes and the screen. The camera lens captures the glow of the computer screen on his face, as well as the occasional flicker of frustration. --ar 3:2 --seed 3249781 --v 5.1"
title: "Strapi Series, Part 11: Header and Footer Links"
---

It's time to get the data from Strapi into the components, and I'm going to try something new with that. Typically, I would request the page links data into the page as `pageLinks`, then pass `pageLinks` into the `Header` and `Footer` components. Sometimes, I would drill even further into something like a `PageLinks` component at that point. I recently watched [Un-Suck Your React Components - Composable & [Compound Components](https://www.youtube.com/watch?v=vPRdY87_SH0), and I want to use the slots idea from that. 

In this case, I'm not going for fully composable since this component is focused on outputting a few links. I'm just looking to give my prop drill a rest.

The page links are currently output in 3 different ways:

```jsx
// In the Header.jsx as a div that only shows from md: on
<div className="hidden md:flex md:gap-x-6">
  <NavLink href="#features">Features</NavLink>
  <NavLink href="#testimonials">Testimonials</NavLink>
  <NavLink href="#pricing">Pricing</NavLink>
</div>

// In the Header.jsx as part of a Popover Panel
<Popover.Panel
  as="div"
  className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
>
  <MobileNavLink href="#features">Features</MobileNavLink>
  <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
  <MobileNavLink href="#pricing">Pricing</MobileNavLink>
  <hr className="m-2 border-slate-300/40" />
  <MobileNavLink href="/login">Sign in</MobileNavLink>
</Popover.Panel>

// In the Footer.jsx as part of a nav element
<nav className="mt-10 text-sm" aria-label="quick links">
  <div className="-my-1 flex justify-center gap-x-6">
    <NavLink href="#features">Features</NavLink>
    <NavLink href="#testimonials">Testimonials</NavLink>
    <NavLink href="#pricing">Pricing</NavLink>
  </div>
</nav> 
```

I believe that this means that I can have two slots in the `Header` and one in the `Footer`. To avoid mapping in the props, I'll make a `PageLinks` component that takes in the data as well as a `mobile` prop, to determine which component to loop.

Quick aside: how would you handle it? [@dandenney on Twitter](https://twitter.com/dandenney) if you want to share or even pop it into a [PR](https://github.com/dandenney/strapi-series-marketing) or [refactor issue](https://github.com/dandenney/strapi-series-marketing/issues) if you want. 

## The PageLinks Component

To keep this component focused on the data, I'm not going to include the parent element. I'll need to pass a fragment, but that feels cleaner than wrapping an HTML element and/or passing classes through. I may do that in the future for other components, but the simplicity here lets me avoid it.

### A Detour To Fight TypeScript

My nemesis showed its three heads as I got started making `PageLinks.tsx` because I had skipped the config part of the install. It is nice that `npx tsc` is available for that. I tried the autofix for "Cannot use JSX unless the '--jsx' flag is provided.ts(17004)" five or so times with different approaches before googling how to enable it, before I realized that was adding it to the `jsconfig` file. 

There's a bunch of options commented out in the default `tsconfig`, but not the flag it mentions and not the same as the way it's going into the `jsconfig`. 

<div class="full-to-half-bleed">

```javascript
// "jsx": "preserve", /* Specif what JSX code is generated. */
// "experimentalDecorators": true, /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true, /* Emit design-type metadata for decorated declarations in source files. */
// "jsxFactory": "", /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' 
```

</div>

Luckily, I made my code changes, started the server, and there was a really nice message updating the config items for me.

<figure>
  <blockquote>
    <p>
      We detected TypeScript in your project and reconfigured your tsconfig.json file for you. Strict-mode is set to false by default. The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:
    </p>
    <ul>
      <li>lib was set to dom,dom.iterable,esnext</li>
      <li>allowJs was set to true</li>
      <li>noEmit was set to true</li>
      <li>incremental was set to true</li>
      <li>include was set to ['next-env.d.ts', '**/*.ts', '**/*.tsx']</li>
      <li>exclude was set to ['node_modules']</li>
    </ul>
    <p>
      The following mandatory changes were made to your tsconfig.json:
    </p>
    <ul>
      <li>moduleResolution was set to node (to match webpack resolution)</li>
      <li>resolveJsonModule was set to true (to match webpack resolution)</li>
      <li>isolatedModules was set to true (requirement for SWC / Babel)</li>
      <li>jsx was set to preserve (next.js implements its own optimized jsx transform)</li>
    </ul>
  </blockquote>
  <figcaption>— TypeScript CLI</figcaption>
</figure>

So close and yet so far away. The import for a component isn't working with the alias in the `tsx` files now. I had to learn a litle bit about how that works since it's always been set up in apps I've worked on. The `jsconfig` has:

```jsx
"paths": {
  "@/*": ["src/*"]
}
```
I found the `paths` in the `tsconfig` and replicated that, but then got an error about the `baseUrl` not being set. Fixing that allowed me to restart the server, start the CMS, and see links on a page as my first example. (I imported the component into the index in order to see that it was working). 

### Back To The PageLinks

With this, I have the default version looping over the existing `<NavLink>` component.

```jsx
import { NavLink } from '@/components/NavLink'
import { NavLink } from '@/components/NavLink'
import { Fragment } from 'react'

type PageLink = {
  id: number
  hash: string
  text: string
}

type PageLinks = {
  pageLinks: PageLink[]
}

export function PageLinks({ pageLinks }: PageLinks) {
  return (
    <Fragment>
      {pageLinks.map(({ id, hash, text }) => (
        <NavLink key={id} href={hash}>
          {text}
        </NavLink>
      ))}
    </Fragment>
  )
}
```

## Adding to the Header and Footer

That code above will work for two out of three uses, but the mobile nav part is going to take a refactor. It turns out that the reason that the `<MobileNavLink>` is defined in the `<Header>` file is that it uses `<Popover.Button>`, which requires having a parent of `<Popover>`. 

I can make progress, albeit with another tradeoff. Here's an example of making the change to `Header.jsx`. The file has a lot of code, so I'm only showing the necessary bits here. You can view it all in context in [the PR](https://github.com/dandenney/strapi-series-marketing/pull/7), though.

<p class="file-name"><strong>Header.jsx</strong></p>

```jsx
export function Header({ slotPageLinks }) {
  ...
  <div className="hidden md:flex md:gap-x-6">
    {slotPageLinks}
  </div>
```

The one interesting bit is I got myself into a naming dilemma. I'm mostly concerned that the data would match up as closely as possible, so I added the `slot` prefix for the component. There was another TypeScript snafu as well. The `<Header>` component would/will need a lot of type declarations, so I kept it as `jsx` for the moment. I'll figure out how I want to refactor the mobile nav part first and then do the types at that point. It is nice to be able to opt-in to TypeScript, and I partially wish I had skipped it for this series, even though it's responsive development. 

The footer is very similar, and I thought I could make it `.tsx`, but I'll have to fight the `<Container>` props types later.

<p class="file-name"><strong>Footer.jsx</strong></p>

```jsx
export function Footer({ slotPageLinks }) {
  ...
  <div className="-my-1 flex justify-center gap-x-6">
    {slotPageLinks}
  </div>
```

Importing them into the `index.jsx`, makes that file look like this:

<div class="full-to-half-bleed">

```jsx
import Head from 'next/head'
import { getPageLinks } from '@/sources/getPageLinks'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageLinks } from '@/components/PageLinks'

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
      <Header 
        slotPageLinks={<PageLinks pageLinks />} 
      />
      <main></main>
      <Footer 
        slotPageLinks={<PageLinks pageLinks />} 
      />
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

I dig the approach so far in avoiding the prop drilling. I think I'll need to plan out data and component naming in the future, but I might even like having the `slot` prefix. Here's a sneak peek at the header and footer displaying the link data from Strapi.

<img class="full-to-half-bleed" height="376" src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-header-footer-links.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-header-footer-links.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_2272,q_auto/v1681092603/posts/screenshot-header-footer-links.png 768w" width="1144" />

## Blech

I tried moving the mobile nav parts out of the Header component, but it gets weird. I'll need some more practice at composition in general for thinking about how to structure a component. That's not really what this series is about, so I'm moving on and doing a little drilling. Here's [the commit](https://github.com/dandenney/strapi-series-marketing/commit/8c3645022126145abe95770c607e3f5c51a73580) for adding passing the data into the header.