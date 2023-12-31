# [9/26/2023, 20:23-21:28]
- **Today's Progress**: media query intro.
- **Thoughts:** still sickly but we're pushing through. media queries gets a lil confusing so we'll see how this goes. the workspaces are going through maintenance so i can't reference the practice code unfortunately. media queries are clicking in theory however. 
---
# #CSS_MediaQueries(https://youtu.be/To_DE-nL-N4)
- While media queries can be used for a variety of things and in a number of ways, we are going to focus on what are called **breakpoints**, which are the #CSS_viewport width at which we want our design to change.
	- We then write the code inside that media query, with a set breakpoint, that we want to go into effect only when the viewport width that the app is being viewed on is at least the breakpoint width.
		- Only the CSS that we want to change needs to go here - the original CSS rules will all still apply, and only the new CSS rules written inside the media query will override any pre-existing rules.

- #CSS_viewport:
	- the area of the window in which web content can be seen. We use the dimensions of the viewport (usually the width, but sometimes the height) as the basis of our media queries.
==N==
# Adding Media Queries in Code
- Media queries are used to set different style rules for different devices or sized screens.
	- We use breakpoints to set the condition of a media query. The logic is:
```
@media(feature:value)
```
- Here media features are aspects of the device that our media (website) is being viewed on.
	- The media feature we are most interested in for this lesson is #CSS_MediaQueries_width, which allows us to evaluate the viewport width of the browser and set conditions based on that evaluation.
		- We actually write this feature:
			- `min-width` (or `max-width`)
				- because `width` is one of many media features that are range features, which means they can be prefixed with:
					- `min-` or `max-` to express constraints,
						- which is what we're looking for with our breakpoints!
							- If the constraint of the breakpoint (viewport width being in the range below our breakpoint) is broken (the width is larger than the breakpoint) the new CSS rule takes effect.
								- Here is an example of how that could look in action:
```
@media(min-width:900px) {
  body{
   background:red;
 }
}
- In this example if the viewport width is greater than 900px the background of the webpage would turn red.
```
- https://youtu.be/m8oWoQv_li4
- Media queries are used to create responsive layouts using breakpoints.
	- Below is an example of the syntax that is used for creating media queries:
```
@media(min-width:1100px) {
  body{
    font-size: 27px;
  }
}
- In the example above, if the browser width of the webpage being viewed is above 1,100px wide, then the font-size would become 27px.
```
==N==
# [Multiple Breakpoints](https://youtu.be/y3v9X5IJl8E)
- There are some development moments that will call for 3 possible layouts.  
	- A simple example would be creating 2 different breakpoints so that up to x width one set of CSS rules apply,
		- then between x and y width a second set would apply, and then for anything beyond a width of y a third set of CSS rules would apply.  
			- Here is an example of what that code could look like:
```
/ *Anything smaller than first breakpoint 600px* /
.container {
  // rules for small screen
}

/ *Medium Screens* /
@media (min-width: 600px) and (max-width:900px) {
  .container {
    // rules for medium-sized screen
  }
}

/ *Large Screens* /
@media (min-width:901px) {
  .container {
    // rules for large screen
  }
}
- In this example, the medium screens media query is new, and we use the keyword `and` to build a complex media query that evaluates both a min and max to create a range for the CSS rules to apply, in this case if the width of the viewport is between 600px-900px.
```






































