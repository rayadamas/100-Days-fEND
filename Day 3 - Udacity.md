### Day 0: [9/13/2023, 14:30-]
- **Today's Progress**: reviewed #HTML_element's, the #HTML_element_div, #HTML_element_li, #HTML_element_block & #HTML_element_inline, #HTML_element_nest, #HTML_element_a.
- **Thoughts:** unsure why under my h2 tag the text inside the p element is as big as the heading. i was missing the slash. my recollections of my original time studying this info is flooding back as i progress, not hiccups in 2nd or 3rd pomo, mostly note taking & syntax practice in VSc.

---
---
---
## Margin Around Heading Elements
- Something else you might notice about the above examples is that, like with the `p` element, heading elements create a little bit of space (margin) around themselves.
## Time to Practice!
- In the workspace below, try them out! Note that we _haven't_ shown you the syntax, but it's similar to other elements you've tried. If you get really stuck, try Googling it, or check out our solution below the workspace.

What it does | #HTML_element 
--- | ---
Superscript text. | `sup`
Subscript text. | `sub`
Emphasize text (usually as **boldface**). | `strong`
Emphasize text (usually as _italics_). | `em`
Visually separates a piece of text from the other things around it. | `p`
Adds a line break. | `br`
Makes a headline, or section header, in a document. | `h1`
Highlights text. | `mark`

==N==
# [Block and Inline](https://www.youtube.com/watch?v=9WHu_b98SQQ)
- **HTML Line Break Options:**
	- `br` element:
		- Inserts a line break.
	- `p` (paragraph) element:
		- Contains text and treats it as a separate paragraph with breaks around it.
- #HTML_tag_br:
	- **Type**:
		- #HTML_element_inline
	- **Functionality**:
		- Only introduces a line break in the text.
	- **Visualization**:
		- Does not create any surrounding box or space around the text it breaks.
	- **Usage**:
		- Suitable for a simple line break within a paragraph or text block.
	- **Inline Elements**: 
		- Do not create blocks, they flow along with the text in which they are used.
			- Examples:
				- #HTML_tag_br 
				- #HTML_element_Em 
				- #HTML_mark
				- #HTML_element_strong 
				- links
				- images
		- Inline elements — [https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements)
- #HTML_element_p:
	- **Type**:
		- #HTML_element_block
		- **Functionality**:
			- Does more than just containing text;
			- instructs the browser to create an invisible block/box around the text.
		- **Block Characteristics**:
			- Has a defined height and width.
			- Features margins above and below, providing space around the paragraph.
		- **Usage**:
			- Utilized in more complex projects where structure and layout are considered.
		- **Understanding Blocks in Browsers:**
			- **Role**:
				- Essential in determining how the browser arranges text on the screen.
			- **Creation**:
				- Created by block elements, including paragraph elements.
	- **Block Elements**:
		- Create invisible boxes around the content, aiding in layout structure.
			- Examples:
				- lists
				- tables
				- headlines
				- video players
		- Block-level elements — [https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements)
- **Learning Progression**:
	- Further learning will introduce more complex elements and their classifications as block or inline elements.
	- Important for users to gradually understand the distinctions as they undertake more complex projects.

#HTML_element_block | #HTML_element_inline
--- | ---
#HTML_element_p - paragraph |  #HTML_tag_br - line break
#HTML_element_li, #HTML_element_ol, #HTML_element_ul - lists | #HTML_element_Em, #HTML_element_strong - emphasis
h1, h2 - headlines | #HTML_mark - highlighting
video - video player | #HTML_element_a - hypertext link
#HTML_element_div - generic block | img - image
#HTML_element_table - table element | #HTML_element_span - generic inline


==15:35 pomo stop==

==16:12 resume==
## Practice: The `div` Element
- #HTML_element_div:
	- `div` is short for **division**, you can use it to _divide_ up the page into different sections.
	- Like the #HTML_element_p, the #HTML_element_div element has an invisible box around it
		- and just like `p`, it can have a:
			- border
			- a margin
			- a width
			- a height, and so on.
	- But a `p` element is specifically meant to contain text.
	- In contrast, the `div` element is a _generic_ container for whatever other elements you might want to put inside.
		- You can use the `div` element to organize the content and divide the page into sections.
==N==
# [Lists and implied close tags](https://www.youtube.com/watch?v=VpetPm-fu1M&t=4s)
- #HTML_element_embedded
	- Certain HTML elements are designed to be nested within specific other elements.
	- Example:
		- The #HTML_element_li element, which signifies a list item, and needs to be part of a list structure.
			- Understanding the #HTML_element_li 
				- Represents an item in a list, comparable to an item in a shopping list or a component in a table of contents.
				- Cannot exist in isolation, it needs to be a part of a list context.
			- **Types of Lists**
				- #HTML_element_ol:
					- This list type showcases items with:
						- numbers(1, 2, 3, ...)
						- letters(A, B, C, ...)
							- as markers.
				- #HTML_element_ul:
					- In this type, the items are highlighted using:
						- bullets( • )
						- dots(·)
			- **Browser Display Mechanics**
				- The browser needs to recognize the context (either #HTML_element_ol or #HTML_element_ul) to properly display the #HTML_element_li element, i.e., with numbers or bullets.
					- Therefore, the `<li>` elements are restricted to existing within `<ol>` or `<ul>` elements.
			- #HTML_element_nest'ing Lists
				- Lists have the ability to be nested within each other, facilitating the creation of complex structures like detailed outlines or layered task lists.
				- Example:
					- Crafting a detailed task list for a move to California with various steps, including a nested list for "kitchen stuff", demonstrating the nested structure capability.
			- #HTML Shortcuts
				- HTML permits the omission of closing tags for #HTML_element_li elements.
				- The reason behind this is the structural rule:
					- that an #HTML_element_li cannot directly exist within another #HTML_element_li 
						- thus indicating the end of the previous list item when a new `<li>` tag is encountered.
				- Developer Preference:
					- Some prefer to always use closing tags for readability, while others omit them to save file space.
					- However, closing tags for #HTML_element_ul and #HTML_element_ol are ==mandatory== to prevent the browser from including everything following them into the list.
						- The #HTML_element_p element is another example of an element for which the closing tag is optional.
							- You can include the closing tag:
								- `<p>Like this!</p>`
									- Or leave it off:
										- `<p>Like this!`
							- Remember, when you leave off an optional closing tag, it is still _implied_—
								- that is, the browser will figure out where the element should be closed, even though you didn't explicitly tell it.

- Update your `notes.html` file to try out lists—and to explain some of the concepts you just learned.
	- Here are some specific things to try, and some specific questions to answer:
		- [x] Add an ordered list #HTML_element_ol.
		- [x] Add an unordered list #HTML_element_ul.
		- Which two elements (that you've learned about so far) have optional closing tags?
			- #HTML_element_li, #HTML_element_p 
		- When you leave off a closing tag, how does the browser know when to close that element?
			- it doesn't, the browser will not know when our list ends. It will simply treat everything that comes after that point as part of the list.

==N==
# #HTML_element_nest #HTML_element_li Nested Lists
Here's a simple list with no nesting:
- Mammals
- Reptiles
- Birds

In the workspace below, see if you can nest additional lists _inside_ this one, in order to achieve a result like this:
- Mammals
    1. Raccoons
    2. Gorillas
- Reptiles
    1. Iguanas
    2. Cobras
- Birds
    1. Ostriches
    2. Ravens

==end of 2nd pomo 17:04==
==3rd pomo 17:32==

# Practice: Indentation
- You may have noticed that code editors sometimes try to help you out with your indentation. For example, when you hit the _enter_ key, editors will sometimes insert an indent at the beginning of the new line.
- Usually this default indentation is good, but sometimes it goes wrong. For example, when you leave off the optional closing tag on a list item `li`, many code editors will indent to the right because they think you're wanting to nest something _inside_ that `li`. That can lead to patterns like this:

```
<ul>
	<li>Yikes!
		<li>This
			<li>keeps
				<li>indenting
					<li>to the right!
</ul>
```
- When that happens, you may have to manually delete some of the extra indentation to clean things up.

==N==

# [Web Addresses](https://www.youtube.com/watch?v=Pi8GLp1oqUc)
- Importance of web addresses in HTML development
- Critical for linking and embedding images
- Understood as URLs (Uniform Resource Locator)
## URL - Uniform Resource Locator
- #URL:
	- A standardized address to locate a specific resource (like a file) on the web.
		- **Uniform**:
			- Indicates the consistency in the addressing system.
		- **Resource**:
			- This pertains to any entity or item that can be identified, located, and accessed through the web address. Resources can vary greatly and include web pages, images, files, and services available through the internet. 
		- **Locator**:
			- This term highlights the URL's role in pinpointing the exact location of a resource within the vast expanse of the internet or a specified network, ensuring precise navigation and retrieval.
### Structure
- **Protocol**:
	- It can be #HTTP or #HTTPS, indicating how the browser should connect to the server (with or without secure encryption).
		- For local files, the protocol is "file".
	- #HTTP:
		- Regular connection to the server
	- #HTTPS:
		- Secure encrypted connection to the server
	- **File**:
		- For accessing files on your local drive
	- **Separator**:
		- Following the protocol, the URL contains a "colon" followed by "double slashes" to separate it from the next part.
			- (`://`)
	- **Domain Name**:
		- Specifies the server the browser needs to connect to.
		- It is not applicable for file URLs as they read directly from your computer.
	- **File Path**:
		- Indicates the directory and file referred to by the URL.
		- It might sometimes be empty or a single slash if linking to the homepage.
### URL Variations
- Different appearances depending on the context (e.g., advertising, web code).
- The browser can sometimes guess the intention if incomplete URL is entered.
- In HTML coding, a comprehensive URL is necessary to avoid misdirection to a wrong file.
### Usage in HTML
- Use fully qualified or #URL_Absolute to prevent errors.
- Ensures the browser receives all necessary information.
- In HTML, be meticulous when writing URLs to prevent the browser from mistaking it for a file name.
## Implications
- **Browser Navigation**:
	- URLs guide browser navigation through links.
- **User Direction**:
	- Users employ URLs to instruct the browser about website destinations.
- **HTML Development**:
	- Utilized when embedding links and images in HTML.
	- Not adhering to URL structures can result in errors in HTML.
	- Awareness of URL structure nuances aids in better web development and user experience.
- When you're linking to the top page (or home page) of a site, the URL does not need a file path after the domain name—so you will just see a single slash at the end of the address:
	- `http://en.wikipedia.org/`
		- And often this slash will be omitted altogether:
			- `http://en.wikipedia.org`
				- This would still be considered a fully-qualified URL.
- In contrast, if we look at the URL for a file on your local system, we _must_ give the file path—in fact, most of the URL _is_ the file path:
	- `file:///Users/Kelly/notes.html`
		- If we took away the file path from the above, we would just have:
			- `file://`
				- Which is definitely _not_ a fully qualified URL.

==N==
# Links and the #HTML_element_a Tag(https://www.youtube.com/watch?v=DFuvX-RocVo)
- Introduction to Hypertext
	- #HTML_Hypertext:
		- Allows textual documents (like web pages) to have references or links between them.
			- Usage:
				- Forms the basis of the web, facilitating linking to various web pages, including one's own or others'.
			- Implementation:
				- Predominantly utilized in HTML coding to create connections between web pages.
		- **Role of Links in Search Engines**
			- Functionality:
				- Links serve as a primary mechanism in the working of search engines, helping in the navigation from one page to another.
			- User Interaction:
				- Users make use of hypertext whenever they click a link on a webpage.
	- **Creating Links in HTML**
		- #HTML_element_a  : Utilized to create links in HTML.
			- Meaning:
				- Stands for "anchor".
			- Function:
				- Anchors an address to a piece of text on the page.
			- Nomenclature:
				- Despite its function, it is named `<a>` instead of "link".
		- **Attributes of the `<a>` Element**
			- Mandatory Components:
				 - Clickable text: The text that users will click on to follow the link.
				 - URL: The address of the page that the link points to.
		- `href` Attribute:
			- #HTML_attribute_href:
				- An HTML attribute included within the `<a>` tag to specify the URL.
					- Syntax:
						- `href="URL"` where "URL" is the web address to link to.
					- Meaning:
						- Stands for hypertext reference.
					- Usage:
						- Exclusively used with `<a>` and a few other tags that link to documents; not found in paragraph or emphasis tags.
		 - Structure of an #HTML_element_a
			- Opening Tag:
				- Includes the #HTML_attribute_href to specify the URL to link to.
			- Content:
				- The clickable text that will be displayed on the webpage.
			- Closing Tag:
				- Marks the end of the `<a>` element; does not contain any attributes.
	 - **Conclusion on Making Links in HTML**
		- Simplicity:
			- Creating links in HTML is straightforward.
				- Summary of Steps:
					- Utilize the #HTML_element_a element with a start and end tag.
					- Include the #HTML_attribute_href attribute in the start tag to specify the URL.
					- Add clickable text between the start and end tags.
						- Note: The `href` attribute only appears in the opening tag.
					- **Examples**
						- Example Syntax:
							- `<a href="http://example.net">Text to Click</a>`
						- Explanation:
							- In this example, "[http://example.net](http://example.net/)" is the URL, and "Text to Click" is the clickable text that will be displayed on the webpage.


==end of 3rd pomo 18:34==






















