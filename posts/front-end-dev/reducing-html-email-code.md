---
path: "/posts/front-end-dev/reducing-html-email-code"
title: Reducing HTML Email Code
summary: Sharing how I took a a crack at refactoring an email
date: "2016-07-16"
codeHighlighting: true
tags:
  - front-end-dev
layout: layouts/post.njk
---

I recently came across an article, [The Problem with Email Newsletters](https://medium.com/@cloverfounders/the-problem-with-email-newsletters-f606a485ccc1#.56k4k0uh3). I was really curious about the problems that people run into with creating them, but I was surprised by the main problem that this one covered:

> "The problem is that 102KB is tiny. An email with a little bit of text and a single photo is larger than 102KB. For Clover, we would need to delete 75% of the content in our current letter in order to squeak in under Gmail’s clipping restrictions."

The only time that I could remember running into this problem is when I was doing extreme stuff like converting images into tables filled with colors and creating data visualizations using table colors. I peeked at all of my Code School emails and the largest one I had created was 54kb, so I thought I should take a crack at reducing the code in it.

## The Results May Be Misleading

<table class="mts">

<thead>

<tr>

<th>File</th>

<th>Expanded</th>

<th>Minified</th>

<th>Images</th>

<th>Total</th>

</tr>

</thead>

<tbody>

<tr>

<td data-th="File">clover.html</td>

<td data-th="Expanded">134kb</td>

<td data-th="Minified">74kb</td>

<td data-th="Images">436kb</td>

<td data-th="Total">570kb</td>

</tr>

<tr>

<td data-th="File">clover-alt.html</td>

<td data-th="Expanded">42kb</td>

<td data-th="Minified">33kb</td>

<td data-th="Images">356kb</td>

<td data-th="Total">398kb</td>

</tr>

</tbody>

</table>

I was able to reduce the amount of code significantly, from 134kb to 42kb by picking through it and [ImageOptim](https://imageoptim.com/mac) took care of the images. This seems great and like I should just share it with them, right? Not so fast...

## The Formula for Redundancy

A template created for general use and a non-developer adding content will almost always result in redundant code. It's probably the most common problem in CMS-driven content because it's so hard to solve. It's the reason we switched to me creating all of the HTML emails that we send at Code School and why the front-end team handles the formatting of all blog posts there as well. I'll break down the good, the "could be better", and the fixes in this particular instance.

## The Good

The template is really well done. The code is great and it works well across all screen sizes. They were able to customize it to the look and feel that they wanted and maintain consistency in their data entry, too.

## The "Could Be Better"

#### Some CSS is not being utilized

The template is intended to have content entered using HTML elements for titles and text (H1, H2, H3, H4, H5, p). However, none of that is being used.

#### Nesting could be reduced

There are some deeply nested tables that could be moved up a few levels.

#### Spongy vs. multiple cell approach

There are a few ways to mark up templates that will work well across multiple resolutions. This one is using the spongy approach, which has code for ghost tables.

#### Too many styles are inlined

There is some code that only works in specific clients which could be only in the head. Admittedly, this is tricky depending on what is handling the inlining.

#### Style fights

There is code in the template to handle size, colors, etc. for content, but it isn't the desired styles. Each bit of text has styles added to counter the existing ones.

## Possible Fixes

I'm going to share what I did to trim things down, but I can't stress enough that this isn't "the way". These could trim things down but ultimately it would be a balance of tailoring the template to the content and ensuring that no extra styles are added each time content is entered. The real fix is process.

#### Unutilized CSS

Since the title and paragraph elements aren't beind used, I removed all of the CSS in the template for them. Ultimately the better fix is to use them in content entry but I admit that I don't use them in our emails. Here's a little bit of it:

```css
h1 {
  color: #000000 !important;
  display: block;
  font-family: Helvetica;
  font-size: 60px;
  font-style: normal;
  font-weight: normal;
  line-height: 125%;
  letter-spacing: normal;
  margin: 0;
  text-align: center;
}

h2 {
  color: #000000 !important;
  display: block;
  font-family: Helvetica;
  font-size: 26px;
  font-style: normal;
  font-weight: normal;
  line-height: 125%;
  letter-spacing: normal;
  margin: 0;
  text-align: center;
}

h3 {
  color: #000000 !important;
  display: block;
  font-family: Helvetica;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 125%;
  letter-spacing: normal;
  margin: 0;
  text-align: center;
}

h4 {
  color: #000000 !important;
  display: block;
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 125%;
  letter-spacing: normal;
  margin: 0;
  text-align: left;
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 24px !important;
    line-height: 125% !important;
  }
}

@media only screen and (max-width: 480px) {
  h2 {
    font-size: 20px !important;
    line-height: 125% !important;
  }
}

@media only screen and (max-width: 480px) {
  h3 {
    font-size: 18px !important;
    line-height: 125% !important;
  }
}

@media only screen and (max-width: 480px) {
  h4 {
    font-size: 16px !important;
    line-height: 125% !important;
  }
}
```

#### Nesting

To reduce nesting and to divide up the areas that you're editing, I divided the template into 3 sections: header, content, footer.

<!-- prettier-ignore -->
```html
<!-- HEADER -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">...

<!-- CONTENT -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">...

<!-- FOOTER -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">...
```

#### The multiple cell approach

It's a small amount of code per table, but the combination of saving lines without the ghose tables and reducing nesting helps reduce the overall code.

**Ghost Tables**

```html
<!--[if mso]>
	<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
		<tr>
<![endif]-->
<!--[if mso]>
	<td valign="top" width="600" style="width:600px;">
<![endif]-->
<table
  style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
  class="mcnTextContentContainer"
  align="left"
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
>
  <tbody>
    <tr>
      <td
        class="mcnTextContent"
        style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #000000;font-family: Helvetica;font-size: 15px;line-height: 200%;text-align: left;"
        valign="top"
      >
        <div style="text-align: center;">
          <span style="font-size:18px; line-height:22px"
            ><strong
              >Let’s be real: We know you spent yesterday Amazon Prime-ing your
              way to happiness. Here’s what you missed while you were trying to
              score fancy headphones and half-priced Kindles.</strong
            ></span
          >
        </div>
      </td>
    </tr>
  </tbody>
</table>
<!--[if mso]>
</td>
<![endif]-->
<!--[if mso]>
	</tr>
</table>
<![endif]-->
```

**Multiple cells**

```html
<!-- Content Container -->
<table
  align="center"
  border="0"
  cellpadding="0"
  cellspacing="0"
  class="flex-size"
>
  <tr>
    <td style="font-size: 0;"></td>
    <td width="564">
      <!--- Content Content --->
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td
            class="mcnTextContent"
            style="color: #000000; font-family: Helvetica; font-size: 18px; line-height: 30px; -ms-text-size-adjust: 100%; text-align: center; word-break: break-word; padding-top: 36px;"
          >
            <strong
              >Let's be real: We know you spent yesterday Amazon Prime-ing your
              way to happiness. Here's what you missed while you were trying to
              score fancy headphones and half-priced Kindles.</strong
            >
          </td>
        </tr>
      </table>
    </td>

    <td style="font-size: 0;"></td>
  </tr>
</table>
```

#### Reducing inlined styles

This is a little challenging if you're using MailChimp templates. You have to add the code to a campaign and turn off their CSS inlining to be sure that these don't get inlined. (Or use another tool like Builder and assign the value to not inline them and then paste into a campaign.)

These two rules are in the code 112 times. The lack of gzip in email clients means that is 111 times too many (but only because these two targeted clients will read from a `<style>` tag in the `<head>`). For giggles, I saved 111 into a file and it's 7kb. (There's also a "ms" rule but I'm not entirely sure if microsoft phone clients read the `<style>` tag.)

<!-- prettier-ignore -->
```css
mso-line-height-rule: exactly;
‐webkit-text-size-adjust: 100%;
```

#### Reducing style fights

While my fixes work in this one-off context, it would require editing the main template and then discussing the process for creating content. The correct styles would need to be in the containing cell and it would need to be clear that styles shouldn't be added via the UI.

In this sample, you can see that the sizes and colors are set in the `<td>`, but they're being countered by a `<div>`, an `<a>`, and a `<span>`.

```html
<td
  class="mcnTextContent"
  style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #000000;font-family: Helvetica;font-size: 11px;line-height: 125%;text-align: center;"
  valign="top"
>
  <div style="text-align: left;">
    <span style="font-size:18px; line-height:22px"
      ><strong>Bernie Says He's “Proud To Stand” with Hillary</strong>
      <br />
      <br />
      Bernie Sanders, progressive millennial hero and America’s favorite
      grandpa, officially endorsed his longtime frenemy Hillary Clinton. "Let me
      begin by thanking the 13 million Americans who voted for me during the
      Democratic primaries," he said,
      <a
        href="http://www.cnn.com/2016/07/11/politics/hillary-clinton-bernie-sanders/"
        target="_blank"
        style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #000000;font-weight: bold;text-decoration: none;"
        ><span style="color:#1cc7f2"
          >before eventually congratulating Clinton on her victory</span
        ></a
      ></span
    >
  </div>
</td>
```

Here you can see that the styles to match the desired look are in the `<td>` and that only specific styles to the link are put on the `<a>`.

```html
<td
  class="mcnTextContent"
  style="color: #000000; font-family: Helvetica; font-size: 18px; line-height: 22px; -ms-text-size-adjust: 100%; padding-top: 18px; word-break: break-word;"
>
  Bernie Sanders, progressive millennial hero and America's favorite grandpa,
  officially endorsed his longtime frenemy Hillary Clinton. "Let me begin by
  thanking the 13 million Americans who voted for me during the Democratic
  primaries," he said,
  <a
    href="http://www.cnn.com/2016/07/11/politics/hillary-clinton-bernie-sanders/"
    target="_blank"
    style="color: #1cc7f2; font-weight: bold; text-decoration: none;"
    >before eventually congratulating Clinton on her victory</a
  >
</td>
```

## The Comparison

My alternative takes all of these into play and I tried to do them in a way that would be repeatable within the original template and still be edited from the UI. It's not perfect, I seemingly deleted some style that reduces the header text on small screens but I didn't want to track that down. This was more about what would happen if you trimmed code.

**The Original**

<div class="stretch stretch--b">

<div class="builder-embed-wrapper"><iframe src="https://litmus.com/builder/9306f30/embed" scrolling="no"></iframe></div>

</div>

**My Alternative**

<div class="stretch stretch--b">

<div class="builder-embed-wrapper"><iframe src="https://litmus.com/builder/b896771/embed" scrolling="no"></iframe></div>

</div>
