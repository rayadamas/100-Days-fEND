### [9/14/2023, 14:28-15:20]
- **Today's Progress**: learned about #HTML_element_img, two major aspects of the #HTML_document body itself, completed the same basic lab that was marked as incomplete for some reason at first, and that also sparked my interest in redoing this udacity course. solid sessions today.
- **Thoughts:** using `validator.w3.org` to clean things up, using such i was able to understand THAT there was an issue, but took a moment to explicitly recognize such within my code. i was getting an error for not including "meta charset="UFT-8" in the #HTML_document_head, though this #HTML_Markup is only glossed over in a single video within the #HTML lessons, not even explicitly gone into unless i whiffed it but i call a similar issue in consistency w/ this course the 1st run through.

---
# [Adding Images](https://www.youtube.com/watch?v=QwvH-dmWDqo&t=2s)
- **Introduction**
	- Images are a vital part of the web's success
	- Necessity and popularity of including images in web pages
- #HTML_element_img
	- Functionality similar to the #HTML_element_a element used for links but with notable differences
	- Defined as an #HTML_element_inline that can be integrated amidst text content
		- **Attributes of "img" Element**
			- #HTML_element_img_src (Source):
				- Purpose: To specify the URL of the image to be displayed on the webpage
				- Role: Directs the browser to the location/source of the image file
			- #HTML_element_a_alt (Alternate):
				- Purpose: To provide a text description of the image
				- Role: Displays the specified text (alt text) if the image cannot be displayed for various reasons such as missing file, network issues, or accessibility considerations (e.g., visually impaired users)
				- Importance: Both `src` and `alt` attributes should be included while writing HTML for robust and accessible web content
		- **Working Mechanism of "img" Element**
			- Does not copy the image file into the HTML file
			- Simply points the browser to the location of the image file, which could be on a local disk or a server
		- **Characteristics of "img" Element**
			- Classified as an empty or void element
			- Lacks textual content and a closing tag
			- Can alter the spacing between lines of text if the image height exceeds that of surrounding text
		- **Considerations for Usage**
			- The `alt` attribute enhances accessibility, particularly for users with visual impairments
			- Importance of accurate `src` attribute to prevent issues related to missing files or network connectivity problems
			- Flexibility of placement within text, allowing for varied and dynamic webpage designs
- **Conclusion**
	- Understanding the nuanced differences between the "img" and "a" elements in HTML
	- Recognizing the critical role of images in enhancing web content and user experience
	- Importance of employing both `src` and `alt` attributes for a comprehensive and inclusive webpage design

# [Files and Relative URLs](https://www.youtube.com/watch?v=lvgod9sCZDg)
**Introduction**:
- Discussed embedding images in HTML files using both #URL_Absolute and #URL_Relative.
	- Illustrated using placebear.com for sourcing bear images and inserting local images into an HTML file.
#### Part 1: Utilizing placebear.com
- Source of a large collection of bear images.
- Able to find bear images of specific dimensions (example given: 800x600 pixels).
- Images can be incorporated into an HTML file by using the `<IMG>` tag.
- Image source (SRC) should contain the full URL from placebear.com.
#### Part 2: Embedding Local Images
- Discussed embedding images stored locally (in the same folder as the HTML file).
- Does not require uploading the image to a server to reference it in the HTML file.
- Use the file name as the SRC attribute in the `<IMG>` tag.
- This process is facilitated through the use of relative URLs.
#### Relative URLs: Detailed Explanation
- Browser identifies a relative URL when the SRC attribute does not contain a full URL (i.e., it does not start with "http://" or "file://").
	- The browser refers to the URL as a variation of the HTML document's URL.
		- Example given:
			- Browser recognizes `kittens.jpg` in the same directory as `notes.html`.
			- Relative URLs are advantageous as they require less typing and facilitate file sharing.
			- Important while sharing the HTML file with others, as full URLs pointing to local directories will not work on another person’s computer.
#### Absolute URLs versus Relative URLs
- For resources on a web server (e.g., placebear.com), use full (absolute) URLs (Example: "[https://placebear.com/800/600](https://placebear.com/800/600)").
- For files accompanying the HTML file (like local images), use relative URLs to avoid broken links when sharing the files.
#### Common Mistake: Linking to Other Sites
- Without "http://" or "https://" prefix, URLs in an HTML file are treated as relative URLs.
	- Example:
		- Writing `a href=google.com` in HTML will not link to Google's website; instead, the browser would look for a local file named "google.com".
		- To link to another website, always include the "http://" or "https://" at the beginning of the URL.
#### Conclusion:
- Differentiating between absolute and relative URLs is vital in HTML programming, especially when embedding images and linking to other websites.
- Using relative URLs simplifies file sharing and management when the images are stored locally.
- To avoid common mistakes, always include the proper prefix (http or https) when linking to external websites in HTML documents.

##### #HTML_element Review 2
Now you've learned about many more HTML elements! This page is a summary of all the elements you've seen so far. You can use this page as a reference if you forget how to use one of these elements in your code.
##### #HTML_element_block 
- Block elements are used for large sections of text, such as paragraphs, headlines, or lists; and also for some other features such as video players and tables.
- A block element creates a (usually invisible) box in the browser display.
	- By default, this box takes up the full width of the display.
	- The beginning of a block always starts on a new line in the display.
- Most block elements have a particular way they are displayed by default: paragraphs have margins around them; lists have bullet-points or numbered items; headlines are printed in large text.
- There is also a generic block element, div, which has no special defaults. 

- #HTML_element_p Paragraph.
	- Text in a paragraph is separated visually from other paragraphs by a small margin.
- #HTML_element_ul #HTML_element_ol Unordered and ordered lists.
	- By default, #HTML_element_ul are displayed with bullet points, and #HTML_element_ol with numbered items.
 - #HTML_element_li List items inside a #HTML_element_ul or #HTML_element_ol. 
	- The #HTML_element_li element has to be nested inside a #HTML_element_ul or #HTML_element_ol list; it can't occur on its own.
- Section headers, from h1 to h6.
	- Used for headlines, section titles, and the like.
- #HTML_element_div 
	- A logical division of a page or document. Other block elements such as paragraphs, lists, and headers can be nested inside a div.
- You will see the #HTML_element_div element much more in the next lesson. Because they don't have any default display settings, divs are heavily used with custom styling with CSS. 

##### #HTML_element_inline 
- Inline elements do not create a full-width box on the display. 
- They modify the display of text, or insert other things into the text — such as line breaks, images, or hyperlinks.

- #HTML_element_Em & #HTML_element_strong - Emphasis & Bold
	- By default, text inside #HTML_element_Em _is displayed as italic, and text in  #HTML_element_strong**is displayed as boldface.
- #HTML_tag_br 
	- Line break. (empty element)
		- A line break does not create a new paragraph; it only marks the end of a line.
			- #HTML_element_sub Subscript and #HTML_element_sup Superscript.
				- Useful for math and chemistry:
					- I have x3+2x2 molecules of H2O.
	- #HTML_mark 
		- ==Highlighting.== Not very often used, but it's kind of cool. 
			- Some of the inline elements you've seen require attributes, extra information besides the name of the element itself.
				- Attributes are written inside the opening tag of the element.
	- #HTML_element_img 
		- Images.
			- Needs:
				- a #HTML_element_img_src attribute with a #URL 
				- a #HTML_element_a_alt attribute with descriptive text.
					- The alt text is used if the image can't be loaded, or if the user can't see images — such as if the user is using a screen reader.
						- The syntax for the img tag is like this: ! [A description of the image] (Image URL here)
						- The URL of an image may be an #URL_Absolute, such as http://placebear.com/800/600,
							- or it may be a #URL_Relative such as `images/wolves.jpg`.
	- #HTML_element_a 
		- Hyperlinks.
			- Hyperlinks allow the user to navigate from one page to another.
				- They are created using the a element.
					- Needs an #HTML_element_a_href attribute with a #URL.
						- The destination of the link is written in an attribute called #HTML_element_a_href; the link text appears as the contents of the a element. Here's an example: [Wikipedia's "Hypertext" article](https://en.wikipedia.org/wiki/Hypertext) This code produces a link like this: Wikipedia's "Hypertext" article. A link within a single web site can be written using a relative URL. Links to other sites must be written as absolute URLs.


==end of first pomo 15:20==
==resume 15:55==

# #HTML_document: The #HTML_tag_doctype Tag(https://www.youtube.com/watch?v=PmMx2Hd-Wrw)
- #HTML_Fragments:
	- Small portions or snippets of an HTML document.
		- Importance of a complete HTML document akin to a published story, with components such as title and author, not just sentences.
		- Necessity to add several elements to complete an HTML document.
### Understanding the DOCTYPE Tag
- #HTML_tag_doctype:
	- A special tag at the beginning of the HTML document.
		- Indicates the version of HTML being used.
			- **History**:
				- HTML has numerous versions over the years.
				- DOCTYPE tags were long and complicated in earlier versions.
					- Simplified in modern HTML versions.
			- **Modern DOCTYPE Tag**:
				- Syntax:
					- `<!DOCTYPE html>`
					- Placed at the top of every HTML document.
					- Denotes that the document should be treated as modern HTML.
			- **Purpose**:
				- Helps in preventing many bugs as HTML becomes complex.
				- Prevents the browser from entering #HTML_quirksmode which tries to be more compatible with older HTML versions (undesired in most modern web development contexts).
- Always start your HTML document with the DOCTYPE tag to avoid compatibility issues and bugs.
- Encourages the use of modern HTML standards, providing a smoother development process.
- Tips for Implementation
	- Ensure to include the DOCTYPE declaration at the top of your HTML files to maintain modern HTML standards and prevent potential issues.
	- Think of constructing an HTML document like crafting a story with all necessary elements, not just fragments of code.

==N==
# #HTML_document: #HTML_document_head #HTML_document_head_style #HTML_document_script #HTML_document_metadata,  #HTML_document_body(https://www.youtube.com/watch?v=tWhaQSKWog4)
- An HTML document is comprised of two main sections:
	- the #HTML_document_head 
	- the #HTML_document_body 
- Everything discussed in the lesson, apart from the #HTML_tag_doctype tag, resides in the body section of the HTML document.
	- The #HTML_document_body contains the main contents that are displayed to users, including:
		- Paragraphs #HTML_element_p 
		- Images #HTML_element_img 
		- Lists #HTML_element_li 
		- Links #HTML_element_a 
		- Other elements visible on the screen.
			- The second section of an HTML document is the head.
	- The #HTML_document_head contains critical information about the document.
		- It can house various elements such as:
			- The title (a mandatory element that dictates what title should appear on the browser tab).
				- It is encapsulated within open and close title tags.
			- Style sheet information #HTML_document_head_style which informs the browser about the page's styling, including:
				- Fonts
				- Colors
				- Text positioning.
				- More detailed exploration of style sheets will be covered later in the course.
	- #HTML_document_script, which are programs executed in the browser; this mechanism facilitates the functioning of front-end web apps, like quizzes encountered in the course.
	- #HTML_document_metadata which provides additional details about the page like keywords for search engine optimization.
- Both the head and the body sections are encompassed within a single enclosing element named HTML.
	- The HTML tag can also carry specific information, including indicating the human language in which the document is written (not to be confused with the computer language, which is HTML).
		- Indicating the language helps programs like screen readers to comprehend or articulate the content accurately, facilitating accessibility for visually impaired users.
		- It helps in determining the pronunciation of words in the respective languages, exemplified by the different pronunciations of the word "CHAT" in English and French.
		- At this stage in learning, utilizing the title tag in the head section is essential as it is a requisite in HTML documents.
	- The grammar of HTML does not require that you literally write a `<head>` or `<body>` tag in your HTML code.
		- Many web developers do write these. However, if you _don't_, the browser will attempt to place them into your code itself.
			- It needs to put the #HTML_document_head element around certain elements that belong there, such as #HTML_document_head_title 
				- and to put the #HTML_document_body element around the elements that form the document's body.
					- This means that all the `head` elements must appear first, and the `body` elements after.
						- You can't have a `head` element, such as `title`, in the middle of your document:
```
<h1>Here is a 😨 problem:</h1>
<p>This is a paragraph, which has to be part of the body.
<title>This is the title, which has to be part of the head.</title>
<p>The title is ❗️not allowed ❗️ to be in the middle of the body!
```
- So even if you choose not to literally write the `<head>` and `<body>` _tags_ in your document, the `head` and `body` _elements_ are still created by the browser;
	- and the rest of the document needs to be consistent with this.
		- But you must make sure that the `title` and other `head` parts appear before any paragraphs, lists, images, or other `body` parts.
- You might see older HTML documentation that says these tags are required.
	- This was true in _XHTML_, an older version of HTML.
		- Today's browsers use #HTML5, which does not require them.

==pomo end 16:48==
==resume 17:17==

# [Validating HTML](https://www.youtube.com/watch?v=vLg0eK9ECYc)
- **Understanding HTML Syntax and Validation**
	- **Importance of Correct HTML Syntax**
		- Similarities between language grammar and HTML syntax rules
		- Necessity of checking the correctness of HTML syntax, not relying solely on browser display
	- **Possible Issues with Incorrect HTML Syntax**
		- Browser discrepancies in displaying incorrect HTML
		- Difficulty in testing HTML across all browsers
	- **Using HTML Validators**
		- Tools that check for syntax correctness
		- Ensure proper spelling of tags and adherence to nesting rules
		- Notable tool:
			- `validator.w3.org`, managed by the World Wide Web Consortium (W3C)
				- W3C’s role in setting web standards, making them reliable to verify HTML correctness
	- **Ways to Use the Validator Service**
		- Providing the URL for HTML on a public web server
		- Uploading the HTML file directly
		- Copy-pasting the HTML code from your editor
	- **Interpreting Validator Reports**
		- Receipt of a report indicating errors or the lack thereof
		- Understanding and rectifying error messages
			- Example:
				- missing required elements like title in the head section
		- Iterative process of fixing errors and re-validating
		- Achieving error-free HTML:
			- indicated by a green message confirming no errors or warnings
	- **Steps to Correct Errors**
		- Fixing identified errors in your text editor
		- Repeating validation to ensure the elimination of errors
		- Goal:
			- Receiving a confirmation of no errors or warnings in the validator report

==N==
# About the Basic HTML Page lab
- You will submit a basic HTML page with at least:
	- one **hyperlink** #HTML_element_a, and 
	- one **image** #HTML_element_img,
	- including the required HTML attributes for these elements,
		- but you are welcome to include anything else you'd like! As long as you fulfill the requirements, there will be no penalty for additional features on the page.

###### Page of notes thus far
```
<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="UTF-8" />

    <title>MY ROUGH HTML NOTES</title>

    <style>

      p {

        border: 1px solid pink;

      }

    </style>

  </head>

  

  <body>

    <h1><em>DAI'S ROUGH HTML NOTES</em></h1>

    Spaces, tabs, line breaks = <strong>whitespace</strong>

  

    <h2>Breaks</h2>

    <p>

      Mary had a little lamb<br />

      Its skin as tough as shell<br />

      And every file that toad would write<br />

      It used HTML.

    </p>

  

    <h2><em>Markup</em></h2>

    <p>

      The fundametal characteristic of HTML, where the emphasis of the text is

      enclosed within what are referred to as "tags" which is the main function.

      These tags are the angle brackets ">". They are not revealed by browser.

      Reffered to as "non-empty" tags due to what is between the beginning and

      end tags. Parameters are able to be placed within the beginning tag BEFORE

      the ending

    </p>

  

    <h2><em>Paragraphs</em></h2>

    <p>This is a story...</p>

    <p>Where we add paragraph tags to make it better.</p>

  

    <p>

      Once upon a time there was a baby tiger named Talia. Talia lived in the

      middle of a fearsome jungle

    </p>

    <p>Talia was the most fearsome of all, though she was only a baby.</p>

  

    <h2><em>Elements</em></h2>

    <p>look at dis <sub>subscript</sub> text.</p>

  

    <p>Ayoooo<sup>this is superscript</sup>.</p>

  

    <em>H O W D Y</em>

  

    Every element starts and ends with a tag. Did you know? Spaces, tabs, and

    line breaks are called

    <strong>whitespace</strong>.

  

    <h3>Nesting</h3>

    <p><em>Hello</em> <mark>Imak!</mark></p>

  

    <h3>See if you can replicate this design:</h3>

    <ul>

      <li>This page is a collection of my awesome notes about HTML!</li>

      <li>

        The Web (or World Wide Web) is a collection of documents and other

        files. Most of the documents are made using Hypertext Markup Language

        (HTML).

      </li>

      <li>

        HTML stands for Hypertext Markup Language. It's used to define the

        structure or layout of a web page.

      </li>

    </ul>

  

    <h3>My HTML Notes</h3>

    <p>This page is a collection of my awesome notes about HTML!</p>

    <h3>The Web</h3>

    <p>

      The Web (or World Wide Web) is a collection of documents and other files.

      Most of the documents are made using Hypertext Markup Language (HTML).

    </p>

    <h4>What is HTML?</h4>

    <p>

      HTML stands for Hypertext Markup Language. It's used to define the

      structure or layout of a web page.

    </p>

  

    <h3>My Chemistry Notes</h3>

    <p><strong>Molecule name:</strong> <em>Sulfur hexafluoride</em><br /></p>

    <p><strong>Molecule formula:</strong> SF<sub>6</sub><br /></p>

    <p>

      <strong>Note:</strong> This gas has a much higher density than air.

      Basically the opposite of helium.

      <mark>Crazy!</mark>

    </p>

  

    <!-- unabstracting block elements -->

    <h3>Unabstracting block elements</h3>

    <!-- <style>

    p {

      border: 1px solid yellow;

    }

  </style> -->

  

    Call me Diamond.

    <br /><br />

    Just don't call me Crystal.

  

    <p>Call me Diamond.</p>

    <p>Just don't call me Crystal.</p>

    <!-- unabstracting block elements -->

  

    <!-- nest the two paragraphs inside of a div -->

    <h3>Nest the two paragraphs inside of a div</h3>

    <!-- <style>

    p {

      border: 2px solid red;

    }

  

    div {

      border: 2px solid blue;

    }

  </style> -->

    <div>

      <p>Call me Diamond.</p>

      <p>Just don't call me Crystal.</p>

    </div>

  

    <!-- Lists -->

    <h3>Lists</h3>

    <h4>Diamond's 4 Step Protocol</h4>

    <ol>

      <li>Get rich.</li>

      <li>Don't go broke.</li>

      <li>Repeat step 1.</li>

      <li>Repeat step 2.</li>

    </ol>

  

    <h1>Diamond's Morning Routine</h1>

    <ul>

      <li>Stretch</li>

      <li>Breathe deeply and evenly</li>

      <li>Express gratitude for the day</li>

      <li>Brush teeth</li>

    </ul>

  

    <!--Nested lists  -->

    <h3>Nested Lists</h3>

    <p></p>

    <ul>

      <li>

        Lions

        <ol>

          <li>Cheetahs</li>

          <li>Jaguars</li>

        </ol>

      </li>

  

      <li>

        Tigers

        <ol>

          <li>Panthers</li>

          <li>Lynx</li>

        </ol>

      </li>

  

      <li>

        Bears

        <ol>

          <li>Panda</li>

          <li>Koala</li>

        </ol>

      </li>

    </ul>

  

    <!-- Indentation -->

    <h3>Indentation</h3>

    <p>

      when you leave off the optional closing tag on a list item li<br />

      many code editors will indent to the right because they think you're<br />

      wanting to nest something inside that li

    </p>

  

    <em>poor indent</em> *seen in code*

    <ol>

      <li>Tomatoes</li>

      <li>Carrots</li>

      <li>Cucumbers</li>

    </ol>

  

    <em>good indent</em>

    <ol>

      <li>Tomatoes</li>

      <li>Carrots</li>

      <li>Cucumbers</li>

    </ol>

  

    <em>poor indent</em> *seen in code*

    <ol>

      <li>Tomatoes</li>

      <li>Carrots</li>

      <li>Cucumbers</li>

    </ol>

  

    <em>Indentation</em>

    <p>Here is another example of a nested list:</p>

    <ul>

      <li>

        Mammals

        <ol>

          <li>Raccoons</li>

          <li>Gorillas</li>

        </ol>

      </li>

  

      <li>

        Reptiles

        <ol>

          <li>Iguanas</li>

          <li>Cobras</li>

        </ol>

      </li>

  

      <li>

        Birds

        <ol>

          <li>Ostriches</li>

          <li>Ravens</li>

        </ol>

      </li>

    </ul>

  

    <p>Indentation can help show the nested structure of the elements.</p>

    <p>It can also make the code <em>much</em> easier to read!</p>

  

    <!-- Implied Close Tags -->

    <h3>Implied Close Tags</h3>

    <p>

      Rambunctious, playful, and mischievous <strong>notes</strong> inside the

      first <em>paragraph</em>.

    </p>

    <p style="color: salmon;">

      The second <em>paragraph</em> is now a <strong>different</strong> color,

      it's <mark>salmon</mark>.

    </p>

    This text floats alone<br />

    as it does not reside inside a <em>paragraph</em> element...<br />

    ...yet!<br />

    <p>This text is inside a <em>third</em> paragraph element.</p>

  

    <!-- The Anchor Element -->

    <h3>The Anchor Element</h3>

    <p>Anchor 'a' for links</p>

    <a href="https://en.ryte.com/wiki/Anchor_Tag">Ryte</a>

  

    <!-- Image Element -->

    <h3>Image Element</h3>

    <p>

      <img

        src="https://fakeurl.example.net/fish.png"

        alt="photo of a fish"

      /><br />

      The img tag is used to embed an image in an HTML page.<br />

  

      Images are not technically inserted into a web page; images are linked to

      web pages. The img tag creates a holding space for the referenced

      image.<br />

  

      The img tag has two required attributes:<br />

      <strong>src</strong> - Specifies the path to the image

      <strong>alt</strong> - Specifies an alternate text for the image, if the

      image for some reason cannot be displayed<br />

  

      Placing an img element tag inside an a tag between its I/O tags allows a

      user to be directed to a different webpage once clicked

      <img

        src="https://64.media.tumblr.com/742cba808dd12183750f6d8e57a03007/88f871e71e638617-55/s1280x1920/6595051b0ccba3ef156dff38fec32f3b85ea76c5.png"

        alt="tired wojac"

      />

  

      <!-- Anchor and Image Element practice -->

    </p>

  

    <h3>Anchor and Image Element practice</h3>

    <ol>

      <li>

        <a href="https://en.wikipedia.org/wiki/Money" target="_blank"> Money</a>

      </li>

      <li>

        <a href="https://en.wikipedia.org/wiki/God" target="_blank"> God</a>

      </li>

    </ol>

  

    <img

      src="https://images.freeimages.com/images/premium/large-thumbs/4588/4588657-stack-of-money.jpg "

      alt="real money"

    />

    <img

      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shield-Trinity-Scutum-Fidei-English.svg/800px-Shield-Trinity-Scutum-Fidei-English.svg.png"

      alt="Divine Trinity"

    />

  </body>

</html>
```

==N==
# [Starting With Style](https://www.youtube.com/watch?v=d__bofqHJdY)
- Introduction to the lesson focusing on #CSS (Cascading Style Sheets).
- Enhancing webpages' appearance and layout through the utilization of CSS.
- The role of CSS in providing decoration elements such as colors, fonts, and layouts on websites.
- Potential improvements on HTML pages facilitated by CSS:
    - Modifying text color.
    - Altering the overall layout completely.
- Expansion of learners' understanding regarding computer language syntax.
- Benefits of acquiring knowledge in CSS:
    - A deeper comprehension of the assembly of computer languages.
    - Providing a strong foundation for an introduction to programming.
# [Developer Tools](https://www.youtube.com/watch?v=I5wJzR60GwQ)
- Browser developer tools:
	- A feature embedded within web browsers to assist in learning HTML and CSS.
	- Importance:
		- A crucial tool used extensively by web developers.
	- Initial complexity:
		- Can seem a bit overwhelming for beginners but offers significant value.
	- Browser compatibility:
	    - Integrated into all browsers, although the appearance and naming conventions might vary.
	    - Similar functionalities across different browsers.
			- How to access:
				- Through the right-click or control-click menu, select the "Inspect" option to open developer tools.
					- Demonstrated on Google Chrome, but applicable on any browser.
			- Inspect feature:
				- Allows viewing of HTML elements on a webpage.
				- Initiates at the section of the page where the right-click or control-click was performed.
				- Multiple tabs to explore different aspects of browser operations.
				- The "Elements" tab provides insights into the #HTML_element's of the page resembling the HTML source code.
				- Highlights respective sections of the webpage when hovering over HTML elements.
				- A dual view offering both the element's view and the rendered page to analyze the underlying data.
	- Focused on #CSS:
		- The style section in the developer tools presents detailed information about the style attributes of a selected element.
			- Insights into various style properties like:
				- #CSS_background, #CSS_border, #CSS_padding, #CSS_font, and #CSS_color.
					- Helps in understanding the aesthetics and appearance of the webpage.
			- Style pane utility:
				- Includes checkboxes next to style information to toggle the style attributes on or off.
				- Assists in comprehending the role of each style setting by visualizing the effects on the rendered page.
				- Facilitates experimenting with different style settings to observe changes and learn.

# [Text to Trees](https://www.youtube.com/watch?v=ExM2TsRpXYk)
- **Loading a Webpage**:
	- When a webpage is loaded, the browser interprets the HTML text to generate a two-dimensional image which is displayed on the browser window.
- **HTML Text Components**:
	- **Textual Elements**:
		- Comprises letters, numbers, punctuation marks, and spaces.
	- **HTML Tags**:
		- Specific parts of the text define the HTML tags which are used to create various elements on the webpage.
	- **Content**:
		- This includes the actual content displayed on the page, for instance, words like "Apple" in the transcript.
			- **Browser Window**:
				- **Visual Image**:
					- The browser window showcases a visual, two-dimensional image consisting of pixels on your screen.
				- **Content Types**:
					- The displayed content can be text, images, videos, or other multimedia elements.
- **Discrepancies between HTML and Display**:
	- **Hidden HTML Elements**:
		- Certain elements in the HTML source code may not be visible on the screen, such as the literal text of the HTML tags.
	- **Additional Visual Elements**:
		- Some elements appear on the screen that are not explicitly mentioned in the HTML, like the number "two" as mentioned in the transcript.
- **Intermediate Step in Browser Rendering**:
	- **Data Structure**:
		- The browser creates a data structure from the HTML, which acts as a map for organizing and displaying elements on the page.
	- **Developer Tools**:
		- These tools allow us to inspect this data structure created by the browser.
	- **Style Changes**:
		- Changing the style of the page doesn't alter the HTML structure but changes the appearance on the browser, indicating that styles are integrated into the aforementioned data structure.
- **Creating the Map**:
	- **Computer's Memory**:
		- The browser builds a map in the computer's memory detailing the elements to be displayed on the screen.
			- **Element Organization**:
				- The map also denotes the hierarchical relationship between elements, showing which elements are nested within others.
				- **Practical Layout**:
					- Creating this map first facilitates a more efficient and practical layout process for the elements on the screen.
						- **Outline of the Page**:
							- This process is akin to making an outline of the page to organize the content better.
- **Tree Structure**:
	- #TreeStructure:
		- This structure, which resembles a tree, illustrates how each element can have branches leading to other nested elements.
	- #HTML_element_branching:
		- Each element can have branches connecting to other nested elements, such as:
			- list items #HTML_element_li inside an ordered list #HTML_element_ol, going down to individual text pieces within the list.
- **Document Object Model (DOM)**:
	- #DoM:
		- **Formation**:
			- The DOM is created from the HTML text by the browser.
		- **Structure**:
			- It contains a tree structure for each:
				- #HTML_element,
				- text piece,
				- #HTML_element_img,
				- and other objects within the webpage, helping to organize and display the webpage content efficiently.

==pomo end 18:16==