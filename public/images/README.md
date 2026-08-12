# Images

Drop real project images here — the site falls back to a striped
placeholder automatically for any file that doesn't exist yet, so you
can add these whenever they're ready without touching any code.

```
images/
  favicon.svg
  work/
    xr/
      thumb.jpg     ← used on the "Selected Work" card (grid, ~200px tall)
      hero.jpg      ← used at the top of the case study page (~420px tall)
    talkable/
      thumb.jpg
      hero.jpg
    skoleplan/
      thumb.jpg
      hero.jpg
```

To add a new project's images, create a new folder under `work/<slug>/`
with `thumb.jpg` and `hero.jpg`, matching the `slug` you use in
`src/data/projects.ts`.

Recommended sizes: `thumb.jpg` ~800×600px, `hero.jpg` ~1600×900px.
JPG/PNG/WebP all work — just update the file extension in
`src/data/projects.ts` (`images.thumb` / `images.hero`) if you don't
use `.jpg`.
