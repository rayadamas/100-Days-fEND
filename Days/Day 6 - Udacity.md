# [9/16/2023 19:45-20:50]
- **Today's Progress**: #CSS_selector, #CSS_selector_type, #HTML_attribute_class, #HTML_attribute_ID.
- **Thoughts:** did housework so this is a late start & also a slightly rushed session since i haven't eaten a proper meal yet. getting more challenging w/ the introduction of new vocab to keep in order. make a simple page w/ a to-do list so i could work the fingers. thanks to #ChatGPT i have perfect clarity on how to regard my hashtagging of the aforementioned which is a point of confusion for me, i know that there's a symbiosis between html & css but i don't want to lock in my head something incorrect like for example hashtag: CSS element, cuz that's not a thing.
---
# [Selectors: Type](https://www.youtube.com/watch?v=i3lHUbFi7YI&t=1s)
- #CSS_selector_type is the simplest kind of selector.
	- It indicates the name of one type of HTML element (such as `em` or `li`).
- In the below example, the type selector would be `li`.
```
li {
   font-size: 10px;
   margin-bottom: 10px;
}
```
- The types of CSS selectors are varied, but the focus here is on a select few.
- #CSS_selector_type:
	- A fundamental kind of selector is the type selector
		- defined by naming a specific #HTML_element:
			- like #HTML_element_p,
			- #HTML_element_Em,
			- #HTML_document_body,
				- Utilizing the "body" selector will impose the rule on the entire HTML document body.
		- Type selectors are instrumental when a style needs to be implemented extensively on a webpage.
			- Especially beneficial when crafting articles with numerous section headings (e.g., h1, h2), allowing a singular CSS selector to modify all elements of a chosen type.
				- Despite the broad scope of a type selector, individual CSS rules are required for each specific headline element type (h1, h2, etc.)
					- with each rule targeting and modifying the respective elements distinctly.

==N==
# [Selectors: Class and ID](https://www.youtube.com/watch?v=jR1m3gU-iBs)
#### #HTML_document_head_style Styling
- Not all elements of the same type should be styled in the same way.
	- Different styles might be necessary for elements within distinct sections (e.g., article body vs sidebar).
		- Utilize special attributes like class or id to differentiate styles.
#### #HTML_attribute_class
- **class** in HTML is an attribute that groups elements together that you want to have the same style.
	- In the below example, the class selector would be `.navigation-links`.
```
.navigation-links {
   font-weight: bold;
   color: aqua;
}
```
- A **class** is a group of things with the same characteristics.
	- To create a class, you need to use the attribute "class" in the HTML opening tag.
		- Then in your CSS, you use the same name you gave the class attribute in your HTML, except you place a `.` in front of it.
- Example:
```
//HTML
<div class="container">
    <p> I'm inside a container! </p>
</div>

//CSS 
.container {
   border: 1px solid black; 
}
```
- In this example, the class name is `container`.
	- Any element with the class attribute `container` will receive the styling of `border: 1px solid black;`.
		- So for example, if you added `class="container"`to the paragraph element, that would also get this same styling.
- Common terminology in computing to describe a group with similar characteristics.
	- In HTML, it helps in categorizing elements that require similar styling.
		- Creating a class:
		    - Invent a name for the class.
		    - Add the class attribute to the necessary HTML elements.
		    - Develop a CSS rule set with the class name.
		    - Use a #CSS_selector that begins with a dot (.) to apply the CSS rule set to the class.
				- Suitable when several elements on the page require the same styling.
#### #HTML_attribute_ID
- **id** is an attribute that must be unique to a single element, used to identify it.
	- In the below example, the ID selector would be `#footer`.
```
#footer {
    width: 100%; 
    background-color: purple;
}
```
- An **ID** is when you'd apply characteristics to _one_ element.
	- To create an ID, you need to use the attribute `id` in the HTML opening tag.
		- Then in your CSS, you use the same name you gave the id attribute in your HTML, except you place a `#` in front of it.
```
//HTML
<h1 id="main-heading"> Welcome to My Page! </h1>


//CSS 
#main-heading {
   background-color: orange;
}
```
- Used when only one element on the page needs a particular style.
	- It signifies a unique identifier; hence only one element can possess a specific id.
		- Creating an id:
			- Devise a unique name for the id.
			- Implement the id attribute on the HTML element.
			- Create a CSS rule set with the id name.
			- Utilize a #CSS_selector that starts with a hash mark (#) to apply the CSS rule set to the id.
				- Ensures clarity by demarcating the single element requiring unique styling.

#### Key Differences Between #HTML_attribute_class and #HTML_attribute_ID 
- #HTML_attribute_class
	- For grouping elements with similar styles.
	- Multiple elements can share the same class.
	- Selector starts with a dot (.).
- #HTML_attribute_ID 
	- For identifying a unique element.
	- Only one element can have a particular id.
	- Selector begins with a hash mark (#).
#### Recap
- **Class** and **ID** are powerful tools in HTML and CSS to define and differentiate styles.
- Choose between class and id based on the number of elements that need to apply a particular style rule.
- The naming of both class and id values is flexible, allowing you to invent them based on your requirements.
### ==If you want to apply a style to more than one element, you should _always_ use a class. You should _only_ use an ID to style _one_ element. IDs are unique.==
## CSS Selectors: Class and ID
- The distinction between a class and an ID can be a bit confusing, so let's review them both.

==N==
# [Selectors: Combining](https://www.youtube.com/watch?v=KDr6KAfhTOk)
- Combining Selectors in CSS
	- Allows for more specific styling rules
		- Example given:
			- Styling emphasized text to appear red but only when it is within a list item
				- Creating a Combined Selector
					- In the selector portion of the rule:
						- Start with the selector for the parent element #HTML_element_li 
							- Follow with the selector for the child element #HTML_element_Em 
								- Together, this forms a combined selector targeting `em` elements that are children of `Li` elements
				- Effect of applying this combined selector:
					- The `em` elements inside list items (`Li`) turn red
						- `em` elements outside of list items retain their original styling
				- Syntax of a Combined Selector
					- Utilize a space to denote the relationship between selectors
						- Format:
							- "Parent Selector" space "Child Selector"
								- Known as the "descendant selector"
- Learning More about CSS Selectors
	- CSS offers a variety of other selector types
- Reference Material:
	- Mozilla CSS documentation for further exploration and understanding of various selectors available in CSS

[[Day 7 - Udacity]]
