# [9/25/2023, 20:39-21:41]
- **Today's Progress**: made a simple blog
- **Thoughts:** was sick as a dog so this is all i could muster. 
---
# Simple Blog
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./blog-css/blog-index-styles.css" />
  </head>

  <body>
    <div class="container">
      <div class="header box">Header</div>
      <div class="sidebar box">
        <h1>Blog Posts</h1>
        <!-- link to blog posts here -->
        <a href="./blog-post-1.html">Click here for post 1</a>
      </div>
      <div class="content box">Content</div>
      <div class="footer box">Footer</div>
    </div>
  </body>
</html>

.container{
 display: grid;
 grid-template-columns: 300px 300px 300px;
 grid-template-rows: 250px 600px;
 grid-template-areas:
 "hd hd hd hd hd hd hd hd"
 "sd sd main main main main main main"
 "ft ft ft ft ft ft ft ft";
 border: 7px solid black;
}

.box {
 border: 1px solid silver;
 background: goldenrod;
}

.header {
 grid-area: hd;
}

.sidebar {
 grid-area: sd;
}

.content {
 grid-area: main;
}

.footer {
 grid-area: ft;
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Post 1</title>
    <link rel="stylesheet" href="./blog-css/blog-post-styles.css"/>
  </head>
  <body>
    <div class="container">
      <div class="header box">Header</div>
      <div class="feature box">Feature</div>
      <div class="content box">Content</div>
      <div class="footer box">Footer</div>
    </div>
  </body>
</html>


.container {
 display: grid;
 grid-template-columns: 300px 300px 300px;
 grid-template-rows: 250px 600px;
 grid-template-areas:
 "hd hd hd hd hd hd hd hd"
 "feat feat feat feat feat feat feat feat"
 "main main main main main main main main"
 "ft ft ft ft ft ft ft ft";
 border: 7px solid black;
}
.box {
 width: 100%;
 border: 1px solid silver;
 background: goldenrod;
}
.header {
 grid-area: hd;
}
.feature {
 grid-area: feat;
}
.content {
 grid-area: main;
}
.footer {
 grid-area: ft;
}
```










































