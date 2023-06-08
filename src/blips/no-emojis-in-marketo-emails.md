---
codeHighlighting: true
date: "2021-11-02"
layout: layouts/blip.njk
summary: Weird glitch, hoping this helps anyone else
title: Don't use emojis in Marketo emails
tags:
  - blips
---

<style>.longform img { width: 470px; }</style>

The Marketo parser will stop when it hits an emoji and clip the rest of the code. This one was weird, because I often hand off coded emails to internal teammates who then set them up in Marketo. They reported back an error that didn't make sense, as the emails were complete documents: `HTML error, '/body' tag is missing`

![Screenshot of an error message for no closing body tag](/img/blips/no-emojis-in-marketo-emails/error.png)

I double checked the emails in Email on Acid, sent some tests via Customer.io, and then eventually got access to the Marketo items themselves. After pasting, I could see that it was clipping the contents of the email and was suspicous of the emoji. Removing them fixed things up, so back to images we go.




