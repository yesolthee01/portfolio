# Images

Drop real project images here — the site falls back to a soft glass
placeholder automatically for any file that doesn't exist yet, so you
can add these whenever they're ready without touching any code.

```
images/
  favicon.svg
  work/
    midnight-carnival/
      thumb.jpg     ← used on the "Selected Work" card (grid, 4:3 crop)
      hero.jpg      ← used at the top of the case study page (~400px tall, full width)
    outdoor-dome/
      thumb.jpg
      hero.jpg
    talkable/
      thumb.jpg
      hero.jpg
    seoul-xr-research/
      thumb.jpg
      hero.jpg
    skoleplan/
      thumb.jpg
      hero.jpg
```

To add a new project's images, create a new folder under `work/<slug>/`
with `thumb.jpg` and `hero.jpg`, matching the `slug` you use in
`src/data/projects.ts`.

Recommended sizes: `thumb.jpg` ~800×600px (4:3), `hero.jpg` ~1600×900px
(landscape works best — it's displayed at a fixed height, full width).
JPG/PNG/WebP all work — just update the file extension in
`src/data/projects.ts` (`images.thumb` / `images.hero`) if you don't
use `.jpg`.

Note: the old `work/xr/` folder is unused (the project's slug is
`seoul-xr-research`) — safe to delete once `seoul-xr-research/` has
its images.
