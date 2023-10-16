// Replace the variable declarations using let or const.

/*var*/const CHARACTER_LIMIT = 255;
/*var*/const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (/*var*/let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

// Template Literals
const myName = "Diamond Ray";
const greeting = `Hello there, my name is ${myName}`;
console.log(greeting);

// Modify the createAnimalTradingCardHTML() function to use a template literal for cardHTML.
const cheetah = {
 name: 'Cheetah',
 scientificName: 'Acinonyx jubatus',
 lifespan: '10-12 years',
 speed: '68-75 mph',
 diet: 'carnivore',
 summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
 fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
 const cardHTML = `'<div class="card">'
     '<h3 class="name">' ${animal.name} '</h3>'
     '<img src="' + ${animal.name} '.jpg" alt="' ${animal.name} '" class="picture">'
     '<div class="description">'
         '<p class="fact">' ${animal.fact} '</p>' 
         '<ul class="details">' 
             '<li><span class="bold">Scientific Name</span>: ' ${animal.scientificName} '</li>' 
             '<li><span class="bold">Average Lifespan</span>: ' ${animal.lifespan} '</li>' 
             '<li><span class="bold">Average Speed</span>: ' ${animal.speed} '</li>' 
             '<li><span class="bold">Diet</span>: ' ${animal.diet} '</li>' 
         '</ul>' 
         '<p class="brief">' ${animal.summary} '</p>' 
     '</div>' 
 '</div>'`;

 return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

// Destructuring Arrays
const point = [10, 25, -34, 100];
const [x, y, z, w] = point;// x = 10, y = 25, z = -34, w = 100
console.log(x, y, z, w);

/*
Use array destructuring to pull out the three colors from the array of things and store them into the variables one, two, and three.
* Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
*/

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one,,,two,,,,three] = things;//The empty commas , are used to skip elements in the things array that we don't want to assign to variables.
const colors = `List of Colors: ${one}, ${two}, ${three}`;
console.log(colors);

// For in
for (const thing in things) {
 console.log(things[thing]);
}

// For of
const items = ['item1', 'item2', 'item3'];
for (const item of items) {
 console.log(item);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
 if (digit % 2 === 0) {
     continue;//continue to the next iteration of the loop if the condition is met.
 }
 console.log(digit);
}

// Writing a For...of Loop
/*
Write a for...of loop that:

loops through each day in the days array
capitalizes the first letter of the day
and prints the day out to the console
Your code should log the following to the console:

Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
*/

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of days) {
 console.log(day[0].toUpperCase() + day.slice(1));// day[0] is the first letter of the day string.
 //We use the toUpperCase() method to capitalize it. Then we add it to the rest of the string using the slice() method.
 //slice(1) returns the rest of the string beginning at the second character.
}

// Spread Operator
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];


console.log(produce);

// Using the Rest Parameter
/*
Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

TIP: Make sure to test your code with different values. For example,

average(2, 6) should return 4
average(2, 3, 3, 5, 7, 10) should return 5
average(7, 1432, 12, 13, 100) should return 312.8
average() should return 0
*/


function average(...nums) {
 let totalSum = 0;
 let avg = 0;
 for (const num of nums) {
     totalSum += num;// total = total + num
     numCnt = nums.length;
 }
 avg = totalSum / numCnt;
 return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

