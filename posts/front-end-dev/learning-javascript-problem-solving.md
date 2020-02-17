---
path: "/posts/front-end-dev/learning-javascript-problem-solving"
title: "I'm Learning How to Solve Problems with JavaScript"
summary: Showing the solution to a brain teaser with JS
date: "2016-08-08"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

![](/img/posts/front-end-dev/learning-javascript-problem-solving/crash-js.svg)

<div class="row ov">

<div class="cell cell--s">

**Disclaimer:** In this post, I am sharing something that I've been learning. It's in no way a how-to and in fact I'd love feedback on better ways to do what I've done.

I've been focused on learning functional or programmatic JavaScript lately, trying to step up my game from the presentational side of things. Without a Comp Sci background, there's more to learn than syntax. I have to think about how to approach problems and that is as big of a learning curve as the syntax is for me.

While driving around my daughter and her boyfriend this weekend, he popped out one of those school questions: "2 trains are 1000 feet apart. One train is going 80 miles per hour, one is going 60 miles per hour. How long before they crash?" (It turns out he was using it as a riddle because he said feet, but my mind was already running.)

## Which came first, the solution or the code?

In thinking about miles instead, this seemed like the perfect small thing to work through solving. The first step required figuring out a way to solve the problem before thinking about how to code it.

My thinking was that if I add the 2 speeds together, they are a "cycle". Then it would be a matter of dividing the total number by the number of cycles. To make sure it would work, I created a spreadsheet to test it. (Not while I was in the car)

![](/img/posts/front-end-dev/learning-javascript-problem-solving/spreadsheet.png)

## "How do I code this?"

My first step was thinking about how to do small portions of this. My former self (like before right now), would have wrote this in one loooong function. I've learned bits and pieces about organization and creating functions that handle one specific thing from [Drew](http://drewbarontini.com) and want to start putting that to use.

## Step One: Calculate the number of cycles

Like in the spreadsheet, I want code that will add 80 + 60, divide that number into 1000 and output 7.14\. I also want each of those numbers to be able to be changed, but I started with the exact ones to check accuracy.

```javascript
function calculateCycles(distance, speedA, speedB) {
  var distance = distance;
  var speedA = speedA;
  var speedB = speedB;
  var cycle = speedA + speedB;
  var cycleCount = distance / cycle;
  return cycleCount;
}

calculateCycles(1000, 80, 60);
```

> ### Refactor
>
> Jon Roberts shared something that instantly makes this more efficient. I was wrong in thinking that I had to explicitly declare arguments that are passed into variables.

```javascript
function calculateCycles(distance, speedA, speedB) {
  return distance / (speedA + speedB);
}

calculateCycles(1000, 80, 60);
```

If you copy and paste that into the console, you should get 7.142857142857143\. Technically speaking that's the answer, but I doubt any teacher would accept 7.14 hours and it's not very friendly. I wanted the answer in hours, minutes, and seconds.

To avoid my one giant function, I'm returning the value at the end of the function so that I can call it elsewhere. I had to search for [a reminder](http://stackoverflow.com/questions/19674992/javascript-using-a-return-value-in-another-function) on how to do that.

## Step Two: Calculate the time of the cycles

Converting the number into hours, minutes, and seconds was a multi-step process and I was glad I had learned about the remainder functions. Again, I needed [a reminder](http://stackoverflow.com/questions/4228356/integer-division-in-javascript) on the best way to handle that. The conversion is somewhat backwards, then forwards. I first needed to get the total number of seconds using the number of cycles.

That total number could be divided by number of seconds in hours, using the remainder to do the same for minutes and then seconds. The answer requires 3 values: a number of hours, minutes, and seconds. So, the output of of this function is an array of those 3 values.

```javascript
function calculateTime() {
  var cycles = calculateCycles(1000, 80, 60);
  var secondsPerHour = 60 * 60;
  var secondsTotal = secondsPerHour * cycles;
  var hoursRemainder = cycles % 1;
  var hoursResult = (secondsTotal / secondsPerHour) >> 0;
  var minutesInitial = hoursRemainder * 60;
  var minutesRemainder = minutesInitial % 1;
  var minutesResult = minutesInitial >> 0;
  var secondsResult = (minutesRemainder * 60) >> 0;
  return [hoursResult, minutesResult, secondsResult];
}

calculateTime();
```

This one can be pasted into the console, too, but you'll need to have all the code from before for it to run. If you do, you should get `[7, 8, 34]`. I have a CodePen at the end of the post that you can play with instead of trying to copy and paste these into the console.

## Step Three: Output the answer

For the most part, the output was something I've been doing a lot lately. However, I was accessing the array incorrectly and had to <a href="">look that up</a>. Once I had that in a variable I could map each item in the array to an HTML element.

```javascript
function outputAnswer() {
  var times = calculateTime();
  var hours = times[0];
  var minutes = times[1];
  var seconds = times[2];
  var hoursOutput = document.querySelector("#hours");
  var minutesOutput = document.querySelector("#minutes");
  var secondsOutput = document.querySelector("#seconds");
  hoursOutput.innerHTML = hours;
  minutesOutput.innerHTML = minutes;
  secondsOutput.innerHTML = seconds;
}

outputAnswer();
```

## Solution

Here's the pen that I did it in and I used cars instead of trains because I liked the classic car vectors better.

<div class="cp_embed_wrapper"><iframe id="cp_embed_OXaWqP" src="//codepen.io/dandenney/embed/OXaWqP?height=265&amp;theme-id=0&amp;slug-hash=OXaWqP&amp;default-tab=js%2Cresult&amp;user=dandenney&amp;embed-version=2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" name="CodePen Embed" title="CodePen Embed 1" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div>

## Conclusion

The good part is that this worked! So I know that I can conjure up a problem, find a solution, and work towards building that solution out in code. In applying what I've been learning, this is a big win.

Ultimately, my goal is to learn how to build web apps. In that regard, I know that there's a lot more that could be done to this to make it better. There's likely more efficient ways to write it and to do the conversions. If I was making it editable, I'd have to write code that ensured that 0 or negative values wouldn't break it, etc.

If there's something in here that you know I could do better, please let me know and share it for other folks to learn.

</div>

</div>
