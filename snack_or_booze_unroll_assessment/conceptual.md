### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    React router allows routing in a single-page React application, and developers can use this single page to handle routing. React router allows you to map URLs to specific components, and create multiple pages that can work without having to do a page refresh.


- What is a single page application?
    A single page application via react is a web application loading all its contents on a single HTML page dynamically, and the contents update as the user interacts with the page- permitting smooht fast use and not necessitating page reloads.

- What are some differences between client side and server side routing?
Client-side routing enables navigation between pages without needing the server to reload the whole page. Server-side routing necessitates the server generating new HTML page 
and sending it to client every time the user goes to a new page, which can slow page loading and cause a less efficient user experience.

- What are two ways of handling redirects with React Router? When would you use each?
<Redirect> component handles redirects to specific URL depending on state. "History" redirects based upon user inputs and other similar dynamic conditions.


- What are two different ways to handle page-not-found user experiences using React Router? 
In a page-not-found situation for user experience, with React Router use the <Switch> component, which will render the first matching child component or a catch-all end component if no
matching child component. Another method for a page-not-found user exprience is using the "render" prop with <Route> component, enabling you to define a custom rendering function
which can render any commponent you define when no match is found, such as a customized 404 page.  

- How do you grab URL parameters from within a component using React Router?
To grab URL parameters from within a component with React Router, use colon to declare a param variable /:variable; and use useParams() hook in component to retrieve that 
variable from the route URL.

- What is context in React? When would you use it?
Context allows data to be passed across components without the use of prop drilling, which inefficiently involves passing props through child components that
may not even use them, in a hierarchy. Use the Context API's useContext() hook.

- Describe some differences between class-based components and function components in React.
Class-based components use Javascript class syntax with class declaration, constructor functions, the term extend for parent class extensions, keyword this for referring to a class instance. The methods used are 'componentDidMount', 'componentDidUpdate', 'componentWillUnmount", and can be complex but are harder to read. The nesting gets involved and there is need to duplicate code logic.

Function components use hooks to make nesting more efficient, and have logic in modules making it easier to read and reuse.

- What are some of the problems that hooks were designed to solve?

Hooks decrease code duplication, make code more readable and efficient, use modular logic, make logic reusable, and make complex hierarchies of components more simple.