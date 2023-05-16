---
title: Outputting Notion API Data in Eleventy
date: "2023-05-15"
tags:
  - blips
layout: layouts/blip.njk
---

I've wanted to horde a collection of links to the things that I read and watch forever. I've used a bunch of services over the years but recently decided that Notion would be a great spot for them. I can interact with the database in Notion itself and share the links on the web as a form of curation.

I based my initial setup on [Notion API with 11ty](https://www.constantvallee.dev/posts/notion-api-with-11ty/), which got me off to a great start. I'm still not 💯 on why, but I could only get the data up to the point of the data file. I could log it out in the console, but I couldn't get the `library` file to see it. I swapped the request over to [Andy's approach that I had used in the past](https://learneleventyfromscratch.com/lesson/9.html) and got the data in. 

However, neither really touched on outputting the data. The API return is verbose. (Fancy word usage to up my Grammarly score). This example is super specific to my needs, but here's an example of trimming the request for attributes from a simple Notion database.

![Screenshot of the a Notion database](/img/blips/outputting-notion-api-data-in-eleventy/screenshot-of-notion-library-database.png)

Your specific data will vary, but I imagine either using something like Postman or outputting the full return in the browser may be more straightforward than console logging like I did.

The `created_time` is an attribute on each item returned from the API, but the data that you add is nested in an object named `properties`. In there, each item will vary on the attributes it has, but I was able to find a plain_text version for each. You'll be able to see in the code that it's slightly different for each. 

```js
const trimmedResults = results.map((result) => {
  const { properties } = result;
  const { Title, URL, Notes } = properties;
  return {
    created: result.created_time,
    notes: Notes.rich_text[0]?.text.content,
    title: Title.title[0]?.plain_text,
    url: URL.url,
  };
});
```

I'm stripping out my classes here, but by returning `trimmedResults`, I was able to output the data with:

```js
{% raw %}{% if libraryLinks.length \%}
  <ul>
    {% for link in libraryLinks %}
      <li>
        <a href="{{ link.url }}">{{ link.title }}</a>
        {%if link.notes %}
          <span>{{ link.notes }}</span>
        {% endif %}
        <span>{{ link.created_time | formatDate('MMM DD YYYY') }}</span>
      </li>
    {% endfor %}
  </ul>
{% else %}
{% endraw %}
```

The `formatDate` part came from [A Set of Useful 11ty Filters](https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/#3-date-formatting). 

The [whole PR is on GitHub](https://github.com/dandenney/dandenney.com-eleventy/pull/84/files), just in case I missed anything or if you want to see it all in context. 

