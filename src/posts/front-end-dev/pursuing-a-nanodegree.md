---
path: "/posts/front-end-dev/pursuing-a-nanodegree"
title: Pursuing a Nanodegree (1 of ?)
summary: Diving into learning JavaScript on Udacity
date: "2016-06-26"
tags:
  - front-end-dev
layout: layouts/post.njk
---

I've been wanting to learn functional JavaScript for a while. I've stocked up on some books, we've released some great [JavaScript courses at Code School](https://codeschool.com/paths/javascript), we have a team account at [Front-end Masters](https://frontendmasters.com), and I grabbed Wes Bos' [React for Beginners](https://reactforbeginners.com). Basically, I have all the things.

What I've been missing was the right motivation. Of course being better at it will help some of tasks on our .com, but the impact I'd have is minimal so it hasn't felt pressing. I tried psyching myself up with a 30-day challenge but I'm not one of those folks. I think I made it about 4 days before I went on a random trip and lost momentum. Again, there wasn't a true goal. I'm a firm believer in Chris Coyier's reasoning on when and what to learn: [Just Build Websites](http://justbuildwebsites.com).

## Inspiration, Courtesy of a Buzzword

Progressive web apps are so hot right now. I was curious, so I dove into some posts and [Jake Archibald's talk](https://www.youtube.com/watch?v=cmGr0RszHc8). I love the ideas behind them and want to take a crack at building one. Somewhere in the mix I ended up on [Udacity's Senior Web Developer Nanodgree](https://www.udacity.com/course/senior-web-developer-nanodegree--nd802#) and something clicked! They packaged up the motivation that I needed: a clear flow of tasks and interesting projects to build using technologies that I want to learn. Not sure if there's much motivation for me behind the actual nanodegree, but it's a perk. The final selling point was that it's a bit pricey and there's a reward for finishing early. Spending the money will be an extra kick in the ass to make progress.

![](/img/posts/front-end-dev/pursuing-a-nanodegree/syllabus.png)

## Ulterior Motive

w
I'm also extremely interested in the teaching format itself. I'm a lifelong learner and I love sharing/teaching. So on top of learning, I'm learning about learning (yo dawg). I've been active in meetups, conferences and workshops and I work for Code School and (really) Pluralsight. The first few years of the explosion of online learning sites have been pretty freeform. We're starting to see multiple approaches into guided learning paths. I get to see a few firsthand, peeked at Treehouse's, and am now giving Udacity's a whirl.

## Sharing My Experience

So, I'll be sharing my experience as I go. This will be a series of posts as I take on each section. I'll be sharing what I'm learning as well as my take on the nanodegree program itself.

## Onboarding

The onboarding flow was really well done. The folks at [Focus Lab](http://focuslabllc.com/) recently overhauled Udacity and they did an awesome job. The intro video was very human and there were a series of videos and modals explaining the benefits of the process as well as what you'll be learning.

![](/img/posts/front-end-dev/pursuing-a-nanodegree/video.png)

I took some quick notes along the way:

- Gorgeous payment form, very human (optional) video
- The features modal had key points but wasn’t necessary for me
- The Syllabus has a well-done intro video (ugh, they say learning by doing in the course intro video)
- They mix video with on-page content which is an awesome experience. (A couple small things are out of sync, I imagine that's a challenge when updating.)
- You're strongly encouraged to setup a profile (which I'd usually skip) but the flow was great and it seems important for feedback on progress
- There's a community for students in a forum and Slack
- Honor Code is an excellent idea, they talk through the importance of doing this to learn, not just to earn the nanodegree.
- "Be relentless in finding an answer on your own" was my favorite line in the explanation of how important it is for you to be learning, not just progressing.

My take at the end of the introductory session: I’m loving this, the videos are well done and lead off with a critical thinking exercise. That solidified things for me because it means they're walking the walk. I'm all in.

## Project 1: Meet-up Event Planner

The goal of this will be to create a small app that allows somoene to create an event, using some cool tech. This was super interesting to me since I do so many events and because I can see how the functionality can be used in many other ways. Since it's form-based, you start off learning about best practices for building forms. Cameron Pittman and Ido Green lead the way, with visits from the guy who literally wrote the [book on forms](http://www.lukew.com/resources/web_form_design.asp), Luke Wroblewski.

![](/img/posts/front-end-dev/pursuing-a-nanodegree/cameron-ido.jpg)

The challenges are integrated well within the video space: you watch a bit, then answer a question or do a little bit of code in that same space. I was pretty used to this and it works well, but they took it to another level. The initial project is doing form validation with `setCustomValidity` and they built a Chrome extension that runs tests on your code. Here's my first run:

![](/img/posts/front-end-dev/pursuing-a-nanodegree/extension.png)

Again, I took some notes along the way:

- Quiz: Validate Some Inputs, things ramp up fast here. Having never done any regex for validations, I need to learn how to check for letter grades allowing punctuation (A, A+, A-, etc.). I got close, but Cameron's example was way better because I wasn't proofing for no marks on F.
- Had to install, learn to run Grunt for the local quiz on customValidity (based on forum suggestions). Kinda weird to do this before the next section on tooling, though arguably I could have run it in Middleman if I wanted to.
- I went down a dark hole of git commits trying to not commit the local node-modules, but that was a misstep on my part. I was so focused on the challenge that I accidentally committed it all.
- Had to learn the syntax for using regex to validate an input’s value, aka .test() [Stack Overflow](http://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex)
- By the time I was really ready, I was so close! I was missing one small thing: needing to set the nil validity for the second input and one big thing: needing to concatenate all of the errors into one message.
- The array idea from the forums was awesome and I know there’s a much better way to write what I did, but I got it working.
- Absolutely loved Luke’s breakdown of The Culture of Delivery.

### Things I need to learn from the solution code:

- .prototype
- switch functions
- defining functions in prototype and invoking them in another function (this is what I was trying to do with my initial individual pushes, but didn’t nail the syntax)
- The function for capturing the illegal character that was used and displaying it. I’m glad I thought of it, but should have fought through an attempt to make it happen.
- Efficient logic (his code only runs when the 2 passwords match, while mine runs regardless)
- \n

That's it for the first section. I'm hooked now and this felt so good:

![](/img/posts/front-end-dev/pursuing-a-nanodegree/success-form.png)
