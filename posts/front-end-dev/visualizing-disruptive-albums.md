---
path: "/posts/front-end-dev/visualizing-disruptive-albums"
title: "Visualizing a Disruptive Album: beerbongs & bentleys"
summary: Applying some of what I learned in Fullstack D3 to a passion project
date: "2020-02-17"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

I recently read [Fullstack D3](https://www.newline.co/fullstack-d3) and wanted to put some of what I learned into action. If you haven't read it yet and want to learn D3, I'd skip this post and go order it. Seriously, it's so good.

## Backstory

A couple years ago, I got into tracking [Spotify Charts](https://spotifycharts.com/regional). At the time, I was wanting to learn vanilla JS, so I built a little single-page app using Firebase. It's not online, but the [repo](https://github.com/dandenney/track-life) exists. Each day, I'd plot the top ten tracks and then use line charts to show their performance over time. In the middle of my daily tracking, I saw something crazy. Ed Sheeran dropped ÷ and all of a sudden there was a sea of that blue album cover in the charts. Of the sixteen tracks on the album, ten made the top twenty. I was in awe. How amazing is it that an album can drop and that all over the world, people are listening to it more than almost anything else?

### Fri-yay Traditions

Post Malone has dropped two albums with this kind of swagger and one has become one of my favorite albums. My friend, Eden, and I sync Spotify over Discord and listen to [beerbongs & bentleys](https://open.spotify.com/album/6trNtQUgC8cgbWcqoMYkOR?si=jXkiFg0hQoWrkQbq8dWafQ) every Friday afternoon. I want to visualize some of the metrics that show how strong that release was.

## Selling Points

There are a few things that stand out to show the impact that this album had on the charts: total streams on day one, that week's total streams in the top twenty vs. the previous and next week, how many tracks were in the top twenty, and how long they stayed.

On a more granular level, there are some interesting things that we can learn from the performance of individual tracks. One funny thing is that Jonestown (Interlude) is a 1:52 minute interlude that was the 30th most played song in the world on the release date. That's just cray. Aside from that, there's some it's interesting to see how track number affects the performance and how the singles performed vs. the new tracks.

## My New, Shiny Hammer

Fresh off of reading a book about D3, I want to make sure that I'm not falling into the scenario where I have a new hammer and everything looks like a nail. I had to ask myself if I need D3 to present this information? The answer was a mix of yes and no. There is some information that can be presented. Client-side JavaScript is expensive, so I like to avoid it when I can. That said, I'm not building a graph out HTML and CSS. So, I'll start by comparing some of the information.

## Blame It On These

### Streams

<table>
  <thead>
    <th>Date</th>
    <th>Total Streams</th>
    <th>Notes</th>
  </thead>
  <tbody>
    <tr>
      <td>
        April 20, 2018
      </td>
      <td>
        86,168,208
      </td>
      <td>
        Release day streams one week before
      </td>
    </tr>
    <tr>
      <td>
        April 27, 2018
      </td>
      <td>
        91,695,538
      </td>
      <td>
        The album had 77,452,211 of these streams, or 84%
      </td>
    </tr>
    <tr>
      <td>
        May 4, 2018
      </td>
      <td>
        67,147,820
      </td>
      <td>
        Release day streams one week after
      </td>
    </tr>
</table>

This is where I start spinning the hammer in my hand. That little table technically tells the story and it might be exactly what you want if you were looking to copy and paste from Wikipedia into an essay. As a fanboy, though, it needs some Candy Paint.

<h4 class="u-ta-c">Total Streams of the Spotify Top 20</h4>

<div id="wrapper">
  <svg width="636" height="400"><g style="transform: translate(20px, 20px);"><g><rect x="37.935483870967744" y="76.66248259999999" height="263.3375174" width="161.41935483870967"></rect><rect x="217.29032258064515" y="28.235170800000006" height="311.7648292" width="161.41935483870967"></rect><rect x="396.64516129032256" y="111.69741199999999" height="228.30258800000001" width="161.41935483870967"></rect></g><g><text x="117.93548387096774" y="66.66248259999999" class="streams-text">7.7M</text><text x="297.2903225806451" y="18.235170800000006" class="streams-text">9.1M</text><text x="476.64516129032256" y="101.69741199999999" class="streams-text">6.7M</text></g><g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="transform: translateY(340px);"><path class="domain" stroke="currentColor" d="M20.5,0.5H576.5"></path><g class="tick" opacity="1" transform="translate(118.64516129032258,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">April 20, 2018</text></g><g class="tick" opacity="1" transform="translate(298,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">April 27, 2018</text></g><g class="tick" opacity="1" transform="translate(477.3548387096774,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">May 4, 2018</text></g></g></g></svg>
</div>

<style>
  .domain {
    display: none;
  }

  #wrapper text {
    color: #424242;
    font-family: "Sentinel A", "Sentinel B";
  }

  #wrapper rect {
    fill: #424242;
  }

  .tick text {
    font-size: 1rem;
    font-weight: 700;
  }

  .streams-text {
    font-size: 32px;
    text-anchor: middle;
  }
</style>
