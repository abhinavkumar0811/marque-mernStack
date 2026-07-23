# Flipkart Clone Setup Guide

## 1. Project structure
- HTML file: html/home.html
- CSS file: css/style.css
- JavaScript file: script/app.js

## 2. Required head setup
Make sure your HTML head contains:
- DOCTYPE and html lang
- meta charset
- meta viewport
- meta description
- meta keywords
- meta author
- title
- CSS link
- CDN links for Google Fonts and Font Awesome

## 3. Link files correctly
Because home.html is inside the html folder, use relative paths:
- CSS: ../css/style.css
- JS: ../script/app.js

## 4. Common mistakes to avoid
- Wrong file path such as css/style.css when the file is actually inside the css folder from the html folder
- Missing rel="stylesheet" on the CSS link
- Forgetting the viewport meta tag
- Using an absolute path like /flipkartClone/css/style.css when opening the file directly
- Typing the wrong folder name in the path

## 5. Next step
After this setup, you can start building the header, search bar, product cards, and footer one section at a time.
