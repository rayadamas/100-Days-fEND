# [9/23/2023, 19:00-20:21]
- **Today's Progress**: Flexbox axes & direction. 
- **Thoughts:** later start in the day but we here. rows/columns correspond w/ horizontal & vertical. whichever is the initially chosen direction is the main character, therefore making the remaining the direction the alternate. worked through a simple html page displaying use of #CSS_flexbox_flex-direction. intro to alignment & justifying content, though i used justify-content in my code already. like yesterday, these lessons are flowing much better than the initial pass-through. no hiccups.
---
# #CSS_flexbox_axis And #CSS_flexbox_direction With #CSS_flexbox (https://www.youtube.com/watch?v=nk746LmofK8&t=68s)
- **Flexbox Overview:**
	- Flexbox is a layout model that allows items to align and distribute space within a container.
		- It's particularly useful when the sizes of your items are unknown or dynamic.
			- **Key Concepts:**
				- **Axis and Direction:**
					- Flexbox operates on ==two== main axes.
					- The flow of content is determined by these axes.
						- #CSS_flexbox_axis_main:
							- Defined by the #CSS_flexbox_flex-direction property.
							- Has four potential values:
								- **Row:**
									- Sets the main axis horizontally (inline direction).
								- **Row Reverse:**
									- Similar to row but in the opposite direction.
								- **Column:**
									- Sets the main axis vertically (block direction).
								- **Column Reverse:**
									- Similar to column but in the opposite direction.
					- The direction of the main axis determines how flex items are laid out in the container.
						- The two ==row== settings will create the main axis horizontally - or #CSS_inline direction.
						- The two ==column== settings will create the main axis vertically - or #CSS_declarationblock direction.
							- `block` or `inline` here refer to the CSS display settings which we have covered previously.
					- The axis determines the flow of your content - you can think of this as being either rows or columns - and they will be determined when you start aligning and justifying content within a flex container.
						- #CSS_flexbox_axis_alternate:
							- Whichever axis is not set as the main axis becomes the alternate axis.
								- It's perpendicular to the main axis.
									- For instance, if the main axis is set to "row" IE horizontal, the alternate axis will be vertical.
					- **Understanding Content Flow:**
						- The axis determines whether your content flows in rows or columns.
							- This is crucial when aligning and justifying content within the flex container.
								- Proper understanding of the axes can help in effectively positioning flex items.
- **In Summary:**
	- By combining the knowledge of axis, direction, and the row/column settings, one can have a comprehensive understanding of how content is positioned and flows within a flex container. This foundational knowledge is essential for effective use of the Flexbox model.
==N==
# Axes and Direction in Action
- To set the layout of the items in a flex container to either a row or column use the `flex-direction` property like this:
```
.container{
  display:flex;
  flex-direction: row
}
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flex-Direction</title>
    <style>
      .container {
        display: flex;
        flex-direction: column;
        border: 5px solid black;
      }
      .box {
        width: 100px;
        height: 100px;
        border: 1px solid silver;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="box">box 1</div>
      <div class="box">box 2</div>
      <div class="box">box 3</div>
    </div>
  </body>
</html>

```
==N==
# Ordering Elements with Flexbox
- There are three ways to explicitly set the order in which items will appear in a grid.
1. Moving the #HTML code for the elements themselves to reorder
2. Appending `-reverse` to `row` or `column` will reverse the order in the specified row or column
3. Using the `order` property of the individual items inside the grid

- #CSS_flexbox_flex-direction_row will lay elements out from left to right.
- But #CSS_flexbox_flex-direction_row-reverse will ==flip== that order and display elements from right to left.
##### [Ordering Elements Demo](https://www.youtube.com/watch?v=iPi0d4d1Rds&t=173s)
- **Introduction to Flex Container and Items**
	- The discussion revolves around a flex container with three items inside it.
		- The current order of the items is box one, box two, and box three.
- **Methods to Reorder Items**
	 - Directly in the #HTML
		- The most straightforward way to change the order of the items.
			- By rearranging the HTML code, the order of the boxes can be changed.
				- Example:
					- Moving the code for box two above box one will result in the order:
						- box two, box one, box three.
	 - **Using the 'Order' Property**
		- The #CSS_property_order property determines the sequence of the flex items.
			- It's a #CSS_unit_relative property, meaning the evaluation is based on the values assigned to each item.
				- If two items have the same order value, their sequence is determined by their position in the HTML.
					- Lower values are placed first.
						- For instance, an item with an order of 1 will be placed before an item with an order of 2.
							- Example:
								- If box three has an order of 1, and both box one and box two have an order of 2, the sequence will be box three, box one, box two.
	 - **Using the 'Flex Direction' Property of the Parent Container**
		- The #CSS_flexbox_flex-direction property determines the #CSS_flexbox_axis_main of the container.
			- 'Row' and 'Row Reverse' are two values of the 'flex direction' property.
				- Row:
					- 'Row' places items from left to right
				- Row-Reverse:
					- 'Row Reverse' places them from right to left
						- Example:
							- With 'flex direction row', the order might be box three, box one, box two.
								- But with 'flex direction row reverse', the order will be box two, box one, box three.
						- **Practical Example**
							- If div three has an order of 1, div two has an order of 2, and div one has an order of 3, the boxes will appear in the sequence: three, two, one.
- **Conclusion**
	- There are three primary methods to reorder flex items: directly in the HTML, using the 'order' property, and using the 'flex direction' property.
		- Understanding these methods provides flexibility in designing layouts with flex containers.
==N==
# Aligning Items & Justifying Content with Flexbox
- To align items on the cross axis use `align-items` with the possible values:
	- stretch
		- flex-start
			- flex-end
				- center
- To justify content on the main axis use `justify-content`, which has the possible values:
	- flex-start
		- flex-end
			- center
				- space-around
					- space-between
						- space-evenly
- The main axis is defined by the #CSS_flexbox_flex-direction property.
	- If you set #CSS_flexbox_flex-direction_row, the main axis runs horizontally,
		- and if you set #CSS_flexbox_flex-direction_column, the main axis runs vertically.
			- The cross axis is perpendicular to the main axis.
				- So, for `flex-direction: row;`, the cross axis is vertical, and for `flex-direction: column;`, the cross axis is horizontal.
					- Properties like `align-items` and `align-self` are used to control the alignment of items along the cross axis.







































