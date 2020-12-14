---
path: "/posts/front-end-dev/playing-with-css-hat"
title: Playing With CSS Hat
summary: Mondays are so different at Envy
date: "2012-07-21"
tags:
  - front-end-dev
layout: layouts/post.njk
---

[CSS Hat](http://csshat.com) is a photoshop plugin from the team that will hopefully bring us [CSS Pifffle.](http://csspiffle.com) I had been anxiously awaiting for it to be released because I wanted to see what the team was capable of. They are currently working on a new app for web creation, intended to replace Photoshop and Fireworks for us.

### It surprised me

I was skeptical because most things that automate code output some crazy ish. The code that comes out of CSS Hat is very usable. I'd prefer if there was a way to alphabetize the properties as an option, but I have [procssor](http://procssor.com) for that. I'm using Compass or Sass mixins a lot these days so I wouldn't necessarily copy and paste the code at all. To me, it is a quick way to get the nitty gritty stuff: hex codes, opacity percentages, shadow ratios, etc.

### Building something with it

A while ago I had this little dream that every day I would code out a psd resource from sites like 365psd and share them as a gallery. I didn't follow through, but I did do one. So, I'm going to compare that with what I can grab straight out of the psd.

#### Original Image

![Day 155 nav from 365psd](/img/posts/front-end-dev/playing-with-css-hat/day155.png)

#### Original Conversion

<nav>
  <a class="first" href="#">Day</a>
  <a href="#">Week</a>
  <a href="#">Month</a>
  <a class="last" href="#">List</a>
</nav>

#### CSS Hat Version

<nav>
  <a class="first" href="#">Day</a>
  <a href="#">Week</a>
  <a href="#">Month</a>
  <a class="last" href="#">List</a>
</nav>

#### With a little padding

<nav>
  <a class="first" href="#">Day</a>
  <a href="#">Week</a>
  <a href="#">Month</a>
  <a class="last" href="#">List</a>
</nav>

### Ok, so it's not plug and play

This particular psd brings out some flaws, but not necessarily flaws with CSS Hat. It's more of a general flaw in using Photoshop to make things intended to be built with CSS. Here is the error the notes from CSS Hat:

> \*Stroke has a gradient fill type, but there is no way to express that in CSS, writing the average color instead. Blending modes are used in gradient fill and inner shadow, but they are impossible to realistically transfer to CSS.

Our designer used blending modes which are not CSS friendly. It's not that you can't replicate the end result, it's that there is no way to automate it. You can't (yet with browser support) set something like "blendmode: overlay;".

When I originally coded up my version, I spent a good deal of time with the eyedropper trying to nail down the colors for the beginning and end colors for the gradients.

There are a couple of things that you could grab from the outputted code, like the border-radius for example. Other than that, though, the blending modes killed this one. As you can see there are some other things that you'd have to use tools to get too. The padding, for example, would have to come from using rulers or something. (I use [xScope](http://iconfactory.com/software/xscope) for all measuring and colors now.) As usual, fonts are off as well. It calls for a 13px Helvetica Neue Bold but I changed it to normal.

### Build something without blending modes

I wanted to try something without blending modes to see how it works out. It gets better, but you'll see there are still some issues.

#### Original Image

![200 Days of Awesomeness #4](/img/posts/front-end-dev/playing-with-css-hat/200days-4.png)

#### CSS Hat Styles

<nav>
  <a class="first" href="#">Day</a>
  <a href="#">Week</a>
  <a href="#">Month</a>
  <a class="last" href="#">List</a>
</nav>

Now I made some quick tweaks to get it in the range of the original. Padding, margin, font-family, font-size, max-width, etc.

#### With quick adjustments

<nav>
  <a class="first" href="#">Day</a>
  <a href="#">Week</a>
  <a href="#">Month</a>
  <a class="last" href="#">List</a>
</nav>

You can see that it missed some of the details. The thin stroke didn't make it in correctly and the gradient color shifted a bit. The stroke is just a matter of needing it to be 2 pixels inside the element and 1px around and I'm guessing the gradient issue is that a scale of 28% was used. I bet they're not set up to grab scaling gradients.

### Final thought: It's ok

So it's on the way but as it is, it can only be used as a shortcut to getting some of the property values. It still leaves me hopeful for their upcoming tool. I imagine if all of the options within the tool had to have a direct CSS equivalent, there would be much better accuracy. For me, it's \$20 so if it saves me at least 30 minutes (ever) it was worth the price of admission.
