# [9/24/2023, 21:39-23:06]
- **Today's Progress**: working on Aligning & Justifying content. intro into more formal building using grid.
- **Thoughts:** feel like i have an understanding of flexbox moreso. playing w/ the different properties while changing from column/row help crystalize the lessons. next will be putting it together in a mock blog landing page. started the html for such & have a skeleton i can work on tmrw.
---
# [Aligning & Justifying in Action](https://www.youtube.com/watch?v=Ois3sh2AAQw)

#### Working with #CSS_property_justify-content
- The speaker is looking at the `justify-content` page in the documentation.
- Different possibilities for `justify-content`:
    - `start`
    - `center`
    - `space between`
    - `space around`
    - `space evenly`
- Demonstrates the effect of changing the #CSS_property_justify-content property:
	- `justify-content start`:
		- All boxes move to the start.
	- `justify-content space around`:
		- Boxes are evenly distributed with space in between each.
	- `justify-content space evenly`:
		- Boxes are evenly distributed.
#### Working with #CSS_property_align-items
- The speaker creates more boxes to demonstrate `align-items`.
- Different possibilities for `align-items`:
	- `stretch`
	- `start`
	- `end`
- Demonstrates the effect of changing the #CSS_property_align-items property:
	- `align-items stretch`:
		- Boxes stretch across the entire width of the container.
	- `align-items end`:
		- Boxes align to the end.
	- `align-items start`:
		- Boxes align to the start.
		- `align-items` and `justify-content` act differently based on the `flex direction`.
- #CSS_property_align-items & #CSS_property_justify-content work differently based on whether working w/ columns or rows
#### Flexbox
- Flexbox allows for easy alignment and distribution of boxes.
	- Boxes redistribute themselves to occupy space when some are removed.
		- Flexbox presents many possibilities for aligning and distributing elements.
#### CSS vs JavaScript
- Discussion on using CSS and JavaScript for manipulating elements on the DOM.
	- #Javascript is a more complex language that allows dynamic possibilities.
		- CSS is simpler and can also be used to achieve similar effects.
			- The speaker encourages learning both tools to make an informed decision on when and how to use CSS vs JavaScript.

```
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Align Items | Justify Content</title>
 <style>
  .container {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   border: 5px solid black;
  }
  .box {
   width: 250px;
   height: 100px;
   border: 2px solid silver;
  }
 </style>
</head>

<body>
 <div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
 </div>
</body>
</html>
```
==N==
# [Building Layouts with Grid](https://www.youtube.com/watch?v=o961IzxE_YY&t=2s)
- CSS Grid can be used to setup multiple displays within a single site.
	- In the previous demo we used to CSS Grid to create a blog home page and an individual page for blog posts.
		- Separate pages within a web app can be stored in the same folder and linked to each other using #HTML_element_a tags to create links with the name of the file as the target.
			- For example, in a file `index.html` you could use the following code to link to another file in the same directory named `go.html`:
```
<a href="go.html">Go to page</a>
```

==N==
## blog-index.html
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

```


























































