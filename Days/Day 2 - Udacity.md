### Day 0: [9/12/2023 19:04]
- **Today's Progress**: worked through #HTML_Markup, #HTML_tag, paragraphs, #HTML_element_nest, w/ a brief look at headings.
- **Thoughts:** easier flow despite other influences from the day, no hangups or slowdowns besides to edit notes.
- **Link to work:** (https://github.com/rayadamas/100-Days-fEND/blob/main/notes.html)


---
---
---
# [The Job of HTML](https://www.youtube.com/watch?v=3vGEjpM6zwM&t=1s)
## Introduction to HTML
1. **Definition**:
    - **HTML**:
	    - Hypertext Markup Language
    - **Function**:
	    - Forms the building blocks of the web.
    - **Composition**:
	    - Consists of both text (visible to the users) and markup (instructions to browsers on how to display the text).
1. **Components of HTML**:
    - **Text**:
	    - The readable content that appears in the browser.
    - #HTML_Markup:
	    - Directs the browser on how to display text including its arrangement and style.
    - **References**:
	    - HTML can reference other documents and media files such as images and videos.
1. **Example Explanation**:
    - A webpage with a text box and an embedded image or video can be created using HTML.
    - The current video the viewer is watching is embedded in a webpage created with HTML.
2. **Links in HTML**:
    - HTML allows the incorporation of links that connect to other webpages.
	    - Links facilitate the navigation of users from one webpage to another.

## HTML Practice Tutorial
1. **Setting Up**:
    - **Tools Needed**:
	    - Text editor (e.g., VS Code).
    - **File Creation**:
	    - [ ] Create a new file in the text editor for practicing HTML coding.
    - **File Naming**:
	    - Suggested naming it as "testing.html".
1. **Working with Multiple Files**:
    - **Multi-tasking**:
	    - The text editor allows working on several files simultaneously.
    - **Saving Work**:
	    - Always save the changes made to each file before moving to the next.
1. **Rendering HTML Files**:
    - **Opening HTML Files in Browser**:
	    - Drag the file icon onto the browser window or use the 'Open File' command in browser menus to view the HTML file.
1. **Understanding Text and Markup**:
    - **Plain Text**:
	    - When rendered, appears the same in the HTML file and browser.
    - **Using Markup**:
	    - #HTML_Markup is employed to modify the appearance of the text in the browser different from plain text.
## Conclusion
- HTML is a foundational language used in creating webpages, encompassing plain text that users read and markup that instructs browsers on how to present the text.
- It is important to get hands-on experience by practicing HTML coding in a text editor and rendering files in a browser to see the results of different markup uses.

==N==
# [Markup](https://www.youtube.com/watch?v=TALcChvIZvQ&t=1s)
### Overview
- HTML displays more than just plain text in browsers.
	- Utilizes #HTML_Markup to instruct browsers on how to display content.
	- Markup comprises special text with particular meanings.
### Definitions
- #HTML_File:
	- A file containing markup to instruct browsers.
- #HTML_Markup:
	- Text with a special meaning to create structure in HTML.
- #HTML_element:
	- A unit consisting of two matching tags and some text/content in between.
- #HTML_tag:
	- Specific markup indicators enclosed in angle brackets.
    - #HTML_tag_opening :
	    - Marks the beginning of an element (e.g., `<em>`).
    - #HTML_tag_closing:
	    - Marks the end of an element, includes a slash (e.g., `</em>`).
- #HTML_AngleBrackets:
	- Less than and greater than signs that are used to start and end tags.
### Syntax Rules
- **Matching Tags**:
	- Elements usually have a pair of matching opening and closing tags.
- **Closing Tag Identification**:
	- Distinguished by a slash before the keyword.
- **Error Handling**:
	- It's an error to not close an open angle bracket.

### Elements and Tags: Examples
- #HTML_element_strong:
	- Defines text that should be strongly emphasized, usually displayed as **bold**.
	    - Example: `<strong>Text here</strong>`
- #HTML_element_Em:
	- Indicates text that should be emphasized, generally displayed in **italics**.
		- Example: `<em>Hi there</em>`

### Comparison with Other Languages/Systems
- The concept of opening and closing in HTML is similar to the usage of parentheses in arithmetic.
### Terminology Clarifications
1. **Element vs. Tag**:
    - #HTML_element:
	    - The whole unit comprising matching start and end tags with content in between.
    - #HTML_tag:
	    - Individual start or end markers within an element.
2. **Common Misconception**:
    - People often refer to the entire element as a "tag," which is not technically precise but generally understood in context.

### Conclusion
- Understanding the correct use of elements and tags is foundational in learning HTML.
- The consistent use of opening and closing tags helps maintain structured and error-free code.
- **Markup:**
	- Text that has a special meaning
	- Every #HTML_element starts and ends with a tag.
	- `<em>Hi there!</em>`

- The first #HTML_tag `<em>`is called an #HTML_tag_opening, the one with a slash `</em>` is called a #HTML_tag_closing.
- #HTML_tag:
	- always start with the `<` sign and end with a `>` tag.
		- These are usually referred to as angle brackets.

==N==

### Update your notes file!
- [x] Open up your `notes.html` file in your text editor (or in the workspace below).
- [x] As best as you can, try to explain what **markup** is.
- [x] Use the `em` element to italicize something.
- [x] Save the file and open it up in your web browser (to see the changes).

## Practice: Markup


#HTML | Description
--- | ---
`<em>` | opening (or _start_) tag
`<em>Hi there!</em>` | element
`</em>` | closing (or _end_) tag

==N==
# [Breaks and Empty Elements](https://www.youtube.com/watch?v=5vJj_wUkbac&t=4s)
- #HTML_Whitespace:
	- includes spaces, tabs, and line breaks.
	- When the browser displays an #HTML_File, it treats a run of whitespace as a single space character.
	- In order to create a line break that will show up in the browser, use the `<br>` tag.
## Introduction to Whitespace in Web Development
### Definition of Whitespace
- #Whitespace:
	- Term used by programmers to describe spaces, tabs, and line breaks in the coding context.
	- In web development, the text entered in the editor may have multiple lines, spaces, or paragraph breaks.
		- However, these do not directly translate in the browser.
### Whitespace Rendering in Browsers
- **Browser Behavior with Whitespace**:
	- All whitespace is automatically condensed to a single space when rendered by a browser.
	- The text might appear as a continuous line, disregarding the manual line breaks or extra spaces added during the coding process.
- **Preserving Whitespace**:
	- To maintain the integrity of the original formatting (like for a poem), specific HTML tags must be used.
### HTML Tags to Control Whitespace
- #HTML_tag_br:
	- A special tag used to induce line breaks in the text displayed on the browser.
		- **Syntax**: 
			- `<br>`
		- **Attributes**:
			- It doesn't have any content or attributes associated with it.
		- **Closing Tag**:
			- It doesn't require a closing tag.
		- **Usage**:
			- Helps in maintaining the structure of poems or any text where line breaks are important for better readability.
- #HTML_element_void:
	- Elements in HTML that do not have any ==content== or ==children== elements.
		- **Closing Tag**:
			- They don't require a closing tag as there is no content to be enclosed.
		- **Examples**:
			- Apart from `<br>`, another common void element is the `<img>` tag used for embedding images.
		- **Future Learning**:
			- The transcript hints at discussing more examples of void elements in future sessions.
## Conclusion
- **Practice**:
	- The listener is encouraged to stick with manipulating text at the moment, possibly hinting at future lessons involving more complex elements like images.
- **Whitespace Management**:
	- Understanding and utilizing whitespace effectively can help in creating structured and readable content on web pages.

==N==
# [Paragraphs](https://www.youtube.com/watch?v=EPi39irtcDo)
### Using HTML Tags to Structure Text
- **Introduction**
	- Importance of structuring texts in web development
	- Difference between poems and regular writings (articles, essays, stories)
- #HTML_tag_br:
	- Inserting line breaks, especially in poems
	- Syntax: `<br>`
- #HTML_element_p:
	- "P" stands for paragraph

==Pomodoro resume 20:25==

- Use:
	- Creating paragraphs for most textual contents
		- Syntax:
			- Opening tag:
				- `<p>`
			- Closing tag:
				- `</p>`
		 - **Converting Text to P Elements**
			- Process:
				- Enclosing paragraphs with opening and closing P tags
					- Result:
						- Neat and separate paragraphs with margins in the webpage
	 - **Advantages of Using P Element over Line Breaks**
		- Helps in structuring the text more effectively
		- Facilitates control over visual appearance using CSS in later stages
	 - **Future Learning**
		- Learning to manipulate visual appearance using CSS
		- Understanding the importance of informing the browser about the structure of the text
 - **Conclusion**
	- Importance of using P elements for marking up paragraphs in HTML
	- The role of HTML in enhancing readability and structure in web development
- ### Practical Tips
	- Utilize `<p>` tags for creating distinct paragraphs, especially when the content is not a poem.
	- ==Avoid== using `<br>` tags for creating paragraphs, as it does not provide structural advantages like the `<p>` element.
	- Look forward to learning #CSS to have better control over the visual aspects of the content.
- ### Key Takeaways
	- The `<br>` tag is best suited for line breaks in poems.
	- The `<p>` element helps in creating well-structured paragraphs in HTML.
	- Using appropriate HTML elements aids in maintaining the structural integrity of the text and facilitates better control with CSS in the later stages.

Meaning | Term
--- | ---
Rules having to do with how the parts of a language can be put together. | syntax
The idea that some bits of code can go inside other bits of code. | nesting
Code that tells the browser what the text on a web page should look like. | markup
Text that can have links or references. | hypertext
A general term for spaces, tabs, and line breaks. | whitespace


==N==

# #HTML_element_nest(https://www.youtube.com/watch?v=wofy8yLcdog&t=4s)

## Lots of Elements
- What do the `sub` and `sup` elements do?
	- They move the text *vertically*, as ==sub==script or ==sup==erscript.

- **Introduction to Nesting**
	- #HTML_element_nest:
		- The principle where something can be placed or nested inside another entity.
			- Analogy:
				- Russian Matryoshka dolls, where one doll houses another smaller doll inside it, and so forth.
		- **Application in HTML**
			- Similarity with nesting dolls: HTML elements can be nested within other elements.
			- Importance of adhering to specific rules while nesting HTML elements.
		- **Examples in HTML Document Structure**
			- Top-level elements:
				- Generally include paragraphs and larger divisions.
			- Inner elements:
				- Smaller elements such as emphasized or highlighted text fragments.
			- Nesting Possibilities:
				- Elements like text can be both emphasized and highlighted, or superscripts can be nested within emphasized text.
		- **Rules and Restrictions**
			- No Overlapping:
				- Two different HTML elements cannot overlap within the text.
				- One has to be entirely nested within the other.
			- Unpermitted Combinations:
				- Certain combinations are not allowed, e.g., a paragraph cannot be placed within another paragraph.
			- Specific Rules:
				- Certain elements have uniquely specific nesting requirements which are generally based on common sense.
		- **Hierarchy and Order**
			- Importance of order:
				- To nest HTML elements correctly, it is necessary to determine which element will be inside the other
					- analogous to arranging the Matryoshka dolls in the correct order to close them neatly.
	 - **Conclusion**
		- Nesting in HTML:
			- A fundamental concept where elements are housed within other elements, following specific rules to maintain the structure and readability of the document.
		- Guidance:
			- Uncommon and specific requirements will be highlighted during the learning process to aid in understanding and implementation.
		- **Future Learning**
			- Anticipation of learning about specific examples and rules in more detail to avoid potential issues and errors while working with HTML nesting.

# HTML Elements Review 
```
<p>
This page is a summary of the HTML elements you've used so far in this course.
If you haven't tried them out yet in your own text editor and browser, this is a great time to do it!
<b r><b r>
- Emphasis and Strong — <p><em>Emphasis</em> with <strong>strong</strong>

By default, text inside em is displayed as italic, and text in strong is displayed as
boldface.<br><br>

● Paragraph.
p - Text in a paragraph is separated visually from other paragraphs by a small margin.

● br - Line break. (empty)
A line break does not create a new paragraph;it only marks the end of a line.<br><br>

● Superscript and Subscript — <sup>Supascript</sup> and <sub>Subascript</sub><br><br>
Useful for math and chemistry:<br>I have x<sup>3</sup>+2x<sub>2</sub> molecules of H2O.<br><br>

● mark — <mark>Highlighting.</mark>
Not very often used, but it's kind of cool.<br><br>

Of these elements, the <mark>br</mark> element is the only one that is an empty (or void) element.
```


==N==
==N==
==N==
# Practice: Headings
- As you just discovered, the `h1` element can be used for **headlines**, or **section headings**.
- There are actually six of these heading elements: `h1` through `h6`.
- Heading elements create a little bit of space (margin) around themselves
# I'm an `h1` heading
## I'm an `h2` heading
### I'm an `h3` heading
#### I'm an `h4` heading
##### I'm an `h5` heading
###### I'm an `h6` heading

- `h1` is used for the main heading on a page, while the rest are used for subheadings.
	- We use a smaller heading to show that one section is _inside_ another section.
- In contrast, if one section simply comes after the other then we use the same level of heading.
	- For example, suppose I have a page about animals, with one section about cats and another about dogs. Here's what the headings might look like:

# Animals ← `h1`
- This is my super cool page about my favorite animals. For the main heading, I'm using an `h1` element.
## Cats ← `h2`
- This part is all about cats.
### Cat Behavior ← `h3`
- This part is about cat behavior.
### Cat Diet ← `h3`
- This part is about what cats eat.
## Dogs ← `h2`
- This part is all about dogs.
### Dog Behavior ← `h3`
- This part is about dog behavior.
### Dog Diet ← `h3`
- This part is about what dogs eat.

==pomo end 21:18==






































