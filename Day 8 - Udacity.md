# [9/18/2023, 18:27-19:23]
- **Today's Progress**: revisiting the #HTML_element_div. working w/ CSS values to make simple boxes to get a bearing of what the different properties are capable of. 
- **Thoughts:** getting real tinkery w/ the values. had to reference [[Day 6 - Udacity]] to recall that a #CSS_selector using the `.` is a class to understand some of the examples. 
---
# #CSS_box con't
## Revisiting the `div` Element
- In the video, you may have noticed that Kelly used the #HTML_element_div element to create the boxes.
	- We looked briefly at the `div` element earlier, but it has been a while—so, let's review the key ideas.
		- #HTML_element_div
			- **It's used to divide up the page.**
				- The name `div` is short for **division**, because that's what this element is for—you can use it to _divide_ up the page into different sections.
					- **It has an "invisible box" around it.**
						- Like the paragraph `p` element, the division `div` element has an invisible box around it—and just like `p`, it can have a border, a margin, a width, a height, and so on.
							- **It is a generic container.**
								- A `p` element is specifically meant to contain text.
									- In contrast, the `div` element is a **generic container**, meaning you can put whatever other elements you want inside.
										- You can use the `div` element to organize the content and divide the page into sections.
			- The basic syntax is super simple:
				- `<div> </div>`
					- And, we can texts inside the div, like this:
						- `<div>   Example </div>`
							- And if we want to apply a style to a div, we can add a #HTML_attribute_class attribute:
								- `<div class="fancybox">   Example </div>`
									- And then, in our CSS, we can use a #CSS_selector with the same name `.fancybox` to add whatever styling we want. Here's the example shown in the video:
										- `.fancybox{   border: 5px solid green;   margin: 1em;   padding: 0.5em;   width: 100px;   height: 50px;   float: right; }`
											- The `div` element is used all the time in HTML to structure web pages, so you'll be seeing a lot more of it as you continue.
#### #CSS_box 
1. Content
	2. #CSS_box_padding
		3. #CSS_box_border 
			4. #CSS_box_margin 

==N==
# [Percentages]()
- In CSS, specifying exact dimensions in #CSS_unit_fixed_pixel or #CSS_unit_relative_Em is often not practical due to the variability in user's browser window sizes.
	- Instead of using #CSS_unit_fixed units, #CSS_percentages can be utilized to define the width or height of an element relative to its container.
		- Setting an element's width to 50% instructs the browser to allocate half of the container's width or height to it.
		    - For top-level elements, this would be 50% of the entire page width.
			    - For nested elements, it would be 50% of the parent element's width.
	- It's important to note that the #CSS_box_width property ==does not== encompass the #CSS_border and #CSS_padding by default.
		- When positioning two elements side by side using #CSS_box_float: left, their combined width should be ==less== than 100% of the container's width to accommodate borders and padding.
	- Percentages in CSS are not limited to defining dimensions; they can also be used to scale properties like font-size.
		- For instance, to emphasize text within a "strong" element further, the font-size can be set to 120%, and the color changed to red.
			- This adjustment means the text will be 120% of the parent element's font-size, regardless of its original size in points.

==N==
# Interpreting percentages

```
<style>
.outer {
        width: 300px;
        border: 5px dotted orange;
}

.inner {
        border: 5px solid blue;
        width: 50%;
}
</style>
<div class="outer">
        <p> This box has a box inside!
        <div class="inner">
                <p> How wide is the inner box,
                <em>including</em> its border?
        </div>
</div>
```
- How wide will the inner box be, _including_ its border?
	- The inner box's content will be 50% the width of the outer box's width, which would be 150px.
		- But the border adds 10px of width — 5px to the left, and 5px to the right.

==N==


