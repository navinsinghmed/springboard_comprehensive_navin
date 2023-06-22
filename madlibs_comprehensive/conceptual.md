### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a library in front end development permitting inheritable and reusable modules of elements, and helps
web apps become dynamic. Hooks allow the page to react to user actions with parts of the page.


- What is Babel?
Babel compules javascript, then converts it to make it compatabile in many browsers, hence it is a transpiler.

- What is JSX?
JSX is HTML in javascript, where you can write plain html without errors being thrown.

- How is a Component created in React?
Make a component in a .js file, export it there, import into App.js and it can be used many times (`<Component />`)

- What are some difference between state and props?
Props can't be changed, are immutable, used for variables passed to components like parent to child component passing. 
State is changeable, it has a memory storage that is re-rendered within compoents in the program.

- What does "downward data flow" refer to in React?
Parent to child component passage of data is downward data flow in React.

- What is a controlled component?
React accesses and declares the instant value of the component through state in a controlled component.
Controlled components can be used as form inputs for dynamic searches, search suggestions, etc. As each
letter is typed in, react can see each component and offer suggested words or phrases.


- What is an uncontrolled component?
Uncontrolled components are components whose state cannot be controlled via react. Videos or file 
uploads are uncontrolled components.


- What is the purpose of the `key` prop when rendering a list of components?
Keys allow react to keep track of elements, and keys should all be unique to prevent
errors in performance. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Arrays can be changed, and changing them can make keys duplicates or erroneous. 

- Describe useEffect.  What use cases is it used for in React components?
Use-Effect is a type of hook that runs side effects when certain conditions are altered, such as a 
change in component or once on a page render. It is used for fetching data dynamically, implementing
and removing event listeners, reading from local storage, etc.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
UseRef is a variable that stays the same in re-renders. A change in useRef does not cause
a rerender of the compoent.

- When would you use a ref? When wouldn't you use one?
Use a ref when dynamically defined data needs to be stored without having to re-render a component
everytime there is a change. You don't need one if you are not seeking persistence of data across
changes.

- What is a custom hook in React? When would you want to write one?
Custom hooks are special functions created by developers that can be used in multiple 
components. If you have multiple places using similar logic use custom hooks.