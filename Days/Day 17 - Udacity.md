# [9/27/2023, 22:06-23:07]
- **Today's Progress**: Multiple Breakpoints cont'd. Responsive layouts. 
- **Thoughts:** the workspace's are still undergoing maintenance apparently smh. working on nested grid structure w/o a reference point, got p far but am unsure why my image box orient is off and spanning outside the container. will fix later. 
---
# Building Responsive Layouts with Flexbox & Grid
- One of the most useful features of #CSS_grid is that you can easily nest grids inside each other to create elegant, complex layouts.
	- To nest CSS grids simply set the #CSS_property_display property of the container element to `grid`
		- then select the child grid item you want to make the nested grid and set the `display` property of that element to `grid` as well!

==N==
# [Nesting Grids in Practice](https://youtu.be/gm7cZatnBuc)
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Nested Grid</title>
    <link rel="stylesheet" href="./nestedgridcss/nestedgridstyles.css" />
    <style>
      #nestedGrid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        grid-gap: 10px;
        border: 3px solid black;
      }
      .photoBox {
        width: 250px;
        height: 150px;
        border: 1px solid red;
        background: yellow;
      }

      #one {
       background-image: url('./imgs/9aa35bae-7162-42ec-ae5f-f009270b287c_680x603.webp');
       background-size: contain;
      }
      #two {
        background-image: url('./imgs/A\ Rei.png');
        background-size: contain;
      }
      #three {
        background-image: url('./imgs/eclipse.png');
        background-size: contain;
      }
      #four {
        background-image: url('./imgs/IMG_3927.jpg');
        background-size: contain;
      }
    </style>
  </head>
  <!-- Create nested grid in content -->
  <!-- make that grid an image gallery -->
  <body>
    <div class="container">
      <div class="header box">Header</div>
      <div class="sidebar box">Blog Posts</div>
      <div class="content box">
        <div id="nestedGrid">
          <div id="one" class="photoBox"></div>
          <div id="two" class="photoBox"></div>
          <div id="three" class="photoBox"></div>
          <div id="four" class="photoBox"></div>
        </div>
      </div>
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
```













































