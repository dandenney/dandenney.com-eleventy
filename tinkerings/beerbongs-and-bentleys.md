---
title: "Disruptive Album: beerbongs and bentleys"
date: 2020-02-17
summary: A celebration of the impact of the album on the Spotify charts
layout: layouts/tinkering.njk
tags:
  - tinkerings
---

<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7537438/7468212/css/fonts.css" />

<style>
  :root {
    --yellow: #dfc309;
    --black: #1f2019;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--black);
    margin: 0;
  }

  .home-link {
    color: var(--black);
    transition: 0.3s opacity;
  }

  .home-link:active,
  .home-link:focus,
  .home-link:hover {
    opacity: 0.5;
  }

  main {
    background-color: var(--yellow);
    border: 1rem solid #ffffff;
    color: var(--black);
    font-family: "Ringside Condensed A", "Ringside Condensed B";
    font-size: 18px;
    margin: 0 auto;
    max-width: 1440px;
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  text {
    font-family: "Ringside Condensed A", "Ringside Condensed B";
  }

  svg {
    height: auto;
    width: 100%;
  }

  section {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .box {
    background-color: var(--black);
    color: #ffffff;
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  header p {
    margin: 0;
  }

  .subhead {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .fw-ultra {
    font-weight: font-weight: 900;
  }

  .u-ai-c {
    align-items: center;
  }

  .u-fx {
    display: flex;
  }

  .u-fd-c {
    flex-direction: column;
  }

  .u-fs-3 {
    font-size: 3rem;
  }

  .u-fw-b {
    font-weight: 900;
  }

  .u-jc-c {
    justify-content: center;
  }
  
  .u-jc-fe {
    justify-content: flex-end;
  }

  .u-p-r {
    position: relative;
  }

  .u-ta-c {
    text-align: center;
  }

  .u-tt-u {
    text-transform: uppercase;
  }

  .streams {
    display: inline-block;
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
  }

  .streams-label {
    font-size: 1rem;
  }

  .bands {
    font-size: 1.5rem;
  }

  .bands p,
  blockquote,
  .bands small {
    transform: rotate(-11deg);
  }

  .bands p {
    margin-top: -2rem;
  }

  blockquote {
    color: rgba(255, 255, 255, 0.75);
    font-size: 2rem;
  }

  .bands small {
    display: block;
    font-size: 1rem;
    margin-top: -1.5rem;
  }

  .viz-streams .tick text {
    font-size: 1.5rem;
    font-weight: 900;
  } 

  .viz-streams .domain {
    display: none;
  }

  .streams-text {
    fill: #ffffff;
    font-size: 5rem;
    font-weight: 900;
  }

  .streams-title,
  .counts-title {
    margin: 0 auto;
    max-width: 1100px;
    padding: 0 2rem 2rem;
  }

  .streams-post {
    display: none;
  }

  .blockquote-bougie {
    margin: 5rem 0 0 0;
    transform: rotate(2deg);
    text-align: center;
  }

  .counts-description {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    margin: 0 0 4rem 0;
  }

  .counts-days {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    margin: 0 0.5rem;
    text-transform: uppercase;
  }

  .counts-days span {
    font-size: 5rem;
  }

  .divider {
    display: block;
    margin: 4rem auto;
  }

  .barText {
    font-weight: 900;
  }

  .track-ranks .domain,
  .track-ranks .tick line {
    display: none;
  }

  .track-ranks .tick text {
    font-size: 1.25rem;
  }

  .counts-table {
    width: 100%;
  }

  .counts-table td {
    font-weight: 900;
    text-align: center;
    padding: 0.5rem 0;
    width: 14%;
  }

  .counts-table span {
    background: var(--black);
    color: #ffffff;
    display: block;
    height: 1.5rem;
    margin: 0 auto;
    width: 1.5rem;
  }

  .count-13,
  .count-12,
  .count-11,
  .count-10 {
    font-size: 2.5rem;
  }

  .count-9,
  .count-7,
  .count-6,
  .count-5,
  .count-4 {
    font-size: 2rem;
  }

  .count-3,
  .count-2 {
    font-size: 1.5rem;
  }

  .count-1 {
    font-size: 1.25rem;
  }

  .listening-rect {
    fill: transparent;
  }

  .viz-line {
    fill: none;
    stroke: #ffffff;
    stroke-width: 3;
  }

  .wrapper {
    position: relative;
  }

  .wrapper text {
    font-size: 1rem;
    font-weight: 900;
  }

  .tooltip {
    opacity: 0;
    position: absolute;
    top: -14px;
    left: 0;
    padding: 0.6em 1em;
    background: var(--black);
    color: #ffffff;
    text-align: center;
    line-height: 1.4em;
    font-size: 0.9em;
    z-index: 10;
    transition: all 0.1s ease-out;
    pointer-events: none;
  }

  .tooltip:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    background: var(--black);
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-50%, 50%) rotate(45deg);
    transform-origin: center center;
    z-index: 10;
  }

  .tooltip-date {
    font-size: 1.25rem;
  }

  .tooltip-rank {
    font-size:1.75rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  .tracks-title {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }

  .tracks-description {
    font-size: 2rem;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  .track-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .track-meta {
    background: var(--black);
    color: #ffffff;
    display: inline-block;
    margin-top: 0;
    padding: 0.5rem;
  }

  .blockquote-final {
    transform: rotate(-2deg);
  }

  @media screen and (min-width: 600px) {
    .streams {
      font-size: 6rem;
    }

    .streams-label {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 768px) {
    .streams {
      font-size: 10rem;
    }

    .streams-wrapper {
      position: relative;
    }

    .streams-label {
      font-size: 1rem;
      position: absolute;
      left: 0;
      top: -16px;
    }

    .streams-title,
    .counts-title {
      font-size: 2.5rem;
    }

    blockquote {
      font-size: 3rem;
    }

    .counts-table td {
      text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75);
    }

    .divider {
      margin: 8rem auto;
    }

    .count-13,
    .count-12,
    .count-11,
    .count-10 {
      font-size: 5rem;
    }

    .count-9,
    .count-7,
    .count-6,
    .count-5,
    .count-4 {
      font-size: 4rem;
    }

    .count-3,
    .count-2 {
      font-size: 3rem;
    }

    .count-1 {
      font-size: 1.25rem;
    }

    .track-title {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 1000px) {
    .streams {
      font-size: 12rem;
    }

    .bands-info {
      display: flex;
      justify-content: center;
      transform: translateY(60px);
    }

    .bands-info p {
      text-align: left;
      width: 300px;
    }

    .counts-table td {
      text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.75);
    }

    .counts-description {
      margin-left: auto;
      margin-right: auto;
      max-width: 400px;
    }

    .counts-days span {
      font-size: 10rem;
    }

    .count-13,
    .count-12,
    .count-11,
    .count-10 {
      font-size: 7rem;
    }

    .count-9,
    .count-7,
    .count-6,
    .count-5,
    .count-4 {
      font-size: 5rem;
      text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75);
    }

    .count-3,
    .count-2 {
      font-size: 4rem;
    }

    .count-1 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .streams {
      font-size: 16rem;
    }

    .streams-label {
      top: 0;
    }

    .streams-title,
    .counts-title {
      font-size: 5rem;
    }

    .streams-post {
      bottom: 40px;
      display: block;
      left: calc(50% - 180px);
      position: absolute;
      width: 360px;
    }

    blockquote {
      font-size: 4rem;
    }

    .count-13,
    .count-12,
    .count-11,
    .count-10 {
      font-size: 9rem;
    }

    .count-9,
    .count-7,
    .count-6,
    .count-5,
    .count-4 {
      font-size: 7rem;
    }

    .count-3,
    .count-2 {
      font-size: 5rem;
    }

    .count-1 {
      font-size: 2rem;
    }

    .viz-grid {
      display: flex;
      flex-wrap: wrap;
    }

    .viz-grid > div {
      width: 50%;
    }

    .viz-grid > div:nth-child(odd) {
      padding-right: 1rem;
    }

    .viz-grid > div:nth-child(even) {
      padding-left: 1rem;
    }

    .track-title {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
  }
</style>

<div class="u-fx u-jc-fe">
  <header class="box">
    <h1>beerbongs and bentleys</h1>
    <p class="subhead">Post Malone</p>
    <p>The album dropped on April 24, 2018 and disrupted the Spotify charts</p>
  </header>
</div>

<section>

<div class="u-ta-c">
  <span class="streams u-p-r">
    <p class="box streams-label u-tt-u">total streams, on release day</p>
    77,452,211
  </span>
  <div class="bands">
    <div class="bands-info">
      <img alt="photo of $1000 in 20s, aka a band" src="/img/tinkerings/beerbongs-and-bentleys/band-bw.png" width="400">
      <p>At Spotify's current rate, that's around <span class="u-fs-3 u-fw-b">246</span> bands</p>
    </div>
    <blockquote class="u-fw-b">
      "I know you only like me 'cause I just spent a hundred bands in one night"
    </blockquote>
    <small>A "band" is $1,000, just in case ;) </small>
  </div>
</div>

</section>

<img alt="Illustration of barbed wire" class="divider" src="/img/tinkerings/beerbongs-and-bentleys/barbed-wire.svg">

<h2 class="streams-title">Compared to surrounding weeks, the total streams of the Spotify Top 20 of the release week was millions higher.</h2>

<section class="u-fx u-jc-c u-p-r">
  <img alt="photo of Post Malone" class="streams-post" src="/img/tinkerings/beerbongs-and-bentleys/post-face.png" />
  <svg class="viz-streams" width="1296" height="500" viewBox="0 0 1296 500"><g style="transform: translate(20px, 0px);"><g><rect x="59.225806451612925" y="63.62624319999999" height="396.3737568" width="353.03225806451616"></rect><rect x="451.48387096774195" y="38.20052520000001" height="421.7994748" width="353.03225806451616"></rect><rect x="843.741935483871" y="151.120028" height="308.879972" width="353.03225806451616"></rect></g><g><text x="235.741935483871" y="143.62624319999998" fill="darkgrey" class="streams-text" style="text-anchor: middle;">86.1M</text><text x="628" y="118.20052520000002" fill="darkgrey" class="streams-text" style="text-anchor: middle;">91.6M</text><text x="1020.258064516129" y="231.120028" fill="darkgrey" class="streams-text" style="text-anchor: middle;">67.1M</text></g><g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="transform: translateY(460px);"><path class="domain" stroke="currentColor" d="M20.5,0.5H1236.5"></path><g class="tick" opacity="1" transform="translate(235.741935483871,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">April 20, 2018</text></g><g class="tick" opacity="1" transform="translate(628,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">April 27, 2018</text></g><g class="tick" opacity="1" transform="translate(1020.258064516129,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">May 4, 2018</text></g></g></g></svg>
</section>

<blockquote class="u-fw-b blockquote-bougie">"You're bougie, baby, but I love you, baby"</blockquote>

<img alt="Illustration of barbed wire" class="divider" src="/img/tinkerings/beerbongs-and-bentleys/barbed-wire.svg">

<h2 class="streams-title">All 18 tracks were in the top 30 songs played globally</h2>

<section>
<svg class="track-ranks" width="923.4" height="660" viewBox="0 0 923 660"><g style="transform: translate(300px, 0px);"><g><rect y="3.646408839779042" x="0" width="603.2903225806451" height="32.81767955801105"></rect><rect y="40.1104972375691" x="0" width="563.0709677419354" height="32.81767955801105"></rect><rect y="76.57458563535916" x="0" width="522.8516129032258" height="32.81767955801105"></rect><rect y="113.03867403314922" x="0" width="442.4129032258065" height="32.81767955801105"></rect><rect y="149.50276243093927" x="0" width="382.0838709677419" height="32.81767955801105"></rect><rect y="185.96685082872932" x="0" width="502.7419354838709" height="32.81767955801105"></rect><rect y="222.4309392265194" x="0" width="422.3032258064516" height="32.81767955801105"></rect><rect y="258.8950276243095" x="0" width="623.4" height="32.81767955801105"></rect><rect y="295.3591160220995" x="0" width="583.1806451612904" height="32.81767955801105"></rect><rect y="331.8232044198896" x="0" width="402.19354838709677" height="32.81767955801105"></rect><rect y="368.2872928176796" x="0" width="261.42580645161286" height="32.81767955801105"></rect><rect y="404.7513812154697" x="0" width="341.8645161290322" height="32.81767955801105"></rect><rect y="441.21546961325976" x="0" width="201.0967741935484" height="32.81767955801105"></rect><rect y="477.6795580110498" x="0" width="321.7548387096774" height="32.81767955801105"></rect><rect y="514.1436464088399" x="0" width="40.21935483870971" height="32.81767955801105"></rect><rect y="550.6077348066299" x="0" width="221.20645161290324" height="32.81767955801105"></rect><rect y="587.07182320442" x="0" width="160.8774193548387" height="32.81767955801105"></rect><rect y="623.53591160221" x="0" width="100.54838709677416" height="32.81767955801105"></rect></g><g fill="none" font-size="10" font-family="sans-serif" text-anchor="end" class="yAxis"><path class="domain" stroke="currentColor" d="M0.5,0.5V660.5"></path><g class="tick" opacity="1" transform="translate(0,20.055248618784567)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Paranoid</text></g><g class="tick" opacity="1" transform="translate(0,56.519337016574624)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Spoil My Night (feat. Swae Lee)</text></g><g class="tick" opacity="1" transform="translate(0,92.98342541436469)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Rich &amp; Sad</text></g><g class="tick" opacity="1" transform="translate(0,129.44751381215474)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Zack And Codeine</text></g><g class="tick" opacity="1" transform="translate(0,165.9116022099448)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Takin' Shots</text></g><g class="tick" opacity="1" transform="translate(0,202.37569060773484)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">rockstar (feat. 21 Savage)</text></g><g class="tick" opacity="1" transform="translate(0,238.83977900552492)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Over Now</text></g><g class="tick" opacity="1" transform="translate(0,275.303867403315)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Psycho (feat. Ty Dolla \$ign)</text></g><g class="tick" opacity="1" transform="translate(0,311.767955801105)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Better Now</text></g><g class="tick" opacity="1" transform="translate(0,348.2320441988951)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Ball For Me (feat. Nicki Minaj)</text></g><g class="tick" opacity="1" transform="translate(0,384.6961325966851)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Otherside</text></g><g class="tick" opacity="1" transform="translate(0,421.1602209944752)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Stay</text></g><g class="tick" opacity="1" transform="translate(0,457.6243093922653)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Blame It On Me</text></g><g class="tick" opacity="1" transform="translate(0,494.0883977900553)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Same Bitches (feat. G-Eazy &amp; YG)</text></g><g class="tick" opacity="1" transform="translate(0,530.5524861878455)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Jonestown (Interlude)</text></g><g class="tick" opacity="1" transform="translate(0,567.0165745856355)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">92 Explorer</text></g><g class="tick" opacity="1" transform="translate(0,603.4806629834255)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Candy Paint</text></g><g class="tick" opacity="1" transform="translate(0,639.9447513812156)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">Sugar Wraith</text></g></g><g fill="white" text-anchor="end"><text x="599.2903225806451" y="20.055248618784567" dy="0.35em" class="barText">2</text><text x="559.0709677419354" y="56.519337016574624" dy="0.35em" class="barText">4</text><text x="518.8516129032258" y="92.98342541436469" dy="0.35em" class="barText">6</text><text x="438.4129032258065" y="129.44751381215474" dy="0.35em" class="barText">10</text><text x="378.0838709677419" y="165.9116022099448" dy="0.35em" class="barText">13</text><text x="498.7419354838709" y="202.37569060773484" dy="0.35em" class="barText">7</text><text x="418.3032258064516" y="238.83977900552492" dy="0.35em" class="barText">11</text><text x="619.4" y="275.303867403315" dy="0.35em" class="barText">1</text><text x="579.1806451612904" y="311.767955801105" dy="0.35em" class="barText">3</text><text x="398.19354838709677" y="348.2320441988951" dy="0.35em" class="barText">12</text><text x="257.42580645161286" y="384.6961325966851" dy="0.35em" class="barText">19</text><text x="337.8645161290322" y="421.1602209944752" dy="0.35em" class="barText">15</text><text x="197.0967741935484" y="457.6243093922653" dy="0.35em" class="barText">22</text><text x="317.7548387096774" y="494.0883977900553" dy="0.35em" class="barText">16</text><text x="36.21935483870971" y="530.5524861878455" dy="0.35em" class="barText">30</text><text x="217.20645161290324" y="567.0165745856355" dy="0.35em" class="barText">21</text><text x="156.8774193548387" y="603.4806629834255" dy="0.35em" class="barText">24</text><text x="96.54838709677416" y="639.9447513812156" dy="0.35em" class="barText">27</text></g></g></svg>
</section>

<blockquote class="u-fw-b u-ta-c">"Got no jumper but I ball a lot"</blockquote>

<img alt="Illustration of barbed wire" class="divider" src="/img/tinkerings/beerbongs-and-bentleys/barbed-wire.svg">

<h2 class="counts-title">For 6 days, the tracks were half or more of the Top 20</h2>
<p class="counts-description">It took <span class="counts-days"><span>54</span> days</span> for it to get back down to 1 track</p>

<table class="counts-table">
  <thead>
    <th><span>S</span></th>
    <th><span>M</span></th>
    <th><span>T</span></th>
    <th><span>W</span></th>
    <th><span>T</span></th>
    <th><span>F</span></th>
    <th><span>S</span></th>
  </thead>
  <tbody>
  <tr>
  <td>---</td>
  <td>---</td>
  <td>---</td>
  <td>---></td>
  <td class="count-1">1</td>
  <td class="count-13">13</td>
  <td class="count-12">12</td>
  </tr>
  <tr>
  <td class="count-12">12</td>
  <td class="count-12">12</td>
  <td class="count-12">12</td>
  <td class="count-10">10</td>
  <td class="count-9">9</td>
  <td class="count-7">7</td>
  <td class="count-6">6</td>
  </tr>
  <tr>
  <td class="count-5">5</td>
  <td class="count-5">5</td>
  <td class="count-5">5</td>
  <td class="count-5">5</td>
  <td class="count-5">5</td>
  <td class="count-4">4</td>
  <td class="count-4">4</td>
  </tr>
  <tr>
  <td class="count-4">4</td>
  <td class="count-4">4</td>
  <td class="count-4">4</td>
  <td class="count-4">4</td>
  <td class="count-4">4</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  </tr>
  <tr>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  </tr>
  <tr>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-3">3</td>
  <td class="count-2">2</td>
  </tr>
  <tr>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-3">3</td>
  </tr>
  <tr>
  <td class="count-3">3</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  </tr>
  <tr>
  <td class="count-2">2</td>
  <td class="count-2">2</td>
  <td class="count-1">1</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  </tbody>
</table>

<blockquote class="u-fw-b blockquote-bougie">"I'm here, but don't count on me to stay"</blockquote>

<img alt="Illustration of barbed wire" class="divider" src="/img/tinkerings/beerbongs-and-bentleys/barbed-wire.svg">

<h2 class="streams-title tracks-title">Better Now was the runaway hit</h2>
<p class="tracks-description">Most tracks had a short run in the top 20 but 3 went for weeks.</p>

<div class="viz-grid">

  <div class="u-ta-c">
    <h3 class="track-title">Paranoid</h3>
    <p class="track-meta">Peak: No. 2</p>
    <div id="paranoid" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Spoil My Night (feat. Swae Lee)</h3>
    <p class="track-meta">Peak: No. 4</p>
    <div id="spoil-my-night" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Rich &amp; Sad</h3>
    <p class="track-meta">Peak: No. 6</p>
    <div id="rich-and-sad" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Zack And Codeine</h3>
    <p class="track-meta">Peak: No. 10</p>
    <div id="zack-and-codeine" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Takin' Shots</h3>
    <p class="track-meta">Peak: No. 13</p>
    <div id="takin-shots" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">rockstar (feat. 21 Savage)</h3>
    <p class="track-meta">Peak: No. 6</p>
    <div id="rockstar" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Over Now</h3>
    <p class="track-meta">Peak: No. 11</p>
    <div id="over-now" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Psycho (feat. Ty Dolla $ign)</h3>
    <p class="track-meta">Peak: No. 1</p>
    <div id="psycho" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Better Now</h3>
    <p class="track-meta">Peak: No. 1</p>
    <div id="better-now" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Ball For Me (feat. Nicki Minaj)</h3>
    <p class="track-meta">Peak: No. 12</p>
    <div id="ball-for-me" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Otherside</h3>
    <p class="track-meta">Peak: No. 19</p>
    <div id="otherside" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Stay</h3>
    <p class="track-meta">Peak: No. 11</p>
    <div id="stay" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-ta-c">
    <h3 class="track-title">Same Bitches (feat. G-Eazy & YG)</h3>
    <p class="track-meta">Peak: No. 16</p>
    <div id="same-bitches" class="wrapper">
      <div id="tooltip" class="tooltip">
        <div class="tooltip-rank">
          Number: <span id="rank"></span>
        </div>
        <div class="tooltip-date">
          <span id="date"></span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="track-title">The 5 tracks that didn't hit the top 20 were:</h3>
    <h4>Blame It On Me</h4>
    <h4>Jonestown (Interlude)</h4>
    <h4>92 Explorer</h4>
    <h4>Candy Paint <span>(definitely should have been there - Dan)</span></h4>
    <h4>Sugar Wraith</h4>
  </div>

</div>

<blockquote class="u-fw-b blockquote-final u-ta-c">"Man, I feel just like a rockstar (star)"</blockquote>

<p class="u-ta-c"><a class="home-link" href="/">Back to Home</a></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js"></script>

<script>
const paranoid = {
  title: "Paranoid",
  rankings: [
    {
      "date": "2018-04-26",
      "position": 30
    },
    {
      "date": "2018-04-27",
      "position": 2
    },
    {
      "date": "2018-04-28",
      "position": 4
    },
    {
      "date": "2018-04-29",
      "position": 5
    },
    {
      "date": "2018-04-30",
      "position": 4
    },
    {
      "date": "2018-05-01",
      "position": 4
    },
    {
      "date": "2018-05-02",
      "position": 7
    },
    {
      "date": "2018-05-03",
      "position": 7
    },
    {
      "date": "2018-05-04",
      "position": 7
    },
    {
      "date": "2018-05-05",
      "position": 11
    },
    {
      "date": "2018-05-06",
      "position": 11
    },
    {
      "date": "2018-05-07",
      "position": 12
    },
    {
      "date": "2018-05-08",
      "position": 12
    },
    {
      "date": "2018-05-09",
      "position": 13
    },
    {
      "date": "2018-05-10",
      "position": 13
    },
    {
      "date": "2018-05-11",
      "position": 14
    },
    {
      "date": "2018-05-12",
      "position": 15
    },
    {
      "date": "2018-05-13",
      "position": 16
    },
    {
      "date": "2018-05-14",
      "position": 15
    },
    {
      "date": "2018-05-15",
      "position": 16
    },
    {
      "date": "2018-05-16",
      "position": 19
    },
    {
      "date": "2018-05-17",
      "position": 20
    },
    {
      "date": "2018-05-18",
      "position": 30
    },
    {
      "date": "2018-05-19",
      "position": 30
    },
    {
      "date": "2018-05-20",
      "position": 30
    },
    {
      "date": "2018-05-21",
      "position": 30
    },
    {
      "date": "2018-05-22",
      "position": 30
    },
    {
      "date": "2018-05-23",
      "position": 30
    },
    {
      "date": "2018-05-24",
      "position": 30
    },
    {
      "date": "2018-05-25",
      "position": 30
    },
    {
      "date": "2018-05-26",
      "position": 30
    },
    {
      "date": "2018-05-27",
      "position": 30
    },
    {
      "date": "2018-05-28",
      "position": 30
    },
    {
      "date": "2018-05-29",
      "position": 30
    },
    {
      "date": "2018-05-30",
      "position": 30
    },
    {
      "date": "2018-05-31",
      "position": 30
    },
    {
      "date": "2018-06-01",
      "position": 30
    },
    {
      "date": "2018-06-02",
      "position": 30
    },
    {
      "date": "2018-06-03",
      "position": 30
    },
    {
      "date": "2018-06-04",
      "position": 30
    },
    {
      "date": "2018-06-05",
      "position": 30
    },
    {
      "date": "2018-06-06",
      "position": 30
    },
    {
      "date": "2018-06-07",
      "position": 30
    },
    {
      "date": "2018-06-08",
      "position": 30
    },
    {
      "date": "2018-06-09",
      "position": 30
    },
    {
      "date": "2018-06-10",
      "position": 30
    },
    {
      "date": "2018-06-11",
      "position": 30
    },
    {
      "date": "2018-06-12",
      "position": 30
    },
    {
      "date": "2018-06-13",
      "position": 30
    },
    {
      "date": "2018-06-14",
      "position": 30
    },
    {
      "date": "2018-06-15",
      "position": 30
    },
    {
      "date": "2018-06-16",
      "position": 30
    },
    {
      "date": "2018-06-17",
      "position": 30
    },
    {
      "date": "2018-06-18",
      "position": 30
    },
    {
      "date": "2018-06-19",
      "position": 30
    }
  ]
}

const spoilMyNight = {
  title: "Spoil My Night",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 4
  },
  {
    "date": "2018-04-28",
    "position": 9
  },
  {
    "date": "2018-04-29",
    "position": 9
  },
  {
    "date": "2018-04-30",
    "position": 9
  },
  {
    "date": "2018-05-01",
    "position": 9
  },
  {
    "date": "2018-05-02",
    "position": 10
  },
  {
    "date": "2018-05-03",
    "position": 11
  },
  {
    "date": "2018-05-04",
    "position": 15
  },
  {
    "date": "2018-05-05",
    "position": 20
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
  ]
}

const richAndSad = {
  title: "Rich & Sad",
  rankings:[
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 6
  },
  {
    "date": "2018-04-28",
    "position": 11
  },
  {
    "date": "2018-04-29",
    "position": 10
  },
  {
    "date": "2018-04-30",
    "position": 10
  },
  {
    "date": "2018-05-01",
    "position": 10
  },
  {
    "date": "2018-05-02",
    "position": 12
  },
  {
    "date": "2018-05-03",
    "position": 14
  },
  {
    "date": "2018-05-04",
    "position": 19
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const zackAndCodeine = {
  title: "Zack And Codeine",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 10
  },
  {
    "date": "2018-04-28",
    "position": 14
  },
  {
    "date": "2018-04-29",
    "position": 15
  },
  {
    "date": "2018-04-30",
    "position": 16
  },
  {
    "date": "2018-05-01",
    "position": 17
  },
  {
    "date": "2018-05-02",
    "position": 20
  },
  {
    "date": "2018-05-03",
    "position": 30
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]}

const takinShots = {
  title: "Takin' Shots",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 13
  },
  {
    "date": "2018-04-28",
    "position": 19
  },
  {
    "date": "2018-04-29",
    "position": 20
  },
  {
    "date": "2018-04-30",
    "position": 19
  },
  {
    "date": "2018-05-01",
    "position": 20
  },
  {
    "date": "2018-05-02",
    "position": 30
  },
  {
    "date": "2018-05-03",
    "position": 30
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]

}

const rockstar = {
  title: "rockstar (feat. 21 Savage)",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 7
  },
  {
    "date": "2018-04-28",
    "position": 8
  },
  {
    "date": "2018-04-29",
    "position": 7
  },
  {
    "date": "2018-04-30",
    "position": 8
  },
  {
    "date": "2018-05-01",
    "position": 8
  },
  {
    "date": "2018-05-02",
    "position": 8
  },
  {
    "date": "2018-05-03",
    "position": 8
  },
  {
    "date": "2018-05-04",
    "position": 8
  },
  {
    "date": "2018-05-05",
    "position": 9
  },
  {
    "date": "2018-05-06",
    "position": 9
  },
  {
    "date": "2018-05-07",
    "position": 10
  },
  {
    "date": "2018-05-08",
    "position": 11
  },
  {
    "date": "2018-05-09",
    "position": 11
  },
  {
    "date": "2018-05-10",
    "position": 11
  },
  {
    "date": "2018-05-11",
    "position": 11
  },
  {
    "date": "2018-05-12",
    "position": 12
  },
  {
    "date": "2018-05-13",
    "position": 12
  },
  {
    "date": "2018-05-14",
    "position": 11
  },
  {
    "date": "2018-05-15",
    "position": 12
  },
  {
    "date": "2018-05-16",
    "position": 12
  },
  {
    "date": "2018-05-17",
    "position": 12
  },
  {
    "date": "2018-05-18",
    "position": 13
  },
  {
    "date": "2018-05-19",
    "position": 12
  },
  {
    "date": "2018-05-20",
    "position": 12
  },
  {
    "date": "2018-05-21",
    "position": 13
  },
  {
    "date": "2018-05-22",
    "position": 16
  },
  {
    "date": "2018-05-23",
    "position": 16
  },
  {
    "date": "2018-05-24",
    "position": 16
  },
  {
    "date": "2018-05-25",
    "position": 17
  },
  {
    "date": "2018-05-26",
    "position": 15
  },
  {
    "date": "2018-05-27",
    "position": 15
  },
  {
    "date": "2018-05-28",
    "position": 16
  },
  {
    "date": "2018-05-29",
    "position": 18
  },
  {
    "date": "2018-05-30",
    "position": 19
  },
  {
    "date": "2018-05-31",
    "position": 17
  },
  {
    "date": "2018-06-01",
    "position": 17
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 20
  },
  {
    "date": "2018-06-10",
    "position": 19
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const overNow = {
  title: "Over Now",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 11
  },
  {
    "date": "2018-04-28",
    "position": 15
  },
  {
    "date": "2018-04-29",
    "position": 14
  },
  {
    "date": "2018-04-30",
    "position": 13
  },
  {
    "date": "2018-05-01",
    "position": 14
  },
  {
    "date": "2018-05-02",
    "position": 15
  },
  {
    "date": "2018-05-03",
    "position": 19
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const psycho = {
  title: "Psycho (feat. Ty Dolla $ign)",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 5
  },
  {
    "date": "2018-04-27",
    "position": 1
  },
  {
    "date": "2018-04-28",
    "position": 1
  },
  {
    "date": "2018-04-29",
    "position": 1
  },
  {
    "date": "2018-04-30",
    "position": 2
  },
  {
    "date": "2018-05-01",
    "position": 2
  },
  {
    "date": "2018-05-02",
    "position": 2
  },
  {
    "date": "2018-05-03",
    "position": 2
  },
  {
    "date": "2018-05-04",
    "position": 3
  },
  {
    "date": "2018-05-05",
    "position": 5
  },
  {
    "date": "2018-05-06",
    "position": 6
  },
  {
    "date": "2018-05-07",
    "position": 5
  },
  {
    "date": "2018-05-08",
    "position": 6
  },
  {
    "date": "2018-05-09",
    "position": 7
  },
  {
    "date": "2018-05-10",
    "position": 7
  },
  {
    "date": "2018-05-11",
    "position": 6
  },
  {
    "date": "2018-05-12",
    "position": 7
  },
  {
    "date": "2018-05-13",
    "position": 7
  },
  {
    "date": "2018-05-14",
    "position": 7
  },
  {
    "date": "2018-05-15",
    "position": 7
  },
  {
    "date": "2018-05-16",
    "position": 7
  },
  {
    "date": "2018-05-17",
    "position": 7
  },
  {
    "date": "2018-05-18",
    "position": 7
  },
  {
    "date": "2018-05-19",
    "position": 8
  },
  {
    "date": "2018-05-20",
    "position": 7
  },
  {
    "date": "2018-05-21",
    "position": 7
  },
  {
    "date": "2018-05-22",
    "position": 7
  },
  {
    "date": "2018-05-23",
    "position": 7
  },
  {
    "date": "2018-05-24",
    "position": 7
  },
  {
    "date": "2018-05-25",
    "position": 9
  },
  {
    "date": "2018-05-26",
    "position": 11
  },
  {
    "date": "2018-05-27",
    "position": 10
  },
  {
    "date": "2018-05-28",
    "position": 11
  },
  {
    "date": "2018-05-29",
    "position": 10
  },
  {
    "date": "2018-05-30",
    "position": 10
  },
  {
    "date": "2018-05-31",
    "position": 10
  },
  {
    "date": "2018-06-01",
    "position": 11
  },
  {
    "date": "2018-06-02",
    "position": 18
  },
  {
    "date": "2018-06-03",
    "position": 14
  },
  {
    "date": "2018-06-04",
    "position": 14
  },
  {
    "date": "2018-06-05",
    "position": 14
  },
  {
    "date": "2018-06-06",
    "position": 17
  },
  {
    "date": "2018-06-07",
    "position": 16
  },
  {
    "date": "2018-06-08",
    "position": 15
  },
  {
    "date": "2018-06-09",
    "position": 15
  },
  {
    "date": "2018-06-10",
    "position": 15
  },
  {
    "date": "2018-06-11",
    "position": 15
  },
  {
    "date": "2018-06-12",
    "position": 15
  },
  {
    "date": "2018-06-13",
    "position": 15
  },
  {
    "date": "2018-06-14",
    "position": 15
  },
  {
    "date": "2018-06-15",
    "position": 15
  },
  {
    "date": "2018-06-16",
    "position": 16
  },
  {
    "date": "2018-06-17",
    "position": 16
  },
  {
    "date": "2018-06-18",
    "position": 18
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]

}

const betterNow = {
  title: "Better Now",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 3
  },
  {
    "date": "2018-04-28",
    "position": 2
  },
  {
    "date": "2018-04-29",
    "position": 2
  },
  {
    "date": "2018-04-30",
    "position": 1
  },
  {
    "date": "2018-05-01",
    "position": 1
  },
  {
    "date": "2018-05-02",
    "position": 1
  },
  {
    "date": "2018-05-03",
    "position": 1
  },
  {
    "date": "2018-05-04",
    "position": 1
  },
  {
    "date": "2018-05-05",
    "position": 1
  },
  {
    "date": "2018-05-06",
    "position": 1
  },
  {
    "date": "2018-05-07",
    "position": 1
  },
  {
    "date": "2018-05-08",
    "position": 1
  },
  {
    "date": "2018-05-09",
    "position": 2
  },
  {
    "date": "2018-05-10",
    "position": 2
  },
  {
    "date": "2018-05-11",
    "position": 2
  },
  {
    "date": "2018-05-12",
    "position": 2
  },
  {
    "date": "2018-05-13",
    "position": 2
  },
  {
    "date": "2018-05-14",
    "position": 2
  },
  {
    "date": "2018-05-15",
    "position": 2
  },
  {
    "date": "2018-05-16",
    "position": 2
  },
  {
    "date": "2018-05-17",
    "position": 2
  },
  {
    "date": "2018-05-18",
    "position": 1
  },
  {
    "date": "2018-05-19",
    "position": 1
  },
  {
    "date": "2018-05-20",
    "position": 1
  },
  {
    "date": "2018-05-21",
    "position": 1
  },
  {
    "date": "2018-05-22",
    "position": 1
  },
  {
    "date": "2018-05-23",
    "position": 1
  },
  {
    "date": "2018-05-24",
    "position": 1
  },
  {
    "date": "2018-05-25",
    "position": 1
  },
  {
    "date": "2018-05-26",
    "position": 2
  },
  {
    "date": "2018-05-27",
    "position": 2
  },
  {
    "date": "2018-05-28",
    "position": 2
  },
  {
    "date": "2018-05-29",
    "position": 1
  },
  {
    "date": "2018-05-30",
    "position": 1
  },
  {
    "date": "2018-05-31",
    "position": 1
  },
  {
    "date": "2018-06-01",
    "position": 1
  },
  {
    "date": "2018-06-02",
    "position": 3
  },
  {
    "date": "2018-06-03",
    "position": 1
  },
  {
    "date": "2018-06-04",
    "position": 1
  },
  {
    "date": "2018-06-05",
    "position": 1
  },
  {
    "date": "2018-06-06",
    "position": 1
  },
  {
    "date": "2018-06-07",
    "position": 1
  },
  {
    "date": "2018-06-08",
    "position": 1
  },
  {
    "date": "2018-06-09",
    "position": 1
  },
  {
    "date": "2018-06-10",
    "position": 1
  },
  {
    "date": "2018-06-11",
    "position": 1
  },
  {
    "date": "2018-06-12",
    "position": 1
  },
  {
    "date": "2018-06-13",
    "position": 1
  },
  {
    "date": "2018-06-14",
    "position": 1
  },
  {
    "date": "2018-06-15",
    "position": 1
  },
  {
    "date": "2018-06-16",
    "position": 1
  },
  {
    "date": "2018-06-17",
    "position": 1
  },
  {
    "date": "2018-06-18",
    "position": 1
  },
  {
    "date": "2018-06-19",
    "position": 8
  }
]
}

const ballForMe = {
  title: "Ball For Me (feat. Nicki Minaj)",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 12
  },
  {
    "date": "2018-04-28",
    "position": 16
  },
  {
    "date": "2018-04-29",
    "position": 17
  },
  {
    "date": "2018-04-30",
    "position": 15
  },
  {
    "date": "2018-05-01",
    "position": 15
  },
  {
    "date": "2018-05-02",
    "position": 16
  },
  {
    "date": "2018-05-03",
    "position": 17
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const otherside = {
  title: "Otherside",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 19
  },
  {
    "date": "2018-04-28",
    "position": 30
  },
  {
    "date": "2018-04-29",
    "position": 30
  },
  {
    "date": "2018-04-30",
    "position": 30
  },
  {
    "date": "2018-05-01",
    "position": 30
  },
  {
    "date": "2018-05-02",
    "position": 30
  },
  {
    "date": "2018-05-03",
    "position": 30
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const stay = {
  title: "Stay",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 15
  },
  {
    "date": "2018-04-28",
    "position": 13
  },
  {
    "date": "2018-04-29",
    "position": 13
  },
  {
    "date": "2018-04-30",
    "position": 11
  },
  {
    "date": "2018-05-01",
    "position": 11
  },
  {
    "date": "2018-05-02",
    "position": 11
  },
  {
    "date": "2018-05-03",
    "position": 12
  },
  {
    "date": "2018-05-04",
    "position": 14
  },
  {
    "date": "2018-05-05",
    "position": 17
  },
  {
    "date": "2018-05-06",
    "position": 18
  },
  {
    "date": "2018-05-07",
    "position": 17
  },
  {
    "date": "2018-05-08",
    "position": 18
  },
  {
    "date": "2018-05-09",
    "position": 18
  },
  {
    "date": "2018-05-10",
    "position": 19
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

const sameBitches = {
  title: "Same Bitches (feat. G-Eazy & YG)",
  rankings: [
  {
    "date": "2018-04-26",
    "position": 30
  },
  {
    "date": "2018-04-27",
    "position": 16
  },
  {
    "date": "2018-04-28",
    "position": 18
  },
  {
    "date": "2018-04-29",
    "position": 19
  },
  {
    "date": "2018-04-30",
    "position": 17
  },
  {
    "date": "2018-05-01",
    "position": 18
  },
  {
    "date": "2018-05-02",
    "position": 30
  },
  {
    "date": "2018-05-03",
    "position": 30
  },
  {
    "date": "2018-05-04",
    "position": 30
  },
  {
    "date": "2018-05-05",
    "position": 30
  },
  {
    "date": "2018-05-06",
    "position": 30
  },
  {
    "date": "2018-05-07",
    "position": 30
  },
  {
    "date": "2018-05-08",
    "position": 30
  },
  {
    "date": "2018-05-09",
    "position": 30
  },
  {
    "date": "2018-05-10",
    "position": 30
  },
  {
    "date": "2018-05-11",
    "position": 30
  },
  {
    "date": "2018-05-12",
    "position": 30
  },
  {
    "date": "2018-05-13",
    "position": 30
  },
  {
    "date": "2018-05-14",
    "position": 30
  },
  {
    "date": "2018-05-15",
    "position": 30
  },
  {
    "date": "2018-05-16",
    "position": 30
  },
  {
    "date": "2018-05-17",
    "position": 30
  },
  {
    "date": "2018-05-18",
    "position": 30
  },
  {
    "date": "2018-05-19",
    "position": 30
  },
  {
    "date": "2018-05-20",
    "position": 30
  },
  {
    "date": "2018-05-21",
    "position": 30
  },
  {
    "date": "2018-05-22",
    "position": 30
  },
  {
    "date": "2018-05-23",
    "position": 30
  },
  {
    "date": "2018-05-24",
    "position": 30
  },
  {
    "date": "2018-05-25",
    "position": 30
  },
  {
    "date": "2018-05-26",
    "position": 30
  },
  {
    "date": "2018-05-27",
    "position": 30
  },
  {
    "date": "2018-05-28",
    "position": 30
  },
  {
    "date": "2018-05-29",
    "position": 30
  },
  {
    "date": "2018-05-30",
    "position": 30
  },
  {
    "date": "2018-05-31",
    "position": 30
  },
  {
    "date": "2018-06-01",
    "position": 30
  },
  {
    "date": "2018-06-02",
    "position": 30
  },
  {
    "date": "2018-06-03",
    "position": 30
  },
  {
    "date": "2018-06-04",
    "position": 30
  },
  {
    "date": "2018-06-05",
    "position": 30
  },
  {
    "date": "2018-06-06",
    "position": 30
  },
  {
    "date": "2018-06-07",
    "position": 30
  },
  {
    "date": "2018-06-08",
    "position": 30
  },
  {
    "date": "2018-06-09",
    "position": 30
  },
  {
    "date": "2018-06-10",
    "position": 30
  },
  {
    "date": "2018-06-11",
    "position": 30
  },
  {
    "date": "2018-06-12",
    "position": 30
  },
  {
    "date": "2018-06-13",
    "position": 30
  },
  {
    "date": "2018-06-14",
    "position": 30
  },
  {
    "date": "2018-06-15",
    "position": 30
  },
  {
    "date": "2018-06-16",
    "position": 30
  },
  {
    "date": "2018-06-17",
    "position": 30
  },
  {
    "date": "2018-06-18",
    "position": 30
  },
  {
    "date": "2018-06-19",
    "position": 30
  }
]
}

async function drawLineChart(target, data) {

  // 1. Access data

  let dataset = data;
  
  const yAccessor = d => d.position
  const dateParser = d3.timeParse("%Y-%m-%d")
  const xAccessor = d => dateParser(d.date)
  dataset = dataset.sort((a,b) => xAccessor(a) - xAccessor(b)).slice(0, 100)

  // 2. Create chart dimensions

  let dimensions = {
    width: 700,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      bottom: 40,
      left: 30,
    },
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

  // 3. Draw canvas

  const wrapper = d3.select(`#${target}`)
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)

  const bounds = wrapper.append("g")
      .attr("transform", `translate(${
        dimensions.margin.left
      }, ${
        dimensions.margin.top
      })`)

  bounds.append("defs").append("clipPath")
      .attr("id", "bounds-clip-path")
    .append("rect")
      .attr("width", dimensions.boundedWidth)
      .attr("height", dimensions.boundedHeight)

  const clip = bounds.append("g")
    .attr("clip-path", "url(#bounds-clip-path)")

  // 4. Create scales

  const yScale = d3.scaleLinear()
    .domain([20, 1])
    .range([dimensions.boundedHeight, 0])

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

  // 5. Draw data

  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

  const line = clip.append("path")
      .attr("class", "viz-line")
      .attr("d", lineGenerator(dataset))

  // 6. Draw peripherals

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
      .attr("class", "y-axis")
    .call(yAxisGenerator)

  const yAxisLabel = yAxis.append("text")
      .attr("class", "y-axis-label")
      .attr("x", -dimensions.boundedHeight / 2)
      .attr("y", -dimensions.margin.left + 10)
      .html("Rank")

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
      .attr("class", "x-axis")
      .style("transform", `translateY(${dimensions.boundedHeight}px)`)
    .call(xAxisGenerator)

  // 7. Set up interactions

  const listeningRect = bounds.append("rect")
    .attr("class", "listening-rect")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight)
    .on("mousemove", onMouseMove)
    .on("mouseleave", onMouseLeave)

  const tooltip = d3.select(`#${target} #tooltip`)
  const tooltipCircle = bounds.append("circle")
      .attr("class", "tooltip-circle")
      .attr("r", 4)
      .attr("stroke", "#af9358")
      .attr("fill", "white")
      .attr("stroke-width", 2)
      .style("opacity", 0)

  function onMouseMove() {
    const mousePosition = d3.mouse(this)
    const hoveredDate = xScale.invert(mousePosition[0])

    const getDistanceFromHoveredDate = d => Math.abs(xAccessor(d) - hoveredDate)
    const closestIndex = d3.scan(dataset, (a, b) => (
      getDistanceFromHoveredDate(a) - getDistanceFromHoveredDate(b)
    ))
    const closestDataPoint = dataset[closestIndex]

    const closestXValue = xAccessor(closestDataPoint)
    const closestYValue = yAccessor(closestDataPoint)

    if (closestYValue <= 20) {

      const formatDate = d3.timeFormat("%B %A %-d, %Y")
      tooltip.select("#date")
          .text(formatDate(closestXValue))

      const formatTemperature = d => d
      tooltip.select("#rank")
          .text(formatTemperature(closestYValue))

      const x = xScale(closestXValue)
        + dimensions.margin.left
      const y = yScale(closestYValue)
        + dimensions.margin.top

      tooltip.style("transform", `translate(`
        + `calc( -50% + ${x}px),`
        + `calc(-100% + ${y}px)`
        + `)`)

      tooltip.style("opacity", 1)

      tooltipCircle
          .attr("cx", xScale(closestXValue))
          .attr("cy", yScale(closestYValue))
          .style("opacity", 1)

    }
  }

  function onMouseLeave() {
    tooltip.style("opacity", 0)

    tooltipCircle.style("opacity", 0)
  }
}

drawLineChart("paranoid", paranoid.rankings)
drawLineChart("spoil-my-night", spoilMyNight.rankings)
drawLineChart("rich-and-sad", richAndSad.rankings)
drawLineChart("zack-and-codeine", zackAndCodeine.rankings)
drawLineChart("takin-shots", takinShots.rankings)
drawLineChart("rockstar", rockstar.rankings)
drawLineChart("over-now", overNow.rankings)
drawLineChart("psycho", psycho.rankings)
drawLineChart("better-now", betterNow.rankings)
drawLineChart("ball-for-me", ballForMe.rankings)
drawLineChart("otherside", otherside.rankings)
drawLineChart("stay", stay.rankings)
drawLineChart("same-bitches", sameBitches.rankings)

</script>
