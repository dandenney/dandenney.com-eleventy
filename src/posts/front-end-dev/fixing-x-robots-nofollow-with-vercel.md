---
path: "/posts/front-end-dev/fixing-x-robots-nofollow-with-vercel"
thumb: "posts/x-robots_nofollow.png"
linkColor: "#d8080d"
textColor: "#313b41"
title: "Fixing x-robots nofollow with Vercel"
titleGradient: "linear-gradient(to bottom, #759996, #3f555b)"
summary: Fixing a an issue when proxying to Vercel 
date: "2021-08-17"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

A few months ago, I made a technical decision that has cost a web project months of Google indexing. So, I'm writing this as a way to confess my sin and hopefully help anyone else avoid this issue.

## Vercel sets the x-robots-tag to "nofollow" for proxied requests to the vercel.app domains

It's expected that they will set the `x-robots-tag` to `nofollow` for preview URLs and this is very helpful behavior to avoid duplicate content issues. However, they do not set a `x-robots-tag` on vercel.app domains if you make a direct request in a browser, for example `https://uncovered-cases.vercel.app/cases`.

They do set a `x-robots-tag` to `nofollow` if you proxy a request to that url, though. Unfortunately, I haven't been able to get a clear answer as to whether that is intended behavior, but thanks to their excellent [Director of Customer Success](https://twitter.com/mcsdev), I have a fix.

## The flawed fix

Vercel allows you to override their headers with a `vercel.json` file. So, the exact fix that I've added is:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "x-robots-tag",
          "value": "index, follow"
        }
      ]
    }
  ]
}
```

Adding that file to the root of your project will allow you to override their headers. Check out [the docs](https://vercel.com/docs/configuration#project/headers) for other options.

The "flawed" part is the source. I was so relieved to see the corrected tag that I shipped it to request indexing in Google Search Console again. However, that source does override the tags on preview URLS. I'm going to find out how to target only the primary app domain, and I'll update this when I do. 

## Why we're proxying

The project is [Uncovered](https://uncovered.com), which is focused on helping to solve cold cases
of the murdered or missing. The marketing version of the site is built in WordPress and hosted on WPEngine. By default, WP wants to control all of the paths and URLs, but we have some more "web app" behavior that we want for displaying case information and handling authenticated members. We're using Next.js for that and hosting it on Vercel. We use some Nginx overrides to proxy requests to certain paths, to enable all of this behavior. That looks like: 

```nginx
location ~ /cases {
  resolver 8.8.8.8;
  proxy_set_header Host uncovered-cases.vercel.app;
  proxy_pass https://uncovered-cases.vercel.app$request_uri;
}
```

## Irony in troubleshooting

[Netlify](https://www.netlify.com) helped me narrow down the problem. I knew I had the proxy set up in WPEngine and I knew that the vercel.app domain was not receiving the tag if I visited it directly. So, I wasn't sure where the tag was being set. I ended up duplicating the project in Netlify and adding a proxy to another path. No `x-robots-tag` was added, so I was able to eliminate that it was coming from WPEngine. 

The irony in that for me is that before launching, I was building the project on Netlify. I moved away from it because at the time I was having trouble with incremental static regeneration, which is used a lot since the data is currently in Airtable. They've done [a lot of work](https://www.netlify.com/blog/2021/03/16/try-the-new-essential-next.js-plugin-now-with-auto-install) since then and, if I had waited, I wouldn't have lost the months of Google juice.

## Thank you, Matthew Sweeney

I was originally underwhelmed by the support. They do warn you that there is a 24-48 hour window on responses on the plan I'm on, which is PRO with 2 seats and analytics. The first response was a little outside the window and was a canned response from the docs about preview URLs.

I gambled on reaching out via Twitter for options for escalation. Matthew replied and was very responsive, all the way up to correcting my casing on the tags in my `vercel.json`. 




