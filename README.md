# Frontend Mentor - Article preview component

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

# Mobile Preview 

![screenshot]()

# Mobile Preview - active

![screenshot]()

# Desktop Preview 

![screenshot]()

# Desktop Preview - active

![screenshot]()


### Links

 - Source code: []()
 - Live website: []()

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox
- Mobile-first workflow

### What I learned

This was a challenging project because it was the first challenge, where I independently attempted to use javascript with little help. I used the `toggle` feature which allowed users to switch between the on and off option for the share-button icon. I added a `transition` however it did not transition when the button clicked, the background for the icons transitioned when the screen size changed. In order to create the down-arrow with css, I used the `::after` property which was a new concept for me and found it quite interesting to use. Regarding the design of the card, I enjoyed recreating the design from the image into code and had fun doing so.

Javascript - toggle: 

```javasript

const btn = document.querySelector(".share-icon");
const openBtn = document.querySelector(".icons-toggle");

btn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
})

```

### Continued development

For future developments, I need to work on the `transition` within CSS and use more javascript in future projects. Also, I should use css grids in future projects and begin taking on more challenging responsive projects to test my skills. 


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

