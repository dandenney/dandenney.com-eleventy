---
codeHighlighting: true
date: "2020-12-16"
layout: layouts/post.njk
path: "/posts/front-end-dev/custom-collection-list-markup-in-eleventy"
poster: '<span class="absolute font-black left-20 text-red-700 text-2xl top-32 w-32">Custom collection list markup in Eleventy</span><img alt="Hard drive wrapped in plastic" src="/img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/poster-bg-1x.jpg" srcset="/img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/poster-bg-1x.jpg, /img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/poster-bg-2x.jpg 2x" height="413" width="308" />'
summary: Trying something with using custom markup for each item in a collection list
tags:
  - front-end-dev
title: "Custom collection list markup in Eleventy"
---

I have an idea to add some flare to my posts, which will require something a little unusual with frontmatter. It's not too crazy and totally achievable with existing methods, but I haven't seen many sites do it, so I thought I'd share.

## The goal

Each item in the collection is going to get a custom "poster." I grabbed this [Miscreated Media](https://creativemarket.com/MockupCloud/4180470-Miscreated-Media-Mockup-Creator) set on Creative Market, and I'm going to piece together bits representing each post. The difference between my goal and what I've normally seen is that it will be a mix of custom markup and an image, where I usually see repeated markup and a custom image, or "thumbnail." To be sure I'm using as much markup as possible, I'll need the ability to customize elements, classes, etc., and not only ship images with text in them.

<img alt="screenshot of posts with custom styles" class="full-to-half-bleed md:my-12" loading="lazy" src="/img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/screenshot-custom.jpg">

## Can it be done? And how?

When I was first considering it, I was wondering if you can pass HTML from frontmatter to a Nunjucks file. I know you can do strings, and it would be possible to achieve a lot of customization with only CSS classes, but I want the ability to be unique.

Rightfully so, autoescaping in Nunjucks automatically treats the sources as unsafe to avoid accidentally allowing XSS injection. However, you can manually filter something as safe to override that behavior. From [the docs](https://mozilla.github.io/nunjucks/templating.html):

> If autoescaping is enabled in the environment, all output will automatically be escaped for safe output. To manually mark the output as safe, use the safe filter. Nunjucks will not escape this output.

```html
{% raw %}{{ foo }} // &lt;span%gt;
{{ foo | safe }} // <span></span>
{% endraw %}
```

So I knew it could be done, but should it? Well, we'll see how it turns out.

## Starting with a basic setup

I'm currently outputting repeated markup and no images, like this:

```html
{% raw %}{% for post in collections.posts | reverse %}
  <a class="link-post m-4" href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>
{% endfor %}
{% endraw %}
```

My frontmatter for my most recent post is:

```js
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
```

There are some thumb references in there that I will no longer be using as I'm changing up my approach. I'll clean that up as I go with each post, which brings me to an important point. **This will be an incremental update.** I'm building in the wild right now, and I'm not going to wait to do all of my posts before I ship this new feature. So, this is a great default condition. The basic styles that I'm setting come from Tailwind and some custom CSS, which currently look like this:

<img alt="screenshot of posts with base styles" class="full-to-half-bleed md:my-12" loading="lazy" src="/img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/screenshot-posts.png">

## Conditionally custom

This current post is the first that will get the custom "poster", so I started with a proof of concept:

```js
---
codeHighlighting: true
date: "2020-12-16"
layout: layouts/post.njk
path: "/posts/front-end-dev/custom-collection-list-markup-in-eleventy"
poster: 'Custom collection list markup in Eleventy<img alt="Random photo retrieved as a placeholder" src="<https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4>" />'
summary: Trying something with using custom markup for each item in a collection list
tags:
	- front-end-dev
title: "Custom collection list markup in Eleventy"
---
```
I had to alphabetize those attributes. My former self was wild and out of control.

For the loop itself, checking for the existence of the poster and using the safe filter gives me exactly what I'm hoping for.

```html
{% raw %}{% for post in collections.posts | reverse %}
	{% if post.data.poster %}
		<a href="{{ post.url | url }}">
			{{ post.data.poster | safe }}
		</a>
	{% else %}
		<a class="link-post m-4" href="{{ post.url | url }}">
			{{ post.data.title }}
		</a>
	{% endif %}
{% endfor %}
{% endraw %}
```
Look at this beauty!

<img alt="screenshot of posts with custom styles" class="full-to-half-bleed md:my-12" loading="lazy" src="/img/posts/front-end-dev/custom-collection-list-markup-in-eleventy/screenshot-custom-post.jpg">

## That's a wrap

With a frontmatter attribute and a filter, you can add customized markup for a collection. It may be overkill for blog posts, but I could see it as useful for other types of collections like recipes, where you could avoid a series of conditions on what data to show about each item. Now, all that's left to do is apply my questionable taste to my history of posts.

## Afterthought

After completing the first few, I'm not sure that this style will stay. I definitely want the custom posters but I kinda dig the rectangles of the other posts, so I may change things up after I do some other tasks.