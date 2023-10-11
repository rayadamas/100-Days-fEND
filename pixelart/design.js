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
 grid.innerHTML = ""; // innerHTML sets our markup to a blank canvas
 for (row = 0; row < height.value && row <= 30; row++) {
   // set row to 0 | height.value comes from user input | interates if value input is <=30. up to 31
   let row = grid.insertRow(0);
   // set to 0 as 
   // dot notation insertRow adds new rows at 1st "horizontal" position of our grid
   for (cell = 0; cell < width.value && cell <= 30; cell++) {
     // set cell to 0 | width.value comes from user input | interates if value input is <=30. up to 31
     let cell = row.insertCell(0);
     // set to 0 as to begin at the start of our table
     // dot notation insertCell adds new rows at 1st "verticle" position of our grid
     cell.addEventListener("click", function (ev) {
       // we 'listen' for click -> the 'submit' button
       ev.target.style.backgroundColor = color.value;
       // event prop ev returns style within grid|points to bg color|assigns value to user input
     });
   }
 }
}