---
path: "/posts/front-end-dev/experiment-personal-json-api"
title: Experiment - Personal JSON-based API
summary: Trying out a way to access a personal bio as an API
date: "2014-08-30"
permalink: posts/front-end-dev/{{ title | slug }}/index.html
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

The most important thing that I can say right now is that this is an experiment. I am sharing as I learn, so please don't consider this a tutorial. I prefer to share as I bumble through things because it might help other people in the same spot and experts usually offer good tips for improving.

## Why I am doing this

I've been a fan of data since I was young. In my teens, I used newspapers to track stocks to see what would happen if I day traded with \$100k. Later, I moved to watching patterns in dog racing results and started betting them occasionally. I got distracted from this stuff for a while, but data visualization on the web is exploding and the [quantified self](http://en.wikipedia.org/wiki/Quantified_Self) movement is intriguing. There are great tools for collecting and displaying data and I want to learn.

## Big goals, small steps

Sites like [AprilZero.com](http://aprilzero.com) and [Feltron.com](http://feltron.com) are my inspiration. To achieve things like they have, I'll need a database, third-party APIs, and top-notch skills in data visualization. While those are the goals, I'm starting very simply and learning. That way when I'm done, I can go full Drake and be all like "started from the bottom now I'm here".

## Step One: Store Data as JSON

I knew that I wanted to use [Firebase](https://www.firebase.com) to get started. I've been fascinated with the power that it offers for someone like me who has no experience with back-end development. It can be used to store and access data in real-time and their docs are fantastic.

Knowing that this will be a work in progress, I didn't spend much time planning out data. I know there were a few things that I would want to be able to display on the site, so I created a small JSON file with them.

    {
      "personal" : {
        "firstName" : "Dan",
        "lastName" : "Denney",
        "dob" : "12/26/77"
      },
      "work" : {
        "workTitle" : "Front-End Dev",
        "workCompany" : "Code School"
      },
      "social" : {
        "website" : "dandenney.com",
        "twitter" : "dandenney",
        "codepen" : "dandenney",
        "github" : "dandenney",
        "gplus" : "+DanDenneydd"
      }
    }

Importing that to Firebase, I get a structure that looks like this. (The recentFinds came later, but I'll explain that next.)

<figure>

![](/img/posts/front-end-dev/experiment-personal-json-api/screenshot-json.png)

</figure>

## Step Two: Write to the JSON

The prior stuff was static (borinnnggg). What I'm interested in is writing to the JSON. A simple example seemed to be to list awesome things I've found on the web recently. So, I created a recentFinds object.

One important thing to share is that I don't know how to structure JSON manually by memory, so I use this [JSON Formatter](http://jsonformatter.curiousconcept.com).

    {
      "personal" : {
        "firstName" : "Dan",
        "lastName" : "Denney",
        "dob" : "12/26/77"
      },
      "work" : {
        "workTitle" : "Front-End Dev",
        "workCompany" : "Code School"
      },
      "social" : {
        "website" : "dandenney.com",
        "twitter" : "dandenney",
        "codepen" : "dandenney",
        "github" : "dandenney",
        "gplus" : "+DanDenneydd"
      },
      "recentFinds" : [
        {
          "title" : "perfBar",
          "url" : "http://lafikl.github.io/perfBar",
          "description" : "Simple way to collect and look at your website performance metrics quickly"
        }
      ]
    }

This is a static example, but it's only to get the structure into Firebase in the way that I want it. I don't understand their UI for creating JSON structures, so it's way easier to write what I want and import it.

The Firebase JS is 28k and has functions that allow accessing and updating data. The following code is a combo of Firebase code and some quick and dirty Coffeescript that I made as a proof of concept.

    # Create a global recentFinds reference
    recentFindsref = new Firebase("https://dandenney.firebaseio.com/recentFinds")

    # Send recentFind data to Firebase on click of #findSubmit
    $("#findSubmit").click ->

      # Get the data from the inputs
      findTitle = $("#findTitle").val()
      findUrl = $("#findUrl").val()
      findDescription = $("#findDescription").val()

      # Update the recent finds list
      recentFindsref.push({
        title: findTitle
        url: findUrl
        description: findDescription
      })

I actually started by sending static information to make sure that `recentFindsref.push` worked, but the goal was to be able to send info from a form. I strayed with the event trigger because using a submit input or button causes a page refresh that I don't want.

    <form>
      <fieldset>
        <label for="findTitle">Title</label>
        <input id="findTitle" name="findTitle" type="text" />
      </fieldset>
      <fieldset>
        <label for="findName">URL</label>
        <input id="findUrl" name="findUrl" type="text" />
      </fieldset>
      <fieldset>
        <label for="findDescription">Description</label>
        <input id="findDescription" name="findDescription" type="text" />
      </fieldset>
      <p id="findSubmit" name="findSubmit">Add</p>
    </form>

Testing this out with a few entries shows that the data is being saved to my JSON and Firebase is assigning a unique ID for each one as well.

<figure>

![](/img/posts/front-end-dev/experiment-personal-json-api/screenshot-recentfinds.png)

</figure>

## Step Three: Read from the JSON

At this point, I had data stored in JSON and the ability to add more data to it. I wanted to be sure that I could then access and display that data in order to know that I would be able to use this in the way that I want to.

    <ul id="recentFinds">
      <!-- Firebase data from https://dandenney.firebaseio.com/recentFinds -->
    </ul>

    # Retrieve recentFind data from Firebase on page document ready
    $ ->
      recentFindsref.on 'child_added', (snapshot) ->
        url = snapshot.val().url
        title = snapshot.val().title
        description = snapshot.val().description

        # Append an li to the ul#recentFinds for each item in recentFinds
        $("#recentFinds").append(
          "<li>" + "<h3>" +  "<a href='" + url + "'>" + title + "</a>" + "</h3>" + "<p>" + description + "</p>" +"</li>"
        )

## It Works!

So here's a GIF of it in action. Pardon the fact that it's hideous, this was quick experimentation so I had no concern about aesthetics or usability yet. The awesome thing about Firebase is that it's realtime. Nothing I ever record will ever deserve that amount of speed, but it's nice to have. You'll see in the GIF how fast it is. This example is sending the data to Firebase and back into the page without any delay. (If you don't count me trying to find the add "button".)

<figure>

![](/img/posts/front-end-dev/experiment-personal-json-api/by-golly-it-works.gif)

</figure>

## Next Steps

Now I know that it works and in looking at the documentation I'll be able to set the number of items to find and assign ordering. Next up is figuring out what I would like to record and then refactoring the code.

Recent Finds is something that I would like to keep, but I think it could benefit from a date as well. I'll need to make sure that I have a field for that and pre-populate today's date. I'm also thinking of tracking some personal stuff like workouts and beers consumed because they have a cause and effect relationship that might be interesting to see as a joke.

For the Coffeescript, I'll use [Spellbook](https://github.com/spellbook/spellbook) for our organization practices and stop polluting the global space with all of that jelly.
