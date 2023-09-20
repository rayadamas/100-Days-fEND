# [9/19/2023, 15:18-16:12, 17:46-18:47]
- **Today's Progress**: reviewing how #HTML & #CSS can be separate, yet linked, documents. Intro to the syntax & conventions w/ colors in CSS. overview & practice w/ fonts and how CSS is able to override HTML in some cases.
- **Thoughts:** just made a simple page testing 3 different manners of utilizing style, #CSS_inline, #CSS_external, and #HTML_document_head_style. utilizing percentages to create colors is tedious. no hiccups or slowdowns.
---
# [Separating Style](https://www.youtube.com/watch?v=jv_LhQCQoFM)
### #CSS Integration in #HTML
- **Introduction**
	- CSS (Cascading Style Sheets) is used to style and layout web pages.
		- It helps in enhancing the appearance of HTML documents.
			- There are several methods to integrate CSS into HTML.
- #CSS_inline:
	- Incorporating CSS directly within the HTML document's #HTML_document_head using the #HTML_document_head_style element.
		- **Pros**:
			- Quick and straightforward to implement.
			- Ideal for small projects or single-page websites.
		- **Cons**:
			- Can become messy and unorganized with complex projects.
			- Not efficient for websites with multiple HTML documents.
			- Difficult to maintain consistency across different pages.
- #CSS_external:
	- Storing CSS in a separate file and linking it to the HTML document.
		- **Implementation**:
			- Utilize a special tag in the HTML head section:
				- `<link rel="stylesheet" href="URL or filename of the CSS file">`.

```
<style>
  p{color:blue;}
</style>
```
==when you place your CSS in a stylesheet, you don't need to use a `style` element==
 - The CSS file can be linked using either a #URL_Relative (if the file is in the same directory) or a #URL_Absolute (if hosted elsewhere on the web).
	- Example for a file in the same directory:
		- `href="style.css"`.
		- **Pros**:
			- Promotes cleaner and more organized code.
			- Easy to maintain and update styles across multiple pages.
			- Saves space as the CSS code doesn't need to be repeated in each HTML document.
		- **Cons**:
			- Requires an additional HTTP request to load the stylesheet, which might slightly increase the loading time.
				- **Best Practices**:
					- Place the link element inside the #HTML_document_head section, preferably after the #HTML_document_head_title element.
					- Naming convention:
						- Commonly named as "style.css".
				- **Browser Behavior**
					- When an HTML file linked with an external CSS file is loaded, the browser automatically fetches and applies the styles defined in the CSS file to the elements in the HTML document.
					- Ensures a consistent and cohesive visual presentation across the website.
- #URL_Relative:
	- URLs that are relative to the current directory or file.
		- **Usage**:
			- Convenient when the CSS file is hosted in the same directory as the HTML files.
		- **Advantages**:
			- Simplifies the file paths.
			- Easier to manage and update links.

==N==
# [Color](https://www.youtube.com/watch?v=CrnY0UE3bK8)
- **Introduction to Color Specification in Web Design**
	- Initially, colors were specified using common names such as red and purple.
		- Limitation:
			- Limited vocabulary for color names.
				- The need for a more flexible and expansive color specification system in web design.
- **RGB Color Model**
	- Basis:
		- Mixing primary colors - red, green, and blue light.
			- Allows the description of any color as a mixture of varying amounts of red, green, and blue.
	- Specification range:
		- 0 to 100 percent of full brightness for each primary color.
			- Example:
				- Mixing 100% red with 50% green results in bright orange.
	- CSS Representation:
		- RGB 100%, 50%, 0% (for the bright orange color).
- **Different Methods of Writing Colors in CSS**
	- Multiple ways to write colors in CSS are prevalent in real web pages.
		- Importance of understanding the underlying principles of these methods.
			- **Understanding Computer Color Storage**
				- Computers store color information in web browsers and other applications using specific methods.
					- Each primary color can have 256 possible values.
						- Color information is stored in a single byte, which can hold a number from 0 to 255.
							- **Hexadecimal (Hex) Color Representation** #Base16-Hexadecimal 
								- Alternative to representing byte values as numbers from 0 to 255.
								- Hex base 16 system:
									- digits range from 0 to 9 and then from A to F.
										- Complexity:
											- Generally considered harder to decipher compared to other methods.
										- Usage in web design:
											- Traditional and often used humorously among web designers.
										- Example:
											- A mug with a message using hex codes to represent black (all zeros) and white (all Fs).
										- **Examples of Color Representation**
											- Udacity's blue color representation:
												- Hex code:
													- 02B3E4
												- RGB percentage:
													- 1%, 70%, 89%
												- RGB values:
													- 2, 179, 228
														- Note: Different representations are essentially ways to specify the mixture of red, green, and blue to create a particular color.
- **Utilizing Color Picker Tools**
	- Importance:
		- Facilitates the selection and identification of color codes.
			- Built-in feature in browser's developer tools.
	- Functionality:
		- Allows users to explore different colors on a webpage and identify their respective color codes.
	- Additional feature:
		- Shift-clicking on the color swatch cycles between different color modes (RGB, HSL, name, hex value).
	- Benefit:
		- Simplifies the process of choosing and identifying colors for web design.
- #CSS_color_HSL
	- Hue
		- Hue is a degree on the color wheel from 0 to 360. 0 (or 360) is red, 120 is green, 240 is blue.
	- Saturation
		- Saturation can be described as the intensity of a color. It is a percentage value from 0% to 100%.
			- 100% is full color, no shades of gray.
				- 50% is 50% gray, but you can still see the color.
					- 0% is completely gray; you can no longer see the color.
	- Lightness
		- The lightness of a color can be described as how much light you want to give the color, where 0% means no light (dark), 50% means 50% light (neither dark nor light), and 100% means full light.
			- Example
```
<style>  
div {    background-color: hsl(170, 50%, 50%);  
    color: hsl(0, 50%, 50%);}  
</style>
```
- HSLAlpha Color Values
	- HSLA color values are an extension of HSL color values, with an Alpha channel - which specifies the opacity for a color.
		- An HSLA color value is specified with:
			- hsla(_hue,_ _saturation_, _lightness, alpha_)
		- The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):
			- Example
```
<h1 style="background-color:hsla(120, 100%, 50%, 0.2);">hsla(0, 100%, 50%, 0.2)</h1>  
<h1 style="background-color:hsla(120, 100%, 50%, 0.4);">hsla(0, 100%, 50%, 0.4)</h1>  
<h1 style="background-color:hsla(120, 100%, 50%, 0.6);">hsla(0, 100%, 50%, 0.6)</h1>  
<h1 style="background-color:hsla(120, 100%, 50%, 0.8);">hsla(0, 100%, 50%, 0.8)</h1>
```

==N==
# Fonts
- A #typeface is a group of related fonts.  
- A **font** is a specific version of a typeface.

## #CSS_font-family
- Another term we can use for a typeface (or group of related fonts) is a **font family**. That's the term that CSS uses.
	- In other words, to change the typeface of our text, we can use the `font-family` property. Like this:
		- `font-family: Helvetica;`
			- Or here's another example:
				- `font-family: "Times New Roman";`
					- The quotes are recommended for font families that have spaces in the name. They help ensure that the name is read as one thing (`"Times New Roman"`

==N==
# #CSS_font_generic and #CSS_font_stack
- #CSS_font_generic 
	- There are five generic font families, each named for a general kind of typeface:
		- Serif
		- Sans-serif
		- Cursive
		- Fantasy
		- Monospace
	- In CSS, we can use a generic font family in place of a specific font family. For example, this line specifies the specific font family _Courier_:
		- `font-family: Courier;`
			- In contrast, this one simply says to use whatever monospace font family is available
				- `font-family: monospace;`
- #CSS_font_stack 
	- Since we don't know what font will be available to each user, it's a good idea to give multiple options. CSS allows us to do this by using a **font stack**, like this:
		- `font-family: Courier, "Courier New";`
			- we simply list the font families that are OK to use, with the most-preferred choice first.
			- If that choice isn't available, it will try the next one, and so on.
	- A common (and very good) practice is to put the generic font family at the end of the list, like this:
		- `font-family: Courier, "Courier New", monospace;`
			- This way, if none of the other font families are available, the browser will still use the right general type.
==N==
# More Font Properties
## Font Size
- To change the font size, we can use the `font-size` property, like this:
	- `font-size: 24px;`
		- In this example, `px` stands for _pixels_.
## Bold
- To make the text bold, we can use the `font-weight` property, as in:
	- `font-weight: bold;`
## Italic
- To make the text italic, we can use the `font-style` property:
	- `font-style: italic;`
## Underline
- To make the text underlined, we can use the `text-decoration` property:
	- `text-decoration: underline`

==N==
# #CSS_font_shorthand
- For example, instead of typing out:
	- `font-style: italic; font-size: 24px; font-family: Times;`
		- We can simply use:
			- `font: italic 24px Times;`
				- We simply list the values, with a space in between each.
- Here are all the properties you can set using the `font` shorthand and the order in which you would specify them:
	1. `font-style` (optional, will simply use *default* if unspecified)
		- italic, normal, oblique
			2. `font-variant` (optional, will simply use *default* if unspecified)
				- small-caps, normal
					3. `font-weight` (optional, will simply use *default* if unspecified)
						- bold, bolder, lighter
							4. `font-size` ==REQUIRED==
								- px, %, small, large
									 5. `font-family` ==REQUIRED==
										- 'Courier New', Courier, monospace
										- 'Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif
	- Or to put that in context:
		- `font: font-style font-variant font-weight font-size font-family;`
			- Here's an example that uses all five properties:
				- `font: italic small-caps bold 24px "Times New Roman";`
	- Example if an optional property is left out:
		- this specifies the `font-style`:
			- `font: italic 24px Times;`
				- But this one leaves it out:
					- `font: 24px Times;`
						- Since the `font-style` isn't specified, it defaults to `normal` (i.e., not italic).


==N==
