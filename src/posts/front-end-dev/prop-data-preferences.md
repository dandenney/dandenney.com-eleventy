---
path: "/posts/front-end-dev/prop-data-preferences"
thumb: "/img/posts/front-end-dev/prop-data-preferences/thumb.jpg"
thumb2x: "/img/posts/front-end-dev/prop-data-preferences/thumb@2x.jpg"
title: Prop Data Preferences
summary: What's the "best practice" for passing down data
date: "2020-01-18"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

This week I was working on a page that had a significant amount of looped data. In the PR, we discussed options and preferences for how to pass data down through props.

You can skip the context and review the [options](#options).

## Context

In this scenario, it's a page with multiple queries that are related to a top-level query. To make it more interesting, imagine a music artist page. The data might look something like this:

```json

{
  artist: {
    name:
    ...
    albums: {
      title:
      ...
    }
    concerts: {
      location: {
        ...
      }
      ...
    }
    playlists: {
      title:
      ...
    }
    songs: {
      title:
      ...
    }
  }
}
```

To minimize, or "reduce," the data and markup for each section, each sub-section of data would have its own component. For example, at a minimum, a `songs` component would loop over all of the songs from the artist. What to do beyond that is where our debate started. We typically separate the loop and the individual presentation of the data. The following isn't exactly what the code would look like, but it's a visual structure of the goal:

```jsx
<Artist>
  ...
  <Songs>
    <Song />
  </Song>
</Artist>
```

For the purpose of this example, we'll limit the amount of information in each `song` to `title`, `runtime`, and `imageUrl`. (Aside: It may look like overkill to split the components, but theye're typically more complex than this, with much more markup.) The question becomes, where do you destructure the data for the song? I had done it like this:

```jsx
const Songs = ({ songs }) => (
  <section>
    {songs.map(song => (
      <Song song={song} key={song.title} />
    ))}
  </section>
);
```

Then, in the `<Song>` component, I was descructuring the actual `song` data:

```jsx
const Song = ({ song }) => {
  const { imageUrl, runtime, title } = song;
  return (
    <article>
      <img alt={title} src={imageUrl} />
      <h3>{title}</h3>
      <time>{runtime}</time>
    </article>
  );
};
```

Some feedback was that there are ways to avoid the naming redundancy, by spreading the props, and to make the presentation component more "dumb, stateless, etc.". Some options are listed below, and I'd love to hear what your preference is and why. It's for my learning and for the possibility of someone else stumbling across this post and learning, too. (I'll pop in any feedback I get into the post.)

## Options<a name="options"></a>

Each has pros and cons, with varying amounts of redundancy, readability, and ease of following the data.

### One: Keep it as-is

Songs component for the loop:

```jsx
const Songs = ({ songs }) => (
  <section>
    {songs.map(song => (
      <Song song={song} key={song.title} />
    ))}
  </section>
);
```

Song component destructing the data:

```jsx
const Song = ({ song }) => {
  const { imageUrl, runtime, title } = song;
  return (
    <article>
      <img alt={title} src={imageUrl} />
      <h3>{title}</h3>
      <time>{runtime}</time>
    </article>
  );
};
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s the simple reason why you should reconsider option 1: because all of those properties belong together! The song is a single entity with properties directly related to it.<br><br>Otherwise, this becomes possible:<br>&lt;Song artist=&quot;Rammstein&quot; title=&quot;Party in the USA&quot; /&gt;</p>&mdash; David K. 🎹 (@DavidKPiano) <a href="https://twitter.com/DavidKPiano/status/1218652798511976448?ref_src=twsrc%5Etfw">January 18, 2020</a></blockquote>

### Two: Spread the props

The spread operator reduces some redundancy in the nested component:

```jsx
const Songs = ({ songs }) => (
  <section>
    {songs.map(song => (
      <Song {...song} key={song.title} />
    ))}
  </section>
);
```

It also reduces some redundancy in the child component:

```jsx
const Song = ({ imageUrl, runtime, title }) => {
  return (
    <article>
      <img alt={title} src={imageUrl} />
      <h3>{title}</h3>
      <time>{runtime}</time>
    </article>
  );
};
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For what it&#39;s worth, I usually do what was presented in option #2.</p>&mdash; Nathan Smith (@nathansmith) <a href="https://twitter.com/nathansmith/status/1218629478752100363?ref_src=twsrc%5Etfw">January 18, 2020</a></blockquote>

### Three: Destructure in the parent component

Handle the assignment of the data at this level:

```jsx
const Songs = ({ songs }) => (
  <section>
    {songs.map(song => {
      const { imageUrl, runtime, title } = song;
      return (
        <Song imageUrl={imageUrl} runtime={runtime} title={title} key={title} />
      );
    })}
  </section>
);
```

This component remains "dumb, stateless, etc.":

```jsx
const Song = ({ imageUrl, runtime, title }) => {
  return (
    <article>
      <img alt={title} src={imageUrl} />
      <h3>{title}</h3>
      <time>{runtime}</time>
    </article>
  );
};
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I’m usually a #3. In general I like to keep component props as primitives (strings, numbers, bools) so you’re less-bound to a data schema and re-rendering is simpler.<br><br>Also shouts to #4 cuz don’t abstract if you don’t need to</p>&mdash; Drew Powers (@_drewpowers) <a href="https://twitter.com/_drewpowers/status/1218648200086724615?ref_src=twsrc%5Etfw">January 18, 2020</a></blockquote>

### Four: One Component to Rule Them All

Rule change! If you choose this one, I'd love to know if it means "always" or if the properties or lines of code are under a threshold and what that threshold is. This particular example is tiny, but imagine a data set with 10+ key/value pairs, additional content, some structural markup for grids, etc.

```jsx
const Songs = ({ songs }) => (
  <section>
    {songs.map(song => {
      const { imageUrl, runtime, title } = song;
      return (
        <article>
          <img alt={title} src={imageUrl} />
          <h3>{title}</h3>
          <time>{runtime}</time>
        </article>
      );
    })}
  </section>
);
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I usually don’t abstract something until I actually *do* need to reuse it AND the purpose is identical. I don’t try and anticipate or abstract early. “Duplication is far cheaper than the wrong abstraction” and all</p>&mdash; Drew Powers (@_drewpowers) <a href="https://twitter.com/_drewpowers/status/1218656821076021251?ref_src=twsrc%5Etfw">January 18, 2020</a></blockquote>

### Five? Choose Your Own Adventure

I'm sure there are other options people would take, and I'll add any that are shared.

## My take

While I originally wrote it using version one, it's now my least favorite. I'm heavily torn between two and three. I love the simplicity of two, with minimal redundancy. I'd have to look to the original data query or the `propTypes` to know that is available, but that feels like a worthwhile risk for me personally. What I question is if someone new to the project would feel the same way. Three feels like a proper separation of concerns and is very descriptive. There's just something about the redundancy and the scale of when there are 10+ props that makes me not love it as much. On the flip side, it feels way more friendly for a future developer. There's plenty more I'm likely missing about these and other options, so I'd love to hear your thoughts. Please [@me](https://twitter.com/dandenney) on Twitter if you have some.

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
