---
title: Filter an Array by Keyboard Rows
date: "2023-05-29"
tags:
  - blips
layout: layouts/blip.njk
---

I subscribe to [Cassidoo's newsletter](https://cassidoo.co/newsletter/), and in it, she offers up a coding challenge. Lately, I've been using it as a way to experiment with ChatGPT. Just to be sure, I do not submit these for credit. It's just a way to learn how to approach it both from the code and the prompting.

<figure>
  <blockquote>
    <p>
      Given an array of words, return the words that can be typed using letters of only one row on a keyboard. For bonus points, include the option for a user to pick the type of keyboard they are using (ANSI, ISO, etc), and/or give options for how many/which rows are allowed!</p><pre class='language-js'><code class="language-js">oneRow(['candy', 'fart', 'pop', 'Zelda', 'flag', 'typewriter'])
['pop', 'flag', 'typewriter']
</code></pre>
  </blockquote>
  <figcaption>— Cassidoo</figcaption>
</figure>

The first attempt was a miss, but it helps me learn how to be more direct about my prompts. I used:

<figure>
  <blockquote>
    <p>Write a javascript function that will filter an array down to words that can be typed by using a single row on a keyboard, allowing for the type of keyboard to be chosen. An example array is ['candy', 'fart', 'pop', 'zelda', 'flag']</p>
  </blockquote>
</figure>

I won't output the full thing, but it led with, "Here's an implementation of the function you're asking for. In this version, you'll specify the keyboard row as a string of characters, and it will filter the array accordingly.", along with a walkthrough of the code for that. 

I followed up with, "Refactor this to allow for the keyboard type to be an argument instead of row", which worked. In the future, I know that I should specify the arguments. 

<figure>
  <blockquote>
    <p>Sure, we can adjust the function to allow for keyboard type as an argument instead of individual rows. Here's an implementation for three keyboard types: QWERTY, Dvorak, and AZERTY.</p><pre class='language-js'><code class="language-js">function filterByKeyboardRow(words, keyboardType) {
    // Define the rows for different keyboard types
    const keyboardRows = {
        'QWERTY': ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
        'Dvorak': ['pyfgcrl', 'aoeuidhtns', 'qjkxbmwvz'],
        'AZERTY': ['azertyuiop', 'qsdfghjklm', 'wxcvbn']
    };

    // Check that we have rows for the provided keyboard type
    if (!keyboardRows[keyboardType]) {
        throw new Error(`Unknown keyboard type: ${keyboardType}`);
    }

    // Convert the rows to Sets for easier lookup
    const rowSets = keyboardRows[keyboardType].map(row => new Set(row.split('')));

    // Filter the words
    const result = words.filter(word => {
        // Convert word to lower case and check every character
        const lowerCaseWord = word.toLowerCase();
        // Check if word can be typed using any row of the keyboard
        return rowSets.some(rowSet => [...lowerCaseWord].every(char => rowSet.has(char)));
    });

    return result;
}
</code></pre>
  <p>Now you can filter words based on the type of keyboard:</p><pre class='language-js'><code class="language-js">const words = ['candy', 'fart', 'pop', 'zelda', 'flag'];

console.log(filterByKeyboardRow(words, 'QWERTY')); // ['pop', 'fart', 'flag']
console.log(filterByKeyboardRow(words, 'Dvorak')); // ['pop', 'zelda']
console.log(filterByKeyboardRow(words, 'AZERTY')); // ['pop', 'zelda']</code></pre>
  <p>This code assumes that any word is typed using only one row of the keyboard. If a word uses letters from different rows, it will be excluded. If the keyboard type isn't recognized, it will throw an error.</p>
  </blockquote>
  <figcaption>— ChatGPT 4</figcaption>
</figure>

Ooh, before publishing this I found out I have access to shared links, so you can see the [actual chat](https://chat.openai.com/share/840ae6e4-fd10-46da-a7fe-4855630a7846).