---
path: "/posts/front-end-dev/eleventy-and-netlify-for-npm-newbs-like-me"
thumb: "/img/posts/front-end-dev/eleventy-and-netlify-for-npm-newbs/thumb.png"
thumb2x: "/img/posts/front-end-dev/eleventy-and-netlify-for-npm-newbs/thumb@2x.png"
title: "Eleventy and Netlify for NPM newbs like me"
summary: Sharing some basics of configuration that were new to me
date: "2020-12-15"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

## Backstory

Who has two thumbs and wrote his first build scripts after 12 years of "professional" web development? This guyyyyyy. While I've typed commands thousands of times into a command line, I've never taken the time to really learn them. Copy/paste, clone, "click to deploy", etc. have been my modus operandi for running projects locally and deploying. The vast majority of the times things just work and when they don't, a few Google searches have led me to enough things to try to get them back going. I lived that blissfully ignorant life until last Tuesday when nothing would fix the fact that my deploys were failing.

## Not knowing what you don't know is the hardest part

I've seen this little section hundreds, if not thousands, of times in `package.json` files:

```json
"scripts": {
    "build": "eleventy",
    "watch": "eleventy --watch",
    "serve": "eleventy --serve",
    "start": "eleventy --serve",
    "debug": "DEBUG=* eleventy"
  },
```

However, I hadn't spent any time learning why it's there or what it is even linked to. I knew it was similar to bash commands and that if I typed out the words with either `npm run` or `yarn` in front of them I was on my way 99% of the time. I definitely didn't know how they relate to Eleventy or Netlify because I had only clicked buttons to set things up in the past. So, it was tricky to identify what could be wrong with my setup when three starters had three different sets of commands.

## Running the packages

While I'd highly recommend diving into the [NPM docs](https://docs.npmjs.com/about-packages-and-modules), for the purposes of this, I'm going to talk through what's specifically necessary for Eleventy to be viewed locally and then built and deployed in Netlify.

### Key / Value pairs

Within the scripts section of your `package.json` you'll almost definitely want a series of commands that allow you serve the site locally in a browser. For Netlify, though, the only necessary one is one that will build the site. (You don't technically have to build and interact with the site locally to build and deploy it, though I'd highly recommend it.)

For demonstration purposes, I'll rename these. The `eleventy` command comes from Eleventy itself, with options that you can add depending on what you want. Locally, we'll have the ability to view a build and get live reloads with `eleventy --watch`.

```json
"scripts": {
	"forYou": "eleventy --watch",
	"forNetlify": "eleventy",
},
```

Those keys can be named anything you want, which is why you'll run into various names as you review other people's Eleventy setups. This was important for me as I was trying to figure out how to find parity between running a local build and emulating a Netlify build.

What I didn't know before last week is how Netlify knows what to run.

## Looking Behind the UI Curtain

If you use one of the "deploy to Netlify" buttons from their site, they manually set the build command in the UI of your project. In the blog starter, they set it to `DEBUG=* eleventy`, which uses a package that Eleventy [includes and documents](https://www.11ty.dev/docs/debugging/).

![Screenshot of Netlify's dashboard UI](/img/posts/front-end-dev/eleventy-and-netlify-for-npm-newbs/screenshot-build-command.png)

So if we wanted to use our scripts from above and maintain it from the UI, we'd need to set that to `forNetlify` in the Build Command slot.

This was an "aha moment" for me as I had assumed that Netlify ran things based an the key of "build" in our `package.json`.

## A File-Based Alternative

The UI bit is a nice feature, and [Netlify offers multiple other ways](https://docs.netlify.com/configure-builds/file-based-configuration), but most feel a little "black boxy" to me. It might be easier for others to follow if you use a designated [configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/). This pattern is quite popular in repos, where you'll see them for other packages, CI, linting, etc.

The file should be saved in the root of your project and be named `netlify.toml`.
There are a series of options that you can set within, but a super simple version that will allow for setting a build script is:

```json
[build]
  publish = "_site"
  command = "eleventy"
```

This makes a few assumptions and is customizable. First, it assumes you're using the Eleventy default and your build is going into a `\_site` folder. You can change this in Eleventy and would need to customize it here. Second, it assumes you only want to do a simple build of Eleventy. If you add additional commands that you want to run at build time, you'd need to update them here.

### Unsure Alternative That Works

I'm not 100% sure of the "best practice level" of this next option, but in reading multiple Stack Overflow posts, I ran across the suggestion of setting the command to your build script in your `package.json`, which is something that I'm doing with the new version of my site. I'm testing Tailwind and so I need to run a series of commands. They could easily get out of sync (and did in my learnings). Instead of only running `eleventy`, you can run your `forNetlify` command from earlier.

```json
[build]
  publish = "_site"
  command = "npm run forNetlify"
```

Remember that the `forNetlify` is customizable and could be anything you want, even something popular like `build`.

This comes in handy in the new version of my site as Tailwind requires a customized flow of items. The scripts section of my `package.json` has:

```json
"scripts": {
    "dev": "eleventy --input=src --output=_site --serve & postcss src/styles/tailwind.css --o _tmp/style.css --watch",
    "build": "ELEVENTY_PRODUCTION=true rm -rf _site & eleventy --input=src --output=_site & NODE_ENV=production postcss src/styles/tailwind.css --o _site/styles/style.css"
  },
```

My netlify.toml has:

```json
[build]
  publish = "_site"
  command = "npm run build"
```

(There's a lot happening in my `build` script because if you add Tailwind to a project, your builds go from 0 to 100 real quick. That's another post for another day.)

## Troubleshooting builds that deploy

With all of this set up, you are able to pretty closely emulate the Netlify build locally, but there's always a chance of a typo or something going wrong. Luckily, Netlify lets you download a deploy for comparison. This came in very handy as I was learning how the scripts worked together and was testing my deploys with a series of commands.

![Screenshot of Netlify's deploy download](/img/posts/front-end-dev/eleventy-and-netlify-for-npm-newbs/screenshot-deploy-download.png)

## The Final Boss: Failed Deploys

I don't know how many things can go wrong once you have all of your scripts configured, but one thing I have learned is that your Node version can get out of sync. This [little bit from the Netlify docs](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript) ended up being the root cause of my initial problem: failing deploys.

> A build's Node.js version is initially determined by the default version preinstalled on the site's selected build image. We pin the site to that version so your builds won't change even if the build image's defaults change.

I've had this version of my site for a while and so my Node version was pinned to some older version incompatible with something else in the deploy flow. I didn't naturally come across this because I was running Node v13 locally, so everything was building as expected.

## Be sure to designate your Node Version

Similar to the build command option, you can technically set your Node version in an environment variable within the UI. This runs the risk of your local and Netlify version getting out of sync and also may be harder to follow for anyone looking at the project. I'd go with setting it within a configuration file. I've seen this done in a few ways, but because I use `nvm`, I set my local version to configuration file by typing `node -v -> .nvmrc` in the command line and committing the file. This resulted in an .nvmrc file with:

```json
v13.12.0
```

## Before we go: a global, local alternative

One thing that can differ in many versions of Eleventy that you'll see is the use of `npx`. With a global install on your machine, you can run `npx @11ty/eleventy` instead `eleventy` and I've seen projects that configure the scripts differently. So, you could take our above example and do something like:

```json
"scripts": {
	"forYou": "npx @11ty/eleventy --watch",
	"forNetlify": "eleventy",
},
```

I just wanted to be sure to flag that for comparison when you're checking out other people's projects.

## Feedback

The goal of this share is both for me to explain the things that I learned so that I understand it better and to hopefully help anyone else avoid similar problems. If you know a better way or see that I'm leading people down a bad path please [@dandenney](https://twitter.com/dandenney) on Twitter or [create an issue](https://github.com/dandenney/dandenney.com-eleventy/issues) if you don't eff with the tweets. If you feel like you can explain it better or have better techniques, please write a post and share it. I know I'm not alone in running into some of these challenges.
