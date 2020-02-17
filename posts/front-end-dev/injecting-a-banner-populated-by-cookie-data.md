---
path: "/posts/front-end-dev/injecting-a-banner-populated-by-cookie-data"
title: Injecting a banner populated with cookie data
summary: Sharing how I made a banner for a promo
date: "2019-09-18"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

It’s time for another round of sharing something that I recently learned how to do. My standard disclaimer applies: I’m not sure that I know what I’m doing and I’m always open to feedback if you know how I can improve it.

## Background

At [DataCamp](https://www.datacamp.com/), we run a couple of promotions per year, where you can save a bunch of money on a subscription. One way that we share that the promo is going on is to present a banner at the top of a page. We have multiple applications and we wanted a single source of truth for this kind of thing. One small part of that was creating the banner.

## The least worst possible

Having experienced many banners as I’ve browsed the web and experienced fighting what some third-party banners do on our site, I had an idea of how it could be really bad.

We already had an implementation that was generated in our site and it did the right thing in allowing itself to be closed and remembering that a visitor closed it. In addition to that, I wanted to make sure it didn’t obscure elements on the page and that it didn’t spill any CSS out into the site.

## CodePen to the rescue

Every time I’m learning something new or wanting to add something experimental to a project, I start with [CodePen](https://codepen.io). It was extra useful this round because I could practice injecting all of the content that I needed for the banner in the `iframe`. Plus, I was able to save the JS as an asset and link to it live from other pages as a test.

[My initial test](https://codepen.io/dandenney/pen/rNBxGYR) was just setting a config to update values from. Then I wanted to [test with a scrollable page](https://codepen.io/dandenney/pen/WNeOQVx). I’m embedding the final one, which got some optimization love from [Thomas Corthouts](https://twitter.com/t_corthouts). It has stubbed data that would come from our actual cookie.

<iframe height="265" style="width: 100%;" scrolling="no" title="aboVyBW" src="//codepen.io/dandenney/embed/aboVyBW/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dandenney/pen/aboVyBW/'>aboVyBW</a> by Dan Denney
  (<a href='https://codepen.io/dandenney'>@dandenney</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## All your `body` are belong to JS

To avoid obscuring other elements, I wanted the banner to be a part of the `document` flow, so I needed to get it into the `body` as the first element. Because this was going to be inserted into multiple apps with multiple tech stacks, I went with the ever popular [Vanilla JS](http://vanilla-js.com) framework. 🤪 With some googling, I found the handy `insertAdjacentElement`. It has a few options and the one I was after was `afterBegin`, which inserts your code after a targeted element begins. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) has all the deets if you’re curious.

One oddity in selecting the `body` element was that `getElementsByTagName` returns an `HTMLCollection` so you have to target the first `body` tag with a `[0]`.

To add an element, I used `createElement` and then added things to that element as needed.

If you’re wanting to see this in action, you can pop open your console and paste this in:

```javascript
const d = document;
const b = d.getElementsByTagName("body");
const p = d.createElement("p");
b[0].insertAdjacentElement("afterbegin", p);
p.innerHTML = "all your body are belong to JS";
```

Sidenote: you can use [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) if you are only inserting some HTML.

## Skipping the less exciting parts

Once you have access to that element, you can shove as much markup as you want to in there, but I’m gonna breeze over that to get to the more interesting things that I needed to do.

## “Does this countdown timer come in Vanilla?”

Part of our banner was a countdown timer and since I was shipping code to multiple domains using different tech stacks, I needed it to use plain JavaScript. Thankfully, Adrienne Tacke shared [how to make a countdown timer in pure JavaScript](https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3). I’m so very thankful for people who share what they learn. I wouldn’t be 1/10x of the dev that I am without people like her.

Based on this, I needed to know a few things: when is now and when is then. In this scenario, I knew then was going to come from my team, in the form of seconds remaining until “then” and JavaScript lets you get now via `Date()`.

## Start some static

At this point, I could inject a banner with a timer and some text and some static values. I’m popping in some code that’ll work for that and if you’re really wanting another banner, you can paste this one into your console too.

```javascript
var BANNER_CONFIG = {
  eligible: true,
  data: {
    time_remaining_in_seconds: 86400,
    presentation_data: {
      background_color:
        "linear-gradient( 109.6deg, rgba(83,5,5,1) 11.2%, rgba(0,0,0,1) 91.1% );",
      countdown_text: "I need to have a cookie in the next",
      text_color: "#ffffff",
      banner_text:
        "Subscribe now. Save discount_percentage% on an individual subscription on DataCamp and commit to learning data science and analytics.",
      time_background_color: "none"
    },
    demo_key: "demo_banner",
    landing_page: "#",
    title:
      "I would show my preferred cookie type here and the longest it should be before I should eat another cookie."
  }
};

function demoBanner(data) {
  const d = document;
  const bannerCookiePrefix = "DEMOBANNER_";
  let demoConfig = data.data,
    endDate =
      new Date().getTime() + demoConfig.time_remaining_in_seconds * 1000;

  const presentationData = demoConfig.presentation_data,
    elBody = d.getElementsByTagName("body"),
    elFirst = elBody[0].firstChild,
    countdownMarkup =
      "<time class='dc-ps-banner-time' data-countdown-wrapper><span data-countdown-days></span><span>days</span><span data-countdown-hours></span><span>hrs</span><span data-countdown-minutes></span><span>mins</span><span data-countdown-seconds></span><span>secs</span><span class='dc-ps-banner-time-icon'></span></time>",
    closeMarkup =
      "<button class='dc-ps-close' data-promo-close><svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><path d='M6.86 9l-5.417 5.416a1.514 1.514 0 0 0 2.14 2.14L9 11.14l5.416 5.417a1.514 1.514 0 0 0 2.14-2.14L11.14 9l5.417-5.416a1.514 1.514 0 0 0-2.14-2.14L9 6.86 3.584 1.443a1.514 1.514 0 0 0-2.14 2.14L6.86 9z' fill='#ffffff' fill-rule='nonzero' /></svg></button>";
  (styles =
    "<style> @keyframes slideIn { to { max-height: 500px; opacity: 1; } } @keyframes slideOut { from { max-height: 500px; opacity: 1; } to { max-height: 0; opacity: 0.25; } } .dc-ps-banner-wrapper { font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow: hidden; position: sticky; top: 0; z-index: 80; } .dc-ps-banner { animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards slideIn; background: " +
    presentationData.background_color +
    "; border: 0; color: " +
    presentationData.text_color +
    " !important; display: block; max-height: 0; opacity: 0.25; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.77, 0, 0.175, 1); text-decoration: none; } .dc-ps-banner.dc-is-hidden { animation: 0.5s cubic-bezier(0.77, 0, 0.175, 1) slideOut; } .dc-ps-banner-content { flex-grow: 1; margin: 12px 42px 12px 12px; text-align: center; } .dc-ps-banner-heading { color: " +
    presentationData.text_color +
    " !important; font-size: 18px; margin: 0 0 8px; } .dc-ps-banner-countdown { margin: 4px 0 0 0; } .dc-ps-banner-time { align-items: center; background: " +
    presentationData.time_background_color +
    "; border-radius: 4px; display: inline-flex; font-weight: bold; line-height: 1; padding: 4px 6px 4px 4px; } .dc-ps-banner-time > span { padding-left: 4px; } .dc-ps-banner-time-icon { position: relative; top: 1px; } .dc-ps-close { background: none; border: 0; cursor: pointer; position: absolute; right: 8px; top: calc(50% - 10px); transition: opacity 0.3s cubic-bezier(0.77, 0, 0.175, 1); z-index: 90; } .dc-ps-close:hover { opacity: 0.8; } @media screen and (min-width: 768px) { .dc-ps-banner-heading { font-size: 22px; margin: 0; } }</style>"),
    (bannerMarkup =
      "<a class='dc-ps-banner' data-ps-banner href=" +
      demoConfig.landing_page +
      "><div class='dc-ps-banner-content'><h5 class='dc-ps-banner-heading'>" +
      demoConfig.title +
      "</h5><p class='dc-ps-banner-countdown'>" +
      presentationData.countdown_text +
      countdownMarkup +
      "</p></div></a>" +
      closeMarkup +
      styles);

  function countdown(endDate) {
    const elCountdownWrapper = d.querySelector("[data-countdown-wrapper]"),
      elCountdownDays = d.querySelector("[data-countdown-days]"),
      elCountdownHours = d.querySelector("[data-countdown-hours]"),
      elCountdownMinutes = d.querySelector("[data-countdown-minutes]"),
      elCountdownSeconds = d.querySelector("[data-countdown-seconds]");

    let days, hours, minutes, seconds;

    if (isNaN(endDate)) {
      return;
    }

    setInterval(function() {
      demoConfig.time_remaining_in_seconds--;
      calculate(demoConfig.time_remaining_in_seconds);
    }, 1000);

    function calculate(secondsRemaining) {
      let timeRemaining = parseInt(secondsRemaining);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;

        seconds = parseInt(timeRemaining);

        elCountdownDays.innerHTML = parseInt(days, 10);
        elCountdownHours.innerHTML = ("0" + hours).slice(-2);
        elCountdownMinutes.innerHTML = ("0" + minutes).slice(-2);
        elCountdownSeconds.innerHTML = ("0" + seconds).slice(-2);
      }
    }
  }

  function setCookie(name, value, milliseconds) {
    d.cookie =
      name +
      "=" +
      value +
      ";path=/;domain=COOKIE_DOMAIN;expires=" +
      new Date(milliseconds).toUTCString();
  }

  function removeBanner() {
    const elBanner = d.querySelector("[data-ps-banner]");
    elBanner.classList.add("dc-is-hidden");
    setCookie(
      bannerCookiePrefix + demoConfig.demo_key,
      1,
      demoConfig.time_remaining_in_seconds >= 86400
        ? endDate - 86400000
        : endDate + 86400000
    );
  }

  function enableClose() {
    const elClose = d.querySelector("[data-promo-close]");
    elClose.addEventListener("click", removeBanner);
  }

  function insertBanner() {
    const bannerElement = d.createElement("article");
    bannerElement.classList.add("dc-ps-banner-wrapper");
    elBody[0].insertAdjacentElement("afterbegin", bannerElement);
    bannerElement.innerHTML = bannerMarkup;
    enableClose();
  }

  function getCookie(name) {
    var v = d.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

  if (
    !d.querySelector(".dc-ps-banner-wrapper") &&
    !getCookie(bannerCookiePrefix + demoConfig.demo_key)
  ) {
    insertBanner();
    countdown(endDate);
  }
}

demoBanner(BANNER_CONFIG);
```

## Cookies are so good

This next part kinda blew my mind, but I had to play it cool as if I totally knew we could do this with cookies. My team knew the whole time that they were gonna be shipping text, urls, seconds remaining, and values based on geolocation in a cookie that would populate the data in this banner. And they knew I was going to create a banner that used it. I just needed to know how I was going to do that.

As I’m known to do, I overestimated how hard it was. A few google searches would’ve gotten me there, but we were already doing something similar in our other apps so I stole the code from there.

This looks to see if you have a cookie matching the name that you pass in. If you do, it turns it into an object that you can access.

```javascript
functiongetCookie(name){
  var v = d.cookie.match("(^|;)?"+name+"=([^;]*)(;|$)");
  return v ? v[2] : null;
}
```

In my scenario, we were setting text, dollar values, and some CSS property values based on the cookie name and the values stored within it. So I needed to check for that cookie and then read from the object keys. Here’s one small example of that:

```javascript
+ background:"+ presentationData.background_color + ";
```

## Limited usage, but an awesome thing to learn

There isn't a ton of other uses for something like this, but I really enjoyed learning it. I was going to have some examples on this page of "cookie" cookies, but it turns out I'd have to reconfigure the blog a bit because JS is being escaped on the build. That's an unrelated problem that I'll have to work out and why I had to use the `iframe` option for the CodePen embed.

## Lessons Learned

Aside from learning how this all works and how to do it, there were some of the usual lessons.

- `position: sticky` has way better support than I knew. Of the browsers we support, only IE11 doesn’t support it.
- Just because you try to do the right thing, that doesn’t mean other banners will treat you well. Other elements that are being positioned outside of the document flow will cause problems.
- Never underestimate the z-index that someone else will set. I couldn’t imagine trying to ship something like this out into the world wild web. I’m very fortunate that I could isolate it down to 5 domains or so, most of which I could do a search in GitHub for z-index values. For the third-party ones, I could inspect them for what they set. CookiePro “wins” this one again with a whopping `z-index: 2147483644`. From [what I’ve seen](https://stackoverflow.com/a/25461690/438550), the max is `2147483647` so they leave you 3 levels if necessary.
- Set all the CSS values you expect. I know my fellow CSS folks will get a little offended here, but the cascade can cause problems. Ensure your elements have specific class names and you’re setting values for all the things that are necessary to maintain consistency. `text-decoration` got me in one of our sites.
- Safari doesn’t let you edit cookies in their dev tools, so I learned how to add / edit one from the console
