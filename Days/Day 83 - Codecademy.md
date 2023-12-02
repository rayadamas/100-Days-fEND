# [12/2/2023, 11:20-12:42]
- **Today's Progress**: Separate Hooks for Separate Effects
	- tomorrow will be a review day
- **Thoughts:** re-reading chatty's explanation of this before starting the actual lesson
	- 1st part of the quiz was like navigating spaghetti, but the solution itself was within the code we wanted to refactor
	- took me forever to refactor the original Promise.all that was targeting all the diff state variables. i should've just copied the template from the example instead of trying to work line by line figuring out the proper syntax by eye
	- with step 2 i was trying to achieve what it was asking, separate and config the get calls for each state var, which should've remained under that single useEffect. THEN in step 3, this useEffect was to be separated into 3 individual side-effects
	- step 4 was essentially calling for the same grouping, so i was trying to develop my eyes by not immediately copying the example syntax, but was also speeding in what was being asked, in favor of where i could see we were going to end up
	- i placed the reproduced code in the codecademy ide and it was breaking, but the original is still fine
---
# ![[Day 82 - Codecademy#quiz]]
# Separate Hooks for Separate Effects
- When multiple values are closely related and change at the same time, it can make sense to group these values in a collection like an object or array.
	- Packaging data together can also add complexity to the code responsible for managing that data. Therefore, it is a good idea to separate concerns by managing different data with different [Hooks](https://www.codecademy.com/resources/docs/react/hooks).
```
- Compare the complexity here, where data is bundled up into a single object:

// Handle both position and menuItems with one useEffect hook.
const [data, setData] = useState({ position: { x: 0, y: 0 } });
useEffect(() => {
  get('/menu').then((response) => {
    setData((prev) => ({ ...prev, menuItems: response.data }));
  });
  const handleMove = (event) =>
    setData((prev) => ({
      ...prev,
      position: { x: event.clientX, y: event.clientY }
    }));
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);

- To the simplicity here, where we have separated concerns:

// Handle menuItems with one useEffect hook.
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);

// Handle position with a separate useEffect hook.
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```
- It is not always obvious whether to bundle data together or separate it, but with practice, we get better at organizing our code so that it is easier to understand, add to, reuse, and test!
## quiz
1. At the moment, this code seems to work just fine. There are three different network requests being made in a single effect and lots of different, unrelated data being managed in a single state variable. Let’s get to work breaking these single `useState()` and `useEffect()` calls into separate, simpler hooks. Doing so will make this code easier to understand, build on top of, and reuse as we continue to improve our application!
	- Begin refactoring this component:
		- Use a separate State Hook for `menu`, `newsFeed`, and `friends`.
		- Use these new state setters instead of `setData()` in the effect.
		- Simplify our JSX to use these new state variables instead of `data`.
2. `Promise.all()` was helpful to us when we had all of our data bundled up in a single object. It called all backend services, and when they all sent back responses, we could then call our state setters with the responses.
	- Because we are now managing these values separately, we can remove this complexity! In our effect, call the `get()` function three times for the three different data collections that our component wants to render, without using `Promise.all()` any more.
3. Now that we have three separate backend calls, let’s continue to separate concerns by splitting each of these into three separate Effect Hooks!
4. Each `useEffect()` call is working with a corresponding `useState()` call. Let’s reorganize our code to show this relationship more clearly, making the logic easier to read and reuse!
	- For each of these three data collections, group the related State Hook and the Effect Hook next to one. This will help to make it clear which Hooks are working together to manage each separate data model.
```
SocialNetwork.js

// Import React and its hooks: useState for state management, and useEffect for side effects.
import React, { useState, useEffect } from "react";
// Import the 'get' function from a mock backend. This simulates fetching data from an API.
import { get } from "./mockBackend/fetch";

// Define the main functional component for the Social Network.
export default function SocialNetwork() {
  // Define 'menu' state and its setter. Initially set to null.
  const [menu, setMenu] = useState(null);
  
  // Use useEffect hook to fetch menu data when the component mounts.
  useEffect(() => {
    get("/menu").then((response) => {
      setMenu(response.data); // Update 'menu' state with the fetched data.
    });
  }, []); // The empty array means this effect runs only once after the component mounts.

  // Define 'newsFeed' state and its setter. Initially set to null.
  const [newsFeed, setNewsFeed] = useState(null);

  // Use another useEffect hook to fetch news feed data when the component mounts.
  useEffect(() => {
    get("/news-feed").then((response) => {
      setNewsFeed(response.data); // Update 'newsFeed' state with the fetched data.
    });
  }, []); // This effect also runs only once after the component mounts.

  // Define 'friends' state and its setter. Initially set to null.
  const [friends, setFriends] = useState(null);

  // A third useEffect hook to fetch friends data when the component mounts.
  useEffect(() => {
    get("/friends").then((response) => {
      setFriends(response.data); // Update 'friends' state with the fetched data.
    });
  }, []); // Again, this effect runs only once after the component mounts.

  // The component's JSX template.
  return (
    <div className="App">
      <h1>My Network</h1>
      {/* Conditional rendering: if 'menu' is not loaded, show "Loading..", otherwise display the menu */}
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {/* Map through 'menu' items and create a button for each item */}
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className="content">
        {/* Conditional rendering for 'newsFeed'. Show "Loading.." or the news feed content */}
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {/* Map through 'newsFeed' items and display them */}
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                {/* Display image for each news feed item */}
                <img src={imgSrc} alt="" />
              </article>
            ))}
          </section>
        )}
        {/* Conditional rendering for 'friends'. Show "Loading.." or the list of friends */}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside>
            <ul>
              {/* Sort friends by online status, then map through them and display */}
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? "online" : "offline"}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
```
- Having chatty read the code before i refactored it to explain how/why it should be refactored
```
(prev) SocialNetwork.js

- In this version of the `SocialNetwork` component, the approach to fetching and storing data is centralized. I'll explain how it works and then why it might be beneficial to refactor it:

// Import React and its hooks, useState and useEffect.
import React, { useState, useEffect } from 'react';
// Import the 'get' function to simulate API calls.
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  // Define a single state 'data' to store all data fetched.
  const [data, setData] = useState(null);

  // Use one useEffect hook to fetch all data when the component mounts.
  useEffect(() => {
    // Use Promise.all to fetch all data simultaneously.
    Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        // Set all fetched data in the 'data' state at once.
        setData({
          menu: menuResponse.data,
          newsFeed: newsFeedResponse.data,
          friends: friendsResponse.data
        });
      }
    );
  }, []); // Runs only once after the component mounts.

  // The component's JSX template.
  return (
    <div className='App'>
      {/* ... (content rendering logic) */}
    </div>
  );
}
```
### **Why Refactor?**
1. **Separation of Concerns**: The initial approach bundles all data fetching into one state and effect. While this can be efficient in terms of lines of code, it's less clear and mixes different data concerns. Refactoring to use separate states and effects for each data type (`menu`, `newsFeed`, `friends`) enhances readability and maintainability.
    
2. **Independent Loading States**: In the original code, if one API call fails or takes longer, it affects the entire `data` state. By separating these calls, each can independently handle its loading and error states, improving user experience.
    
3. **Easier Debugging and Maintenance**: Having separate states and effects for each data type makes it easier to debug issues related to a specific API call or data set. It also makes the code more maintainable, as changes to one data type (e.g., adding a new field to `friends`) won't affect others.
    
4. **Scalability**: As the application grows, you might need to fetch more data or add more logic to how data is fetched and processed. Keeping these concerns separate from the beginning makes it easier to scale and modify the component.
    
5. **Performance Considerations**: While `Promise.all` is efficient, it also means that the UI won't update until all requests are completed. If one request is slow, it delays the entire UI update. By fetching and setting states independently, the UI can update incrementally as each request completes.
	- Overall, the refactored approach leads to cleaner, more maintainable, and potentially more performant code, especially as the complexity of the application increases.












































