# Let's say you have a component with rendering problems, low performance. Clients complain about that. How do you approach that? (Rendering issue on client. how to debug/optimize)
1. Identify the problem by analyze the component code to see if any unnecessary re-renders, inefficient data fetching, which part can be pre-renders, etc
2. Optimize based on the problem
3. Test and monitor
4. Seek feedbacks

# What is React hooks and how we use it.
React hooks we can  bring functionality out of components, easy to test, reuse and maintain.
1. Manage state and re-render with useState, useReducer
2. Perform side effects with useEffect
3. Share state across the app with useContext
4. Access DOM elements with useRef
5. Caching value with useMemo
6. Caching function with useCallback
7. We can also create custom hooks to make our code cleaner, easier to write test and organize the code.

# When we change a parent's state, what are the ways to avoid re-rendering its children? Why do we want to do that? Render prop?
1. Using react memo: The child component render depends on props, will rerender once props changed
2. Create child component separately: The child component render based on props, will rerender once props changed
3. Using render prop: The parent component remains providing data, and the child can decide how to render it based on their needs.

# What is the most challenging task you have so far?
Optimize performance for the web for me is quite challenge to me because most of our app nowadays is complex, need dependencies/development time to solve it. 

# Can you give us the difference between React and Next?
React is a javascript library for building user interfaces, Next is a framework build on top of React with addition features server side rendering, static site generation, routing, etc

# Discuss how Next.js differs from traditional React SPA in terms of routing and page-based architecture. Provide an example of how this can benefit a large-scale application.
React SPA handle routing at client side, however Next.js handle routing at server side with paged-based architecture we can create any route quickly by creating a file in pages directory.
# Example
Example for large-scale application is that we can decide which pages pre-render at server side, which pages render at client side, and which pages generate at build time.

# Explain the concept of hoisting in JavaScript and provide an example.
With hoisting in Javascript we can use variables/functions before declaration because Javascript allocates them to memories at creation phrase before execute it.
# Examples
hoisting()
function hoisting(){
    console.log(hoistingExample)
}
var hoistingExample = "hosting"

# Explain the concept of static generation in Next.js and provide an example of when it can be useful.
With feature SSG in Next.js we can fetch data within getStaticProps to generate static pages at build time, these generated pages can be served quickly.

# What is "mocking"
"mocking is a technique to simulate data/dependencies for testing, it useful because we can mock any data/dependency for testing without any side effects.

# Describe a technique for improving the performance of a React application by reducing unnecessary re-renders.
In React we can use caching technique to avoid re-renders by using useMemo to cache values and useCallback to cache functions

# Describe the box model in CSS and how it affects the layout of elements on a web page.
The box model in CSS includes: 
Content: The content of element such as text, images, etc
Padding: Space between content and border
Border: A visible boundary for an element
Margin: Space between elements
# Impact
The box model has an impact on width/height of element/page, space between elements

# Explain how the event loop works in JavaScript and why understanding it is important for writing efficient code.
Javascript maintains a call stack, once execution begins whenever the program encounters async function such as setTimeout, it pass to the browser/runtime's api handle it(once these functions are finished, corresponding callbacks will be pushed into the callback queue)
The event loop continuously monitors both the call stack and the callback queue, once the call stack is empty, it takes the next callback from a callback queue to the call stack for execution. This process happens again until the program end.
With the event loop javascript can be non-blocking.

# Write HTML and CSS code to create a responsive grid layout with at least three columns that collapse into a single column on smaller screens.
```
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
.container {
    display: grid;
}

.item {
    text-align: center;
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

# How do you manage your development environment?
1. Using git with different branches such as dev, staging, prod
2. Code editor, vscode with extensions such as linters, debuggers
3. Collaboration using slack, jira, etc

# What's the point of CDN?
With CDN we can make our website better performance, availability, scalability by caching and delivering content from the servers closer to the users fast and reliable way.