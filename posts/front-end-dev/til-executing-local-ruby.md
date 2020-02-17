---
path: "/posts/front-end-dev/til-executing-local-ruby"
title: TIL Executing Local Ruby
summary: Sharing how I learned how to use Ruby to solve a problem
date: "2015-11-20"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

IA Writer says this is a 5:47 minute read and Hemingway App says I'm ugly and I can't write good. Read at your own peril.

## The Problem

I needed to do something unusual: take one big email list and remove any emails that exist in it from a smaller email list. At Code School, we use MailChimp so I started by finding out if they had a way to do it. They do, but for business purposes (security and expenses) I wanted to handle this offline if possible. I have 2 CSVs and I need one that is effectively one.csv minus two.csv.

## A Job Made for Computers

The big list is ~1.5m and the little list is around 80k, so throwing them into Numbers and sorting/removing was clearly out of the question. So I bugged [Drew](http://drewbarontini.com), our resident efficiency expert. His eyes lit up at the challenge and about 5 minutes later he had a proof of concept working in Terminal. This guy.

## The Solution (Thought)

I am not a programmer and I have never done any official training in programming. The hard part for me initially is thinking through how something would work and how I would communicate that to the computer. So I thought I’d share a roundabout way of thinking through this one.

If I had to do this manually, here’s a guess on how I’d do it.

1.  Make a copy of the large list (to be edited).
2.  Open each CSV in an app and sort alphabetically by email name.
3.  Check each email in the small list by looking at the large list to see if it exists.
4.  If it does exist in the large list, delete it.

Just for giggles, if I got in a groove and averaged 10 seconds per entry, that’d be around 800,000 seconds or 13,333 minutes, or 222 hours or 5–6 weeks of full-time work (without overtime). It’s a job for computers, but the important thing is knowing how to make the computer think the way that you want it to.

## Ruby to the Rescue

Drew knew right away that Ruby could handle this very well. (If you’re one of _those_ people and you’ve actually made it this far in the article, yes _x_ language can also do this very well. I just saved you a Medium post. :troll:) So let’s talk through how this would happen. Ruby would do things _pretty close_ to our list, but in a different order.

It is very fast when working with arrays, which are basically a comma-separated list of items wrapped in [ ]. This is super close to what our CSV looks like and there are functions for working with arrays built into Ruby.

Here’s my loose interpretation of how Ruby will approach it (once you write the code).

1.  Load each CSV into an array (big, little)
2.  Create a new array (lessbig)
3.  Compare the two original arrays and write only the emails that exist solely in the first array (big) into the new array (lessbig)
4.  Create a CSV from the newly created array

It’s pretty close to the way we would do it except for the order and that it takes about _1–2 minutes_ to run.

## I Wanted to Try!

I had no idea where to even start with this (even after seeing Drew run it in Terminal in IRB). So over lunch I stole a couple of hints (make a file, run it with “x”). It was a few days after that when I started on it and I couldn’t remember the details but our community puts our wealth of knowledge in things like Stack Overflow, [so I found that pretty quickly](http://stackoverflow.com/questions/8721369/how-to-execute-a-ruby-script-in-terminal). You make a `.rb` or `.irb` file, then in terminal you type `ruby filename.rb`. This works for what I need to do as the end goal is a CSV. (There are ways that you can print out the results in Terminal if you don’t need a file.)

[Comparing the arrays](http://stackoverflow.com/questions/20205023/ruby-find-element-not-in-common-for-two-arrays) and creating CSVs are also on Stack Overflow, but I mostly used the [docs](http://ruby-doc.org/stdlib-1.9.3/libdoc/csv/rdoc/CSV.html#method-i-read) for the CSV part.

## I Got Close

Ok, with my memory of what Drew had created and some Stack Overflow I was able to get my own POC working locally. My mind was seriously blown! A few lines of code and I had a new file with exactly what I wanted. It was insane to type that in and see a new file pop into finder.

    # Tell Ruby to use its CSV library of functions
    require "csv"

    # Create an array from big values
    big = ["one@email.com", "two@email.com", "three@email.com", "four@email.com", "five@email.com"]

    # Create an array from little values
    little = ["four@email.com", "five@email.com", "six@email.com", "seven@email.com", "eight@email.com"]

    # Remove any entries in little from big and make a new array with the result
    lessbig = big - little

    # Create a CSV from the new array
    CSV.open("lessbig.csv", "wb") do |row|
      lessbig.each do |data|
        row << [data]
      end
    end

    CSV.open("lessbig.csv", "wb") do |csv|
      csv << lessbig
    end

## WTF

When I switched to using CSVs, things were formatted differently (an array of arrays). I fought through by throwing some of the various options from the doc into the code but nothing worked. So I used a lifeline and asked to see Drew’s example.

## Drewwwwww

There were 2 problems that he had figured out. You need to use an each loop and output each row and you need the CSV to be multi-line for the way that we were writing.

Then there’s the part where he actually organized it like a developer. You can see his [splitter](https://github.com/drewbarontini/splitter) on GitHub.

## Frankencode

While his example is what someone would probably want to ship, I wanted to get it working in something more basic. So, I took his loops and tweaked them into my code. It was still borked, so I formatted my CSVs to be multi-line and Boom!

    # Tell Ruby to use its CSV library of functions
    require "csv"

    # Create an array from big.csv
    big = []
    CSV.foreach("big.csv") do |row|
      big << row[0]
    end

    # Create an array from little.csv
    little = []
    CSV.foreach("little.csv") do |row|
      little << row[0]
    end

    # Remove any entries in little from big and make a new array with the result
    lessbig = big - little

    # Create a CSV from the new array
    CSV.open("lessbig.csv", "wb") do |row|
      lessbig.each do |data|
        row << [data]
      end
    end

## WTF Aside

Soooooo I had opened and cleaned up unnecessary data from the CSVs using Numbers. It turns out Numbers has a max of 65535 rows so now both of my CSVs were that many rows long. **Don’t do that**. In this case, it turned out to be unnecessary anyways because Drew’s loops only take from the single email column and only output one column of emails. Him and his efficiency. :eyeroll:

## My Takeaways

As with most things in web development, executing Ruby functions locally was extremely intimidating before I tried it. Admittedly, I wouldn’t have gotten anywhere by just reading docs and stumbling along. Having that tiny kickstart of seeing it run locally in Terminal got me rolling, but that’s what peers are for! I won’t be diving into writing Ruby on the reg, but I’m no longer afraid of it and I’ll know it’s a viable option when I need to do something requiring lots of processing.

Time can be a concern, of course. This example was lucky in that it saved ~$900 to $1000 dollars by being done offline. I wouldn’t be able to justify this for everything that came up, but we are strongly encouraged to find creative solutions and learn as necessary to improve our skills. Hopefully good examples of this in the wild can lead to every company/team encouraging that.

Finding a solution, understanding it, and working with my teammate on it was a blast. Look for these opportunities and take advantage of them when you can. Then, share what you learned.
