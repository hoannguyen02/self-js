# Can You Describe the Steps Involved in Software Development
There are different models or methodologies in software development such as waterfall, agile. There are some common steps:
- **Requirement analysis and resource planning:** This is a step where we identify goals, scopes of the project, clear requirements, estimate time and resources, etc.
- **Design and prototype:** This is a step where we design and structure the software and make prototype for it. 
- **Development:** This is a step where we write code using various programming languages, tools.
- **Testing** This is a step where we test the software for errors, bugs, defects.
- **Launching/publishing**: This is a step where we deploy/release the software to the customers.
- **Maintaining & updating**: This is a step where we monitor, maintain the software, fixing bugs or updating new features.

# Tell Me About a Software Development Project You Completed Successfully
It is a betting/lottery project when I work abroad in Manila, Philippines. At that time, I didn't have much experience especially javascript library/frameworks such as Angular, React. I have to pick a framework for frontend project, after carefully consideration between Angular vs React, I decided to pick Angular, Basically it provide production built already for us.

# How Do You Ensure Quality and Fix Errors?
I use tools such as linter(tslint/eslint), type checker(typescript), spell checker, try to cover unit test for all functionalities/utils, self review and review by the team.

# What are your thoughts on software testing?
Software testing is very important. It helps to make sure the software meets the business requirements and expectations. Software testing also helps improve the quality of the code, reduce the issues on production (after release/publish to the users).

# Describe a difficult bug you were tasked with fixing in a large application. How did you debug the issue?
Let me share the bug, it is the home page bug, it loads too slow, normally takes minutes to load. At that time I asked my boss to make sure I understand completely the all the UI part and behaviors.
(optional)
- First section is Unassign deliveries table (with action can delete, assign delivery date)
- Second section
    - First part is searching text box to search any delivery (users can click to view detail of that delivery - Calendar and active delivery in second part bellow reflects immediately)
    - Second part is calendar on the left we show the delivery count for that day based on method, some actions such as sms notifications, exporting excel file report filter and on the right we have all deliveries in day, and active delivery with actions such as reschedule, assign driver, add notes, etc.
(end optional)
The issue is basically everything rendered server side. For example there are over ten thousands records will be forced to load and rendered in table. So At that time I have to split into different steps/components which part can be render on server side, which part can be render on client side, which part can be lazy, etc. It took me 1 week to fix/optimize it. And my boss really appreciated about the result I made.

# Describe what you believe are the key principles of software engineering
- DRY (don't repeat yourself): Reducing the code duplication.
- Modularity: Divide software system into smaller and independent units or modules that can be developed, tested and maintained separately.
- Maintainability: Keep simple, easy to read and modify.
- TDD (test driven development): Writing test before writing code.
- User-centricity: Focus on the needs and expectations of the users and stakeholders of the software system
- Process-oriented: Follow the process of the project.

# What are your most used design patterns and in what contexts do you use them?
- Singleton pattern: Create one instance to share state. For example in react I use react context to share user info state.
- Modules pattens: Create module with public functions available to access.

# When you review other programmers' code what are those things you review?
I usually follow the code review check list.
- Readability: The code is easy to read, understand, and the code follow coding conventions.
- Functionality: The code works and meets the requirements.
- Maintainability: The code easy to modify and extend, look for duplication code
- Performance: The code is efficient and optimized, look for issues such as memory leaks, infinity loop 
- Security: The code is secure, look for issue such as injection attacks, credentials in code
- Testability: The code is well test enough, look for missing test cases, possibility null, undefined issues

# How do you mock a function in Jest?
There are 2 ways to mock functions in Jest, either by creating a mock function to use in test code or write a manual mock to override a module dependency.
- Create a mock function with jest.fn().
- Write manual mock: Create module file same name, interface as the module in a mocks directory (next to the module) and export by default. Then use jest.mock() to tell Jest using mock instead of actual module.


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