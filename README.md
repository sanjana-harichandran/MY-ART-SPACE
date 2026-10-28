# Sanjana — Portfolio

A one-page portfolio site written in plain HTML, CSS and JavaScript, with no build step.

## Adding your content
1. Put images in `assets/images/` and MP4 videos in `assets/videos/`.
2. Open `script.js` and edit the `PORTFOLIO` object at the top: your email, social links, about text, and the `work` list.
3. Replace everything in `[brackets]`.

Example work item:
```js
{ type: "video", title: "First week in Berlin", tool: "CapCut", desc: "Filmed & edited a day-in-the-life reel", img: "assets/images/reel1-cover.jpg", video: "assets/videos/reel1.mp4", stat: "4.1k views" }
```
For an Instagram reel, set `link: "https://instagram.com/reel/..."` and `img` to a screenshot of it. Clicking the card opens the reel.

## Publishing on GitHub Pages
1. Create a new repository on GitHub named `portfolio`.
2. Upload all the files (index.html, style.css, script.js, assets/).
3. Go to Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / root → Save.
4. After about a minute your site is live at `https://<your-username>.github.io/portfolio/`.
