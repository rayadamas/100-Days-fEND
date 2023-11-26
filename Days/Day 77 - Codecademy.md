# [11/26/2023, 13:42-15:00]
- **Today's Progress**: Object in State
	- Separate Hooks for Separate States
- **Thoughts:** had no clue what a [*computed property name*](http://eloquentcode.com/computed-property-names-in-javascript) was, but now i understand it's simply a dynamic manner of naming object properties.
	- the syntax in the 2nd quiz was a little difficult but i understand the concept behind separating the hooks for readability. 
---
# Objects in State
- We can also use [state](https://www.codecademy.com/resources/docs/react/state) with objects.
	- When we work with a set of related variables, it can be very helpful to group them into an object. Let’s look at an example of this in action.
```
export default function Login() {
  const [formState, setFormState] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}
```
- A few things to notice:
	- We use a state setter callback function to update a state based on the previous value.
		- The spread syntax is the same for objects as for arrays: `{ ...oldObject, newKey: newValue }`.
			- We reuse our event handler across multiple inputs by using the input tag’s `name` attribute to identify which input the change event came from.
- Once again, when updating the state with `setFormState()` inside a function component, we do not modify the same object.
	- We must copy over the values from the previous object when setting the next value of a state.
		- Thankfully, the [[Bey's Cosmic Canopy/Rei's Library/Javascript/JavaScript-React-F.C.C/ES6/ES6(Variables)/Spread Operator|Spread Operator]] syntax makes this super easy to do!
	- Anytime one of the input values is updated, the `handleChange()` function will be called.
		- Inside this event handler, we use object destructuring to unpack the `target` property from our `event` object, then we use object destructuring again to unpack the `name` and `value` properties from the `target` object.
- Inside our state setter callback function, we wrap our curly brackets in parentheses like so:
	- `setFormState((prev) => ({ ...prev }))`
		- This tells JavaScript that our curly brackets refer to a new object to be returned.
			- We use `...`, the spread operator, to fill in the corresponding fields from our previous state.
				- Finally, we overwrite the appropriate key with its updated value.
- Did you notice the square brackets around the `name`?
	- This [Computed Property Name](http://eloquentcode.com/computed-property-names-in-javascript) allows us to use the string value stored by the `name` variable as a property key.
## quiz
1. We’ll use objects with states to build an input form.
	- The local state variable `profile` and state setter function `setProfile` are responsible for keeping track of the input values from our users.
		- In our #JSX, we are looking up properties stored in the `profile` object.
			- This throws an error at our first render because we are attempting to get the value of a property from an object that has not been defined yet.
				- To fix this, initialize `profile` as an empty object.
2. You should now see the form rendered, but nothing will happen when we type in the input boxes. 
	- Our form does not re-render to show the keystrokes yet.
		- To fix this, add the `onChange` event listener to our JSX tags to call `handleChange()` whenever a user types in an input field.
			- This way, we can determine what happens when the user changes the input by typing in the form.
3. Let’s make our `handleChange()` function a bit easier to read. 
	- Use object destructuring to initialize `name` and `value` in a more concise way.
4. There’s a bug in our code! Have you noticed it? Try typing in one input, then type in a different input. What happens? Why?
	- Each time that we call `setProfile()` in our event handler, we give `profile` the value of a new object with the `name` and `value` of the input that most recently changed, but we lose the values that were stored for inputs with any other `name`.
		- Use the spread operator to fix this bug. We want to copy over all of the values from our previous `profile` object whenever we call our state setter function. Use `prevProfile` as the argument for our state setter callback function.
5. Finally, add an event listener to the `<form>` tag to call our `handleSubmit()` function when the user submits the form.
```
EditProfile.js

	import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    // const name = target.name;
    // const value = target.value;
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
```
==N==
## Separate Hooks for Separate States
- While there are times when it can be helpful to store related data in a data collection, like an array or object, it can also be helpful to create different [state](https://www.codecademy.com/resources/docs/react/state) variables for data that change separately.
	- Managing dynamic data is much easier when we keep our data models as simple as possible.
- For example, if we had a single object that held state for a subject you are studying at school, it might look something like this:
```
function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
  });
```
- This would work, but think about how messy it could get to copy over all the other values when we need to update something in this big state object.
	- For example, to update the grade on an exam, we would need an event handler that did something like this:
```
setState((prev) => ({
 ...prev,
  exams: prev.exams.map((exam) => {
    if( exam.unit === updatedExam.unit ){
      return { 
        ...exam,
        score: updatedExam.score
      };
    } else {
      return exam;
    }
  }),
}));
```
- Complex code like this is likely to cause bugs. It’s best to create multiple state variables based on which values tend to change together.
	- We can rewrite the previous example as follows:
```
function Subject() {
  const [currentGrade, setGrade] = useState('B');
  const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  // ...
}
```
- Managing dynamic data with separate state variables has many advantages, like making our code more simple to write, read, test, and reuse across components.
	- Often, we find ourselves packaging and organizing data in collections to pass between components, then separating that data within components where different parts of the data change separately.
		- The wonderful thing about working with [Hooks](https://www.codecademy.com/resources/docs/react/hooks) is that we have the freedom to organize our data in the way that makes the most sense to us!
### quiz
1. Take a look at the `Musical` functional component. It has a large state object. Let’s refactor it to make it more readable and reusable. We’ll work on splitting it into three separate variables: `title`, `actors`, and `locations`.
	- In the `MusicalRefactored` component, take the `title` data from `Musical` and give it its own state variable, state setter, and initial value.
		- Remember to use the conventional pattern for naming state setters.
2. Next, take the `actors` data from `Musical` and give it its own state variable, state setter, and initial value.
3. Last, take the `locations` data from `Musical` and give it its own state variable, state setter, and initial value.
```
Musical.js

import React, { useState } from "react";

function Musical() {
   const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    }
  })
 }

function MusicalRefactored() {
  const [ title, setTitle ] = useState("Best Musical Ever");
  const [ actors, setActors ] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
  const [ locations, setLocations ] = useState({
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    });
}
```




































