# [9/17/2023, 18:39-20:30]
- **Today's Progress**: explanation of cascading in context of tree structures, CSS units, and boxes
- **Thoughts:** one of the more pressing days in continuing this streak but we here. made the very important distinction between #CSS_unit_relative & #CSS_unit_fixed. started this lesson in the laundry room away from my text editor so the upload will just be the notes today
---
# [What's So "Cascading" About CSS?](https://www.youtube.com/watch?v=iJI-jUCMgoY)
- The speaker explains that "cascading" refers to the method of defining styles for each node in the DOM tree.
- A style property defined on a node serves as a default style for all of its descendants.
- The speaker illustrates the concept using a hypothetical document body and CSS rules.
- The goal is to determine the color of each text node when displayed in a browser.
- The process involves traversing the DOM tree from the top, applying CSS rules to each node, and inheriting styles from parent nodes.
- The body node has a defined rule that sets white text on a black background.
- Moving down to the h1 node, since there is no specific rule, it inherits the style from its parent node (body).
- The text node "All about" also inherits the style from its parent node, which is h1.
- The em node has two potential rules that could apply:
	- one for "em" and another for "h1 em". The more specific selector, "h1 em", is applied, making the text orange, but it inherits the background color from the higher nodes.
- The text node "CSS" inherits the orange text on a black background style from its parent node.
- On the right side of the tree, the p node has a specific rule that makes it pink, while still inheriting the black background from the body node.
- The styles cascade down to the text node within the p node, but another em node in this branch will be red, as per its specific rule, and this style cascades down to its text node.
- The speaker concludes by emphasizing the cascading nature of CSS, where style properties defined on a node will "cascade" or "spill down" to the node's children and descendants.
- In the given example, the black background color cascaded to every node on the tree, but the text colors only cascaded within specific sub-trees.

```
<html>
<style>
        body { font-style: italic; }
        h1 { color: purple; }
        body { color: green; }
        p { color: orange; }
</style>
<body>
        <h1> This is a very stylish document! </h1>
        <h2> The styles are cascading </h2>
        <p> So what color am I? </p>
</body>
</html>
```

==N==
# [Units](https://www.youtube.com/watch?v=Tfe3jnfMZ08)
- CSS is utilized to alter the layout of elements on a webpage, including modifying their:
	- size
	- shape
	- and positioning relative to each other.
- To discuss the positioning and size of elements, units of measurement are essential
- #CSS_unit
	- In CSS, various units of measurement are used, with the most basic unit being the pixel (px).
	- #CSS_unit_fixed_pixel:
		- Pixels are commonly used in developer tools to measure the size of box elements.
			- A pixel in CSS is not equivalent to a hardware pixel;
				- it is defined as one-ninety sixth of an inch, which was based on the common screen resolution during the standardization of CSS.
					- Despite the American unit basis of CSS measurement, it can be converted to metric units, with 37.8 CSS pixels equating to one centimeter.
	- An example of utilizing CSS units is setting a paragraph element with the class "skinny" to appear two inches wide on the screen, which can be achieved with the declaration:
		- "width: 192 px;".
			- #CSS_class names in CSS are arbitrary and can be chosen for descriptive purposes, such as "skinny" in the example.
	- Other units in CSS include the point (pt)
	- #CSS_unit_fixed_point:
		- a traditional typographic unit used not only for font size but also for other properties.
			- A point is defined as one-seventy second of an inch and is commonly used in word processors to set font sizes.
- Apart from pixels and points, CSS also has relative units like "em"
	- #CSS_unit_relative_Em:
		- which is based on the font size of the text in the element it is applied to.
			- The "em" unit allows for flexible design as it adjusts based on the font size of the text within the element,
				- making it a #CSS_unit_relative as opposed to the #CSS_unit_fixed of #CSS_unit_fixed_pixel and #CSS_unit_fixed_point.
					- `em` is a #CSS_unit_relative unit of measurement, which means it is based on the font size of its closest parent element or the default font size of the browser.
				 - **Scalability**:
					 - Using `em` units can make it easier to create scalable and responsive designs, as changing the font size at a higher level can proportionally affect the sizes of elements defined in `em`.
				- #HTML_element_nest:
					- When `em` units are used in nested elements, the size can compound, potentially leading to unexpectedly large or small sizes.
						- It's calculated based on the font size of the immediate parent element.
				 - **Conversion**: 1 `em` is equal to the computed font size of the element on which it is used. If no font size is defined, it falls back to the browser's default font size, which is generally 16px.
 - #CSS_unit_relative
	- **Dynamic Scaling**:
		- Relative units are dynamic and change based on the size of another element or a user's settings.
	- **Responsive Design**:
		- They are essential for creating responsive designs that adapt to different screen sizes and user preferences.
	- **Accessibility**:
		- Relative units facilitate better accessibility, allowing users to adjust font sizes and other elements according to their preferences without breaking the layout.
	- **Parent-Dependent**:
		- Units like `em` are dependent on the font size of the nearest parent element, which can sometimes lead to complex and unexpected results.
			- **Examples**:
				- Some common relative units are:
					- #CSS_unit_relative_Em,
					- #CSS_unit_relative_rem,
					- #CSS_unit_relative_vw,
					- #CSS_unit_relative_vh,
					- `%`
- #CSS_unit_fixed
	- **Static Sizing**:
		- Fixed units are static and do not change in size regardless of the screen size or user settings.
	- **Pixel-Perfect Design**:
		- They allow for pixel-perfect designs, where elements maintain the same size across all devices.
	- **Limited Scalability**:
		- Fixed units can limit scalability and responsiveness, potentially leading to layouts that do not adapt well to different screen sizes or user preferences.
	- **Print Styles**:
		- Fixed units like #CSS_unit_fixed_cm, #CSS_unit_fixed_mm, and #CSS_unit_fixed_in are more suitable for print stylesheets where physical dimensions are required.
	 - **Examples**:
		 - Some common fixed units are:
			 - #CSS_unit_fixed_px,
			 - #CSS_unit_fixed_pt,
			 - #CSS_unit_fixed_cm,
			 - #CSS_unit_fixed_mm,
			 - #CSS_unit_fixed_in
### Comparison
- **Flexibility**:
	- #CSS_unit_relative offer more flexibility for creating adaptable layouts
	- while #CSS_unit_fixed units provide more control over the exact size of elements.
- **Use Cases**:
	- #CSS_unit_relative are generally preferred for web design to ensure accessibility and responsiveness
	- while #CSS_unit_fixed might be used for more static designs or print materials.
- **User Experience**:
	- Using #CSS_unit_relative can enhance the user experience by allowing for more user-friendly and adaptable designs,
	- whereas #CSS_unit_fixed can sometimes lead to a rigid and less accessible user experience.

==N==
# #CSS_box [Boxes](https://www.youtube.com/watch?v=JxcGkKIRhHo)
- The transcript discusses the rendering of HTML elements in a browser, emphasizing that each element is encompassed by an invisible box, which can be manipulated using CSS properties.
	- These boxes are visible when inspecting pages through developer tools.
		- Various properties of these boxes can be adjusted using CSS, including:
		- #CSS_box_width, #CSS_box_height:
			 - defining the dimensions of the box
		- #CSS_box_padding:
			- the space surrounding the contents within the box.
		- #CSS_box_border:
			- the outer line of the box, which can be made visible and styled using CSS (e.g., setting it to a solid green border with a width of 5 pixels).
		- #CSS_box_margin:
			- the space created by the browser between this box and other adjacent boxes.
	- Values for these properties can be set using different #CSS_unit, such as:
		- #CSS_unit_fixed_pixel or #CSS_unit_relative_Em 
- #CSS_box_float is a #CSS_property, which allows for the adjustment of the box's position on the webpage (in this case, making the boxes float to the right side of the page).









































