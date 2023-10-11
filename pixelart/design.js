// Select color input
let color = document.getElementById("colorPicker");
// we target the webpage itself with document
// getElementById method returns an element w/ a specified value
// targets populated color box users are able to click via colorPicker ID in index.html

// Select size input
let size = document.getElementById("sizePicker"); // ref form containing dimension selectors via sizePicker
let height = document.getElementById("inputHeight"); // ref height input form via inputHeight
let width = document.getElementById("inputWidth"); // ref width input form via inputWidth
let grid = document.getElementById("pixelCanvas"); // ref the space where table is created via pixelCanvas

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function (e) {
 // size DOM object 1st parm targets SUBMIT button
 // 2nd parm is anon funct for click event to trigger function to be defined
 e.preventDefault();
 makeGrid(height.value, width.value);
});
// addEventListener method attaches an event handler(+function) to an element
// to be called when its event is delivered to its target(element, document, window)

// preventDefault will cancel a cancellable event, default actions not permitted
// instead we call makeGrid() with height & width arguements

function makeGrid() {

 // Your code goes here!
 
 }