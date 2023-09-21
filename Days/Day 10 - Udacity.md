# [9/20/2023, 13:38-14:34, 15:53-16:47, 20:41-21:33]
- **Today's Progress**: working on making containers out of divs. intro to #CSS_flexbox w/ practice, review syntax, made a static tic-tac-toe page w/ a separate style sheet, worked through animal trading card project
- **Thoughts:** having issues w/ my boxes rendering. forgot to add the `.` when referencing the file location. mini-hiccup w/ working file locations and their corresponding folders but was mitigated. was a brain teaser working through the "spaced word" behavior of #CSS_selector #CSS_selector_class and a stylesheet's response to such. making the card page wasn't too difficult since a good portion of it was templatized for me but nothing was unfamiliar regardless. it's continuing to prove a challenge to properly classify new syntax/keywords. with the animal trading card i conclude the intro web dev portion of the course which wasn't too bad for not having explicitly engaged with this material in quite some time but i'm ready to keep going.
---
# #HTML_container (1/2)
- We can put boxes inside other boxes.
	- If those boxes are `div` elements, then we simply nest the `div` elements inside one another:
```
<div>
  <div>
  </div>
</div>
```
- One reason to nest boxes like this is so that you can use one of the boxes as a _container_ for the other boxes.
```
<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="UTF-8">

    <title>Containers</title>

    <link rel="stylesheet" href="./css/containers_style.css">

  </head>

  

  <body>

    <div class="container">

      <div class="box red">Red</div>

      <div class="box green">Green</div>

      <div class="box yellow">Yellow</div>

    </div>

  </body>

</html>

---
.box{

 width: 100px;

 height: 100px;

 text-align: center;

 font-size: 30px;

 font-weight: bold;

 font-family: sans-serif;

}

  

.red{

 background-color: red;

}

  

.green{

 background-color: green;

}

  

.yellow{

 background-color: yellow;

}

  

.container{

 float: right;

}
```
==N==
# [Flexbox](https://www.youtube.com/watch?v=flANhTWKrQg)
- **Browser Layout for Traditional Documents**
	- Initially designed to display content in a top-to-bottom manner, resembling traditional documents.
	- Ideal for displaying structured content like headlines, paragraphs, and lists.
	- Works well for web pages that host articles, scientific papers, or stories, where the content flows linearly.
		- Examples of such pages are Wikipedia articles where the content is presented in a structured and sequential manner.
- **Evolution of Websites**
	- Modern websites have evolved to offer diverse functionalities beyond just displaying documents.
		- Can function as a photo gallery, messaging service, or even a game, requiring more flexible layout options.
			- The traditional document-oriented layout may not be the most efficient or visually appealing for these types of web services.
- **Need for Flexible Layouts**
	- Current websites and apps require layouts that can adapt to various content types and user interfaces.
		- A more flexible layout is necessary to accommodate the diverse range of content and functionalities offered by modern websites.
- **CSS and Its Evolution**
	- CSS (Cascading Style Sheets) has adapted over time to support the changing needs of web layouts.
		- Continuous improvements have been made to allow for more flexible and adaptive layouts.
- **Introduction to Flexbox**
- #CSS_flexbox:
	- Flexbox, or Flexible Box Layout, is a recent feature in CSS that allows for more adaptable layouts.
		- Offers a way to change the rules of how content boxes are laid out on the page, moving away from the traditional document-based approach.
			- Enables developers to create layouts that can adjust based on the content and the viewing window.
	- **Demonstration of Flexbox Features**
		- Creating boxes with different background colors to visualize layout changes.
			- Setting dimensions of the boxes to 100x100 pixels and placing them inside a container element.
				- Initial layout:
					- boxes are displayed vertically, one after the other, resembling paragraphs in a document.
				- Applying Flexbox:
					- By setting the display property to "flex" on the container, the boxes are displayed side by side.
	- #CSS_flexbox vs #CSS_box_float Property:
		- While the #CSS_box_float: left" property can also align boxes side by side, Flexbox offers more flexibility, especially when resizing the browser window.
			- Responsive Design:
				- Flexbox allows the elements to resize to fit the screen, which is beneficial for viewing on devices with different screen sizes, including mobile phones with narrow windows.
			- Flex Wrap Property:
				- Enables wrapping of boxes to the next line when there is insufficient room on the screen, providing a cleaner and more adaptive layout especially on narrow browser windows.
==end of 1st pomo==

# CSS Syntax Review
## Ruleset Syntax
- The basic syntax of a CSS ruleset has two parts:
	- a #CSS_selector,
	- and a group of _rules_,
		- each of which consists of a #CSS_property name and the #CSS_value of that property.
```
selector { 
    property: value;
}
```
- The selector is written first,
	- and then the rules are written inside `{` curly brackets `}`.
		- Each rule's property and value are separated by a `:` colon,
			- and the rule always ends with a `;` semicolon.
## #CSS_selector
- The selector indicates which #HTML_element's the rule will apply to.
	- You've seen a few different sorts of selector:
		- the #HTML_element selector,
		- the #HTML_attribute_class selector,
		- the #HTML_attribute_ID selector,
		- the #CSS_selector_child/descendant selector.
- A #CSS_selector_type selector applies to ==every== HTML element of a particular type, such as:
	- #HTML_element_p or #HTML_element_Em.
		- This selector will apply to every #HTML_element_p element:
```
p {
    color: blue;
}
```
🟢
- A #CSS_selector_class  applies to all elements that share a #HTML_attribute_class attribute. The class selector is written starting with a `.` (dot):
```
.narrow {
    width: 20%;
}
```
- In order for the class selector to apply, there have to be HTML elements on the page that use that `class` attribute:
```
<div class="narrow">
   This will get the 20% width.
</div>
```
🟢
- An #CSS_selector_id applies to an element with a particular #HTML_attribute_ID attribute. The id selector is written starting with a `#` sign:
```
#sidebar {
    background-color: lightgray;
    width: 20%;
    float: left;
}
```
- Within an HTML page, there should be only ==one== element with that `id` attribute value.
```
<div id="sidebar">
    This will get the background, width, and float values from the sidebar CSS rule.
</div>
```
🟢
- A #CSS_selector_child/descendant is a compound of two simpler selectors. It applies only to an inner element that is a descendant (on the #DoM tree) of a particular outer element.
```
li a {
    color: pink;
}
```
- The above selector will apply to #HTML_element_a elements (hyperlinks), but only those inside an #HTML_element_li element (list item):
```
<ul>
    <li> <a href="https://www.udacity.com/"> Pink Udacity </a>
</ul>
<p> <a href="https://www.google.com/"> Non-pink Google </a>
```
## Rules
- A ruleset can be composed of several rules, each of which applies a particular #CSS_value to a #CSS_property of the selected elements.
	- Properties are things such as the:
		- color,
		- position,
		- size,
		- and shape of the element.
```
h1 { color: red; font-size: larger; }
This rule applies the value `red` to the property `color`, and the value `larger` to the property `font-size`.
```
- Some properties allow values that are more than one word long, such as the #CSS_font property:
```
body { font: 12pt bold Consolas, Monaco, monospace; }
```
### Font stacks
- The `font-family` and `font` properties allow you to specify a #CSS_font_stack:
	- a list of font options separated by `,` commas.
		- The browser will use the first font in the stack that is available on the user's system.
			- Usually the last font in the stack should be a generic font name, such as `serif`, `sans-serif`, or `monospace`.
### Colors
- There are several ways to specify a color in CSS.
	- Three common ones are #Base16-Hexadecimal codes, `rgb` triples, and color names.
```
.orange {
    color: #ff9900;
}
.pink {
    color: rgb(100%, 80%, 80%);
}
.chartreuse {
    color: chartreuse;
}
```
## #CSS_flexbox
- To change the browser's layout from the default document-based layout to the flexible box layout, set `display: flex` on a container element (one that has other elements inside it).
```
.outer {
    display: flex;
    border: 2px dotted orange;
}
.inner {
    width: 100px;
    border: 1px solid black;
    padding: 10px;
}
```
```
Flexbox can be heavily customized! The above will cause `.inner` HTML elements to be packed in a row within the `.outer` element:
<div class="outer">
   <p class="inner"> I am a box. </p>
   <p class="inner"> I am another box. </p>
   <p class="inner"> Hey, I am a box, too! Boxes <strong>rock</strong>. </p>
   <p class="inner"> Let's be boxes together. Yay, flexbox. </p>
</div>
```

==end of 2nd pomo==
# TTToe #HTML / TTToeStyle #CSS 
```
<!-- making a simple tic-tac-toe display using an unordered list, and list items -->

<!DOCTYPE html>

<html lang="en">

  <head>

    <title>Tic-Tac-Toe</title>

    <link rel="stylesheet" type="text/css" href="./css/TTToeStyle.css" />

  </head>

  

  <body>

    <ul>

      <li>X</li>

      <li></li>

      <li>O</li>

  

      <li></li>

      <li>X</li>

      <li>O</li>

  

      <li>X</li>

      <li>O</li>

      <li></li>

    </ul>

  </body>

</html>

---
ul {
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}

  

li {
  width: 90px;
  height: 90px;
  font-size: 75px;
  font-family: "Arial", sans-serif;
  background-color: pink;
  margin: 5px;
  list-style: none;
  text-align: center;
}
```

==N==
## Project Overview: Animal Trading Cards
- In this project, you'll have the opportunity to demonstrate your new web development skills by re-creating a webpage from a design prototype.
- This is a common workflow for front-end web developers. Typically, you'll be provided with a design prototype that needs to be translated into an actual, functional website.
- The design prototype used in this project (which you can see in the image below) is inspired by trading cards and features a fish you might recognize from a popular animated film. You’ll be creating a card like this and swapping out the fish with an animal of your choice.
- In most cases, designers only provide you with the design prototype and nothing else. For this project, we've also provided you with the HTML. We've done this so you can focus on the main point of this project—which is to demonstrate your ability to add style to a page using CSS.

```
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <title>Animal Trading Card</title>
 <link rel="stylesheet" href="./atc_css/atc_style.css">
</head>

<body>
 <div class="container">
  <!-- your favorite animal's name goes here -->
  <h2>Siberian Tiger</h2>
  <!-- your favorite animal's image goes here -->
  <img class="image" src="./sib tiger.jpg" alt="Striped Orange and Black Siberian Tiger">
  <div>
   <!-- your favorite animal's interesting fact goes here -->

	 <section>
   <p class="interesting-fact">Male Siberian Tiger skulls are very high and strong, while<br>
    female skulls are always smaller, and less<br>
    robust in comparison.</p>
    <!-- CSS `font-style: italic;` is implemented via
     Class attribute `class="interesting-fact"`-->

   <ul>
    <!-- your favorite animal's list items go here -->
    <li><span class="label">Scientific Name</span>: Panthera Tigeris Alatica</li>
    <li><span class="label">Habitat</span>: Forests</li>
    <li><span class="label">Diet</span>: Deer, Moose, Boar, Rabbit</li>
    <li><span class="label">Reproduction</span>: Siberian Tigers are able mate at any time of the year.</li>
   </ul><br>

    <!-- CSS `font-weight: bold;` is implemented
     via Class attribute `class="bold-label"`-->

   <!-- your favorite animal's description goes here -->
   <p>The Amur Tiger is the only subspecies of tiger that can survive in extremely cold areas.
    It is has developed certain physical characteristics that enable it to endure the cold
    climate of its habitat. The tiger has a thick layer of fat that insulates the body against heat loss.
    Additionally, the thick, dense fur that covers its body keeps the animal warm, especially when it is
    extremely cold. The Siberia tiger is always on the move and does not idle for long. The constant
    movement ensures that the body generates a lot of heat to keep it warm.</p>
  </section>
  </div>
 </div>
</body>
</html>
---
/* add your CSS here */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
  

body {
 width: 100%;
 min-height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background: rgb(199, 141, 17);
 line-height: 1.5;
}
  
  
.container {
 width: fit-content;
 margin: 0 auto;
 border-style: double;
 border-width: 8px;
 box-shadow: 0 0 15px rgb(0, 0, 0, 0.4);
 border-radius: 50px 50px 50px 50px;
}

  
img {
 width: 300px;
 align-items: center;
 margin-left: 100px;
 margin-bottom: 10px;
 border-radius: 50px 50px 50px 50px;
}

  
.interesting-fact {
 /* <em> = HTML equivalent */
 font-style: italic;
}

  
.label {
 font-weight: bold;
}

  
ul {
 list-style-type: none;
}

  
li {
 padding: 2px ;
}

  
h2 {
 padding: 25px 25px 25px 25px;
 color: rgb(228, 228, 228);
}

  
section {
 border-style: ridge;
 border-width: 50%;
 box-shadow: 0 0 15px rgb(0, 0, 0, 0.4);
 border-color: indianred;
 padding: 25px 25px 25px 25px;
 border-radius: 50px 50px 50px 50px;
}
```

==end of 3rd pomo==

