---
path: "/posts/true-crime/working-title"
title: "Working Title"
summary: "Working Summary"
date: "2020-03-03"
tags:
  - true-crime
layout: layouts/post-custom.njk
---

<style>
  #scrolly {
    position: relative;
  }

  .story {
    position: relative;
  }

  .step {
    margin-bottom: 8rem;
  }

  figure {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100%;
    margin: 0;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }

  .details {
    max-width: 33.333%;
  }

  .details img {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    border: 0.5rem solid rgba(255, 255, 255, 0.9);
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .details p {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    margin: 0 1rem;
    padding: 1rem;
  }

  .details h3 {
    background: rgba(181, 31, 36, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    color: #ffffff;
    margin: -1rem 0 0;
    padding: 1rem;
    font-size: 20px;
  }

  .details img + h3 {
    padding-top: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    .details h3 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1000px) {
    .details h3 {
      font-size: 28px;
    }
  }

  #map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>

# Working Title

<p>History of the area, other killers, and attention around LISK.</p>

<section id="scrolly">
  <figure>
    <div id="map"></div>
  </figure>

  <ol class="story">
    <li class="step" data-step="1">
      <div class="details">
        <h3>This part of the story begins on November 1, 1993</h3>
        <p>On that evening, a woman had been seen hitchhiking in East Patchogue, NY.</p>
      </div>
    </li>
    <li class="step" data-step="2">
      <div class="details">
        <img alt="Rita Tangredi" src="/img/posts/true-crime/working-title/rita-tangredi.jpg" width="220" />
        <h3>Rita Tangredi's remains were found in wooded area on November 2, 1993</h3>
        <p>The details are an important part of identifying her killer: she had been beaten, strangled, a specific item of her clothing was missing, and her body was found in a distinct pose, and wood chips were used to cover her.</p>
      </div>
    </li>
    <li class="step" data-step="3">
      <div class="details">
        <img alt="Sandra Costilla" src="/img/posts/true-crime/working-title/sandra-costilla.jpg" width="220" />
        <h3>Sandra Costilla's remains were found on November 20, 1993</h3>
        <p>She was found in a wooded area by a group of hunters and she was strangled, but reports don't state that the same level of violence was present as with Rita Tangredi.</p>
      </div>
    </li>
    <li class="step" data-step="4">
      <div class="details">
        <img alt="Colleen McNamee" src="/img/posts/true-crime/working-title/colleen-mcnamee.jpg" width="220" />
        <h3>Colleen McNamee was last seen on January 5, 1994</h3>
        <p>She was getting into a small blue car at the Blue Dawn Diner.</p>
      </div>
    </li>
    <li class="step" data-step="5">
      <div class="details">
        <h3>Colleen's remains were found on January 30, 1994</h3>
        <p>Similarly to Rita Tangredi, she was found in the woods. She, too, was beaten, strangled, and left in the same pose.</p>
      </div>
    </li>
    <li class="step" data-step="6">
      <div class="details">
        <img alt="Jane Doe No. 7" src="/img/posts/true-crime/working-title/jane-doe-no-7-fire-island.jpg" width="220" />
        <h3>Partial remains of Jane Doe No. 7 are found on April 20, 1996</h3>
        <p>Along Blue Point Beach, people found her legs wrapped in plastic.</p>
      </div>
    </li>
  </ol>
</section>

<script src="https://unpkg.com/d3@5.9.1/dist/d3.min.js"></script>
<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
<script src="/js/posts/working-title/stickyfill.min.js"></script>
<script src="/js/posts/working-title/scrollama.min.js"></script>
<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<script src="/js/posts/working-title/main.js"></script>
