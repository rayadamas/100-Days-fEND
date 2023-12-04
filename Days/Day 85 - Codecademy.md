# [12/4/2023, 15:17-16:17]
- **Today's Progress**: REACT PROGRAMMING PATTERNS: Separate Container Components From Presentational Components
- **Thoughts:** this module seems to be continuing the dive into the importance of separating the different functional components in ones code. quiz didn't really tell me much but i see it's built on in the next lesson.
---
# REACT PROGRAMMING PATTERNS
## Separate Container Components From Presentational Components
### Understanding the Pattern
**1. Concept:**
- **Container Components**: These components are concerned with how things work. They are usually class components (although they can also be functional components with hooks) and are responsible for managing state, data fetching, and handling logic.
- **Presentational Components**: Also known as 'dumb components', these are mainly functional components (before hooks, now they can also be functional components with hooks) that focus on the UI (User Interface). They receive data through props and display it. They are not concerned with where the data comes from or how it's manipulated.

**2. Advantages:**
- **Maintainability**: This separation makes it easier to manage and maintain the code. The UI is separated from the business logic.
- **Reusability**: Presentational components can be easily reused across different parts of the application since they don’t depend on the business logic.
- **Testability**: It becomes easier to test components as the business logic is separated from the UI rendering.

**3. Implementation:**
- **Props & State Management**: Container components pass props down to presentational components. They manage state and often contain various lifecycle methods or hooks to fetch data.
- **Functional Components & Hooks**: With the introduction of hooks in React, functional components can also take up roles traditionally reserved for class components, allowing for more flexible architectures.
### Practical Example
Imagine an application with a user profile section.
- **UserContainer (Container Component)**: This component will handle API calls to fetch user data, manage state, and handle any logic needed to manipulate the data.
- **UserProfile (Presentational Component)**: This component will receive the user data via props from UserContainer. It focuses purely on how to display the user data, like name, profile picture, and bio.
### Best Practices
- **Keep It Simple**: Only create container components when necessary. If the logic can be managed within the presentational component, don’t complicate your architecture.
- **State Management Libraries**: In complex applications, state management libraries like Redux or Context API can be used in conjunction with this pattern for more efficient state handling across components.
- **Documentation & Naming Conventions**: Clearly document your components and use naming conventions to distinguish between container and presentational components for easier understanding by other developers.
### Conclusion
- Separating container and presentational components in React helps in creating a clean, maintainable, and scalable codebase. It’s a pattern that aligns well with React’s compositional nature and helps developers in managing the complexities of large-scale applications.
## Let's create a simple example based on the User profile scenario I described. We'll have two components: `UserContainer` as the container component and `UserProfile` as the presentational component.
### `UserContainer` Component
- This component will be responsible for fetching and handling the user data. We'll simulate a user data fetch with a simple state.
```
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

const UserContainer = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setUserData({
                name: 'John Doe',
                profilePic: 'https://via.placeholder.com/150',
                bio: 'Software Developer and Tech Enthusiast.'
            });
        }, 1000);
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return <UserProfile user={userData} />;
};

export default UserContainer;

### `UserProfile` Component

This is the presentational component that receives the user data via props and displays it.

import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <img src={user.profilePic} alt={user.name} />
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        </div>
    );
};

export default UserProfile;

### Usage
To use these components in your React application, you would typically render the `UserContainer` component, which in turn renders `UserProfile` with the appropriate data.

import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './UserContainer';

ReactDOM.render(<UserContainer />, document.getElementById('root'));
```
### Notes
1. **Data Fetching**: In a real-world application, you would fetch data from an API instead of simulating it with `setTimeout`.
2. **Error Handling**: Proper error handling should be implemented for the data fetching process.
3. **Styling**: This example does not include styling for simplicity. In a real application, you would use CSS or a styling library to style your components.
4. **Testing**: Each component can be tested independently; `UserProfile` can be tested for UI rendering and `UserContainer` for logic and state management.
	- This example illustrates the basic concept of separating container and presentational components in React. You can expand upon this pattern based on the complexity and requirements of your application.
---
- As you continue building your React applications, you will soon realize that one component has too many responsibilities and is too difficult to maintain. In this lesson, you will learn a programming pattern that will help organize your React code.
	- If a component has to have [state](https://www.codecademy.com/resources/docs/react/state), make calculations based on [props](https://www.codecademy.com/resources/docs/react/props), or manage any other complex logic, then that component shouldn’t also have to render [JSX](https://www.codecademy.com/resources/docs/react/jsx).
		- To help reduce the component’s complexity, we can break it down into multiple simpler components.
			- How should you break it apart?
				- The pattern we’ll learn about focuses on splitting complex components into:
					- stateful (container), manage complex state or logic
					- and
					- stateless (presentational) components, only render JSX.
- As we progress through this lesson, we’ll take a look at how to apply this pattern to our example React app to break down a complex component into container and presentational components.
## Create Container Component
- Separating container components from presentational components is a popular React programming pattern.
	- The functional part of a component (maintaining a [state](https://www.codecademy.com/resources/docs/react/state), making calculations based on [props](https://www.codecademy.com/resources/docs/react/props), etc.) can be separated into a container component, also known as a stateful component.
		- This container component will be in charge of maintaining the state (creating and updating) and passing it on (we’ll see this later) to any component it renders through props.
### quiz
1. Click Run. You are looking at a rendered `<GuineaPigs />` component.
	- `<GuineaPigs />`‘s job is to render a photo carousel of guinea pigs and a dropdown to pick your favorite guinea pig. It does this perfectly well! And yet, it has a problem: it does too much stuff. How might we divide this into container and presentational components?
2. Let’s start separating the logic from the `GuineaPigs` component into a new container component called `GuineaPigsContainer`.
	- First, highlight the entire contents of **components/GuineaPigs.js**, and copy it to the clipboard.
		- Click on the folder icon near the top left of the code editor. Inside the **containers/** folder, create a new file named **GuineaPigsContainer.js**.
			- Open **containers/GuineaPigsContainer.js**, click inside the empty file, and paste. **containers/GuineaPigsContainer.js** and **components/GuineaPigs.js** should be identical.
				- Finally, click Run.















































