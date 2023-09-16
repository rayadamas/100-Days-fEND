# [9/15/2023, 17:00-19:38]
- **Today's Progress**: tree structures, #HTML_element_inline #HTML_attribute_style vs. #HTML_document_head_style. beginning of #CSS tags. 
- **Thoughts:** my note taking style is almost always in a tree structure, its just what i gravitate to. made the clear distinction between style in the #HTML_document_head and style as an attribute #HTML_attribute_style. trying to decide how to orient my public #HTML files such that i can read the raw code myself but it's also displaying what i intend correctly w/o breaking or becoming a mess. ran back into the confusion properly categorizing each part of a CSS declaration in what is the #CSS_selector, what is the #CSS_property, what is the chosen #CSS_value, then recalling that they're referred to differently btwn #HTML & #CSS, but such was still never succinctly stated in the HTML lessons. the work gets more tedious, huzzah!
---
# [Tree Structure](https://www.youtube.com/watch?v=AZ4THCDB6ho)
- Importance of Understanding Tree Structures:
	- Common in computer science and programming.
	- Essential in understanding computer languages.
	- Appears frequently in code structures, including HTML.
- Basic Terminology:
	- **Tree**:
		- A data structure with a hierarchy of elements.
	- **Node**:
		- Individual elements within a tree (e.g., words in boxes in the given example).
	- **Branch**:
		- Connects nodes, representing relationships between them (e.g., arrows in the given example).
	- **Root**:
		- The starting point or topmost node in a tree from which other nodes descend.
	- **Children**:
		- Nodes that descend from another node.
	- **Parent**:
		- A node from which other nodes descend.
		- Understanding Tree Relationships:
			- Nodes have connections indicating relationships (e.g., "this is inside that").
				- The root node has no parent, while other nodes have exactly one parent.
					- Nodes can have any number of children, depicted through branching out connections.
- Practical Examples:
	- Listing items in an apartment with hierarchical relationships.
	- HTML elements and how they are structured in a document.
		- Root: HTML element.
			- Children: #HTML_document_head and #HTML_document_body elements, etc.
- Flexibility of Tree Representations:
	- Can be depicted visually with diagrams but not restricted to visual representation.
		- Information organization tool rather than a graphical structure.
- Usage in Various Contexts:
	- Creating outlines for papers.
		- Developing presentations with bullet points.
			- Categorizing items with subcategories.
- Rules Governing Tree Structures:
	- Begins with a root node.
		- Nodes can have multiple references or branches to other nodes, denoting children.
			- Each node, besides the root, has one parent and can have multiple outgoing branches, but only one incoming branch.
				- A new branch cannot point to a node already present within the tree structure.
- Prevalence in Computing:
	- Present extensively in various computing elements.
	- Examples include the #DoM (Document Object Model) in HTML.
	- Visible within the elements tab on developer tools, representing a reconstituted version from the DOM tree, different from the original HTML source code.
- Importance in Future Computing Endeavors:
	- Tree structures are omnipresent in computing and will continue to be encountered regularly.
	- A foundational concept beneficial for progressing in the computing field.

==N==
# [Trees to Boxes](https://www.youtube.com/watch?v=fB3gUCkS0TI)
- Understanding Browser Rendering of HTML
	- Conversion of HTML text into a tree structure, known as the DOM (Document Object Model).
	- Transformation of the DOM tree structure into a visual representation on the screen.
- Utilizing Developer Tools for Exploration
	- Loading and inspecting sample HTML pages with developer tools.
	- Correlation between the tree structure of the HTML and the visual representation on the webpage.
- Elements and Box Model
	- Rendering of the "OL" element as a large box encompassing the full width of the page.
	- Inclusion of smaller "LI" elements inside the large box, each taking up about a fifth of the page.
	- Insight into the box model through the Style pane in developer tools, illustrating elements like margin, border, and padding.
	- Connection between CSS properties (e.g., margin 20px) and the space around the elements (margin).
- The Role of CSS in Layout Control
	- Initial conversion of HTML text to a tree structure by the browser.
	- Transition from the tree structure to a two-dimensional layout on the screen.
	- Layout dictated by the arrangement of boxes within boxes, controlled by the tree structure and CSS.
	- HTML code consistently translates to the same tree structure, which then forms boxes - one large box containing smaller boxes.
	- Flexibility in layout design through CSS, including control over the vertical or horizontal orientation and color adjustments of the boxes.

- Here's the HTML and CSS for the example shown in the middle of this video:
```<!DOCTYPE html>
<html>
  <head>
    <title>Listy list</title>
    <style>
      p { color: red; }
      ol { display: flex; }
      li { margin: 20px; }
    </style>
  </head>
  <body>
    <p>These are some red red words.</p>
    <ol>
      <li>Apple apple berry berry sauce sauce sauce.<br>
          Cook it on the stove and serve it to your boss.
      <li>Betty bought a bit of butter,
          but the butter's burning bitter.<br>
      <li>Crisp cookies claim Charlie's cookout crown.<br>  Clever Clara
          clocked the crows at <em>c</em> (clearly connivance!)
      <li>Daring drivers drove down Devil's Ditch in Dodges.
      <li>Evil eggs explode everywhere. Eww!
    </ol>
  </body>
</html>
```

==N==
# [Styling HTML Directly](https://www.youtube.com/watch?v=7jNe0CduTXI&t=1s)
- **Application of Style to Individual Nodes**:
	- Using the #HTML_attribute_style, one can add specific styles directly to HTML opening tags.
		- This method involves visiting each node of the DOM tree and adding the necessary style.
			- _Example_:
				- Turning all list items green by adding the style attribute (`style="color: green"`) to each `<li>` element in the HTML.
- **Drawbacks of Inline Styling**:
	- _Repetitiveness_:
		- This approach can be incredibly repetitious as it involves applying styles to each element individually.
			- **Don't Repeat Yourself (DRY) Principle**:
				- This principle emphasizes avoiding repetition to save time and reduce the possibilities of errors.
				- It promotes more efficient coding practices.
	 - _Error-prone_:
		- Mistakes are hard to catch since they can occur in many places, making the process less efficient and potentially leading to inconsistencies.
	- _Difficulty in Maintenance_:
		- Altering the styles later can become tedious, as changes need to be applied at each individual instance.
- **Usage of CSS to Overcome Drawbacks**:
	- CSS allows for a more streamlined approach by letting you define styles that can be applied globally within the document, rather than one at a time.
	- Styles can be defined in a central location and applied to specified elements throughout the document, which aids in consistency and maintainability.
- **Implementing CSS Rule Sets**:
	- To use CSS effectively, style information can be pulled out and specified within rule sets.
		- CSS rule sets can be placed in the document's #HTML_document_head element, using a #HTML_document_head_style element.
			- The styles defined within this #HTML_document_head_style element will be applied throughout the document, influencing the color, shape, and layout of the webpage.
				- As the browser interprets the DOM tree to render the webpage, it utilizes these style rules to build up the visual representation on the screen.
- **Centralization of Style Information**:
	- This approach allows for a centralized control over the style information, making it easier to manage, update, and maintain the styles across the webpage.

==end of 1st pomo, 17:53==
==next pomo 18:31==

- When we use the #HTML_attribute_style attribute to create an #HTML_element_inline style, you may have noticed that we use quotes:
	- `<p style="color:blue; text-align:center;">Hello!</p>`

- In fact, we seem to be using quotes whenever we have an **attribute value** (remember, the attribute _value_ is the part that comes after the `=` sign).
	- For example, when we make a link, we put quotes around the ==value== of the #HTML_element_a_href attribute:
		- `<a href="https://www.udacity.com">Udacity</a>`

==N==
# Styling HTML Separately
- OK, so you've tried out #HTML_element_inline styles that use the #HTML_attribute_style;
	- now let's look at how to apply styles using the #HTML_document_head_style element.

```
<!DOCTYPE html>

<html lang="en">

  <head>

    <title>CSS Notes</title>

  </head>

  

  <body>

   <h1>Element and Inline Style</h1>

   <style>

     p {
       color: green;
       text-align: center;
     }
     em {
       color: paleturquoise;
     }
   </style>


   <p>I love <em>V</em>!</p>

  </body>
```

# [CSS Syntax](https://www.youtube.com/watch?v=5LuhV8WNLc4)
- A CSS rule-set consists of two main components:
	- a #CSS_selector and a #CSS_declarationblock.
		- #CSS_selector:
			- The selector indicates which HTML element(s) the rule will affect.
				- For instance, in the example provided, the selector "li" would apply the rule to all list item elements.
		- #CSS_declarationblock:
			- The declaration block, enclosed within curly braces, specifies the modifications to apply to the selected elements.
			- If a block contains one or more declarations, also referred to as rules.
				- Each declaration within the block comprises two parts:
					- #CSS_property:
						- A descriptive name that indicates the aspect of the element that the rule will affect, such as:
							- "width"
							- "color"
							- "font-size"
					- #CSS_value:
						- Following a colon (:), this part designates the new attribute that the property should take on:
   - style
     - p==selector== {
       - color==property==: green;
       - text-align: center==value==;
     - }
     - em {
       - color: paleturquoise;
     - }
   - style
		- A semicolon (;) is used to mark the end of each rule within the declaration block.
	- Examples of CSS rule-sets:
		- Selector “p”:
			- Targets all paragraph elements within the document, modifying them according to the declarations specified in the block.
		- Selector “em”:
			- Affects all elements that have a class attribute equivalent to "em".
				- Individual declarations are structured as "property: value;"
					- for example "color: purple;" where "color" is the property and "purple" is the value.
	- It's worth noting that the syntax of CSS is distinctly different from that of HTML, which is logical considering their different functions:
		- HTML is utilized to describe a tree structure formed from elements.
			- CSS, on the other hand, identifies specific elements and outlines styles to be applied to them, enabling the customization of element appearances within the HTML structure.

==end of pomo 19:38==

[[Day 6 - Udacity]]