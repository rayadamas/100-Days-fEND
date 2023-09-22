# [9/21/2023, 13:01-14:22, 16:16-17:31]
- **Today's Progress**: intro to #CSS_grid vs #CSS_flexbox. Rows, Columns, gaps & gutters. #CSS_grid_area 
- **Thoughts:** this is where things get annoying esp w/ this series' instructor. again it gets tricky when deciding how to properly tag these syntax keywords. column = vertical, rows = horizontal. the flow of the lectures feels redundant but also out of order at least w/ the naming conventions, idk the concepts aren't confusing me at this point though. had issues w/ the provided workspace loading but i ultimately just reset it which just means re-filling in the code. now working w/ grid areas & the FILA type orient it has: row srt, clm srt, row end, clm end. grid areas is quite confusing, re-watched that last YT vid several times in succession cuz that instructor be speeding.
---
# #CSS_grid vs #CSS_flexbox 
- Flexbox is for how content flows
	- flex works nicely for regions within the grid.
- Grid is for how content is placed
	- grid works nicely for page layouts
# [Example of Grid vs Flexbox](https://www.youtube.com/watch?v=RKnb-f_4h8g)
- **Introduction to Grid and Flexbox Integration:**
	- The discussion revolves around the synergy between grid and flexbox in CSS.
	- The speaker will demonstrate an example and then delve into its construction.
- **Setting up the Grid:**
	- The foundation is a container with a display set to grid.
		- The speaker mentions the configuration of columns and rows, which will be elaborated on later.
			- The grid template areas have been defined for layout structuring.
- **Flexbox within the Grid:**
	- Each individual box within the grid uses the display flex property.
		- The #HTML structure:
			- Contains a container that encompasses three boxes.
				- The container is set to display as a grid.
					- Each of the three boxes inside the container has a display property set to flex.
						- The flex display's primary function in this context:
							- It centers the content within the boxes.
								- Without flex, the content defaults to the top left-hand corner of the box.
- **Content Justification within the Grid:**
	- The speaker observes an uneven distribution of content within the grid, leaning towards the left.
		- Both grid and flexbox offer the "justify content" property to align content.
			- The speaker's goal is to center the content within the grid.
				- After applying the justify content property, the result is:
					- A neatly structured grid with two columns and two rows.
						- All content is perfectly centered.
- **Conclusion:**
	- The synergy between CSS grid and flexbox offers versatile layout possibilities.
		- The example provided showcases just one of the many design configurations achievable with these tools.


#CSS_grid vs. | #CSS_flexbox 
--- | ---
#CSS_grid is two dimensional | #CSS_flexbox is one dimensional
#CSS_grid is layout first | #CSS_flexbox is content first
#CSS_grid is for the app layout itself | #CSS_flexbox is for components of an app
CSS Grid excels at creating layouts for a webpage | Flexbox is a master of content flow for each element that makes up the page layout
- CSS Grid does not replace Flexbox.
	- Each can achieve things that the other is not capable of
		- Aim to use Flexbox and CSS Grid together in harmony to create the ultimate webpage layout.
- [Beginner’s Guide to choosing between CSS Grid and Flexbox](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)
==N==
# Rows & Columns
- **Introduction to CSS Grid**
	- #CSS_grid:
		- a design system specifically for the web.
			- It's a ==two-dimensional system==
				- allowing for organization in both rows and columns.
					- This flexibility means you can achieve almost any layout design.
		- **Key Concepts**
			- **Rows and Columns**
				- The foundation of CSS grid.
					- They intersect to create areas on the grid.
			- **Areas**
				- Formed by the intersection of rows and columns.
					- Can be given specific names for easier reference.
			- **Grid Gap**
				- Refers to the space between rows and columns.
					- Also known as the "gutter".
						- Determines the distance between grid items.
		- **Getting Started with CSS Grid**
			- **Setting the Display Property**
				- The first step is to set the #CSS_property_display property of your container (e.g., a div) to:
					- "grid".
			- **Defining Rows and Columns**
				- Use the #CSS_grid-template-columns and #CSS_grid-template-rows CSS properties.
					- For example, to create a grid with two columns and two rows, you'd define both properties accordingly.
			- **Setting the Grid Gap**
				- Use the #CSS_grid-gap property.
					- Defines the distance between rows and columns.
						- For instance, a `grid-gap` of 15 pixels means there's a 15-pixel space between grid items.
==N==
# [Rows & Columns in Action](https://www.youtube.com/watch?v=Kc8KR4z1ZK0&t=222s)
- #CSS_grid-template-columns:
	- the property that defines the column layout of your grid
		- that is how many sections the page should be divided into vertically
			- The values for this property are:
				- the ==explicit value== for each column
					- the number of columns is defined ==implicitly== by the number of values entered.
						- For example:
							- `grid-template-columns: 60px 60px;`
								- would create two columns of 60px each.
								- If you had two items inside your grid and didn't set their position explicitly, the first item would be placed in the first column and the second item in the second.
						- `grid-template-rows` follows the same logic, so that:
							- `grid-template-columns: 60px 60px;
							- `grid-template-rows: 160px 60px;`
								- would create a grid with two columns and two rows.
- **Introduction to CSS Grid**
	- #CSS_grid:
		- a layout system that allows for the creation of complex layouts with ease.
			- It involves setting up a #HTML_container element with `display: grid`.
				- **Basic Setup**
					- Within the container, there are three #HTML_element_div elements with a #HTML_attribute_class of `box`.
						- By default, CSS Grid provides ==distribution and alignment.==
	- #CSS_grid-gap:
		- The `grid gap` property controls the space between each grid item.
			- It determines the spacing or "gutters" inside the grid tracks.
				- Example:
					- A gap of `50px` places 50 pixels of space between each item.
						- Adjusting to `150px` spreads the items further apart, while `15px` brings them closer.
			- **Tracks and Gutters**
				- #CSS_grid_tracks:
					- Define rows and columns in the grid.
				- #CSS_grid_gutters:
					- The space between tracks.
			- **Columns with Grid Template Columns**
				- #CSS_grid-template-columns property:
					- defines the number and size of columns.
						- Example:
							- To create three columns, input three values like `300px 300px 200px`.
								- If the total width of the columns exceeds the grid's width, the grid needs to be adjusted.
									- Solution:
										- Increase the grid's width, e.g., to `100%`.
			- **Rows with Grid Template Rows**
				- #CSS_grid-template-rows property:
					- defines the number and size of rows.
						- Example:
							- Three rows can be defined as `300px 250px 600px`.
								- Adjusting row heights:
									- Making the first row `600px` means the first box will also be `600px` in height.
										- The second box remains `250px`, and the third box can be reduced to `60px`.
						- Practical Application:
							- Small rows, like `60px`, can be useful for website elements such as footers.

==end of pomo==
# [Grid Areas](https://www.youtube.com/watch?v=gXRvG4nPLfM&t=1s)
- #CSS_grid Overview:
	- Allows for the setting of rows and columns.
		- Enables explicit placement of items within the grid.
			- #CSS_grid_area Concept:
				- Used to define the space that elements occupy across rows and columns.
					- Helps in understanding the placement of items within the grid.
			- **Grid Area CSS Property**:
				- A shorthand property that specifies a particular area or set of rows and columns that a grid item occupies.
				- It is applied to the grid item itself with CSS
					- Represents four individual properties:
						- #CSS_grid-row-start
							- #CSS_grid-column-start
								- #CSS_grid-row-end
									- #CSS_grid-column-end
							- Instead of using these four properties separately, there's an option to use named grid areas.
```
.item{
  grid-area: 1/2/3/3
}
```
- **Named Grid Areas**:
	- Considered one of the most powerful features of CSS grid.
		- Allows for the creation of a grid in code with named spaces.
			- These named spaces can be added to the `grid-area` property of individual items on the grid.
				- Simplifies the process of defining and placing items on the grid.
- #CSS_grid-template-area:
	- A new concept introduced in the transcript.
		- Laid out using strings.
			- Example provided:
				- A grid with two columns on the top and two columns on the bottom row.
					- These defined areas can then be associated with specific items in the grid.
# Working with Grid Areas
- The #CSS_grid_area property:
	- defines the space an element takes up in the grid by setting values for:
		- the row it starts and ends in,
			- and the column it starts and ends in.
				- In practice it could look like this:
```
#one { 
    / *row start/column start/ row end/ column end* /
    grid-area: 1/2/3/3;
  }
  In this example the element with the `id`, `one` would start at the first row and the first column, and end at the third row (which is the end of the second row if there is no third row) and the third column.
```
### [Grid Areas Example](https://www.youtube.com/watch?v=vYnJd53LQB0&t=1s)
```
# Instructions

In the workspace provided, change the size and position of element `one` using the `grid-area` property:
- Make the element stretch all the way across the grid, but only in the first row
- Make the element stretch across all the rows, but only in the first column
- Freestyle - create your own area for the element to occupy...or dare to try adding a second element and setting the placement with `grid-area` as well?

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Exercise 1</title>
    <meta
      content="width=device-width, initial-scale=1, maximum-scale=1"
      name="viewport"
    />

    <style>
      .container {
        /* Step 1: Set display to grid */
        display: grid;
        /* Step 2: setup rows amd columns */
        grid-template-columns: 300px 300px 300px;
        grid-template-rows: 250px 600px;
        /* Step 3: set grid area */
        grid-template-areas:
          "one two three"
          "four five six";
        border: 2px solid black;
      }
      .box {
        border: 1px solid red;
      }
      #one {
        /* set grid-area here: row start/column start/ row end/ column end */
        grid-area:three;
      }
      #two {
        grid-area:one
      }
      #three {
        grid-area:two
      }
      #four {
        grid-area:five;
      }
      #five {
        grid-area:six
      }
      #six {
        grid-area:four
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div id="one" class="box">Space 1</div>
      <div id="two" class="box">Space 2</div>
      <div id="three" class="box">Space 3</div>
      <div id="four" class="box">Space 4</div>
      <div id="five" class="box">Space 5</div>
      <div id="six" class="box">Space 6</div>
    </div>
  </body>
</html>
```















