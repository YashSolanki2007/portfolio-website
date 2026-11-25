# Yash Solanki’s portfolio and blog

A static site for GitHub Pages. The homepage is `index.html`, the blog index is `writing/index.html`, and each post is a folder with its own `index.html`. All paths are relative so it works at both an account site and a project URL.

## Preview locally

From the repository directory, run `python3 -m http.server 8000` and visit [localhost:8000](http://localhost:8000/).

## Publish on GitHub Pages

The site is hosted at [yashsolanki2007.github.io/portfolio-website](https://yashsolanki2007.github.io/portfolio-website/). GitHub Pages publishes from the root of `main`. Push changes to that branch to update the site. The `.nojekyll` file tells Pages to serve the files as written.

## Update the profile photo

Put your photo in `assets/images/`. In `index.html`, update the `src`, dimensions, and alt text in the portrait figure. The frame crops the photo to a square. Adjust `object-position` in `assets/site.css` to change which part of the photo is visible.

## Add a blog post

1. Copy `writing/stochastic-language-models/index.html` to `writing/your-post-slug/index.html`.
2. Edit the title, description, and article. Keep the folder at that depth so the shared stylesheet and navigation paths work.
3. Add a row to the post list in `writing/index.html`. Update the homepage’s **Writing** list if you want to feature the post there.

Keep photos, screenshots, and exported plots in the post’s folder so you can link to them by filename. Use a figure inside the article’s `.prose` block.

```html
<figure>
  <img src="training-curve.png" width="1200" height="720"
       loading="lazy" alt="Validation loss fell from 2.4 to 1.7 over 5,000 steps">
  <figcaption>Validation loss across training steps.</figcaption>
</figure>
```

The StochTune post uses PNG figures from the project and renders LaTeX with the local MathJax 3.2.2 files in `assets/mathjax/`. Use `\(...\)` for inline math and `\[...\]` for display math. Escape `&` as `&amp;` inside HTML.

## Add a photo to the album

Put a web-sized photo and a smaller thumbnail in `assets/photos/`. Copy a photo figure in `photos/index.html` and update its link, thumbnail, dimensions, alt text, and caption. The larger view follows the order of the figures on the page.
