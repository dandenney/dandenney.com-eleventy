---
codeHighlighting: true
date: "2020-12-13"
layout: layouts/post.njk
path: "/posts/front-end-dev/fighting-tooling-fatigue"
poster: '<span class="absolute font-black left-32 rotate-6 text-yellow-800 text-3xl top-28 transform w-40" style="background: linear-gradient(#c1a587, #7a604b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Fighting tooling fatigue</span><img alt="Hard drive wrapped in plastic" src="/img/posts/front-end-dev/fighting-tooling-fatigue/poster-bg-1x.jpg" srcset="/img/posts/front-end-dev/fighting-tooling-fatigue/poster-bg-1x.jpg, /img/posts/front-end-dev/fighting-tooling-fatigue/poster-bg-2x.jpg 2x" height="303" width="290" />'
summary: Failing deploys, build configurations, and plugins oh my
tags:
  - front-end-dev
title: "Fighting Tooling Fatigue"
---

Cue up the [Bryan Cranston lightbulb scene](https://www.youtube.com/watch?v=8fnfeuoh4s8&list=PLIBEU89rzszMGAbxHxjC6Gw6SNFfKPtSZ&index=68). I want to write some blog posts, so of course, it's time to redesign my site, right? And I've seen some really interesting things around Tailwind recently, so I might as well try out a new framework as I do it. All I'll have to do is add Tailwind to my Eleventy app and get to coding.

Oh, the perf things I've seen come from purgeCSS, which needs to run as a postCSS plugin. I'll follow this example starter. Shit, what's [Rollup](https://rollupjs.org/guide/en/)? Never mind, there's a post on how to do it from a base Eleventy install. Hello `[Object object]`, my old friend. Maybe the plugin? Nope. Tweet for some examples? Nothing's working in my setup. What's different about mine? I don't know.

Eff it, I'll just change the font in [Typography.com](https://www.typography.com) and update the font-family in my Eleventy CSS. Oh, my last deploy in Netlify in August failed, and now every build is failing. I don't know what this error means, but it's referencing the node_modules version of the Eleventy config. Hmm, a local build works. Five or six stack overflow and Netlify entries later with similar but not exactly the same problem, I've tried changing the values in my netlify.toml, my scripts in my package.json, rolled back my site to the last commit that deployed, and run about 30 builds locally with 0 successful in Netlify.

## All that is for funsies

That series took place over three evenings, on my own time, with the hope of doing something fun with my site. It doesn't even touch on the madness involved in my day-to-day work. [Emma Bostian recently summed up](https://twitter.com/EmmaBostian/status/1336616967470510084?s=20) how a couple of weeks went for TypeScript and me. Plus, some pirates have been shooting their digital cannons at our series of websites, so now Cloudflare is blocking them and then also blocking me from working like usual. Rerunning workflows until they're green with Rails testing, shared HTML and CSS across sites running Gatbsy, Next, and React on Rails, etc.

Maybe I should just stick to gaming in my spare time. Or maybe just grab my local build, dust off an FTP client, drag the folder into my old mediatemple and start commando-coding live on the server. Jeremy Keith is doing a [more responsible version of that](https://css-tricks.com/npm-ruin-dev/) with his new podcast site. But, no one has ever accused me of being as smart as Jeremy Keith.

## The hokey 90% rule

> As the old saying goes, front-end life is 10% what happens to you and 90% how much React you use.

Wait, no. Seriously, though, my only way forward is to change my perspective. This isn't me telling myself to just "stop being sad," but it is time to rethink how I approach tooling. I do really believe in the guideline that life is a small percentage of what happens to you and a large percentage of how you react to it.

## This is the job

While I didn't sign up for this world of insane tooling, I also didn't originally sign up to be a full-time front-end engineer. I was a goofy twenty-something offered a web design position when applying for an SEO role. My first year-and-a-half of web design work was quick homepage comps in Photoshop and basic HTML/CSS conversions for small business sites. Since then, I've had a wonderful career where I could mostly focus on styling work, but never 100%. The "other" work changed from Photoshop to Rails environments, Git workflows, Rails + JavaScript front-ends (Backbone, Angular), and onto today's world of primarily JavaScript frameworks.

Where I've gone wrong is that I still view build commands, CI, testing, etc. as things that are in the way of doing my job. However, they are my job. I need to treat them the same way I used to treat Photoshop as a way to get to CSS, or Git flows and Rails views as a way to get to writing markup. While yes, I could build my personal site without any tooling, my personal site has always been my playground for learning new things. So, I need to use it to learn how to embrace tooling and hopefully learn to love it.

## First Steps

I'm not going to continue troubleshooting the current build problem. Instead, I'm going to start clean without an Eleventy starter. I've relied on starters in almost all of my Gatsby, Next, and Eleventy experience, so it's time to really understand what I'm using.

I'm going to install Tailwind and try it out. Even if I don't end up keeping it, I'll have achieved something new with a series of tooling items that I haven't set up properly yet.
I'm going to make it a point to set up and configure a few Netlify functions and to learn how to properly set up the Goodreads API in Eleventy so that it doesn't do the full request for my history on every save.

I'll take notes as I go, as I do with the things that I'm excited to learn.
As I learn these things, I'm going to pay more attention to CI in my work as well. I know that if I approach it in the right way, I'll learn, and then I'll be more productive in and out of work.

I'm a front-end dev, and tooling is a part of a job that I absolutely love.

## Follow-up

I kept notes on what it took to learn and configure a new version. I had it working, understood nearly every line of code, and then tried to bring it over to my initial project. The deploys failed. The same files from two repos, one succeeds ond one fails. I learned that Netlify locks in the version of Node that you use on your first build so unless you specify it, that version stays. Five days, over 15 hours when all it took was a single line of code to fix.

[Notion notes](https://www.notion.so/Personal-site-6a96cb8224424d0c82ffe1a2559b94ff)
