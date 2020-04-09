---
title: "Map of True Crime Garage Episodes"
date: 2020-02-17
summary: A map with a location from each episode of True Crime Garage
layout: layouts/tinkering.njk
tags:
  - tinkerings
---

<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7537438/6246012/css/fonts.css" media="print" onload="this.media='all'" />

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: #100e11;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  color: #f0eeeb;
  font-family: "Sentinel A", "Sentinel B";
  font-size: 1.25rem;
  line-height: 1.4;
}

#map {
  height: 50vh;
}

img {
  max-width: 100%;
}

.listings {
  font-size: 1rem;
  margin-top: 1rem;
  overflow-y: scroll;
  height: 200px;
  width: 100%;
}

.sort {
  padding: 1rem;
}

.map {
  flex-grow: 1;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.intro a,
.post-body a,
.item a,
.mapboxgl-popup-content a,
.scroll {
  color: #ff5960;
}

.post-body {
  margin: 0 auto;
  max-width: 700px;
  padding: 2rem;
}

h1,
h3 {
  margin-top: 0;
}

h3 {
  color: #ffffff;
  margin-bottom: 0;
}

h1 {
  font-size: 1.5rem;
}

h1 span {
  color: #ffffff;
  display: block;
  font-size: 2rem;
}

.item {
  padding: 1rem;
  transition: box-shadow 0.3s;
}

.item:nth-child(even) {
  background-color: #211e21;
}

.item.active {
  box-shadow: inset 0 0 0 1px #f0eeeb;
}

.item p {
  margin: 0.5rem 0;
}

.item p + p {
  margin-top: 0.25rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 100%;
}

.title {
  display: flex;
  flex-direction: column;
}

.fly {
  align-self: flex-end;
  background-color: #ff5960;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-shadow: none;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: transform 0.3s;
  outline: #443f44;
}

.fly:active,
.fly:focus,
.fly:hover {
  transform: scale(1.05);
}

.scroll {
  font-size: 1.5rem;
}

.u-ta-c {
  margin-top: 2rem;
  text-align: center;
}

.radios {
  display: flex;
  margin-top: 1rem;
}

.fieldset {
  width: 50%;
}

h5 {
  margin: 0;
}

label {
  border-radius: 4px;
  border: 1px solid transparent;
  display: block;
  text-align: center;
}

input {
  display: none;
}

input:checked + label {
  background-color: #ff5960;
  border-color: #ffffff;
}

svg {
  height: auto;
  width: 100%;
}

.mapboxgl-popup-content {
  background: #2a262a !important;
  color: #ffffff;
  font-family: "Sentinel A", "Sentinel B";
  font-size: 1rem;
  padding: 1rem !important;
}

.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
  border-top-color: #2a262a !important;
}

.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
  border-bottom-color: #2a262a !important;
}

.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
  border-right-color: #2a262a !important;
}

.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
  border-left-color: #2a262a !important;
}

.mapboxgl-popup-content-wrapper {
  padding: 1%;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h1 span {
    color: #ffffff;
    display: block;
    font-size: 3rem;
  }

  .listings {
    height: 400px;
  }
}

@media screen and (min-width: 1200px) {
  .intro {
    align-items: flex-start;
    display: flex;
  }

  .intro img {
    width: 70%;
    order: 1;
  }

  .intro div {
    margin-right: -4rem;
    padding-left: 1rem;
    position: relative;
    z-index: 1;
  }

  .flex {
    display: flex;
    height: 100vh;
    padding: 1rem;
  }

  #map {
    height: 100vh;
    order: 1;
  }

  .listings {
    font-size: 1rem;
    margin-top: 1rem;
    overflow-y: scroll;
    height: calc(100vh - 132px);
    width: 300px;
  }
}

@media screen and (min-width: 1400px) {
  .intro div {
    margin-right: -8rem;
  }

  .intro img {
    width: 75%;
  }
}

</style>

<h1 class="u-ta-c">Locations of <span>True Crime Garage</span> Episodes</h1>

<section class="intro">

<img alt="Nic and The Captain from True Crime Garage" src="/img/tinkerings/true-crime-garage-map/true-crime-garage.jpg" />

<div>

[True Crime Garage](https://truecrimegarage.com) is a podcast that started in November 2015. I came across it sometime in 2016, and it quickly became my fave. Nic and The Captain have a great mix of personality and skills, which make for an entertaining show as they share vital information about many cases that need more attention. This map is a way of honoring the work that they've done.

## The Data

This map shows one location from each episode that covers a specific case. Episodes that covered multiple cases or were more about the podcast were skipped. These are listed in the [anomalies section](#anomalies) section.

It's important to know that many cases have multiple victims and that even ones with a single victim can have multiple important locations. I'd love to map them all and maybe one day I will, but it will be a gigantic task.

Some episodes also span large amounts of time, even decades. The mapped location and the year is based on the earliest known event in an episode.

All of the data was compiled via a combination of listening, Google searches, and multiple coordinates helpers. The data is an an [Airtable database](https://airtable.com/shrf6r9IRsfjfsS9r), including notes about the location choices. The point accuracy is as good as the tools that I used and the available information.

</div>

</section>

<p class="u-ta-c"><a class="scroll" href="#map">Center the map</a></p>

<section class="flex">

  <div class="map" id="map"></div>
  <div class="sort">
  <h5>Sort by:</h5>
  <div class="radios">
  <div class="fieldset">
  <input type="radio" id="release" name="sortType" value="release"
  checked>
  <label for="release">Release</label>
  </div>
  <div class="fieldset">
  <input type="radio" id="event" name="sortType" value="event">
  <label for="event">Event</label>
  </div>
  </div>

  <div class="radios">
  <div class="fieldset">
  <input type="radio" id="newest" name="sortRange" value="newest"
  checked>
  <label for="newest">Newest</label>
  </div>
  <div class="fieldset">
  <input type="radio" id="oldest" name="sortRange" value="oldest">
  <label for="oldest">Oldest</label>
  </div>
  </div>

  <div class="listings" id="list"></div>

  </div>
</section>

<section class="post-body">

## First Event Years

Again, this only covers the initial event, but this gives an idea of the range of years that the podcast has covered as well as the number of episodes in ranges of event years. One of the challenges that they often share in with creating episodes is the availability of information. It seems that cases within the past 15 years have enough available info to cover.

<svg height="360" width="600" role="figure" tabindex="0" viewBox="0 0 600 360"><title>Histogram looking at the distribution of humidity in 2016</title><g style="transform: translate(50px, 30px);"><g tabindex="0" role="list" aria-label="histogram bars"><g tabindex="0" role="listitem" aria-label="There were 1 days between 1940 and 1945 humidity levels"><rect x="0.5" y="270.6666666666667" width="31.5" height="9.333333333333314" fill="#ff5960"></rect><text x="16.25" y="265.6666666666667" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">1</text></g><g tabindex="0" role="listitem" aria-label="There were 2 days between 1945 and 1950 humidity levels"><rect x="33" y="261.3333333333333" width="31.5" height="18.666666666666686" fill="#ff5960"></rect><text x="48.75" y="256.3333333333333" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">2</text></g><g tabindex="0" role="listitem" aria-label="There were 2 days between 1950 and 1955 humidity levels"><rect x="65.5" y="261.3333333333333" width="31.5" height="18.666666666666686" fill="#ff5960"></rect><text x="81.25" y="256.3333333333333" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">2</text></g><g tabindex="0" role="listitem" aria-label="There were 3 days between 1955 and 1960 humidity levels"><rect x="98" y="252" width="31.5" height="28" fill="#ff5960"></rect><text x="113.75" y="247" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">3</text></g><g tabindex="0" role="listitem" aria-label="There were 3 days between 1960 and 1965 humidity levels"><rect x="130.5" y="252" width="31.5" height="28" fill="#ff5960"></rect><text x="146.25" y="247" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">3</text></g><g tabindex="0" role="listitem" aria-label="There were 5 days between 1965 and 1970 humidity levels"><rect x="163" y="233.33333333333334" width="31.5" height="46.66666666666666" fill="#ff5960"></rect><text x="178.75" y="228.33333333333334" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">5</text></g><g tabindex="0" role="listitem" aria-label="There were 11 days between 1970 and 1975 humidity levels"><rect x="195.5" y="177.33333333333331" width="31.5" height="102.66666666666669" fill="#ff5960"></rect><text x="211.25" y="172.33333333333331" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">11</text></g><g tabindex="0" role="listitem" aria-label="There were 13 days between 1975 and 1980 humidity levels"><rect x="228" y="158.66666666666666" width="31.5" height="121.33333333333334" fill="#ff5960"></rect><text x="243.75" y="153.66666666666666" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">13</text></g><g tabindex="0" role="listitem" aria-label="There were 14 days between 1980 and 1985 humidity levels"><rect x="260.5" y="149.33333333333334" width="31.5" height="130.66666666666666" fill="#ff5960"></rect><text x="276.25" y="144.33333333333334" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">14</text></g><g tabindex="0" role="listitem" aria-label="There were 13 days between 1985 and 1990 humidity levels"><rect x="293" y="158.66666666666666" width="31.5" height="121.33333333333334" fill="#ff5960"></rect><text x="308.75" y="153.66666666666666" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">13</text></g><g tabindex="0" role="listitem" aria-label="There were 18 days between 1990 and 1995 humidity levels"><rect x="325.5" y="112" width="31.5" height="168" fill="#ff5960"></rect><text x="341.25" y="107" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">18</text></g><g tabindex="0" role="listitem" aria-label="There were 13 days between 1995 and 2000 humidity levels"><rect x="358" y="158.66666666666666" width="31.5" height="121.33333333333334" fill="#ff5960"></rect><text x="373.75" y="153.66666666666666" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">13</text></g><g tabindex="0" role="listitem" aria-label="There were 18 days between 2000 and 2005 humidity levels"><rect x="390.5" y="112" width="31.5" height="168" fill="#ff5960"></rect><text x="406.25" y="107" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">18</text></g><g tabindex="0" role="listitem" aria-label="There were 27 days between 2005 and 2010 humidity levels"><rect x="423" y="27.999999999999993" width="31.5" height="252" fill="#ff5960"></rect><text x="438.75" y="22.999999999999993" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">27</text></g><g tabindex="0" role="listitem" aria-label="There were 30 days between 2010 and 2015 humidity levels"><rect x="455.5" y="0" width="31.5" height="280" fill="#ff5960"></rect><text x="471.25" y="-5" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">30</text></g><g tabindex="0" role="listitem" aria-label="There were 29 days between 2015 and 2020 humidity levels"><rect x="488" y="9.333333333333332" width="31.5" height="270.6666666666667" fill="#ff5960"></rect><text x="503.75" y="4.333333333333332" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">29</text></g></g><g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" class="axis" style="transform: translateY(280px);"><path class="domain" stroke="currentColor" d="M0.5,6V0.5H520.5V6"></path><g class="tick" opacity="1" transform="translate(0.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,940</text></g><g class="tick" opacity="1" transform="translate(65.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,950</text></g><g class="tick" opacity="1" transform="translate(130.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,960</text></g><g class="tick" opacity="1" transform="translate(195.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,970</text></g><g class="tick" opacity="1" transform="translate(260.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,980</text></g><g class="tick" opacity="1" transform="translate(325.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,990</text></g><g class="tick" opacity="1" transform="translate(390.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,000</text></g><g class="tick" opacity="1" transform="translate(455.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,010</text></g><g class="tick" opacity="1" transform="translate(520.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,020</text></g><text x="260" y="40" fill="#f0eeeb" role="presentation" aria-hidden="true" style="font-size: 1.4em;">Years</text></g></g></svg>

</section>

<section class="post-body">

## Anomalies

While many of the cases have multiple locations, most are focused on a general area. The primary exception is [Murdered Joggers /// Karina Ventrano & Venessa Marcotte](https://truecrimegarage.com/home/blog/murdered-joggers-karina-ventrano-venessa-marcotte), which compares the murders of joggers in New York and Massachusetts. For this one, I mapped Karina Ventrano's location because her attack was first.

### Skipped Episodes

These were skipped, because they cover a range of cases or podcast-specific info.

- [John Douglas - The Mind Hunter ////// 302](https://truecrimegarage.com/home/blog/john-douglas-the-mind-hunter-302)
- [Must See True Crime ////// 197](https://truecrimegarage.com/home/blog/must-see-true-crime-197)
- [Most Wanted /// 130 /// 131](https://truecrimegarage.com/home/blog/most-wanted-130-131-2ec8209d-b3aa-4807-80f2-84833428b213)
- [Q&A ////// 109](https://truecrimegarage.com/home/blog/q-a-109)
- [Happy 100th Episode!!!](https://truecrimegarage.com/home/blog/happy-100th-episode)
- [Killing Season ////// 61](https://truecrimegarage.com/home/blog/killing-season-61)
- [Halloween Show ////// 59](https://truecrimegarage.com/home/blog/halloween-show-59)
- [TRUE CRIME GARAGE Q&A ////// 15](https://truecrimegarage.com/home/blog/true-crime-garage-q-a-15)
- [NYE 2015 /// TOP 5 ////// 08 ](https://truecrimegarage.com/home/blog/nye-2015-top-5-08)

</section>

<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<script src="/js/tinkerings/true-crime-garage-map/main.js"></script>
