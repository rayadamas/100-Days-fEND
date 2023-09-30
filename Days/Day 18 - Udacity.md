# [9/28/2023, 16:21-17:46]
- **Today's Progress**: going back over multiple breakpoints, practicing w/ a mobile layout. 
- **Thoughts:** pausing the work on the nested grids to show understanding of media query functionality. i'll be adding to the `blog-index.html` files instead of making a whole new folder & such. troubleshooting the spacing issues on the nested grid html is irritating but i THINK it was the addition of `grid-gap`, however i'm unsure why completely. think i had something labeled as a #CSS_selector_id instead of as a #CSS_class, therefore nothing was happening to it in my CSS sheet. took most of the session to realize this but not a big issue (⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟoh well, probably could've kept the photos in there but its all good. i've finished w/ responsive layout section. 
---
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      charset="UTF-8"
      content="width=device-width, initial-scale=1, maximum-scale=1"
      name="viewport"
    />
    <title>Nested Grid</title>
    <link rel="stylesheet" href="./nestedgridcss/nestedgridstyles.css" />
  </head>
  <body>
    <div class="container">
      <div class="header box">Header</div>
      <div class="sidebar box">Blog Posts</div>
      <div class="content box">
        <!-- Create nested grid in content -->
        <div class="nestedGrid">
          <div id="one" class="photoBox"><h1>Thursday</h1></div>
          <div id="two" class="photoBox"><h1>Summer</h1></div>
          <div id="three" class="photoBox"><h1>Rei</h1></div>
          <div id="four" class="photoBox"><h1>Vanilla</h1></div>
        </div>
      </div>
      <div class="footer box">Footer</div>
    </div>
  </body>
</html>

.container {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 250px 600px;
  grid-template-areas:
    "hd"
    "sd"
    "main"
    "ft";
  border: 2px solid yellow;
}

.nestedGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.nestedGrid > * {
  border: 2px solid aquamarine;
}

.box {
  border: 1px solid red;
  background: goldenrod;
}

.header {
  grid-area: hd;
}

.footer {
  grid-area: ft;
}

.sidebar {
  grid-area: sd;
}

.content {
  grid-area: main;
}

/* if screen is wide enough */
@media (min-width: 900px) {
  .container {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 250px 600px;
    grid-template-areas:
      "hd hd hd hd hd hd hd hd"
      "sd sd main main main main main main"
      "ft ft ft ft ft ft ft ft";
    border: 2px solid red;
  }
}

```
































































