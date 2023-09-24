# [9/22/2023, 12:07-13:03, 13:44-14:36]
- **Today's Progress**: #CSS_grid-template-area. made a blogsite skeleton using #CSS_grid. intro to #CSS_unit_fr & #CSS_function_repeat. 
- **Thoughts:** getting a session in before outside activities. very drowsy BUT i'm understand the instructor assigned to explain these areas of CSS WAAAY more than i did initially. that tacit knowledge & recall is invaluable as a developer fr.
---
### Grid Areas Summary
- #CSS_grid-template-area is the property used to name the rows and columns of a grid and to set its layout. It could look like this:
```
.container {
      display:grid;
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: 250px 600px;
      grid-template-areas: 
      "hd hd hd hd hd hd hd hd"
      "sd sd sd main main main main main"
      "ft ft ft ft ft ft ft ft";
  }
```
- The named areas in the grid are then assigned to each element according to where you want them to be displayed in the grid:
```
.header {
  grid-area: hd;
}
- In the example above the element with the class `header` will stretch across the entire first row of columns because we have assigned it the `grid-area` `hd`, and we have defined the area `hd` with the value for `grid-template-areas` in the parent element.
```
==N==
# Working with Grid Areas II
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>grid area practice II</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <style>
      .container {
        display: grid;
        grid-template-columns: 100px 300px 300px;
        grid-template-rows: 250px 600px;
        grid-template-areas:
          "hd hd hd hd"
          "sd main main main"
          "ft ft ft ft";
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

      .main {
        grid-area: main;
      }

      .footer {
        grid-area: ft;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="header box">Header</div>
      <div class="sidebar box">Sidebar</div>
      <div class="main box">Main</div>
      <div class="footer box">Footer</div>
    </div>
  </body>
</html>
```
# [Advanced Grid](https://www.youtube.com/watch?v=9LtYAHKDq2A&t=2s)
- CSS Grid includes advanced capabilities for creating large and complex grids. Some of these are:
	- the `fr` Unit #CSS_unit_fr
		- https://www.digitalocean.com/community/tutorials/css-css-grid-layout-fr-unit
	- Track listings with `repeat()` notation
	- Track sizing and `minmax()`
- #CSS_unit_fr:
	- a fractional unit and ==1fr== is for 1 part of the available space
	- you can mix ==fr== values with fixed and percentage values. The ==fr== values will be divided between the space that’s left after what’s taken by the other values
	- Can be used more than once.
	- Can be split to distribute space evenly.
```
.container {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 200px 100px;

  grid-template-areas:
        "head head2 . side"
        "main main2 . side"
        "footer footer footer footer";
}

The 4 columns each take up the same amount of space.
```

==end of 1st pomo==
- #CSS_function_repeat:
	- allows you to repeat a pattern of columns or rows a specified number of times.
	- It's a way to simplify and condense your grid definitions, especially when you have repetitive patterns.
		- **Benefits**:
			- **Simplification**:
				- It reduces the verbosity of your CSS when defining grids with repetitive patterns.
			- **Flexibility**:
				- Combined with other grid functions and keywords, it offers a powerful way to create responsive and dynamic grid layouts.
```
repeat(count, value)
- `count`: The number of times to repeat the pattern.
- `value`: The value or pattern to repeat. This can be a length, a percentage, or a combination of different track sizes.
```
- **Examples**:
 - **Repeating Fixed-Size Tracks**:
	 - If you want to create a grid with 4 columns, each 200 pixels wide, instead of writing:
```
grid-template-columns: 200px 200px 200px 200px;
```
- **Repeating Mixed Patterns**:
	- If you want a pattern that alternates between a fixed size and a flexible fraction of the available space, you can do:
```
grid-template-columns: repeat(3, 1fr 200px);
1. This will create a grid with 6 columns: 1fr, 200px, 1fr, 200px, 1fr, 200px.
```
- **Repeating Auto-Fill and Auto-Fit**:
	- The `repeat()` function can also be combined with `auto-fill` or `auto-fit` keywords to create a responsive number of tracks that fit the container's size:
```
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
This will create as many columns as can fit into the container, each at least 200 pixels wide but stretching to take up any extra space if available.
```

- #CSS_grid_autorowas:
	- a #CSS_property in the #CSS_grid Layout specification that defines the size of rows that are automatically created in a grid container.
	- This comes into play when there are more grid items than rows defined in `grid-template-rows`.
```
grid-auto-rows: <track-size>
`<track-size>` can be a length (e.g., `100px`), a percentage, a fractional unit (`fr`), or a combination of these.
```
- **Usage**:
 - **Fixed Size**:
	 - If you want all automatically created rows to be a fixed size, you can set:
```
grid-auto-rows: 150px;
```
- **Flexible Size**:
	- If you want the automatically created rows to distribute available space equally:
```
grid-auto-rows: 1fr;
```
- **Minimum and Maximum Size**:
	- With the `minmax()` function, you can set a minimum and maximum size for the automatically created rows:
```
grid-auto-rows: minmax(100px, auto);
Here, each row will be at least `100px` but can grow to fit its content due to the `auto` value.
```
- **Example**:
	- Imagine you've defined a grid with three explicit rows using `grid-template-rows`:
```
grid-template-rows: 1fr 2fr 1fr;
```
- But let's say you have more than three grid items #CSS_selector_child/descendant in your grid container.
	- Any additional grid items beyond the third will automatically create new rows.
		- The size of these new rows will be determined by the `grid-auto-rows` property.
- If you set:
```
grid-auto-rows: 50px;
```
- Then the fourth grid item, fifth grid item, and so on, will each sit in their own 50px tall row.

==N==
# Introducing #CSS_flexbox 
- To use flexbox set the #CSS_property_display property of a #HTML_element_div to `flex`.
	- The items inside that element will automatically become flex items, and you can then use the flexbox syntax in your CSS code.

==end of 2nd pomo==



























