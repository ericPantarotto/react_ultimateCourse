<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD024 -->
# The Ultimate React Course 2024 - React, Next.js, Redux

## Welcome

### Read before you start

**<span style='color: #a3842c'>Link:** (<https://github.com/jonasschmedtmann/ultimate-react-course>)

## A first Look at React

### React vs. Vanilla JavaScript

**<span style='color: #875c5c'>IMPORTANT:** *React* and all these other front-end frameworks are really good at keeping the data automatically in sync with the user interface.

we would really need to create a lot of extra code that, with React, we don't have to, again, because it automatically takes care of keeping the data in sync with the user interface.

### What is React?

So React is basically a huge **abstraction away from the DOM** so that we never have to work with a DOM directly as we would with vanilla JavaScript.

So we simply tell React what we want to happen when some data changes, but not how to do it. And again, we do that using **JSX**.

### Pure React

So, we have no modules here, we have no way of converting JSX, we have no HTTP server which automatically reloads the application and so on.

### React's Official Documentation

**<span style='color: #a3842c'>Link:** [https://react.dev/reference/react]

### Setting up a new React project: The Options

#### Vite: hot module replacement (hmr) and fast bundling

#### React Frameworks

In *React* documentation, you might have read that the React team now advises developers to use a so-called React framework like Next.js or Remix to build new projects.

So essentially, a React framework is a framework built on top of the React library and which is gonna make it even easier to build applications than with just vanilla React itself:

- routing
- data fetching
- server-side rendering

## Review of Essential JavaScript for React

**<span style='color: #495fcb'> Note:** to run simple *Javascript* without any HTML file:

- `node script.js`
- use **quokka**: Open the command palette in VSCode by pressing `Ctrl + Shift + P`, select *Quokka.js: Start on current file*

### Rest/Spread Operator

It can be confusing that the syntax is the same for both *rest* and *spread* operators: `...`

```javascript
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: '2001-12-19',

  // Overwriting an existing property
  pages: 1210,
};
```

**<span style='color: #875c5c'>IMPORTANT:** when spreading on an object/ array, depending where the new property is placed, here `pages` is after the spread object so it would override.

### Arrow Functions

#### IIFE using Arrow Function with parameter

**<span style='color: #a3842c'>Link:** [https://medium.com/@rabailzaheer/iife-explained-immediately-invoked-function-expressions-fccd8f53123d]

### Array filter method

If the result of the condition is true, then that element will go into the filtered array, if false it's filtered out
<!---
[comment]: it works with text, you can rename it how you want

![image info](./1_sc1.png)

**<span style='color: #875c5c'>IMPORTANT:**
**<span style='color: #495fcb'> Note:**
**<span style='color: #a3842c'>Link:**
**<span style='color: #9e5231'>Error:**

**<span style='color: #a8c62c'> TabButton.jsx**

<ins>text to underline</ins>

--- : horizontal line

| Property    | Description | Default |
| -------- | ------- | ------- |
| view engine  | The default engine extension to use when omitted. NOTE: Sub-apps will inherit the value of this setting.    | |
| views |  A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array. | `process.cwd() + '/views'` |

-->

<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD024 -->