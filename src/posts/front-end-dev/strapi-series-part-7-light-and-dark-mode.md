---
backgroundCode: "#1b191d"
backgroundPost: "#090b08"
canonical: "https://www.dandenney.com/posts/front-end-dev/strapi-series-part-7-light-and-dark-mode"
colorLink: "#f9de88"
colorText: "#f9fbfa"
date: "2023-04-19"
gradientTitle: "radial-gradient(#fef9dc, #eb9256, #ee8146)"
layout: layouts/post.njk
socialImageFilename: "og-strap-series-part-7-light-and-dark-mode.jpg"
strapiSeries: true
summary: Setting up dark mode with a curveball
tags:
  - front-end-dev
thumb: "posts/strapi-light-and-dark.png"
thumbAlt: "an epic battle between a white wolf and a black wolf, with glorious lighting in the style of Ignasi Monreal artwork --v 5 --ar 3:2"
title: "Strapi Series, Part 7: Light and Dark Mode"
---

The launch component is up so it's time to build out the site for all of those potential customers. I'm not sure we're completely there yet, but it's starting to feel like dark mode support is becoming the new normal in web development. It somewhat reminds me of the shift to responsive sites back the the early 2010s. The most trendy sites lately are fully dark, which is likely a reaction to that push. I haven't built a fully compatible site yet, but I've done dozens of emails. Thankfully, this site won't be viewed in the Gmail app. Tailwind [makes it easy](https://tailwindcss.com/docs/dark-mode) to have support with classes, but I figured I'll want to plan some basic patterns. I'm thinking that some things may have defined colors, but that there may be some customization options as well. I'd like to work out the best way to handle that in the admin. 

## But, Like, In React

The docs have some nice, clean JavaScript using the `matchMedia` API, but we're in the Reactiverse here so we're going to need to pour on some more JS. ~~I skimmed a few articles and [this one](https://www.geeksforgeeks.org/how-to-add-dark-mode-in-reactjs-using-tailwind-css) seemed to match up pretty well. I gave ChatGPT a shot, too, but it went a slightly different route and added `styled-components` to the mix. That was a fun reminder that it's a great tool for outputting words, but often lacks context necessary for making decisions within a tech stack. I'm sure it could be taught, but that's for a different series.~~

~~I took the code from that article and made a `useThemePreference` helper. Technically this scopes my usage of theme, but I'm okay with that for this project. I might reconsider if this was something I expected to last a long time, since there are many more user-defined theme options. I know the trend is put hooks in a hooks folder, but I still view things like this as helpers.~~

## Brake Check! 

I'm leaving that text because I really did that and I write these as I build. However, in going through some weird steps I realized this is likely a solved problem in Tailwind UI. It is and I prefer their solution as well. I know they get plenty of flack in our community but I feel like they write for the platform, but with utility and documentation in mind. It's refreshing compared to The Reactiverse that I'm used to. A perfect example here is that the article would've had me installing a package in order to handle a checkbox, but the Tailwind solution uses an HTML element and has a workaround for SVGs to avoid them getting put into the bundle. Things like that show me that they're thinking about efficiency and performance. 

The script handles the user preference mode bits as well as disabling transitions to avoid the flicker that can happen with a swap.

<div class="full-to-half-bleed">

```javascript
const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`
```

</div>

The toggle has the SVG solution I mentioned:

<div class="full-to-half-bleed">

```jsx
function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

...

<ModeToggle />
```

</div>

That feels so clean and the button already has styles that are intended for the toggle as well. No state, no hooks, a proper element, and just enough JS to make the change. [Here's the PR](https://github.com/dandenney/strapi-series-marketing/pull/5) for adding the code and some screens that show what it looks like. I popped it into the header which may have a future issue for fitting it all on mobile but I'll deal with that when I work on that particular component. 

<img src="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-marketing-dark-mode.png" alt="Screenshot of a Strapi's UI for content and the code output in the API" srcset="https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_686,q_auto/v1681092603/posts/screenshot-marketing-dark-mode.png 718w, https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_1536,q_auto/v1681092603/posts/screenshot-marketing-dark-mode.png 768w" width="1144" />











