export const questions = [
  {
    id: "1",
    question: "What is React?",
    answer:
      "React is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components that manage their own state, making the development of complex UIs more manageable.",
  },
  {
    id: "2",
    question: "What are the key features of React?",
    answer:
      "Some key features of React include virtual DOM for efficient updates, component-based architecture for reusable and composable UI elements, JSX for blending HTML with JavaScript, and one-way data binding for maintaining a unidirectional flow of data.",
  },
  {
    id: "3",
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension in React that allows developers to write HTML-like code directly within JavaScript. It provides a way to describe the UI components' structure and makes it easier to write and understand the component's rendering logic.",
  },
  {
    id: "4",
    question: "What is a component in React?",
    answer:
      "A component in React is a reusable and independent piece of UI responsible for rendering a part of the user interface. Components can be either functional or class-based and encapsulate their logic and state.",
  },
  {
    id: "5",
    question: "What is the purpose of state in React?",
    answer:
      "State in React is used to store and manage the dynamic data of a component. When the state of a component changes, React re-renders the component to reflect those changes in the UI.",
  },
  {
    id: "6",
    question: "What is the difference between props and state?",
    answer:
      "Props (short for properties) are used to pass data from parent to child components, while state is used to manage data that can change within a component. Props are read-only, whereas state can be updated using setState().",
  },
  {
    id: "7",
    question: "What is the significance of keys in React lists?",
    answer:
      "Keys are used in React lists to give elements a stable identity, enabling React to efficiently identify which items have changed, been added, or been removed. Keys help optimize the rendering performance of lists.",
  },
  {
    id: "8",
    question: "What are controlled components in React?",
    answer:
      "Controlled components in React are form elements whose value is controlled by React's state. Changes to the input elements are handled by React, enabling more control over form inputs and their behavior.",
  },
  {
    id: "9",
    question: "How does React handle events?",
    answer:
      "React uses synthetic events, which are similar to native DOM events but with cross-browser compatibility and additional functionalities. Event handlers in React are defined using camelCase naming conventions.",
  },
  {
    id: "10",
    question: "What is the role of lifecycle methods in React?",
    answer:
      "Lifecycle methods in React allow developers to perform actions at specific points in a component's life cycle, such as when it is created, updated, or destroyed. These methods enable managing side effects, updating state, etc.",
  },
  {
    id: "11",
    question: "What is the significance of React's Virtual DOM?",
    answer:
      "React's Virtual DOM is an in-memory representation of the actual DOM. It allows React to perform efficient updates by comparing the virtual DOM with the real DOM and only applying the necessary changes, minimizing direct manipulation of the DOM for better performance.",
  },
  {
    id: "12",
    question: "Explain the concept of 'lifting state up' in React.",
    answer:
      "'Lifting state up' refers to the process of moving the state from child components to their common ancestor (usually a parent component) to share state among multiple components. This pattern helps in keeping the state synchronized across components.",
  },
  {
    id: "13",
    question: "What are Higher-Order Components (HOCs) in React?",
    answer:
      "Higher-Order Components are functions that take a component and return a new enhanced component. They are used to share common functionality between components without repeating code, enabling code reuse and separation of concerns.",
  },
  {
    id: "14",
    question: "Explain React Hooks and their purpose.",
    answer:
      "React Hooks are functions that allow functional components to use state and other React features without writing a class. They enable stateful logic in functional components, improving code readability and reusability.",
  },
  {
    id: "15",
    question:
      "What are the differences between 'class' components and 'functional' components in React?",
    answer:
      "Class components use ES6 classes and have a built-in state and lifecycle methods. Functional components are JavaScript functions and can use React Hooks to introduce state and lifecycle features.",
  },
  {
    id: "16",
    question: "What is the Context API in React?",
    answer:
      "The Context API is used to manage state that needs to be accessed by many components at different nesting levels without having to explicitly pass props through each level. It provides a way to share data across the component tree.",
  },
  {
    id: "17",
    question: "Explain the purpose of React Router.",
    answer:
      "React Router is a library that enables navigation and routing in a React application. It allows for declarative routing and helps in creating single-page applications by managing the URL and rendering different components based on the URL.",
  },
  {
    id: "18",
    question: "What is the significance of PureComponent in React?",
    answer:
      "PureComponent is a class component in React that implements a shouldComponentUpdate method with a shallow prop and state comparison. It helps in preventing unnecessary re-renders by performing a shallow comparison of props and state.",
  },
  {
    id: "19",
    question: "How does error handling work in React?",
    answer:
      "In React, error boundaries (components) are used to catch JavaScript errors that occur during rendering, in lifecycle methods, or in constructors of the whole component tree. They prevent the entire app from crashing and enable displaying fallback UI.",
  },
  {
    id: "20",
    question: "Explain the concept of reconciliation in React.",
    answer:
      "Reconciliation is the process where React updates the DOM to match the component's new structure when changes occur in the component's state or props. React uses a diffing algorithm to determine the most efficient way to update the DOM.",
  },
  {
    id: "21",
    question: "What is the significance of the 'key' attribute in React?",
    answer:
      "The 'key' attribute is used to uniquely identify elements in a collection (such as a list) of React elements. It helps React identify which items have changed, been added, or been removed efficiently, optimizing rendering performance.",
  },
  {
    id: "22",
    question: "How does React handle forms?",
    answer:
      "In React, forms can be controlled or uncontrolled. Controlled components have their state controlled by React, allowing for easier manipulation and validation of form data. Uncontrolled components maintain their own state.",
  },
  {
    id: "23",
    question:
      "Explain the concept of 'setState' in React and its significance.",
    answer:
      "'setState' is a method used in class components to update their state. It schedules a re-render of the component and its children when the state changes. It's important as directly mutating state can lead to unexpected behavior.",
  },
  {
    id: "24",
    question: "What are React Fragments?",
    answer:
      "React Fragments allow grouping multiple React elements without adding an extra node to the DOM. They are useful when you need to return multiple elements in a component's render method.",
  },
  {
    id: "25",
    question: "What are the advantages of using Redux with React?",
    answer:
      "Redux is a predictable state container that can be used with React to manage the application's state more efficiently, especially for larger applications. It provides a single source of truth and enables better state management.",
  },
  {
    id: "26",
    question: "Explain the concept of 'render props' in React.",
    answer:
      "'Render props' is a pattern in React where a component's prop is a function that returns a React element. It allows for code reuse by providing a way to share code between components.",
  },
  {
    id: "27",
    question: "What is the significance of 'componentWillUnmount' in React?",
    answer:
      "'componentWillUnmount' is a lifecycle method in class components that is called just before the component is removed from the DOM. It's used for cleanup tasks such as clearing intervals or cancelling API requests.",
  },
  {
    id: "28",
    question: "How does React handle security?",
    answer:
      "React encourages best practices for security such as avoiding direct DOM manipulation, escaping user inputs to prevent XSS attacks, and using the 'key' attribute properly. It also promotes the use of libraries that handle security concerns.",
  },
  {
    id: "29",
    question: "What is the purpose of React Developer Tools?",
    answer:
      "React Developer Tools are browser extensions that allow developers to inspect the React component hierarchy, track component state and props, and debug React applications more effectively.",
  },
  {
    id: "30",
    question: "Explain the concept of 'code-splitting' in React.",
    answer:
      "'Code-splitting' is a technique used to improve the performance of React applications by splitting the bundled code into smaller chunks. It allows loading only the necessary code for the current view, reducing the initial load time.",
  },
  {
    id: "31",
    question:
      "What is the significance of PureComponent over Component in React?",
    answer:
      "PureComponent in React implements shouldComponentUpdate with a shallow prop and state comparison. It automatically performs a shallow comparison of props and state, optimizing rendering performance by preventing unnecessary re-renders.",
  },
  {
    id: "32",
    question: "What are the differences between React and Angular?",
    answer:
      "React is a JavaScript library for building UIs, whereas Angular is a full-fledged MVC framework. React uses a virtual DOM, while Angular uses a real DOM. React is more focused on the view layer, while Angular provides a complete solution for building applications.",
  },
  {
    id: "33",
    question: "Explain the concept of 'HOCs vs. Render Props' in React.",
    answer:
      "Higher-Order Components (HOCs) and Render Props are two patterns used for code reuse in React. HOCs wrap components to share functionalities, while Render Props involve components rendering a function as a prop, sharing code logic.",
  },
  {
    id: "34",
    question: "How does React handle state management without using Redux?",
    answer:
      "React's Context API can be used for state management without Redux. Context allows passing data through the component tree without explicitly passing props at every level, making it feasible for small to medium-sized apps.",
  },
  {
    id: "35",
    question:
      "What is the purpose of the 'shouldComponentUpdate' method in React?",
    answer:
      "'shouldComponentUpdate' is a lifecycle method in React that determines whether a component should re-render or not. By default, it returns true, but it can be overridden to optimize performance by preventing unnecessary re-renders.",
  },
  {
    id: "36",
    question: "How can you optimize performance in React applications?",
    answer:
      "Performance optimization in React can be achieved by using PureComponent or implementing shouldComponentUpdate, using code-splitting to load components lazily, minimizing unnecessary re-renders, and optimizing bundle sizes.",
  },
  {
    id: "37",
    question: "Explain the concept of 'forwardRef' in React.",
    answer:
      "'forwardRef' is a feature in React that allows components to pass down a ref to a child component. It's particularly useful for forwarding refs from parent components to DOM nodes or class-based child components.",
  },
  {
    id: "38",
    question:
      "What are the differences between React class components and functional components with hooks?",
    answer:
      "Class components use ES6 classes and have a built-in state and lifecycle methods, while functional components with hooks are JavaScript functions that can use state and lifecycle features through hooks like useState and useEffect.",
  },
  {
    id: "39",
    question: "How does React handle server-side rendering (SSR)?",
    answer:
      "React supports server-side rendering, allowing the initial rendering of a React component to happen on the server before sending it to the client. SSR enhances SEO, performance, and provides a better user experience.",
  },
  {
    id: "40",
    question: "What are the benefits of using PropTypes in React?",
    answer:
      "PropTypes in React are used for type-checking props to ensure the correctness of data passed to components. They help catch bugs early and serve as documentation for component usage.",
  },
  {
    id: "41",
    question: "Explain the concept of 'memoization' in React.",
    answer:
      "Memoization is a technique used to optimize performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again. React.memo is used for memoizing functional components.",
  },
  {
    id: "42",
    question: "How does React handle SEO (Search Engine Optimization)?",
    answer:
      "React supports server-side rendering (SSR) and provides tools and best practices for ensuring that search engines can crawl and index React-based web applications effectively, improving SEO.",
  },
  {
    id: "43",
    question:
      "What are the advantages of using React over other front-end frameworks?",
    answer:
      "React offers a virtual DOM for efficient updates, a component-based architecture for reusability, a rich ecosystem, strong community support, and flexibility to work with other libraries or frameworks.",
  },
  {
    id: "44",
    question:
      "Explain the concept of 'higher-order components' (HOCs) in React.",
    answer:
      "Higher-Order Components (HOCs) in React are functions that take a component and return a new enhanced component. They're used for code reuse, logic sharing, and adding additional functionalities to components.",
  },
  {
    id: "45",
    question: "What are the best practices for managing state in React?",
    answer:
      "Using state sparingly, lifting state up when needed, immutability, using hooks like useState and useEffect effectively, and choosing the appropriate state management solution based on the app's complexity.",
  },
  {
    question: "How does React handle component-based styling?",
    answer:
      "React allows various approaches for component-based styling, such as CSS-in-JS libraries like styled-components, CSS modules, inline styles, or using pre-processors like Sass or LESS.",
    id: "46",
  },
  {
    question:
      "What are the differences between React's useEffect and componentDidMount?",
    answer:
      "useEffect is a hook used in functional components to perform side effects, similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. useEffect covers various lifecycle scenarios in one hook.",
    id: "47",
  },
  {
    question: "Explain the concept of 'context' in React and its usage.",
    answer:
      "Context in React is a way to pass data through the component tree without having to pass props manually at every level. It's useful for sharing data that is needed by many components.",
    id: "48",
  },
  {
    question:
      "How can you handle performance issues related to large lists in React?",
    answer:
      "Performance issues with large lists can be mitigated using techniques like virtualization (using libraries like React Virtualized or React Window), windowing, or implementing pagination to render smaller subsets of the list.",
    id: "49",
  },
  {
    question: "What are the limitations of using React?",
    answer:
      "Some limitations of React include a steep learning curve for beginners, the need for additional libraries or tools for complex state management, and potential performance issues with overly nested component structures.",
    id: "50",
  },
  {
    question:
      "What is the role of keys in React lists? Why are they important?",
    answer:
      "Keys are used in React lists to give elements a stable identity. They help React identify which items have changed, been added, or been removed efficiently, aiding in optimization of rendering performance.",
    id: "51",
  },
  {
    question: "Explain the concept of 'error boundaries' in React.",
    answer:
      "Error boundaries in React are components that catch JavaScript errors in their child component tree during rendering, in lifecycle methods, or in constructors. They help prevent the entire app from crashing and allow displaying fallback UI.",
    id: "52",
  },
  {
    question:
      "What is the purpose of the 'dangerouslySetInnerHTML' attribute in React?",
    answer:
      "'dangerouslySetInnerHTML' is used in React to set HTML directly from React. It's typically used to render HTML content received from an external source, but it should be used with caution as it can expose the app to XSS attacks if not handled properly.",
    id: "53",
  },
  {
    question:
      "Explain the concept of 'code-splitting' in React and its advantages.",
    answer:
      "'Code-splitting' is a technique used to split the bundled JavaScript code into smaller chunks, allowing portions of the code to be loaded on demand. It improves performance by reducing the initial load time and optimizing resource usage.",
    id: "54",
  },
  {
    question:
      "What are the differences between controlled and uncontrolled components in React forms?",
    answer:
      "Controlled components have their state managed by React, while uncontrolled components maintain their state in the DOM. Controlled components provide more control and enable handling form data through React's state.",
    id: "55",
  },
  {
    question: "Explain the purpose of 'ReactDOM.render' in React.",
    answer:
      "'ReactDOM.render' is used to render a React element into the DOM. It takes a React component and attaches it to a specified DOM node in the HTML document.",
    id: "56",
  },
  {
    question: "How does React support accessibility (a11y)?",
    answer:
      "React provides various features and tools to support accessibility, such as the use of ARIA attributes, providing alt attributes for images, managing focus appropriately, and ensuring the app can be navigated and used with assistive technologies.",
    id: "57",
  },
  {
    question: "What is the role of 'refs' in React?",
    answer:
      "Refs in React provide a way to access DOM nodes or React elements created in the render method. They are commonly used to manage focus, trigger imperative animations, or integrate with third-party DOM libraries.",
    id: "58",
  },
  {
    question:
      "Explain the concept of 'stateless functional components' in React.",
    answer:
      "Stateless functional components in React are pure functions that accept props as input and return React elements. They don't have state or lifecycle methods and are useful for presentational components.",
    id: "59",
  },
  {
    question: "What are the differences between React's createElement and JSX?",
    answer:
      "JSX is a syntactic sugar for React.createElement(). JSX provides a more readable and declarative way to define React elements, while React.createElement() is a function used to create elements programmatically.",
    id: "60",
  },
  {
    question: "What is the significance of 'useEffect' in React hooks?",
    answer:
      "'useEffect' is a hook in React used to perform side effects in functional components. It serves the purpose of componentDidMount, componentDidUpdate, and componentWillUnmount in a single hook.",
    id: "61",
  },
  {
    question:
      "Explain the concept of 'context' API in React and its use cases.",
    answer:
      "Context API in React is used to pass data through the component tree without manually passing props at every level. It's suitable for sharing global data or state that needs to be accessed by many components.",
    id: "62",
  },
  {
    question: "What is the purpose of 'React.StrictMode'?",
    answer:
      "'React.StrictMode' is a tool used in React for highlighting potential problems in an application. It activates additional checks and warnings for common issues like legacy string ref usage, component lifecycle deprecations, etc.",
    id: "63",
  },
  {
    question: "How can you optimize the performance of React applications?",
    answer:
      "Performance optimization in React can be achieved by using shouldComponentUpdate or React.memo for preventing unnecessary re-renders, implementing lazy loading or code-splitting, optimizing bundle size, and using production builds in deployment.",
    id: "64",
  },
  {
    question: "Explain the concept of 'declarative programming' in React.",
    answer:
      "Declarative programming in React refers to expressing the desired outcome without specifying the step-by-step process to achieve it. React allows developers to declare the UI based on its state and handles the updates efficiently.",
    id: "65",
  },
  {
    question: "What is the purpose of 'React.Fragment' in React?",
    answer:
      "'React.Fragment' is a component in React used to group multiple elements without adding an extra DOM node. It helps in returning multiple elements from a component's render method.",
    id: "66",
  },
  {
    question: "How does React handle forms and form validation?",
    answer:
      "In React, forms can be handled using controlled components or uncontrolled components. Form validation is typically implemented by managing state and using conditional rendering to display error messages based on validation logic.",
    id: "67",
  },
  {
    question:
      "Explain the concept of 'pure functions' in React and their importance.",
    answer:
      "Pure functions in React return the same output for the same input and don't have side effects. They are essential for predictable and reliable behavior in components, aiding in debugging and testing.",
    id: "68",
  },
  {
    question:
      "What are the advantages and disadvantages of using React for building web applications?",
    answer:
      "Advantages of React include a rich ecosystem, a virtual DOM for efficient updates, a component-based architecture, while disadvantages may include a steep learning curve for beginners and the need for additional tools or libraries for certain functionalities.",
    id: "69",
  },
  {
    question:
      "Explain the concept of 'server-side rendering' (SSR) in React and its benefits.",
    answer:
      "Server-side rendering in React involves rendering the initial HTML on the server before sending it to the client. It enhances performance, improves SEO by providing readable content to search engines, and facilitates faster initial page loads.",
    id: "70",
  },
  {
    question: "What are the differences between React and React Native?",
    answer:
      "React is a JavaScript library for building web UIs, while React Native is a framework for building native mobile applications using React. React uses HTML for web, while React Native uses native components for iOS and Android.",
    id: "71",
  },
  {
    question: "Explain the concept of 'hooks' in React and their advantages.",
    answer:
      "Hooks in React are functions that enable using state and other React features in functional components. They provide a simpler and cleaner way to handle state and side effects in functional components compared to class-based components.",
    id: "72",
  },
  {
    question: "What is the purpose of the 'key' prop in React?",
    answer:
      "The 'key' prop in React is used to uniquely identify elements in a collection. It helps React identify which items have changed, been added, or been removed efficiently, aiding in optimizing rendering performance.",
    id: "73",
  },
  {
    question:
      "Explain the concept of 'Redux' and its role in React applications.",
    answer:
      "Redux is a predictable state container for JavaScript applications. It's often used with React to manage the application's state in a more predictable and centralized manner, especially for larger applications with complex state management needs.",
    id: "74",
  },
  {
    question: "What is the significance of the 'setState' method in React?",
    answer:
      "'setState' is a method used in React class components to update their state. It schedules a re-render of the component and its children when the state changes, ensuring that the UI reflects the updated state.",
    id: "75",
  },
  {
    question: "Explain the concept of 'memoization' and its usage in React.",
    answer:
      "Memoization is a technique used to optimize performance by caching the results of expensive function calls and returning the cached result when the same inputs occur again. 'React.memo' is used for memoizing functional components.",
    id: "76",
  },
  {
    question:
      "What is the purpose of 'React.Fragment' in React and when would you use it?",
    answer:
      "'React.Fragment' is used in React to group multiple elements without adding an extra DOM node. It's useful when you need to return multiple elements from a component's render method without introducing an unnecessary wrapping element.",
    id: "77",
  },
  {
    question: "Explain the concept of 'component lifecycle' in React.",
    answer:
      "The component lifecycle in React refers to the various stages a component goes through, such as mounting, updating, and unmounting. It includes methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
    id: "78",
  },
  {
    question: "How does React handle routing and navigation in applications?",
    answer:
      "React Router is a popular library used for handling routing and navigation in React applications. It allows mapping URLs to different components, enabling navigation between different views in a single-page application.",
    id: "79",
  },
  {
    question:
      "What are the differences between functional components and class components in React?",
    answer:
      "Functional components are simple JavaScript functions that take props as input and return React elements, while class components are JavaScript classes that have additional features like state and lifecycle methods.",
    id: "80",
  },
  {
    question:
      "Explain the purpose of 'PropTypes' in React and how they are used.",
    answer:
      "'PropTypes' in React are used for type-checking props passed to components. They help ensure the correctness of data received by components and serve as a form of documentation for component usage.",
    id: "81",
  },
  {
    question:
      "What is the significance of 'setState' in React and why is it important to use it correctly?",
    answer:
      "'setState' in React is used to update a component's state. It's crucial to use it correctly because directly mutating state can lead to unexpected behavior and can cause issues with React's rendering and state management.",
    id: "82",
  },
  {
    question:
      "Explain the concept of 'higher-order components' (HOCs) and their usage in React.",
    answer:
      "Higher-Order Components (HOCs) in React are functions that take a component and return a new enhanced component. They are used for code reuse, logic sharing, and adding additional functionalities to components.",
    id: "83",
  },
  {
    question: "What are the benefits of using React's virtual DOM?",
    answer:
      "React's virtual DOM allows efficient updates by comparing the virtual DOM with the real DOM and applying only the necessary changes. This minimizes direct manipulation of the DOM, leading to improved performance.",
    id: "84",
  },
  {
    question:
      "Explain the concept of 'context' in React and its role in state management.",
    answer:
      "Context in React is a mechanism for sharing data across the component tree without passing props manually at every level. It's useful for managing global state or sharing data that many components need access to.",
    id: "85",
  },
  {
    question:
      "What are the differences between 'controlled' and 'uncontrolled' components in React forms?",
    answer:
      "Controlled components have their state managed by React, while uncontrolled components maintain their state in the DOM. Controlled components provide more control and facilitate handling form data through React's state.",
    id: "86",
  },
  {
    question:
      "How does React handle state management in large-scale applications?",
    answer:
      "In large-scale applications, state management in React can be handled using libraries like Redux or by using context API along with hooks to manage complex state more efficiently and maintain application scalability.",
    id: "87",
  },
  {
    question: "What are the advantages of using React hooks?",
    answer:
      "React hooks allow functional components to use state and other React features without writing class-based components. They simplify component logic, make it more reusable, and promote better code organization.",
    id: "88",
  },
  {
    question:
      "Explain the purpose of 'useEffect' hook in React and its equivalents in class components.",
    answer:
      "'useEffect' in React is used for performing side effects in functional components. Its equivalents in class components are componentDidMount, componentDidUpdate, and componentWillUnmount.",
    id: "89",
  },
  {
    question: "What is the significance of 'pure components' in React?",
    answer:
      "Pure components in React implement shouldComponentUpdate with a shallow prop and state comparison. They prevent unnecessary re-renders by checking for changes in props and state, improving performance.",
    id: "90",
  },
  {
    question:
      "Explain the concept of 'server-side rendering' (SSR) in React and its benefits.",
    answer:
      "Server-side rendering in React involves rendering the initial HTML on the server before sending it to the client. It enhances performance, improves SEO by providing readable content to search engines, and facilitates faster initial page loads.",
    id: "91",
  },
  {
    question:
      "How does React handle data flow and communication between components?",
    answer:
      "In React, data flow between components is typically from parent to child components through props. For communication between unrelated components or sharing state across the app, context API or external state management solutions are used.",
    id: "92",
  },
  {
    question:
      "What are the key differences between React and other front-end frameworks like Angular or Vue.js?",
    answer:
      "React is a JavaScript library focused on building UIs, while Angular and Vue.js are full-fledged frameworks. React uses a virtual DOM, whereas Angular and Vue.js use a real DOM. React emphasizes a component-based architecture.",
    id: "93",
  },
  {
    question:
      "Explain the concept of 'code-splitting' in React and its advantages.",
    answer:
      "'Code-splitting' is a technique used to split the bundled JavaScript code into smaller chunks, allowing portions of the code to be loaded on demand. It improves performance by reducing the initial load time and optimizing resource usage.",
    id: "94",
  },
  {
    question: "What is the purpose of 'ReactDOM.render' in React?",
    answer:
      "'ReactDOM.render' is used to render a React element into the DOM. It takes a React component and attaches it to a specified DOM node in the HTML document.",
    id: "95",
  },
  {
    question:
      "Explain the concept of 'error boundaries' in React and their importance.",
    answer:
      "Error boundaries in React are components that catch JavaScript errors in their child component tree during rendering, in lifecycle methods, or in constructors. They help prevent the entire app from crashing and allow displaying fallback UI.",
    id: "96",
  },
  {
    question: "How does React handle routing and navigation in applications?",
    answer:
      "React Router is a popular library used for handling routing and navigation in React applications. It allows mapping URLs to different components, enabling navigation between different views in a single-page application.",
    id: "97",
  },
  {
    question:
      "What are the differences between functional components and class components in React?",
    answer:
      "Functional components are simple JavaScript functions that take props as input and return React elements, while class components are JavaScript classes that have additional features like state and lifecycle methods.",
    id: "98",
  },
  {
    question:
      "Explain the purpose of 'PropTypes' in React and how they are used.",
    answer:
      "'PropTypes' in React are used for type-checking props passed to components. They help ensure the correctness of data received by components and serve as a form of documentation for component usage.",
    id: "99",
  },
  {
    question: "What is the significance of React's 'render' method?",
    answer:
      "The 'render' method in React is responsible for rendering the component's UI. It returns a React element, describing what should be displayed on the screen.",
    id: "100",
  },
  {
    question: "Explain the concept of 'prop drilling' in React.",
    answer:
      "'Prop drilling' occurs when props are passed down through multiple levels of components, even if intermediate components don't need them. It can make the code harder to maintain, and context API or other state management solutions are often used to mitigate this issue.",
    id: "101",
  },
  {
    question:
      "What are the differences between 'component-level state' and 'application-level state' in React?",
    answer:
      "Component-level state refers to state managed within a single component and is not accessible by other components. Application-level state is typically managed by a global state management solution like Redux or Context API, allowing multiple components to access and modify the state.",
    id: "102",
  },
  {
    question:
      "Explain the concept of 'controlled vs. uncontrolled components' in form handling.",
    answer:
      "Controlled components in React have their state controlled by React through value attributes. Uncontrolled components maintain their state in the DOM and handle their state independently.",
    id: "103",
  },
  {
    question: "What are React hooks and why were they introduced?",
    answer:
      "React hooks are functions that allow functional components to use state and other React features. They were introduced to enable the use of stateful logic in functional components, reducing the need for class components.",
    id: "104",
  },
  {
    question:
      "Explain the importance of the 'key' prop in React lists and its impact on performance.",
    answer:
      "The 'key' prop in React lists helps identify each list item uniquely. Using keys optimizes the rendering process by helping React identify which items have changed, been added, or been removed efficiently, thereby improving performance.",
    id: "105",
  },
  {
    question: "What is the significance of the 'useState' hook in React?",
    answer:
      "'useState' is a hook in React used to add state to functional components. It allows functional components to manage their own state without using class-based components.",
    id: "106",
  },
  {
    question: "Explain the concept of 'conditional rendering' in React.",
    answer:
      "Conditional rendering in React involves rendering different components or UI elements based on certain conditions. It allows for dynamic display of content based on changing data or user interactions.",
    id: "107",
  },
  {
    question: "What is the purpose of 'className' vs. 'class' in React?",
    answer:
      "In React, 'className' is used to apply CSS classes to JSX elements due to 'class' being a reserved keyword in JavaScript. 'className' is equivalent to the 'class' attribute in HTML.",
    id: "108",
  },
  {
    question: "Explain the use of 'React.memo' and its impact on performance.",
    answer:
      "'React.memo' is a higher-order component used to memoize functional components. It prevents unnecessary re-renders of functional components by caching the previous result and reusing it when the component renders with the same props.",
    id: "109",
  },
  {
    question: "What is the significance of React's 'virtual DOM'?",
    answer:
      "React's virtual DOM is an in-memory representation of the actual DOM. It optimizes rendering by updating only the parts of the DOM that changed, making updates more efficient and improving performance.",
    id: "110",
  },
  {
    question: "Explain the concept of 'context' in React and when to use it.",
    answer:
      "Context in React is a way to share values like themes, user authentication status, etc., across components without explicitly passing them through props. It is useful when data needs to be accessible by many components at different nesting levels.",
    id: "120",
  },
  {
    question:
      "What are the advantages of using functional components over class components in React?",
    answer:
      "Functional components are simpler, shorter, and promote better code organization. With the introduction of hooks, functional components can now handle state and lifecycle methods, reducing the need for class components in many cases.",
    id: "121",
  },
  {
    question: "Explain the purpose of the 'useEffect' hook in React.",
    answer:
      "'useEffect' is a hook in React used for side effects in functional components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.",
    id: "122",
  },
  {
    question: "What is the significance of 'JSX' in React?",
    answer:
      "JSX is a syntax extension for JavaScript recommended by React. It allows writing HTML elements and components in a syntax similar to XML or HTML, making the code more readable and concise.",
    id: "123",
  },
  {
    question: "Explain the concept of 'component composition' in React.",
    answer:
      "Component composition in React involves combining smaller, reusable components to build larger components or UI structures. It promotes code reuse, maintainability, and a modular approach to building applications.",
    id: "124",
  },
  {
    question: "What are the differences between 'state' and 'props' in React?",
    answer:
      "State is internal to a component and can be changed by the component itself, while props are external inputs passed to a component. Props are immutable, and changes to them must be handled by the parent component.",
    id: "125",
  },
  {
    question: "How does React handle forms and form validation?",
    answer:
      "In React, forms can be controlled or uncontrolled. Controlled components have their state managed by React, enabling easier form validation. Uncontrolled components maintain their own state in the DOM.",
    id: "126",
  },
  {
    question: "Explain the concept of 'React.Fragment' and when to use it.",
    answer:
      "'React.Fragment' is a built-in component in React used to group multiple elements without introducing an additional parent node. It is especially useful when returning multiple elements from a component without adding unnecessary markup.",
    id: "127",
  },
  {
    question:
      "What is the significance of the 'shouldComponentUpdate' method in React?",
    answer:
      "'shouldComponentUpdate' is a lifecycle method in class components that determines if a component should re-render. Implementing it allows developers to optimize performance by preventing unnecessary re-renders.",
    id: "128",
  },
  {
    question:
      "What are the key differences between React Class Components and Functional Components?",
    answer:
      "Class components use ES6 classes and have a built-in state and lifecycle methods, while functional components are simpler, relying on functions and using hooks like useState and useEffect to manage state and lifecycle.",
    id: "129",
  },
  {
    question: "Explain the concept of 'virtual DOM' in React and its benefits.",
    answer:
      "The virtual DOM in React is a lightweight copy of the actual DOM, allowing React to perform efficient updates by comparing changes before updating the real DOM. This minimizes direct DOM manipulation and improves performance.",
    id: "130",
  },
  {
    question: "What is the role of 'setState' in React, and why is it used?",
    answer:
      "'setState' is a method used in class components to update the component's state. It's used because directly mutating state can lead to unexpected behavior and doesn't trigger re-renders in React components.",
    id: "131",
  },
  {
    question:
      "Explain the concept of 'props' in React and how they differ from state.",
    answer:
      "Props (short for properties) are inputs to React components, passed down from their parent components. They are read-only and cannot be modified within the component, unlike state which is managed internally by the component.",
    id: "132",
  },
  {
    question: "What is the significance of the 'useEffect' hook in React?",
    answer:
      "'useEffect' is a hook used in functional components for handling side effects like data fetching, subscriptions, or manually changing the DOM. It's similar to lifecycle methods like componentDidMount and componentDidUpdate in class components.",
    id: "133",
  },
  {
    question: "Explain the concept of 'lifting state up' in React.",
    answer:
      "'Lifting state up' refers to the practice of moving state management to a higher-level parent component to share state among multiple child components. It promotes data flow and ensures synchronization among components.",
    id: "134",
  },
  {
    question:
      "How does React differ from other JavaScript frameworks or libraries?",
    answer:
      "React is a library, not a full-featured framework like Angular. It's more focused on the view layer, uses a virtual DOM for performance, and promotes a component-based architecture for building user interfaces.",
    id: "135",
  },
  {
    question:
      "What are keys in React, and why are they important when rendering lists?",
    answer:
      "Keys are special string attributes used to give elements in arrays a stable identity. They help React identify which items have changed, been added, or been removed, ensuring efficient updates in list rendering.",
    id: "136",
  },
  {
    question:
      "Explain the concept of 'context' in React and its role in state management.",
    answer:
      "Context in React provides a way to pass data through the component tree without manually passing props at every level. It's used for sharing global data or state that multiple components need access to.",
    id: "137",
  },
  {
    question:
      "What are the benefits of using React Hooks compared to class components?",
    answer:
      "React Hooks simplify state management and lifecycle handling in functional components, making code more concise and reusable. They allow developers to use state and other React features without writing class-based components.",
    id: "138",
  },
  {
    question:
      "What is the significance of 'key' prop in React and when is it required?",
    answer:
      "'key' prop in React is used to uniquely identify elements in a list. It helps React identify which items have changed, been added, or been removed. It's required when rendering multiple elements from an array.",
    id: "139",
  },
  {
    question: "Explain the concept of 'event handling' in React.",
    answer:
      "Event handling in React involves using synthetic events like onClick, onChange, etc., which are similar to native DOM events but have consistent behavior across different browsers. Handlers are functions that execute in response to these events.",
    id: "140",
  },
  {
    question: "What are the differences between 'state' and 'props' in React?",
    answer:
      "State is internal to a component and can be modified by the component itself, while props are external inputs passed to a component by its parent and cannot be modified within the component.",
    id: "141",
  },
  {
    question:
      "Explain the purpose of 'useReducer' hook in React and when it's preferred over 'useState'.",
    answer:
      "'useReducer' is a hook in React used for managing complex state logic in functional components. It's preferred over 'useState' when the state logic involves multiple sub-values or when the next state depends on the previous one.",
    id: "142",
  },
  {
    question:
      "What is the significance of the 'children' prop in React components?",
    answer:
      "The 'children' prop in React components represents the content between the opening and closing tags of the component. It allows for the creation of composite components that wrap around other elements or components.",
    id: "143",
  },
  {
    question:
      "Explain the concept of 'component lifecycle' in React and its phases.",
    answer:
      "Component lifecycle refers to the phases a React component goes through from birth to death. It includes mounting (creation), updating (rendering), and unmounting (destruction) phases, each with associated lifecycle methods.",
    id: "144",
  },
  {
    question:
      "What are Higher-Order Components (HOCs) in React, and how are they used?",
    answer:
      "Higher-Order Components are functions that take a component and return an enhanced component with additional functionalities. They're used for code reuse, logic sharing, and adding features to components without changing their structure.",
    id: "145",
  },
  {
    question: "Explain the purpose of 'React.StrictMode' and when it's used.",
    answer:
      "'React.StrictMode' is a tool used for highlighting potential problems in a React application during development. It activates additional checks and warnings for common issues to help improve code quality.",
    id: "145",
  },
  {
    question: "What is the role of 'fragment' in React and why is it used?",
    answer:
      "A 'fragment' in React is used to group multiple elements without adding an extra DOM node. It helps avoid unnecessary wrapper elements when returning multiple elements from a component's render method.",
    id: "146",
  },
  {
    question: "Explain the concept of 'CSS-in-JS' and its usage in React.",
    answer:
      "'CSS-in-JS' refers to the practice of writing CSS directly within JavaScript files. Libraries like styled-components or emotion enable this approach, allowing developers to encapsulate styles within components.",
    id: "147",
  },

  {
    id: "148",
    question:
      "What is the significance of 'key' prop in React and when is it required?",
    answer:
      "'key' prop in React is used to uniquely identify elements in a list. It helps React identify which items have changed, been added, or been removed. It's required when rendering multiple elements from an array.",
  },
  {
    id: "149",
    question: "Explain the concept of 'event handling' in React.",
    answer:
      "Event handling in React involves using synthetic events like onClick, onChange, etc., which are similar to native DOM events but have consistent behavior across different browsers. Handlers are functions that execute in response to these events.",
  },
  {
    id: "150",
    question: "What are the differences between 'state' and 'props' in React?",
    answer:
      "State is internal to a component and can be modified by the component itself, while props are external inputs passed to a component by its parent and cannot be modified within the component.",
  },
  {
    id: "151",
    question:
      "Explain the purpose of 'useReducer' hook in React and when it's preferred over 'useState'.",
    answer:
      "'useReducer' is a hook in React used for managing complex state logic in functional components. It's preferred over 'useState' when the state logic involves multiple sub-values or when the next state depends on the previous one.",
  },
  {
    id: "152",
    question:
      "What is the significance of the 'children' prop in React components?",
    answer:
      "The 'children' prop in React components represents the content between the opening and closing tags of the component. It allows for the creation of composite components that wrap around other elements or components.",
  },
  {
    id: "153",
    question:
      "Explain the concept of 'component lifecycle' in React and its phases.",
    answer:
      "Component lifecycle refers to the phases a React component goes through from birth to death. It includes mounting (creation), updating (rendering), and unmounting (destruction) phases, each with associated lifecycle methods.",
  },
  {
    id: "154",
    question:
      "What are Higher-Order Components (HOCs) in React, and how are they used?",
    answer:
      "Higher-Order Components are functions that take a component and return an enhanced component with additional functionalities. They're used for code reuse, logic sharing, and adding features to components without changing their structure.",
  },
  {
    id: "155",
    question: "Explain the purpose of 'React.StrictMode' and when it's used.",
    answer:
      "'React.StrictMode' is a tool used for highlighting potential problems in a React application during development. It activates additional checks and warnings for common issues to help improve code quality.",
  },
  {
    id: "156",
    question: "What is the role of 'fragment' in React and why is it used?",
    answer:
      "A 'fragment' in React is used to group multiple elements without adding an extra DOM node. It helps avoid unnecessary wrapper elements when returning multiple elements from a component's render method.",
  },
  {
    id: "157",
    question: "Explain the concept of 'CSS-in-JS' and its usage in React.",
    answer:
      "'CSS-in-JS' refers to the practice of writing CSS directly within JavaScript files. Libraries like styled-components or emotion enable this approach, allowing developers to encapsulate styles within components.",
  },
  {
    id: "158",
    question:
      "Explain the concept of 'Pure Components' in React and their significance.",
    answer:
      "Pure Components in React are components that implement shouldComponentUpdate method with a shallow prop and state comparison. They optimize performance by preventing unnecessary re-renders.",
  },
  {
    id: "159",
    question:
      "What are the advantages and disadvantages of using React's Context API for state management?",
    answer:
      "The Context API in React provides a way to share data across the component tree without prop drilling. Its advantages include easy global state access, but it might become complex for deeply nested components.",
  },
  {
    id: "160",
    question:
      "Explain the differences between 'controlled' and 'uncontrolled' components in React forms.",
    answer:
      "Controlled components in React have their state managed by React through value attributes, while uncontrolled components maintain their state in the DOM and handle state changes directly.",
  },
  {
    id: "161",
    question:
      "What is the significance of 'shouldComponentUpdate' in React, and how is it used for optimization?",
    answer:
      "'shouldComponentUpdate' is a lifecycle method in React used to optimize rendering performance by allowing components to control if they should re-render based on changes in props or state.",
  },
  {
    id: "162",
    question:
      "Explain the usage and importance of 'React.Fragment' in React applications.",
    answer:
      "'React.Fragment' is used in React to group multiple elements without adding an extra DOM node. It helps improve rendering performance and avoids unnecessary wrapper elements.",
  },
  {
    id: "163",
    question:
      "What is the role of 'memoization' in React and how is it achieved?",
    answer:
      "Memoization in React involves caching the results of function calls and reusing them when the same inputs occur again. 'React.memo' is used to memoize functional components.",
  },
  {
    id: "164",
    question:
      "Explain the significance of 'error boundaries' in React and how they assist in error handling.",
    answer:
      "Error boundaries in React are components used to catch JavaScript errors in their child component tree during rendering. They prevent the entire application from crashing and allow displaying fallback UI.",
  },
  {
    id: "165",
    question:
      "What is the purpose of 'useContext' hook in React, and how is it used for state management?",
    answer:
      "'useContext' is a hook in React used to access the context value provided by the nearest 'Context.Provider' in the component tree. It enables components to consume context values without nesting.",
  },
  {
    id: "166",
    question:
      "Explain the concept of 'render props' in React and how they are used to share code.",
    answer:
      "'Render props' is a technique in React where a component's prop is a function that returns a React element. It allows sharing code between components by passing functions as props.",
  },
  {
    id: "167",
    question:
      "What is the significance of 'lazy loading' in React and how is it implemented?",
    answer:
      "Lazy loading in React involves dynamically importing components only when they are needed, reducing the initial load time of an application. It's implemented using React.lazy and Suspense.",
  },
  {
    id: "168",
    question: "Explain the purpose of 'forwardRef' in React and its use cases.",
    answer:
      "'forwardRef' is used in React to forward refs to child components. It's often used when the parent component needs to interact with the child component's DOM node or React element.",
  },
  {
    id: "169",
    question: "What are the advantages of using TypeScript with React?",
    answer:
      "TypeScript adds static typing to JavaScript, providing benefits such as catching errors during development, improved code readability, and better developer tooling support for large-scale React applications.",
  },
  {
    id: "170",
    question:
      "Explain the purpose of 'useEffect' cleanup function in React and its importance.",
    answer:
      "'useEffect' cleanup function in React is used to perform cleanup tasks such as clearing intervals, unsubscribing from subscriptions, etc. It ensures resources are properly cleaned up when a component unmounts or when dependencies change.",
  },
  {
    id: "171",
    question:
      "What are the differences between 'Shallow Rendering' and 'Full Rendering' in React testing?",
    answer:
      "Shallow rendering in React testing involves rendering a component one level deep, while full rendering involves rendering the component and its child components. Shallow rendering is often used for isolated unit testing.",
  },
  {
    id: "172",
    question:
      "Explain the concept of 'state lifting' and 'state colocation' in React.",
    answer:
      "'State lifting' involves moving the state of a component to its closest common ancestor. 'State colocation' means keeping related state variables together in a single component.",
  },
  {
    id: "173",
    question:
      "What is the significance of 'displayName' in React, and how is it used?",
    answer:
      "'displayName' is an option in React used to set a display name for a component. It helps in debugging by providing a meaningful name in React DevTools or error messages.",
  },
  {
    id: "174",
    question:
      "Explain the concept of 'component composition' in React and its advantages.",
    answer:
      "Component composition in React involves combining small, reusable components to build larger components or UIs. It promotes reusability, readability, and maintainability of code.",
  },
  {
    id: "175",
    question:
      "What is the purpose of 'React.PureComponent' and how does it differ from regular components?",
    answer:
      "'React.PureComponent' is similar to a regular component but includes a built-in 'shouldComponentUpdate' method with a shallow prop and state comparison. It helps prevent unnecessary re-renders.",
  },
  {
    id: "176",
    question:
      "Explain the significance of 'key' prop in React and its impact on list rendering performance.",
    answer:
      "'key' prop in React is used to give elements in a list a stable identity. Using keys optimizes list rendering by helping React identify which items have changed, been added, or been removed efficiently.",
  },
  {
    id: "177",
    question:
      "What are the benefits of using 'React.memo' and when is it recommended?",
    answer:
      "'React.memo' is a higher-order component used to memoize functional components, preventing unnecessary re-renders. It's recommended for optimizing performance in functional components that render often.",
  },
  {
    id: "178",
    question:
      "Explain the significance of 'React Router' in React applications and its key features.",
    answer:
      "'React Router' is a library used for routing in React applications, enabling navigation between different components. It provides features like declarative routing, nested routing, and route parameters.",
  },
  {
    id: "179",
    question:
      "What are the differences between 'React.Fragment' and empty tags ('<> </>') in React?",
    answer:
      "'React.Fragment' and empty tags ('<> </>') both serve the purpose of grouping elements, but 'React.Fragment' supports keys and additional props, while empty tags create a fragment without supporting keys.",
  },
  {
    id: "180",
    question:
      "Explain the concept of 'code-splitting' in React and its advantages.",
    answer:
      "'Code-splitting' involves breaking the bundled JavaScript code into smaller chunks, loading only the necessary code when required. It enhances performance by reducing initial load times and improving resource utilization.",
  },
  {
    id: "181",
    question:
      "What is the significance of 'memo' in React and how does it optimize functional components?",
    answer:
      "'memo' is a higher-order component in React used to memoize functional components. It improves performance by caching the result and re-rendering only if the input props change.",
  },
  {
    id: "182",
    question:
      "Explain the purpose of 'setState' in React class components and how it differs from functional component state handling.",
    answer:
      "'setState' in React class components is used to update the component's state, triggering re-renders. In functional components, hooks like 'useState' manage state without using class-based state.",
  },
  {
    id: "183",
    question: "What are the benefits of using 'useCallback' hook in React?",
    answer:
      "'useCallback' is used to memoize callback functions in React, preventing unnecessary renders in child components. It's beneficial when passing callbacks to optimized child components.",
  },
  {
    id: "184",
    question:
      "Explain the concept of 'context' in React and its role in state management.",
    answer:
      "Context in React provides a way to pass data through the component tree without passing props manually at every level. It's useful for sharing global data or state among multiple components.",
  },
  {
    id: "185",
    question:
      "What is the purpose of 'useMemo' hook in React and how does it improve performance?",
    answer:
      "'useMemo' in React is used to memoize the result of a function, caching it until the dependencies change. It improves performance by avoiding expensive recalculations when not necessary.",
  },
  {
    id: "186",
    question:
      "Explain the concept of 'async/await' in React and its usage in handling asynchronous operations.",
    answer:
      "'async/await' is a feature in JavaScript used to write asynchronous code in a synchronous-like manner. In React, it's often used with functions that return Promises for asynchronous operations.",
  },
  {
    id: "187",
    question:
      "What are the differences between 'server-side rendering' (SSR) and 'client-side rendering' (CSR) in React?",
    answer:
      "Server-side rendering (SSR) involves rendering the React components on the server and sending HTML to the client, providing faster initial page loads and better SEO. Client-side rendering (CSR) renders components in the browser after initial HTML is loaded.",
  },
  {
    id: "188",
    question:
      "Explain the role of 'propTypes' and 'defaultProps' in React component development.",
    answer:
      "'propTypes' are used for type-checking props passed to components, ensuring correct data types. 'defaultProps' provide default values for props in case they're not explicitly provided.",
  },
  {
    id: "189",
    question:
      "What is the purpose of 'useLayoutEffect' hook in React, and how does it differ from 'useEffect'?",
    answer:
      "'useLayoutEffect' is similar to 'useEffect' but fires synchronously after all DOM mutations. It's used when the effect needs to be executed synchronously after DOM mutations.",
  },
  {
    id: "190",
    question:
      "Explain the significance of 'Refs' in React and their use cases.",
    answer:
      "Refs in React are used to access DOM nodes or React elements created in the render method. They're used for managing focus, accessing imperative DOM APIs, or triggering imperative animations.",
  },
  {
    id: "191",
    question:
      "What is the purpose of 'Error Boundaries' in React, and how do they help in error handling?",
    answer:
      "Error Boundaries in React are components used to catch JavaScript errors in their child component tree during rendering. They prevent the entire application from crashing and allow displaying fallback UI.",
  },
  {
    id: "192",
    question:
      "Explain the concept of 'controlled components' and 'uncontrolled components' in React forms.",
    answer:
      "Controlled components in React forms have their state managed by React through value attributes, while uncontrolled components maintain their state in the DOM and handle state changes directly.",
  },
  {
    id: "193",
    question:
      "What is the significance of 'StrictMode' in React, and when is it used?",
    answer:
      "'StrictMode' is a tool in React used for highlighting potential problems in an application during development. It activates additional checks and warnings for common issues to improve code quality.",
  },
  {
    id: "194",
    question:
      "Explain the purpose of 'displayName' in React and how it aids in debugging.",
    answer:
      "'displayName' is an option in React used to set a display name for a component. It helps in debugging by providing a meaningful name in React DevTools or error messages.",
  },
  {
    id: "195",
    question:
      "What is the role of 'Fragment' in React, and how is it beneficial?",
    answer:
      "'Fragment' in React is used to group multiple elements without adding an extra DOM node. It helps avoid unnecessary wrapper elements when returning multiple elements from a component's render method.",
  },
  {
    id: "196",
    question:
      "Explain the purpose of 'useReducer' hook in React and its advantages over 'useState'.",
    answer:
      "'useReducer' in React is used for managing complex state logic in functional components. It's preferred over 'useState' when the state logic involves multiple sub-values or when the next state depends on the previous one.",
  },
  {
    id: "197",
    question:
      "What are the differences between 'class components' and 'functional components' in React?",
    answer:
      "Class components use ES6 classes and have a built-in state and lifecycle methods, while functional components are simpler, relying on functions and using hooks like useState and useEffect to manage state and lifecycle.",
  },
  {
    id: "198",
    question:
      "Explain the concept of 'context' and its role in state management within React applications.",
    answer:
      "'Context' in React provides a way to share data across the component tree without manually passing props at every level. It's useful for sharing global data or state among multiple components.",
  },
  {
    id: "199",
    question:
      "What is the purpose of 'useEffect' hook in React, and how does it handle side effects?",
    answer:
      "'useEffect' is a hook in React used for handling side effects in functional components. It executes code after the component renders and is often used for data fetching, subscriptions, or DOM manipulations.",
  },
  {
    id: "200",
    question:
      "Explain the significance of 'keys' in React lists and their impact on rendering performance.",
    answer:
      "'Keys' in React lists are special attributes used to give elements in an array a stable identity. They optimize list rendering by helping React identify which items have changed, been added, or been removed efficiently.",
  },
  {
    id: "201",
    question:
      "What is the purpose of 'useRef' hook in React, and how is it used?",
    answer:
      "'useRef' in React is used to create a mutable reference that persists across renders. It's commonly used to access DOM nodes or store mutable values without causing re-renders.",
  },
  {
    id: "202",
    question:
      "Explain the concept of 'component lifecycle' in React and the various lifecycle methods.",
    answer:
      "Component lifecycle in React refers to the phases a component goes through from creation to deletion. It includes mounting (constructor, render, componentDidMount), updating (componentDidUpdate), and unmounting (componentWillUnmount) phases.",
  },
  {
    id: "203",
    question:
      "What are the differences between 'React.PureComponent' and 'React.Component'?",
    answer:
      "'React.PureComponent' includes a built-in 'shouldComponentUpdate' with a shallow prop and state comparison to prevent unnecessary re-renders, while 'React.Component' needs manual implementation of 'shouldComponentUpdate'.",
  },
  {
    id: "204",
    question:
      "Explain the purpose of 'HOCs' (Higher-Order Components) in React and their advantages.",
    answer:
      "Higher-Order Components are functions that take a component and return an enhanced component. They're used for code reuse, logic sharing, and adding features to components without changing their structure.",
  },
  {
    id: "205",
    question:
      "What are the advantages of using 'Redux' with React for state management?",
    answer:
      "'Redux' provides a centralized state management solution for larger applications, allowing predictable state changes, improved debugging, and easy testing of components.",
  },
  {
    id: "206",
    question:
      "Explain the purpose of 'error boundaries' in React and their role in error handling.",
    answer:
      "Error boundaries in React are components used to catch JavaScript errors in their child component tree during rendering. They prevent the entire application from crashing and allow displaying fallback UI.",
  },
  {
    id: "207",
    question:
      "What is the role of 'Router' in React applications, and how does it work?",
    answer:
      "The 'Router' in React is used for declarative routing, enabling navigation between different components. It manages the mapping between different URLs and corresponding components to display.",
  },
  {
    id: "208",
    question:
      "Explain the concept of 'controlled components' and 'uncontrolled components' in React forms.",
    answer:
      "Controlled components in React have their state managed by React through value attributes, while uncontrolled components maintain their state in the DOM and handle state changes directly.",
  },
  {
    id: "209",
    question:
      "What are the differences between 'class components' and 'functional components' in React?",
    answer:
      "Class components use ES6 classes and have a built-in state and lifecycle methods, while functional components are simpler, relying on functions and using hooks like useState and useEffect to manage state and lifecycle.",
  },
  {
    id: "210",
    question:
      "Explain the significance of 'props.children' in React components and its usage.",
    answer:
      "'props.children' in React components allows passing elements or components as children to a parent component. It's used for creating reusable components that wrap other elements.",
  },
  {
    id: "211",
    question:
      "What is 'server-side rendering' (SSR) in React, and what are its advantages?",
    answer:
      "Server-side rendering (SSR) involves rendering React components on the server and sending HTML to the client. It provides faster initial page loads, better SEO, and improves performance on slower devices.",
  },
  {
    id: "212",
    question:
      "Explain the purpose of 'key' prop in React and its significance in list rendering.",
    answer:
      "The 'key' prop in React is used to give elements in an array a stable identity. It helps React identify which items have changed, been added, or been removed efficiently during list rendering.",
  },
  {
    id: "213",
    question:
      "What are 'hooks' in React, and how do they improve functional components?",
    answer:
      "Hooks in React are functions that allow functional components to use state, lifecycle, and other React features without writing class-based components. They enhance the reusability and organization of functional components.",
  },
  {
    id: "214",
    question:
      "Explain the purpose of 'memoization' in React and how it's achieved.",
    answer:
      "Memoization in React involves caching the results of function calls and reusing them when the same inputs occur again. 'React.memo' is used to memoize functional components.",
  },
  {
    id: "215",
    question:
      "What is the significance of 'CSS Modules' in React applications and their benefits?",
    answer:
      "'CSS Modules' in React allow scoping CSS locally by creating unique class names, preventing style clashes. They improve maintainability and encapsulation of styles within components.",
  },
  {
    id: "216",
    question:
      "Explain the concept of 'render props' in React and their use cases.",
    answer:
      "'Render props' in React involve passing a function as a prop to a component to share code. They're used for reusing logic between components by rendering prop-defined elements.",
  },
  {
    id: "217",
    question:
      "What is the role of 'Suspense' in React, and how is it used for code splitting?",
    answer:
      "'Suspense' in React is used to enable components to wait for some condition, like lazy-loaded components or data fetching, before rendering. It's used in combination with React.lazy for code splitting.",
  },
  {
    id: "218",
    question:
      "Explain the purpose of 'React.StrictMode' and its advantages in React development.",
    answer:
      "'React.StrictMode' is a tool in React used for highlighting potential problems in an application during development. It activates additional checks and warnings to improve code quality.",
  },
  {
    id: "219",
    question:
      "What are the benefits of using 'PropTypes' in React, and when is it recommended?",
    answer:
      "'PropTypes' in React are used for type-checking props passed to components, ensuring correct data types and improving code reliability. It's recommended for larger applications or teams to catch potential errors.",
  },
  {
    id: "220",
    question:
      "Explain the purpose of 'defaultProps' in React components and their usage.",
    answer:
      "'defaultProps' in React components provide default values for props if they're not explicitly provided. They ensure that components work even if certain props aren’t passed.",
  },
  {
    id: "221",
    question:
      "What is the significance of 'virtual DOM' in React, and how does it improve performance?",
    answer:
      "The 'virtual DOM' in React is an in-memory representation of the actual DOM. It enhances performance by allowing React to batch and minimize updates, reducing direct manipulations to the real DOM.",
  },
  {
    id: "222",
    question: "Explain the purpose of 'forwardRef' in React and its use cases.",
    answer:
      "'forwardRef' in React is used to forward refs to child components. It's often used when the parent component needs to interact with the child component's DOM node or React element.",
  },
  {
    id: "223",
    question:
      "What are the advantages of using 'classnames' library in React for managing CSS classes?",
    answer:
      "'classnames' library in React simplifies the conditional application of CSS classes based on different conditions or states, improving readability and maintainability of class definitions.",
  },
  {
    id: "224",
    question:
      "Explain the purpose of 'memo' in React and its impact on functional component performance.",
    answer:
      "'memo' in React is a higher-order component used to memoize functional components, preventing unnecessary re-renders. It improves performance by caching the result and re-rendering only if the input props change.",
  },
  {
    id: "225",
    question:
      "What is the role of 'dangerouslySetInnerHTML' in React, and when should it be used?",
    answer:
      "'dangerouslySetInnerHTML' in React is used to set HTML directly from React. It should be used cautiously as it can expose the application to cross-site scripting (XSS) attacks if used with user input.",
  },
  {
    id: "226",
    question:
      "Explain the purpose of 'useLayoutEffect' hook in React and how it differs from 'useEffect'.",
    answer:
      "'useLayoutEffect' in React is similar to 'useEffect' but fires synchronously after all DOM mutations. It's used when the effect needs to be executed synchronously after DOM mutations.",
  },
  {
    id: "227",
    question:
      "What is 'context' in React and how is it used for state management?",
    answer:
      "Context in React provides a way to pass data through the component tree without passing props manually at every level. It's used for sharing global data or state among multiple components.",
  },
  {
    id: "228",
    question:
      "Explain the significance of 'React.memo' in functional components and how it optimizes performance.",
    answer:
      "'React.memo' in React is a higher-order component used to memoize functional components, preventing unnecessary re-renders. It compares the previous and current props and re-renders only if they differ.",
  },
  {
    id: "229",
    question:
      "What is the purpose of 'React.Fragment' in React and when is it used?",
    answer:
      "'React.Fragment' is used in React to group multiple elements without adding an extra DOM node. It's beneficial when returning multiple elements from a component's render method without introducing unnecessary markup.",
  },
  {
    id: "230",
    question:
      "Explain the concept of 'hooks' in React and their benefits in functional components.",
    answer:
      "Hooks in React are functions that enable functional components to use state, lifecycle methods, and other React features. They promote reuse, logic sharing, and organization in functional components.",
  },
  {
    id: "231",
    question:
      "What are the differences between 'controlled' and 'uncontrolled' components in React forms?",
    answer:
      "Controlled components in React have their state managed by React through value attributes, while uncontrolled components maintain their state in the DOM and handle state changes directly.",
  },
  {
    id: "232",
    question:
      "Explain the concept of 'conditional rendering' in React and its use cases.",
    answer:
      "Conditional rendering in React involves showing different components or elements based on certain conditions. It's used for implementing dynamic UIs or rendering components conditionally.",
  },
  {
    id: "233",
    question:
      "What is the purpose of 'shouldComponentUpdate' in React, and how does it impact performance?",
    answer:
      "'shouldComponentUpdate' is a lifecycle method in React used to optimize performance by allowing components to control if they should re-render based on changes in props or state.",
  },
  {
    id: "234",
    question:
      "Explain the role of 'key' prop in React lists and its impact on rendering performance.",
    answer:
      "The 'key' prop in React lists is used to give elements a stable identity, optimizing list rendering by helping React identify which items have changed, been added, or been removed efficiently.",
  },
  {
    id: "235",
    question:
      "What are the benefits of using 'React.StrictMode' and when should it be used?",
    answer:
      "'React.StrictMode' is a tool in React used for highlighting potential problems in an application during development. It activates additional checks and warnings to improve code quality.",
  },
  {
    id: "236",
    question:
      "Explain the concept of 'event handling' in React and how it differs from native DOM event handling.",
    answer:
      "Event handling in React involves using synthetic events like onClick or onChange, which are similar to native DOM events but have consistent behavior across different browsers. They are camel-cased and passed as props.",
  },
  {
    id: "237",
    question:
      "What is the significance of 'propTypes' in React components and how are they used?",
    answer:
      "'propTypes' in React are used for type-checking props passed to components, ensuring correct data types and improving code reliability. They define the expected types of props.",
  },
  {
    id: "238",
    question:
      "Explain the purpose of 'useEffect' hook in React and its role in functional components.",
    answer:
      "'useEffect' is a hook in React used for handling side effects in functional components. It executes code after the component renders and is often used for data fetching, subscriptions, or DOM manipulations.",
  },
  {
    id: "239",
    question:
      "What is the role of 'memoization' in React, and how does it improve performance?",
    answer:
      "Memoization in React involves caching the results of function calls and reusing them when the same inputs occur again. It helps optimize performance by avoiding unnecessary recalculations.",
  },
  {
    id: "240",
    question:
      "Explain the purpose of 'classnames' library in React and its benefits.",
    answer:
      "'classnames' library in React simplifies the conditional application of CSS classes based on different conditions or states, improving readability and maintainability of class definitions.",
  },
  {
    id: "241",
    question:
      "What are 'refs' in React, and how are they used to access DOM elements?",
    answer:
      "'Refs' in React are used to access DOM nodes or React elements created in the render method. They provide a way to interact with the underlying DOM nodes imperatively.",
  },
  {
    id: "242",
    question: "Explain the purpose of 'context' in React and its use cases.",
    answer:
      "Context in React provides a way to pass data through the component tree without manually passing props at every level. It's used for sharing global data or state among multiple components.",
  },
  {
    id: "243",
    question:
      "What is the significance of 'render props' in React and how are they used?",
    answer:
      "'Render props' in React involve passing a function as a prop to a component to share code. They're used for reusing logic between components by rendering prop-defined elements.",
  },
  {
    id: "244",
    question:
      "Explain the purpose of 'Suspense' in React and how it's used for handling async operations.",
    answer:
      "'Suspense' in React enables components to wait for some condition, like lazy-loaded components or data fetching, before rendering. It helps in handling async operations.",
  },
  {
    id: "245",
    question:
      "What are the benefits of using 'React Router' in React applications?",
    answer:
      "'React Router' provides declarative routing in React, enabling navigation between different components and managing URL changes. It helps create single-page applications with multiple views.",
  },
  {
    id: "246",
    question:
      "Explain the purpose of 'useReducer' hook in React and its advantages.",
    answer:
      "'useReducer' in React is used for managing complex state logic in functional components. It's preferred over 'useState' when the state logic involves multiple sub-values or when the next state depends on the previous one.",
  },
  {
    id: "247",
    question:
      "What is the role of 'defaultProps' in React components, and how are they utilized?",
    answer:
      "'defaultProps' in React components provide default values for props if they're not explicitly provided. They ensure that components work even if certain props aren’t passed.",
  },
  {
    id: "248",
    question:
      "Explain the significance of 'React.Fragment' in React and its advantages over using div elements.",
    answer:
      "'React.Fragment' is used to group multiple elements without adding an extra DOM node. Unlike div elements, it doesn’t create an additional DOM element, resulting in cleaner markup and better performance.",
  },
  {
    id: "249",
    question:
      "What is the purpose of 'React.Children' utilities in React and how are they used?",
    answer:
      "'React.Children' utilities enable manipulation of children in React components. Methods like 'React.Children.map' and 'React.Children.count' help iterate and work with children elements.",
  },
  {
    id: "250",
    question:
      "Explain the role of 'key' prop in React and its significance in reconciliation.",
    answer:
      "The 'key' prop in React is used to give elements a stable identity during reconciliation. It helps React identify which items have changed, been added, or been removed efficiently, particularly in lists.",
  },
];
