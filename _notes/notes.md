<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD024 -->
# The Ultimate React Course 2024 - React, Next.js, Redux

## Welcome

### Read before you start

**<span style='color: #a3842c'>Link:** (<https://github.com/jonasschmedtmann/ultimate-react-course>)

**<span style='color: #a3842c'>Link:** (<https://www.svgrepo.com/>)

**<span style='color: #a3842c'>Snippets:**

- `CTRL+ Shift+ P; Snippets: Configure Snippets`, choose from the list *ecr.code-snippets*
- `home/ecr/.config/Code/User/snippets/ecr.code-snippets`

**<span style='color: #a3842c'>NPM:**

- `npm outdated`
- to update an outdated version: `npm i react@latest`

**<span style='color: #a3842c'>Tailwind CSS:** To avoid warnings in your `index.css` file, you need to change the VSCode intellisense to `Tailwind CSS`

![image info](./0_sc1.png)

**<span style='color: #a3842c'>VSCode Basic Editing (search):** [https://code.visualstudio.com/docs/editor/codebasics]

**<span style='color: #a3842c'>HTML Entities:** [https://developer.mozilla.org/en-US/docs/Glossary/Character_reference]

**<span style='color: #a3842c'>Google Chrome override location:** DevTools / `...` / More Tools / Sensors

**<span style='color: #a3842c'>Syntax highlighting for styled-components:** vscode-styled-components

**<span style='color: #a3842c'>AI Images:** [https://www.journeyfree.ai/login]

**<span style='color: #a3842c'>CSS Grid Layout Guide:** [https://css-tricks.com/snippets/css/complete-guide-grid/]

![image info](./css-grid-poster.png)

**<span style='color: #a3842c'>CSS nth child:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child]

#### Firefox not centering vertically

**<span style='color: #9e5231'>Error:** in project such as 17. WorldWise, in `CityItem.module.css`, i added this css to the class attached to my button element:

`font-family: inherit;` using a standard font, rather than the imported google font also works `font-family: inherit`.

#### ESLint - SSR with CommonJS

`npm install eslint`

![image info](./0_sc2.png)

#### ESLint - Next.js

when going through the project set-up of `npx create-next-app@latest`, you can confirm you'll use `ESLint`.

You can then run `npm init @eslint/config@latest` to get the latest ESLint configuration, and add your specific rules at the end of the `eslint.config.mjs` file, such as the `react/react-in-jsx-scope` set to `off` to avoid your editor to pop all sort of warnings with `jsx`:

```json
{
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
},
```

#### Next.js Page convention

To manage your different `Page` tabs within *VSCODE*; following Next.js convention to call the `export default function Page() {}`, you can go to `Manage / Settings / custom labels`

![image info](./0_sc3.png)

#### Grid / Flex not occupying vertical space

if a grid in columns, the child `divs` don't occupy the vertical space, you need to overwrite in *tailwind* with `flex-grow`*

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

### Array sort method

if you use the `.sort()` directly on your array, it gets mutated.
That's why it's quite common to combine with `.slice()` method

`const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);`

### Working with Immutable Arrays

- spread operator
- JSON (parse & stringify methods)
- Lodash DeepClone

#### lodash

**<span style='color: #a3842c'>Link:** [https://lodash.com/]

`npm i --save lodash`

### Asynchronous JavaScript

**<span style='color: #a3842c'>Link:** [https://jsonplaceholder.typicode.com/]

## Working with Components, Props, and JSX

### What is JSX?

Remember that JSX is just an extension of JavaScript, which means that there is a simple way of converting JSX to JavaScript. This is done by a tool called Babel, which was automatically included in our React application.

This *Babel* conversion is necessary because browsers of course, do not understand JSX. They only understand HTML. So behind the scenes, all the *JSX* that we write is converted into many nested `React.createElement` function calls. And these function calls are what in the end, create the HTML elements that we see on the screen.

Now, what this means is that we could actually use React without JSX at all. So, we could just manually write these createElement functions instead of JSX.

**<span style='color: #875c5c'>IMPORTANT:** *JSX* is a **declarative** syntax.

So in the imperative approach, we basically tell the browser exactly how to do things. And remember that that's the reason why frameworks like React exist in the first place and it's why React chose to use a declarative approach to building user interfaces.

So, a declarative approach is to simply describe what the UI should look like at all times, always based on the current data (`props` and `states`) that's in the component.

With *declarative approach*, there are no DOM manipulation at all., so, there are no `document.querySelectors`, no `addEventListeners`, because in fact, **React is basically a huge abstraction away from the DOM, so that we, developers never have to touch the DOM directly**.

**<span style='color: #875c5c'>IMPORTANT:** Instead, we think of the UI as a reflection of the current data and let React automatically synchronize the UI with that data.

So in essence, the difference between imperative and declarative is that in the declarative approach, we use JSX to tell React what we want to see on the screen but not how to achieve it step-by-step. React can figure that out on its own, basically

### Separation of Concerns

However, as pages got more and more interactive, they became single-page applications, where the JavaScript started to determine the user interface and the content in general. Or in other words, JavaScript became more and more in charge of the HTML.

If the JavaScript is in charge of the HTML anyway, so if the logic and the UI are so tightly coupled together, then why should we keep them separated in these different files and in different code blocks? Well, the answer to that question is what gave us React components and JSX.

So the fact that logic and UI are so coupled in modern web applications, is really the reason why a React component contains the data, the logic and the appearance of one piece of the UI. In fact, it's the fundamental reason why React is all about components.

So content and logic are tightly coupled together and so it makes sense that they are co-located here. And co-located simply means that things that change together should be located as close as possible together. And in the case of React apps, that means that instead of one technology profile, we have one component profile. So one component that contains data logic and appearance, all mixed together.

At first developers hated this JSX approach. And they hated that we are throwing separations of concerns out of the window. But actually, are we really? Is there really no separation of concerns in React?

React does actually have separation of concerns. It's just not one concern per file, as we had traditionally but one concern per component.

So each component is in fact, only concerned with one piece of the UI. Then within each of these components, of course we still have the three concerns of HTML, CSS and JavaScript all mixed up, as we have been discussing.

**So compared to the traditional separation of concerns, this is a completely new paradigm that many people were really not used to in the beginning.**

**<span style='color: #495fcb'> Note:** React does actually have separation of concerns. Just a different separation of concerns.

### Passing & Receiving Props

when passing any props type different than `string`, you should use JavaScript `{}`.

#### Props are read-only

![image info](./5_sc1.png)

Props are a **one-way dataflow**, from top to bottom.

### Conditional Rendering with &&

*React* will not render `true/false` as a result of a JSX component, but it will render `integer` for example, so be careful when using **short-circuiting** that the test value doesn't return `0`!

**<span style='color: #875c5c'>IMPORTANT:** when returning UI JSX content with short-circuiting, always use `Boolean` and not `integer`.

### Conditional Rendering With Ternaries

**<span style='color: #a8c62c'> App.jsx**

```javascript
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        <ul className='pizzas'>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObject={pizza} />
          ))}
        </ul>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later. </p>
      )}
    </main>
  );
}
```

you might be wondering why we cannot simply use an `if-else` statement right above. The reason is, once again, because of what we learned in the lecture on the **rules of JSX**, which is that inside this JavaScript mode, we cannot write any JavaScript. What we need to do here is to write something that actually produces a value and an if-else statement does not produce a value

### Conditional Rendering With Multiple Returns

usually this early `return`, combined with an `if` statement, is more useful when we want to render entire components conditionally but not just some pieces of JSX, as this will involve a lot of code duplication.

### Destructuring Props

**<span style='color: #495fcb'> Note:** With destructuring, in the component definition, we can immediately see that we will receive as props. That's a really big advantage of immediately destructuring props.

### React Fragment

JSX expressions must have one parent element. And so this is exactly what we learned in the Rules of JSX lecture.

So a **React Fragment** basically lets us group some elements without leaving any trace in the HTML tree, so in the DOM.

React Fragments is a very simple concept, which basically allows us to have more than just one element inside a piece of JSX.

### Section Summary

![image info](./5_sc2.png)

## State, Events, and Forms: Interactive components

### Handling Events the React Way

Handling events in React is actually pretty straightforward. So, as you can imagine, we are not going to use the `addEventListener` because that is the imperative way of building UIs. But here in React we use a more declarative approach. So we do not manually select DOM elements, and so therefore, we do also not use `addEventListener`.

### What is State in React?

We have learned how to pass data into a component by using props, which is data that's coming from outside the component.

- But what if a component needs to actually hold its own data, and also hold it over time?
- Also, what if we actually want to make our app interactive changing the UI as a result of an action?

Well, that's where, finally, state comes into play. So state is basically data that a component can hold over time, and we use it for information that a component needs to remember throughout its lifecycle.

**<span style='color: #495fcb'> Note:** Therefore, we can think of state as being the memory of a component.

**<span style='color: #875c5c'>IMPORTANT:** the most important aspect of state, which is the fact that updating state triggers React to re-render the component.

whenever we update a piece of state in a component, this will make React re-render that component in the user interface. So it will create a new updated view for that component. And a component's view is basically just the component visually rendered on the screen, so in the user interface.

**<span style='color: #495fcb'> Note:**

- when one single component is rendered, we call that a **view**.
- so all the views combined together then make up the final user interface.

So state is how React keeps the user interface in sync with data. We change the state, we change the UI.

**<span style='color: #875c5c'>Summary:** State allows developers to:

- update the component's view; by re-rendering it
- persists local variable between renders

### Creating a State Variable With useState

`useState` function is what we call a hook in React. And we can identify hooks because they start with this *use* keyword.

**<span style='color: #9e5231'>Error:** we can only call hooks like `useState`, **on the top level of the function**. So only here is it allowed to call use state not inside an if statement, or inside another function, or inside a loop.

**<span style='color: #495fcb'> Note:** we should really only update state using the `setter` function.

### Don't Set State Manually

When we don' use the `useState setter` function, we are directly mutating the state variable. But React is a framework which is all about immutability (and functional state update). And so, therefore, we can only update the state using the tools that React gives us, which ensure immutability.

**<span style='color: #9e5231'>Error:** Never update a state variable which is an object, by not using the `setter` function, this could mutate the object in certain (*more complex*) situation, and this is a very bad practice.

**<span style='color: #875c5c'>IMPORTANT:** So, always treat state as immutable in React. So, as something that you cannot change directly, but that you can only change using the tools that *React* gives.

### The Mechanics of State

![image info](./6_sc1.png)

**<span style='color: #875c5c'>IMPORTANT:** This mechanic is so fundamental, that it is the reason why it's called **React**: React reacts to state changes by re-rendering the UI, and explains how React framework keeps UI in sync with data.

### React Developer Tools

you can change the value of the hooks inside the `Component` view. This can be convenient to change some state variables not accessible via the UI.

### Updating State based on Current State

**<span style='color: #9e5231'>Error:** We shouldn't update state based on the current state as we have done so far:

`if (step > 1) setStep(step - 1);`

Instead of passing a value, we should use a callback function, receiving as an argument the current value of the state.

`if (step > 1) setStep((prev) => prev - 1);`

### More Thoughts About State + State Guidelines

**<span style='color: #875c5c'>IMPORTANT:** Each component has and manages **its own state**, no matter how many times we render the same component. So, state really is isolated inside of each component.

We can basically think of the entire application view, so, the entire user interface, as a **function of state**: `UI = f(state)`.

Or, in other words, the entire UI is always a representation of all the current states in all components.

### A Vanilla JavaScript Implementation

The Vanilla JavaScript implementation is inside an HTML file where here we have first the *HTML* and then separated the *JavaScript*.

### Building a Form & handling Submissions

in a single page application, like we want to build with React, we usually can submit a form without the page reloading, by disabling the default *HTML* behavior.

### Controlled Elements

what we need to understand is that by default these input fields like this `input` and also this `select`,  they maintain their own state inside the **DOM**. So basically inside the HTML element itself.

Now this makes it hard to read their values and it also leaves this state right here in the DOM which for many reasons is not ideal.

So in React, we usually like to keep all this state in just one central place. So inside the React application and not inside the DOM, using **controlled elements**. Because that form data of course changes over time and we also want to maintain our application in sync with it.

- create `state`
- listen for the change event `onChange()`. **<span style='color: #495fcb'> Note:**, you can check the values in Dev Tools, *Components*

**<span style='color: #875c5c'>IMPORTANT:** `e.target.value` is always a **STRING**! This can be discovered using the *Dev Tools*, showing how useful they are.

```javascript
<select
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
>
```

**<span style='color: #875c5c'>IMPORTANT:** data via `props` can only flow down the tree but not up or sideways. And so this is where we really need to start thinking more about state and state management.

## Thinking in React: State Management

### Fundamentals of State Management

#### State: When and Where?

![image info](./7_sc1.png)

### Thinking about State and Lifting State Up

```javascript
// ERROR: below would mutate our state object/array of items
setItems((items) => items.push(item));

// CORRECT:
function handleAddItems(item) {
  setItems((items) => [...items, item]);
}
```

if we have a state, that we want to pass/share with a sibling component, we can't use `props`, *But data can only flow down the tree. It cannot flow up the tree or sideways.* We now need to **lift up the state** to the closest parent component.

**<span style='color: #495fcb'> Note:** We can pass anything as a `prop` and that includes functions.

### Reviewing Lifting Up State

#### Child-to-Parent Communication

Child updating parent state = data flowing up

![image info](./7_sc2.png)

### Sorting Items

To display the items sorted by whatever criteria we selected, we will just create a new *variable* which is then sorted by that criteria. **So we are not going to manipulate the original items array**. That state should stay unchanged. We will **not** create a *new state variable* here because that's totally unnecessary.

### The Children Prop: Making a Reusable Button

What if we could pass simply some *JSX* into the component and then the component could use that *JSX* and simply display it?

the children prop is a prop that each React component automatically receives. And the value of the children prop is exactly what is between the opening and the closing tag of the component.

**<span style='color: #495fcb'> Note:** It's actually one of its most useful features. And the reason for that is that it allows us to make our components truly reusable.

## Practice Project: Eat-N-Split

### Adding a new Friend

We can create random id using the built-in browser `crypto.randomUUID()`.

**<span style='color: #495fcb'> Note:** this wouldn't work in older browsers.

### Creating Controlled Elements

**<span style='color: #9e5231'>Error:** what happens when we click on one of these other friends, and we have already set values for the controlled variables within the `FormSplitBill`?  the state has not been reset, it is exactly the same when we click on other friends. that this happens because this component is rendered in exactly the same place in the component tree as before. The same component is rendered again in exactly the same position. So the component doesn't disappear in the meantime and so therefore it is not really re-rendered. And so that means that the state then stays the same.

If we close a friend, and select a new one, then this component is re-rendered and the state is reset.

## Thinking in React: Components, Composition, and Reusability

### How to Split a UI into Components

**<span style='color: #495fcb'> Note:** Too many small components leads to too much abstraction: **creating something new to hide the implementation details of that object**.

For example, when we create a button component, the user of that component might have no idea how the button actually does what it does, because the implementation details are hidden behind this abstraction, so behind this component. *So in a way, each new component we create is an abstraction*.

4 criteria for splitting a UI into components:

- logical separation of content / layout
- reusability
- responsibilities / complexity
- person coding style (some prefer to work with smaller components)

### Component Categories

- Stateless / presentational components
- Stateful components
- Structural components (a result of components composition)

### Prop Drilling

So basically *prop drilling* means that we need to pass some prop through several nested child components in order to get that data into some deeply nested component.

All intermediary components needed this `prop` for, was to then pass it down even further the tree. And so we end up with a lot of props that are really not needed at all. All they are needed for is to pass the data down even further into our component tree.

### Component Composition

it allows re-usability of a component by using the `{children}` prop, essentially similar to an empty slot that is passed to the re-usable component.

**<span style='color: #495fcb'> Definition:** Component composition = combining different components using the **children** prop,  or **explicitly defined props**. It is used:

- create highly reusable and flexible components
- fix prop drilling (great for layouts)

**<span style='color: #875c5c'>IMPORTANT:** this is possible because components don't need to know their children in advance.

### Passing Elements as Props (Alternative to children)

that would be a perfect use case for passing a *prop* with a specific name instead of the *implicit children prop*.

**<span style='color: #495fcb'> Note:** using `{children}` is clearly the preferred way of doing this inside React.

### Building a reusable Star Rating component

Setting default `props` in *React*: `export default function StarRating({ maxRating = 5 }) {}`

### Handling Hover Events

So whenever we hover over these stars we get like a temporary rating here exactly with the number of stars that are currently being hovered.

So the rating is set to five, but again whenever we hover over some other number of stars then that temporarily changes to that rating. So what that means is that now we need a *brand new piece of state* to basically store that temporary rating. And again, that makes sense because  something should happen on the screen. **So the component should re-render whenever there is some hover event**.

### Improving Reusability with Props

So, if we imagine that we want to reuse this component in many other applications, or maybe even *publish it to NPM* to share it with all React developers around the world, then they will probably not find this component very useful right now.

we now need to define a good **public API**  for this *star* component. This is the interface of our component.

**<span style='color: #875c5c'>IMPORTANT:** Now, maybe you heard or read that *we should never initialize state from props*. However, this is only true if you want the state variable to stay in sync with that passed in props, or in other words, if you want the state value to update in case that the prop value is also updated. However, that is clearly not the case here. So, we are really only using this defaultRating here basically as seed data, so really just as the initial state, and we don't care whether this value here maybe changes somewhere else in the application, so outside this component. And, therefore, this is perfectly fine and normal to do. so it's really no problem to initialize your state based on a prop. So this was more relevant in the old days of React before we had hooks, but now, that's really no longer a problem.

### PropTypes

So with propTypes, we can basically specify the type of value that we expect the consumer of the component to pass in for each of the props.

Now, if you really care about this, you should actually just use **TypeScript** instead of JavaScript.  Developers these days don't really use `PropTypes` anymore but moved to `TypeScript`.

there's no need to install this `propTypes` package because *vite / create-React-App* already comes with this package pre-installed.

```javascript
<StarRating
  color='lightblue'
  maxRating={'test'}
  className={styles.forTest2}
  onSetRating={setMovieRating}
/>
```

![image info](./10_sc1.png)

these warnings right here that will then allow other developers to catch bugs like this.

## How React Works behind the scenes

### Components, Instances and Elements

Component can be seen as the template, the blue-print, while  an instance is the actual physical manifestation of a component living in the component tree.

#### Components & Instances

**<span style='color: #495fcb'> Note:** And we also say that a UI is made up of components, not of component instances, even though instances would technically be more accurate.

#### Instances

JSX get converted to multiple `React.createElement` function calls. Then as *React* calls these functions, the result will be a React element.

So a React element is basically the result of using a component in our code. It's simply a big immutable JavaScript object that React keeps in memory.

A **React element** basically contains all the information that is necessary in order to create DOM elements for the current component instance. And so it's this React element that will eventually be converted to actual **DOM elements**, and then painted onto the screen by the browser.

So based on all this, the DOM elements are the actual, final and visual representation of the components instance in the browser. And again, it's not React elements that are rendered to the DOM. React elements just live inside the React app and have nothing to do with the DOM. They are simply converted to DOM elements when they are painted on the screen in this final step.

So this is the journey from writing a single component to using it multiple times in our code as a blueprint all the way until it's converted to a React element, and then rendered as HTML elements into the DOM.

### Instances and Elements in Practice

**<span style='color: #a8c62c'> App.jsx**

if we would `console.log(<DifferentContent/>)` inside our `.jsx` component, it will internally call the different content function and will then return this React element.

`$$typeof: Symbol(react.element)`:  a security feature that React has implemented in order to protect us against cross-site scripting attacks. So, notice how this is a symbol and symbols are one of the JavaScript primitives, which cannot be transmitted via JSON, or in other words, this means that a symbol like this cannot come from an API call.

So if some hacker would try to send us a fake React element from that API, then React would not see this type of as a symbol. Again, because symbols cannot be transmitted via JSON. And so then React would not include that fake React element into the DOM so protecting us against that kind of attack.

So, if React calls are component internally when it renders them, so just as it did here in this previous line, then maybe you have wondered, why don't we just call components directly: `DifferentContent()` instead of `<DifferentContent />`.

We would still get a `react.element` but not of type *DifferentContent` anymore, but instead of type *div*, which is the content of that component.  React does no longer see this as a component instance, and instead it just sees the raw React element, which is really not what we want. So, when we write, or actually when we use a component, we want React to see the component instance and not the raw output element like this one.

**<span style='color: #9e5231'>Error:** when we call a component directly, then React no longer sees it as a component instance, and it would not appear in the component tree. The state that this component manages is actually now inside the parent state or the parent component, same as any other hooks. So, for all these reasons, you should never ever do what we just did here because this will create multiple problems such as violating the rules of hooks

### How Rendering Works: Overview

In React, **rendering is not about updating the DOM** or displaying elements on the screen. Rendering only happens internally inside of React and so it does not produce any visual changes.

Now, in all the previous sections, I have always used the term rendering with the meaning of displaying elements on the screen because that was just easy to understand and it just made sense.

### How Rendering Works: The Render Phase

If you update the highest component in a component tree, then the entire application will actually be re-rendered. React uses this strategy because it doesn't know beforehand whether an update in a component will affect the child components or not. And so by default, React prefers to play it safe and just render everything.

Also, keep in mind once again that this does not mean that the entire DOM is updated. It's just a virtual DOM that will be recreated which is really not a big problem in small or medium sized applications.

What happens next is that this new virtual DOM that was created after the state update will get reconciled with the current so-called Fiber tree as it exists before the state update. this reconciliation is done in React's reconciler which is called Fiber.

In the fiber tree, for each React element and DOM element, there is a fiber, and this fiber holds the actual component state, props, and a queue of work.

The computation of these DOM updates is performed by a diffing algorithm, which step by step compares the elements in the new virtual DOM with the elements in the current fiber tree, so to see what has changed.

Then the results of this reconciliation process is gonna be an updated Fiber tree, so a tree that will eventually be used to write to the DOM.

And this process of comparing elements step-by-step based on their position in the tree is called **diffing**.

**<span style='color: #495fcb'> Note:** it's important to note that the render face is asynchronous so fiber can prioritize and split work into chunks and pause and resume some work later. And this is necessary for concurrent features and also to prevent the JavaScript engine to be blocked by complex render processes.

### How Rendering Works: The Commit Phase

The *render phase* results in a **list of DOM updates**, which are used in the **commit phase**.

Commit phase is when React writes to the DOM (so called, *changes are flushed to the DOM*): insertions, deletions and updates.

Commit phase cannot be interrupted and so is synchronous.

### How Rendering Works: The Commit Phase

The React Library is not the one responsible for writing to the DOM, because the DOM is just one of many hosts to which React apps can be committed, so to which they can be output, basically.

And for each of these hosts we have a different package that we can use. And that's why in our index.js file, we always import both `React` and `React DOM`.

#### Recap

![image info](./11_sc1.png)

### How Diffing Works

**<span style='color: #875c5c'>IMPORTANT:** If it was not the **element type** that has changed, but simply an **attribute of an HTML element** or a **prop of a  component**, *React* is gonna simply mutate the DOM element attributes / React elements that will be passed in the new props. So React tries to be as efficient as possible and so the DOM elements themselves will stay the same. They're not removed from the DOM, and even more importantly the state will not be destroyed.

State of an element will be preserved if (not reset):

- if the element stays the same element between renders,
- and it also stays in the exact same place in the component tree.

Now sometimes we actually don't want this standard behavior but instead to create a brand new component instance with new state. And so that's where the `key prop` comes into play.

### Diffing Rules in Practice

Based on the `Diffing rule` we just learnt, in our app, if we change *tab*, the states such as *number of likes, show/hide details* are preserved, which without knowledge of the `Diffing rule` would look really strange. Because we would expect that whenever we go to a new tab, that the state would be reset. But that's not what happens.

**<span style='color: #875c5c'>IMPORTANT:** when we click on the `tab`, the `tabContent` we are in a situation where **the same component is in the same position in the tree**, and for that reason the **state is preserved across renders**.

As we keep clicking around these tabs here, this component instance here is actually not destroyed. So it stays in the DOM and the only thing that changes is the props that it receives.

However if we click on *tab4*, where the `DifferentContent` component is rendered. So it's still in the same position of the tree but it's a different content, i.e. a different component. And so now if we go back to any of the first 3 tabs, the state has actually been reset. And so that's because the `tabContent` that we had here before has been completely destroyed and removed from the DOM in the meantime, while we were at the `differentContent`.

Now sometimes of course, we do not want this behavior. , I actually expect that when I go to a new tab that it starts again with the default state, we use the `key prop`.

### Key Prop

`Key prop`:

![image info](./11_sc2.png)

### Resetting State with Key Prop

**<span style='color: #875c5c'>IMPORTANT:** to avoid the default behavior of state being preserved under conditions (same element, same position in the tree), we can use the key prop to change this. By assigning a `key prop` to each components, So then each time that this *tabContent* component is re-rendered, it'll get a different key. And so then React will see it as a unique component instance.And therefore, then the old one will be destroyed, and the state will be reset.

React now views this as a completely different instance of `tabContent`. And we can see that because now in *dev tools / components*, this key is displayed.

### Rules for Render Logic: Pure Components

**<span style='color: #875c5c'>IMPORTANT:**
>
- **Components must be pure when it comes to render logic**: given the same props (input), a component instance should always return the same JSX (output).
- **render logic must produce no side effects**
>

### State Update Batching in practice

**<span style='color: #a8c62c'> App.jsx / TabContent**

```javascript
function handleUndo() {
  setShowDetails(true);
  setLikes(0);
  console.log(likes);
}
```

**<span style='color: #495fcb'> Note:** the `console.log()` will return the previous value of the state, as the state is in fact actually only updated after the re-rendering, or basically during the re-rendering, but not immediately after we call this function `setLikes()`.

**<span style='color: #875c5c'>IMPORTANT:** Re-Render will not even occur if the new state values are equal to the actual state values, React will not even try to attempt to update the state, and then of course, it will also not re-render the component instance.

**<span style='color: #9e5231'>Error:** the state update is asynchronous and the updated state value can't be accessed on the next line of code, it's staled! We have to use a callback function, instead of just a value, **as in the callback function, we do actually get access to the latest updated state**.

```javascript
function handleTripleInc() {
  // setLikes(likes + 1);
  // setLikes(likes + 1);
  // setLikes(likes + 1);

  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
}
```

**<span style='color: #495fcb'> Note:** let's just prove that automatic batching now works in *React 18* even outside of event handlers, , our component was only rendered once, a single 'render' string was logged.

```javascript
function handleUndoLater() {
  setTimeout(handleUndo, 2000);
}
```

### How Events Work in React

**<span style='color: #875c5c'>IMPORTANT:**

- during the **capturing** and **bubbling** phases, the event really goes through every single child and parent element one by one. In fact, it's if the event originated or happened in each of these DOM elements.
- by default, event handlers listen to events not only on the target element, but also during the bubbling phase, so if we put these two things together, it means that every single event handler in a parent element will also be executed during the bubbling phase as long as it's also listening for the same type of event.
- this concept allows for event delegation.

**<span style='color: #495fcb'> Note:** Event delegation, this is done all the time in vanilla JavaScript applications. However, in React apps, it's actually not so common for us to use this technique. however in React it can still be useful:

- because sometimes you find some strange behaviors related to events in your applications, which might actually have to do with event bubbling,
- this is actually what React does behind the scenes with our events

What *React* actually does is to register all event handler functions to the root DOM container, and that root container is simply the DOM element in which the *React* app is displayed. It's worth knowing is that React physically **registers one event handler function per event type**, and it does so at the root note of the fiber tree during the render phase.

**<span style='color: #875c5c'>IMPORTANT:**React actually performs event delegation for all events in our applications. So we can say that React delegates all events to the root DOM container, not where we registered them.

**<span style='color: #495fcb'> Note:** it's really the DOM tree that matters here, not the component tree. So just because one component is a child of another component, that doesn't mean that the same is true in the displayed DOM tree.

#### Synthetic Events

So in vanilla *JavaScript*, we simply get access to the native DOM event object, for example, *pointer event, mouse event, keyboard event, and many others*.

*React*, on the other hand, will give us something called a synthetic event, which is basically a thin wrapper around the DOM'S native event object, and by wrapper we simply mean that synthetic events are pretty similar to native event objects, but they just add or change some functionalities on top of them.

*Synthetic Events* have the same interface as native event objects and that includes the important methods: *stopPropagation*, *preventDefault*, they were added to fix some browser inconsistencies.

The React team also decided that all of the most important synthetic events actually bubble, including the focus, blur, and change events, which usually do not bubble. The only exception here is the *scroll* event, which does also not bubble in React.

### Framework vs. Library

**React**, which is what we call a *View library*, view because all React does is to draw components onto a user interface, so onto a so-called *view*.

Now, if you want to build a large scale single page application, you will need to include many external third party libraries for things like routing, styling, HTTP requests, and so on.

So all these functionalities are not part of React itself unlike what happens with Angular and other frameworks.

#### Frameworks built on top of React

Now, many React developers actually do feel overwhelmed by having to take so many decisions and choosing between so many third party libraries.

And so this fact, among some other reasons, has led to the development of multiple **opinionated React frameworks** such as:

- Nextjs
- Remix or
- Gatsby

So, Nextjs or Remix are React frameworks because they are actually built on top of React. So they basically extend React's functionality and they are opinionated because other developers basically included their own opinions into how to handle stuff like routing, state management, or styling into these frameworks.

So, where in a traditional React app, we have to make decisions about what libraries to include in an app built with a React framework. Some of these important decisions have already been taken away from you, the developer. And so this makes project development much easier and much faster, and it can also lead to a better overall developer experience, offloading much of the setup work from the developer.

In fact, we can even describe many of these frameworks as full stack React frameworks because they include so many features that we can actually build full stack apps with them,

## Effects and Data Fetching

### How NOT to Fetch Data in React

**<span style='color: #875c5c'>IMPORTANT:** We have learned before in the previous section, we should never update state in render logic.

#### OMDB API

**<span style='color: #a3842c'>Link:** [https://www.omdbapi.com/]

#### How to fix `process` is not defined (React+Vite), when using `.env` file

**<span style='color: #9e5231'>Error:** You should not use *dotenv* package with *React* (but with *Node*)

in then `.env` file, prefix your key with `VITE_OMDB='test123'`

in your `.js / .jsx` code: `console.log(import.meta.env.VITE_OMDB);`

this data fetching that we're doing is actually introducing a side effect into the component's render logic. So it is clearly an interaction with the outside world, which should never be allowed in render logic.

All this code at the top level of the function is of course code that will run as the component first mounts and therefore it is called render logic. And so again, here we should have no side effects.

**<span style='color: #a8c62c'> App.jsx**

```javascript
export default function App() {
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  fetch(`http://omdbapi.com/?apikey=${KEY}&s=interstellar`)
    .then((res) => res.json())
    .then((data) => setMovies(data['Search'])); // ERROR: Infinite loop of http requests
    // .then((data) => console.log(data));

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
        {/* <Box element={<MovieList movies={movies} />} /> */}
      </Main>
    </>
  );
}
```

**<span style='color: #9e5231'>Error:** So we got some data from the API now showing up in our UI, but watch what happens when we check out the `Network` tab of the `Dev Tools`.

So you see that it's basically running an infinite number of requests here, so it keeps going and it never really stops. So every second our app is firing off multiple fetch requests to this API, which of course is a really, really bad idea.

Why do you think all these fetch requests are being fired off?

- Well, the reason is that setting the state here in the render logic will then immediately cause the component to re-render itself again. So that's just how state works, right?
- However, as the component is re-rendered, the function here of course is executed again, which then will fetch again, which in turn will set the movies again as well. And then this whole thing starts over and over again.
- **<span style='color: #875c5c'>IMPORTANT:** And so this really is an infinite loop of state setting and then the component re-rendering. And so **this is the reason why it is really not allowed to set state in render logic**.

### useEffect to the Rescue

The idea of the `useEffect` hook is to give us a place where we can safely write side effects, just  like data fetching. But the side effects registered with the `useEffect` hook will only be executed after certain renders, i.e. only write after the initial render, which is exactly what we are looking for in this situation.

the first argument is the side effect you want to be run, i.e. a *JavaScript function* and the second argument is the dependencies that will cause this hook to be run again, if you pass an empty array `[]`, it will only run when the component is mounted.

**<span style='color: #495fcb'> Note:** in a larger, more real world application, we may use some external library for data fetching. But again, in a small application like this one, this is now a great way to fetch some data on mount, so when our application first loads.

#### A First Look at Effects

Event Handlers are the preferred way of creating side effects, we should use `useEffect` as little as possible.

### Using an Async Function

```javascript
useEffect(function () {
  async function fetchMovies() {
    const res = await fetch(`http://omdbapi.com/?apikey=${KEY}&${query}`);
    const data = res.json();
    
    setMovies(data['Search']);
    // console.log(movies); //ERROR: above line is asynchronous, so we will get the prev. value of movies
    console.log(data['Search']); //NOTE: OK
  }

  fetchMovies();
}, []);
```

Remember that setting the `state` is an **immutable action**.  

`setMovies(data['Search']);`:  after the state has been set in this line of code, or actually after we instructed React to set the state, that doesn't mean that this happens immediately. So instead, it will happen after this function here has been called.

### The useEffect Dependency Array

**<span style='color: #495fcb'> Note:** Every **state variable** and **props** used inside the effect **MUST** be included in the dependency array. Otherwise we get a **stale closure**.

Effects are actually only executed after the browser has painted the component instance on the screen. So, not immediately after render, as you might have thought initially. That's why we say that **effects run asynchronously** after the render has already been painted to the screen.

And, the reasons why effect work this way is that effects may contain long-running processes, such as fetching data. So, in a situation like that, if React would execute the effect before the browser paints a new screen, it would block this entire process, and users would see an old version of the component for way too long.

### Synchronizing Queries With Movie Data

![image info](./12_sc1.png)

`C` will be logged first when the component mounts, as this is read during the *render* step, component logic is indeed read/processed during the render phase, while `A` & `B` will be logged after, when the browser has repainted.

**<span style='color: #495fcb'> Note:** if we type new text in the searchBar, then only `C` and `B` are logged again, but not `A`, which has an empty dependency while `B`, with no dependency defined will be executed/synchronized on each render, which is indeed triggered when `states` or `props` of a component change.

These labels would clearly describe the above logic:

![image info](./12_sc2.png)

### Selecting a Movie

**<span style='color: #a3842c'>Link:** HTML entity:

```JavaScript
<button className='btn-back' onClick={onCloseMovie}>
  &larr;
</button>
```

### Adding a Watched Movie

**<span style='color: #a8c62c'> WatchedMoviesList.jsx**

```javascript
<button
    className='btn-delete'
    onClick={() => onDeleteWatched(movie.imdbID)}
>
```

Above in the `onClick` event, we need to pass a **function**, not a function call (Nb: this is anonymous function, itself calling our `onDeleteWatched` function in that instance)

**<span style='color: #875c5c'>IMPORTANT:** when moving a lot of data up and down the tree and the same for some handler functions, the `components` menu of the `Dev Tools` is a great place to look at the structure of the web app.

### Adding a New Effect: Changing Page Title

changing the page title in the browser, so outside here of the application, is a side effect because we are very clearly going to interact with the outside world, so basically with the world outside of our React application. And so again, this is then considered a side effect.

**<span style='color: #875c5c'>IMPORTANT:** So we should always use different effects for different things. So basically, that each effect has only one purpose, so it only does one thing.

**<span style='color: #495fcb'> Note:** you see that initially, the title is undefined, which is because in the beginning, this movie object is still empty, and only after the movie actually arrives from the API, the component will re-render and then we have the correct title that is then logged to the console.

So moving back to our effect, basically, what happens here is that again, in the beginning, the title is undefined. And so since this effect only runs exactly once, when the component mounts, it will just stay undefined forever.

So when the component re-renders with the correct movie object and the correct title, our effect will right now not react to that. So it will not be re-executed. Now, luckily for us, we already know how to fix that. So we just have to include this title variable here in the dependency array.

```javascript
useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      //NOTE: cleanup function
      return function () {
        document.title = 'usePopcorn';
        console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );
```

**<span style='color: #495fcb'> Note:** this cleanup function here will actually run after the component has already unmounted. And so if that's the case then how will the function actually remember this title here? So again, this function here runs only after the component has already disappeared from our component tree and so all the state including the `movie` object has been destroyed.

But still our function here remembers the title. So how is that? Well, it's because of a **very important concept in JavaScript called a closure**. So basically a closure in JavaScript means that a function will always remember all the variables that were present at the time and the place data function was created.

So in the case of our cleanup function here, it was created by the time this effect first was created here. And so by that time the title that was actually defined will be remembered.

**<span style='color: #495fcb'> Note:** the cleanup function runs:

- when the component unmounts
- between component re-renders

### Cleaning up Data Fetching

**<span style='color: #9e5231'>Error:**at the moment, we send one http request per keystroke.

- having so many requests at the same time will slow each of them down.
- this means that we will end up downloading way too much data.
- We always want exactly the last request of all to be the one that matters, and this is not guaranteed at the moment with potential **race condition**, which occurs if some intermediary request with broken search term takes longer, it would then be the wrong request displayed onto our UI.

We can solve that issue by using a **native browser API, which is the abort controller**, which has nothing to do with *React*.

With this *abort controller*:

- all previous request which are not the last one, got canceled
- we can also see that now we no longer have all these different requests happening at the same time.  there is basically only one request happening at a time, until it then got canceled by the next one.
- the last one that we were actually interested in, was of course *not* canceled.

So each time that there is a new keystroke, the component gets re-rendered. Between each of these re-renders, the cleanup function of our `useEffect`, will get called. So on each new keystroke, so a new re-render, our controller will abort the current fetch request. And so that is exactly what we want, to cancel the current request each time that a new one comes in.

**<span style='color: #9e5231'>Error:** as soon as a request get canceled, JavaScript actually sees that as an error. So basically when a fetch request, as it is canceled, it'll throw an error, which will then immediately go here into our catch block, where the error is set.

`ChatGPT` recommends `lodash`, relying on an external library.

### One More Effect: Listening to a Keypress

```javascript
useEffect(
  function () {
    function callback(e) {
      if (e.code === 'Escape') {
        onCloseMovie();
        // console.log('Closing');
      }
    }

    document.addEventListener('keydown', callback);

    return function () {
      document.removeEventListener('keydown', callback);
    };
  },
  [onCloseMovie]
);
```

Without the `cleanup` function, we see that if we log a *closing* message, they keep on accumulating.

The reason is that each time that this effect here is executed, it'll basically add one more event listener to the document.

And so if we open up 10 movies and then close them all, we will end up with 10 of the same event listeners attached to the document. This is why we also need to clean up our event listeners.

## Custom Hooks, Refs, and more State

### React Hooks and Their Rules

**<span style='color: #495fcb'> Note:** **Hooks rely on call order**,  his is very convenient because by using the call order, we developers don't have to manually assign names to each hook, which would create multiple problems.

### The Rules of Hooks in Practice

From `Components` in the `Dev Tools`, each of the hooks is identified by React by their order number, not some name.

![image info](./13_sc1.png)

**<span style='color: #9e5231'>Error:** If you introduce an `if` statement with a hook, you'll have to disable eslint `/* eslint-disable */`, on the next render, you'll get an error message that a change of order of Hooks has been detected.

You would get the same error if you include an **early return**.

![image info](./13_sc2.png)

### More Details of useState

**<span style='color: #495fcb'> Note:** The power and one of the great advantages of derived state, which is that it updates basically as the component gets re-rendered.

**<span style='color: #495fcb'> Note:** we do not get access to the updated state right after we call the state updating function; this is called **asynchronous state setting**; we usually say that your state variable is **stale** at this point. So only once React is done processing this event handler it will then update all the state and re-render the UI.

The solution is to use a callback function:

```javascript
setAvgRating(Number(imdbRating));
// ERROR: setAvgRating((avgRating + userRating) / 2);
setAvgRating((avgRating) => (avgRating + userRating) / 2);
```

To persist the watch list in local storage in between refresh, we can:

- store the data into local storage each time that a new movie is actually added: `handleAddWatched`
- second option is to use `useEffect`

**<span style='color: #a8c62c'> App.jsx**

As the update of the watched state variable happens asynchronously with the `setter` method, to update our local storage we can't simply use `watched` variable but `[...watched, movie]` instead

```JavaScript
function handleAddWatched(movie) {
  setWatched((watched) => [...watched, movie]);
  
  localStorage.setItem("watched", JSON.stringify([...watched, movie]));
}
```

when using `useEffect`, we don't have to create any new array because this effect will only run after the watched state has already been updated (new state).

```javascript
useEffect(
  function () {
    localStorage.setItem('watched', JSON.stringify(watched));
  },
  [watched]
);
```

To retrieve the localstorage data when the app mounts, instead of just passing in a value to our state,we can pass in a callback function.

And so that's because the `useState` hook also accepts a callback function instead of just a single value. And so we can then initialize the state with whatever value this callback function will return.

**<span style='color: #875c5c'>IMPORTANT:** And also just like the values that we pass in, React will only consider this function here on the initial render. So this function is only executed once on the initial render and is simply ignored on subsequent re-renders.

```javascript
 // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched');
    return JSON.parse(storedValue);
  });
```

**<span style='color: #9e5231'>Error:** passing a function inside `useState` is ok, but we cannot call a function inside `useState`! `useState(localStorage.getItem('watched'))`. Even though React would ignore the value of this it would still call this function on every render, which is not good.

when we delete a movie from here, and you see that it actually automatically got removed here from the local storage as well. it's because thanks to our effect here we have effectively synchronized the watched state with our local storage. So when the watched state changes, our local storage changes as well.

**<span style='color: #495fcb'> Note:** And so this is a great advantage of having used the `useEffect` hook instead of setting local stage right in the event handler, because we would also have to manually set the local storage here as we deleted a movie.

### How NOT to Select DOM Elements in React

**<span style='color: #a8c62c'> NavBar.jsx**

```javascript
useEffect(function () {
  const el = document.querySelector(".search");
  console.log(el);
  el.focus();
}, []);
```

React is all about being declarative. And so manually selecting a dom element like this is not really the React way of doing things.

To make the action of selecting an elements more declarative, such as everything else in React, we need the concept of `useRef`.

### Refs to select DOM Elements

Below the variable and html element are connected in a declarative way, without any `querySelector`.

**<span style='color: #a8c62c'> NavBar.jsx**

```javascript
const inputEl = useRef(null);

<input
  onChange={(e) => setQuery(e.target.value)}
  ref={inputEl}
/>
```

**<span style='color: #495fcb'> Note:** we need to use an effect in order to use a ref that contains a DOM element because the ref only gets added to this DOM element, after the DOM has already loaded. And so therefore we can only access it in effect which also runs after the DOM has been loaded.

### Refs to Persist Data Between Renders

**<span style='color: #a8c62c'> MovieDetails.jsx**

```javascript
const countRef = useRef(0);

useEffect(
  function () {
    if (userRating) countRef.current++;
  },
  [userRating]
);
```

To update a ref, we use a `useEffect`, because we are not allowed to mutate the ref in render logic. So instead we need to use a `useEffect`.

**<span style='color: #495fcb'> Note:** So with a `ref`, we don't have a set function but instead we simply mutate the current property which is in the ref.

![image info](./13_sc3.png)

### Creating our First Custom Hook: useMovies

**<span style='color: #875c5c'>IMPORTANT:** Remember that **JavaScript hoisting** works with standard functions but not arrow functions, and is one of the reason why function declaration can be better.

**<span style='color: #9e5231'>Error:**

in our custom hook, if we update the dependency as suggested, we get an infinite reload : `[query, callback]`

from the Q&A: Lecture 170

"I tried finding the solution to this problem by googling and I came across the useCallback hook read the documentation and I think I found the solution is this correct?"

`const handleCloseMovie = useCallback(() => setSelectedID(null), []);`

`Copilot` refers this to `memoization` of a function inside of a `useEffect`

### Challenge1: useGeolocate

When we create our own custom hooks, we take all the non-visual logic, so all the logic that contains some React hooks, and which is relevant to a certain thing and so in this case, that thing is to use geolocation.

we took these three state variables and also this event handler function and then returned off that from our custom hook, and so then **we encapsulated all of those states and all the logic inside this custom hook!**

## The Advanced useReducer Hook

### Managing State with Reducer

**<span style='color: #875c5c'>IMPORTANT:** **useReducer decouples state logic from component.**

#### State with useReducer

![image info](./1_sc1.png)

### Loading Questions from a fake API

`npm run i json-server`

in the `package.json`, add in the `dependencies` section : `"json-server": "^1.0.0-beta.3",`

in the `Konsole`, you can get the ip address of the *localhost server*: `hostname -I`

### Handling new answers

**<span style='color: #875c5c'>IMPORTANT:** whenever possible, we should try to put as much of the logic for calculating the next state right into the reducer.

So it's better for this logic here to be in the reducer than in the place where the event is actually first handled.

### Setting Up a Timer With useEffect

We couldn't start the timer in the `App.jsx` component here because then the timer will start running as soon as the entire application mounts but that's not what we want.

So we have to place this `useEffect` into one of the components that mounts as the game starts, i.e. the `Timer.jsx` component.

#### Re-renders in large applications

when one component re-renders, all its child components will re-render as well.

So our state lives here in this global `App.jsx` component, and so therefore as our state re-renders so will re-render all of these child components.

**<span style='color: #495fcb'> Note:** And so this could become a performance issue in a really large application with like a thousand components. So in that case, you probably shouldn't have your most parent component re-rendering every single second.

### Challenge: Adding the highscore

`curl -X GET -H "Content-Type: application/json"  "<http://localhost:9000/questions>"`

## React Router: building Single-Page Applications (SPA)

### Routing and Single-Page Applications (SPAs)

#### What is Routing

most front-end frameworks have these client side routing capabilities baked right into the framework.

But React is different, because it relies on third party packages for many different functionalities, and routing is one of them.

So in React, routing is usually handled by this third party package called `react-router`. And this is probably the most important and most used React third party library out there. So if you want to learn React development, you need to learn React Router.

The reason for that is that routing is fundamental for building something that we call **single-page applications**.

#### SPAs

Single-page applications, or SPAs for short, are web applications that are executed entirely on the client, so only in the user's web browser.

single-page applications rely heavily on the concept of routes where different URLs correspond to different views.

Whenever a user clicks on a special link provided by the Router, the URL in the browser simply changes.

In the case of React, this job is usually done by `react-router`.

Now, changing the URL will then trigger the DOM to be updated as a result. And in single-page applications, it's always *JavaScript* that will update the DOM and therefore the page.

So usually on a normal webpage, when we click on a link, the browser will load a completely new page and then show us that new page.

But single-page applications are completely different. The page is simply updated by *JavaScript*, which means that **there will never be a complete page reload**. And that's the whole point of the single-page application. It's the entire app in just one page. So without any hard reloads.

This makes the web application feel just like a native desktop or a mobile application, which is really a fantastic user experience.

whenever the URL is changed, `react-router` and `React` itself will update the DOM by simply rendering the component that corresponds to the new URL. And then, of course, the whole cycle can be repeated as many times as necessary.

So each time the user keeps clicking on a Router link, that will change the URL and the component that's being displayed on the screen, all without reloading the page.

Now, it's quite common that some pages need to display some external data, but that's not a problem at all. Whenever that happens, a component can just load some additional data from a server, usually from some kind of web API. So while the single-page app itself runs entirely on the client, it can always communicate with a server in order to fetch some data that it needs, just like we have been doing before in other applications.

What we cannot do is to load a completely new page, because then it would no longer be a single-page app.

**<span style='color: #495fcb'> Note:** we could actually say that all React apps are in fact single-page applications, because all of them are never reloaded, so think of all the apps that we have built up until this point.

However, in a professional application, that's just not enough. So big and complex applications rely on your URLs and need the routing capabilities because only then, they can become real single-page applications.

### Using CSS Modules

if you would have to declare some **global** styling inside a *module.css* file, you can use this syntax:

```css
:global(.test){
    background-color: red;
}

.nav a:global(.active) {
  color: var(--color-brand--2);
}
```

**<span style='color: #495fcb'> Note:** this *global* function is usually mostly important when we are working with some classes that are provided from external sources.

the `.active` class is given to us by `react-router` and so then if we want to style that, we need to use `global`.

**<span style='color: #875c5c'>IMPORTANT:** otherwise if we just want to define some global classes, we wouldn't do it inside a module but just inside our global CSS file.

### Building the Pages

we will use images from the `public` folder.

When using the `assets` folder, you must directly import the files into our JavaScript code.

**<span style='color: #495fcb'> Note:** we do have **global classes**

**<span style='color: #a8c62c'> index.css**

```css
cta:link,
.cta:visited { }
```

#### global styling

**<span style='color: #a8c62c'> PageNav.jsx:** our `react-router-dom NavLink` component does in fact return an `HTML anchor element`.

![image info](./17_sc1.png)

**<span style='color: #a8c62c'> PageNav.module.css:** in the dedicated *css module*, we make reference to an `anchor` element when applying styling when it is the active tab. Remember that `NavLink` automatically adds an `active` class on the `li` element active of an `ul`.

```CSS
.nav a:global(.active) {
  color: var(--color-brand--2);
}
```

**<span style='color: #875c5c'>IMPORTANT:** Below we are using the javascript way (*ctaLink*) of writing the variable instead of css (*cta-link*), as a classname with css convention would be harder to get into our `.jsx` file. It's a convention when writing `css modules` to define variable name that way.

**<span style='color: #a8c62c'> PageNav.module.css**

```css
a.ctaLink:link,
a.ctaLink:visited { }
```

### Nested Routes and Index Route

*Nested routes* help to implement a behavior  where we show a part of the *UI* based on some part of the *URL*.

A nested route influences what component is rendered inside this bigger component, for example.

you use the `<Outlet />` element inside of a component to display the component/jsx code defined of a nested route. it's similar to the `{children}`, with the difference that we are not using `elements`, but `routes`.

to show a default content in an `Outlet`, you can use an **index route**. And so an index route is basically the default child route that is going to be matched if none of these other routes here matches.

**<span style='color: #495fcb'> Note:** we can also define our root path `/` by using this `index` property in a route.

**<span style='color: #a8c62c'> App.jsx**

```javascript
{/* <Route path='/' element={<Homepage />} /> */}
<Route index element={<Homepage />} />
```

**<span style='color: #875c5c'>IMPORTANT:** It is actually very similar to something like a tabs component, we built before, but implemented in a very different way.

So before, we would've implemented that using the `useState` hook to manage the currently active tab.

But here with `react-router-dom`, we do the same thing, but in a very different way. So instead of using the `useState` hook to manage state, **we basically allow React Router and the url to store that state of the active tab**.

**<span style='color: #495fcb'> Note:** what we learnt before is not lost, as we still build components like accordions or tabbed components using the useState hook all the time. But from now on, the overall navigation of the application is in the real world always managed by something like React Router. And so that includes a small sub navigation like this one.

### Implementing the Cities List

we again use `npm i json-server`, note that that `--delay` cli option is deprecated.

**<span style='color: #a8c62c'> package.json**

```json
"scripts": {
    "server": "json-server --watch data/cities.json --port 8001"
  },
```

**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/json-server]

Notable differences with v0.17

- id is always a string and will be generated for you if missing
- use _per_page with _page instead of *limitfor* pagination
- use Chrome's Network tab > throttling to delay requests instead of --delay CLI option

### Storing State in the Url

The URL is an easy way to store state in a global place that is easily accessible to all components in the app.

So before, if we wanted state to be accessible everywhere, we would have to store it in a parent component and then pass it all the way down to all child components using props.

But if we place state in the URL, we can easily just read the value from there, wherever the component is in the component tree. So basically we can move some state management from React to the URL.

Also, placing state in the URL is, in many situations, a good way to pass data from one page into the next page without having to store that data in some temporary place inside the app.

**<span style='color: #875c5c'>IMPORTANT:**

- `params`, which stands for parameters are very useful to pass data to the next page
- `query string` is useful to store some global state that should be accessible everywhere

### Dynamic Routes with URL Parameters

**<span style='color: #875c5c'>IMPORTANT:** Below we only append to the current url of the page we are the `id`, that's why we don't use `/`.

`<Link to={`${id}`} className={styles.cityItem}>`

### Reading and Setting a Query string

**<span style='color: #a8c62c'> components/Map.jsx**

```javascript
import { useSearchParams } from 'react-router-dom';

<button
  onClick={() => setSearchParams({ lat: '40.7128', lng: '-74.0060' })}
>
  Change Pos. Test
</button>
```

**<span style='color: #875c5c'>IMPORTANT:** Notice how actually this `state` has updated everywhere, and so that is really powerful. So it changed not only of course in the URL, but also everywhere in the application where this data is read.

we can demonstrate one of the great advantages of having all the state stored in the URL that we talked about earlier, which is that now we can just take this URL and then for example, share it with someone.

And so with this, we made the application more shareable and also *bookmarkable*.

### Programmatic Navigation with useNavigate

we use programmatic navigation, in our case when the user will click in the map container, it will activate the form component in the left component. Note that this could not be achieved with `<Link/>`.

**<span style='color: #a8c62c'> Map.jsx**

`<div className={styles.mapContainer} onClick={() => navigate('form')}>`: this is programmatic navigation where we basically in an **imperative way** navigate to this URL.

**<span style='color: #a8c62c'> AppNav.jsx**

`<NavLink to='cities'>Cities</NavLink>`: we also navigate to another page, but in a declarative way because we just declare this component in our JSX and that will then do the work.

**<span style='color: #495fcb'> Note:** We have to use the imperative way in some situations:

- after clicking event
- after submitting a form
- navigate back cannot be done with some links

**<span style='color: #a8c62c'> components/Button.jsx**

To pass dynamically to our generic `Button` component some pre-defined styles, we have to use the syntax: `styles[type]`.

```javascript
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'back', 'position']),
};
```

*<span style='color: #a8c62c'> components/Form.jsx**

as we are inside of a *HTML form*, we have first to prevent default

```javascript
<Button
  type='back'
  onClick={(e) => {
    e.preventDefault();
    navigate(-1);
  }}
>
  &larr; Back
</Button>
```

### Programmatic Navigation with <Navigate/>

since we have React hook `useNavigate`, the `<Navigate />` component is not so much used anymore, but there is still one very important use case for it, which is **inside nested routes**.

For example if we want to navigate immediately to the `<CityList />` component after clicking *Start tracking now* button of the root page.

**<span style='color: #a8c62c'> App.jsx**

```javascript
  <Route
    index
    element={<Navigate to='cities' replace/>}
    // element={<CityList cities={cities} isLoading={isLoading} />}
  />
<Route
  path='cities'
  element={<CityList cities={cities} isLoading={isLoading} />}
/>
```

**<span style='color: #495fcb'> Note:** this `<Navigate />` can be thought as a **redirect** (from index to cities here)

However the back button of our browser would not work anymore, for that it's important to add the `replace` option, which will then replace the current element in the history stack.

## Advanced State Management: the Context API

### Creating and Providing a Context

`createContext()` returns a `Component` so it's convention to start the name of that variable with a capital letter.

**<span style='color: #495fcb'> Note:** usually, we create one context per state domain.

in our case So, basically, we would have one context only for the posts and then another context only for the search data.

### Consuming the Context

the context API allows to make component more reusable and more standalone, before if you wanted to use a component that was just passing props to a child component, when reusing it you would also to replicate that prop-drilling.

You can place a component anywhere even if its parent doesn't receive the previously requested props.

### Advanced Pattern: A Custom Provider and Hook

**<span style='color: #495fcb'> Note:** Below would return an `undefined` object, because we try to use the context here inside of `App` but the context only provides the value to all its children components. So only to all of these that are below the provider.

![image info](./18_sc1.png)

```javascript
function App(){
    const ctx = usePosts();
}
```

That's why it's a good practice to `throw new Error()` for such case:

**<span style='color: #a8c62c'> context/usePosts.jsx**

```javascript
export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
}
```

### Thinking In React: Advanced State Management

#### State Placement Options

![image info](./18_sc2.png)

**<span style='color: #495fcb'> Note:**

- the URL is yet another excellent place where we can store global state that we want to make easily shareable and bookmarkable or that we just want to pass between pages.
- sometimes we need to store some data inside the user's browser. And in that case, we can use local storage, session storage. Now just like refs, this is state that won't actually re-render any components but it's still technically application state

#### State Management Tool Options

![image info](./18_sc3.png)

### Back to "WorldWise": Creating a CitiesContext

As you start using all these libraries then the *component tree* isn't as clean as we were used to from before.

### Finishing the City View

**<span style='color: #495fcb'> Note:** you might be wondering why we actually need to do that if we could simply get this object out of the array that we already have. And that's actually true in this small application. So technically we wouldn't have to create a new HTTP request and fetch this data from the server again because we do actually already have it in the cities array.

However, in real world web applications, it's quite common that the single objects have a lot more data than the entire collection. So basically the array returned from a *GET All* request  would only have a small amount of data in each object while then the objects that we get individually from the API have really all the data.

After we visited one of these cities when we then go back, it marks the last visited city with a green border, which means that this `CityItem` component also uses this same piece of state `currentCity` just like the `City.jsx` component.

And therefore it is a good idea to actually place the **global state** `const [currentCity, setCurrentCity] = useState({})` inside our **context**, rather than the `City` component.

**<span style='color: #a8c62c'> City.jsx**

```javascript
function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;
// ....
}
```

So when we click here on this link displayed in `CityList` component, the URL will change.

So we get a new `id` which we then read here into the `City` component. So then we have this `id` and we use it to call the `getCity` function **as the component mounts**. So immediately after mounting, we start calling this function which is coming from our **context**.

The `getCity` function, which will then immediately start fetching the city data for that `id`. Then when that arrives it gets stored here into the `setCurrentCity` state. This state variable `currentCity`, which we also paste into the context value. And so then immediately here
this `City` component receives that value as it updates, and then gets destructured and displayed in the UI.

### Including a Map With the Leaflet Library

**<span style='color: #a3842c'>Links:**

- [https://react-leaflet.js.org/]
- [https://leafletjs.com/examples/quick-start/]
- [https://react-leaflet.js.org/docs/start-installation/]
- [https://react-leaflet.js.org/docs/start-setup/]

**<span style='color: #a8c62c'> index.css**

```css
@import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
```

### Displaying City Markers on Map

**<span style='color: #a8c62c'> Map.module.css**

To style the marker as we want, we use the default classnames provided by `react-leaflet` and then use our `"global(.classname)` identifier so that they can be matched and overridden.

```css
:global(.leaflet-popup .leaflet-popup-content-wrapper) {
  background-color: var(--color-dark--1);
  color: var(--color-light--2);
  border-radius: 5px;
  padding-right: 0.6rem;
}

:global(.leaflet-popup .leaflet-popup-content) {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

:global(.leaflet-popup .leaflet-popup-content span:first-child) {
  font-size: 2.5rem;
  line-height: 1;
}

:global(.leaflet-popup .leaflet-popup-tip) {
  background-color: var(--color-dark--1);
}

:global(.leaflet-popup-content-wrapper) {
  border-left: 5px solid var(--color-brand--2);
}

```

### Interacting with the Map

**<span style='color: #a8c62c'> Map.jsx**

Below, `useEffect()` is used as a **synchronization mechanism**, which is one of its common use.

```javascript
 useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
```

**<span style='color: #495fcb'> Note:** `e` is of course not the native event object that is created by the DOM or by React, but instead this is really coming from the **Leaflet** library (left click event).

```javascript
function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
```

### Setting Map Position With Geolocation

To synchronize the `mapPosition` state variable:

- use another `useEffect()`, just as we did when a city of the `<CityList>` is clicked
- we could pass a setter function to our custom hook `useGeolocation.js`

**<span style='color: #495fcb'> Note:** because in React there's right now a push to write as little effects as possible, the first solution could be seen preferable.

**<span style='color: #a8c62c'> Map.jsx**

```javascript
useEffect(
  function () {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  },
  [geolocationPosition]
);
```

at the beginning, the `geolocationPosition` will by default still be null, and so then the `setMapPosition` code won't run.

But then, as we click our *USE YOUR LOCATION* button, the geolocation will get retrieved, and then of course the `geolocationPosition` state will update. And so then this effect will run, which will then in turn set the `mapPosition`, which will re-render the whole component once more, and then finally the map can move to that new position.

So basically this effect here introduces another render, which is one of the reasons why we should avoid having too many effects.

### Creating a New City

**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/react-datepicker]

**<span style='color: #875c5c'>IMPORTANT:** using the terminology we're gonna keep the UI state in sync with remote state.

Now, this is usually not the way to go but in a small application like this one it is perfectly fine of doing this. And then the next big application we will then learn how to better do this, using `React Query`, which will make it so that whenever we add something new to the remote state that data will then automatically get re-fetched into our application.

### Context + useReducer

Inside our **reducer** function, remember that we should put as many logic as possible so that we have this central place that handles all the business logic and basically all the state transitions.

Now the problem in this case here is that **reducers need to be pure functions**, which means that we cannot do these API requests inside the reducer function. So all we can do is to still make these fetch requests in a separate function in the useEffect, and then after the data has already been received then we can dispatch actions to the reducer.

So what this means is that when asynchronous data and asynchronous code is involved, then we don't get that nice benefit where we can simply pass the dispatch function into the context value.

**<span style='color: #a8c62c'> contexts/CitiesProvider-context.jsx**

**<span style='color: #875c5c'>IMPORTANT:** Basically what we do here is to keep the remote state in sync with our UI state:

Adding the new new city to our API:

```javascript
const res = await fetch(`${BASE_URL}/cities`, {
  method: 'POST',
  body: JSON.stringify(newCity),
  headers: {
    'Content-Type': 'application/json',
  },
});
const data = await res.json();
```

And below adding it to our local state:

```javascript
dispatch({ type: 'city/created', payload: data });
```

**<span style='color: #495fcb'> Note:** The power of `useReducer` is to easily change several pieces of states on a certain event, for example when adding a new city and we want to set this added city as the new `currentCity`, you can achieve that very easily inside your reducer `type: 'city/created'`, same for the deletion event.

**<span style='color: #495fcb'> Note:** `if (Number(id) === currentCity.id) return;`:  the  `id` from `City.jsx` component is coming from from the URL. And everything coming from the URL will automatically be a string. And so if you want to do any comparisons like this then you always need to convert this to a number.

And so now if we then load two times the same city in a row then it should be instantaneous. In order to load the city it of course needs to load from the API, but if we then click the same again, it doesn't do that.

### Adding Fake Authentication: Implementing Login

**<span style='color: #9e5231'>Error:** should never have a fake user in your code which contains the plain word password, because with this, everyone who inspects your code can get access to your application.

All the code that you write inside your React application will be available on the front end, so the browsers will download it. And so, any malicious attacker will be able to find this combination of email and password in your source code. And so then, they will get access to your application.

Once we are logged in, if we try to go back (browser), it will automatically redirect us to the route `app/cities`, as we are still authenticated. to avoid such behavior, you need to pass the `replace` option (it will replace the login page in the history stack )

**<span style='color: #a8c62c'> Login.jsx**

```javascript
useEffect(
  function () {
    if (isAuthenticated) navigate('/app', { replace: true });
  },
  [isAuthenticated, navigate]
);
```

### Adding Fake Authentication: Protecting a Route

We need to wrap our application inside of our `ProtectedRoute` component. There are two places where we could do that:

- the first one is here in the `AppLayout`, and wrap the entire `return()` block, as basically our entire application is rendered there.
- in the `App` component, and wrap our `element={<AppLayout />}`

```javascript
 <Route
  path='app'
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
>
```

So in case that we are going to any of the URLs in the application:

- `app/cities`
- `app/cities/:id`
- `app/countries`
- `app/form`

So in all those situations, this `app` layout component here is rendered. And then in there is where each of these components are also rendered.

And so the idea is to wrap this entire component into the protected route. And so this will then check whether the user is currently logged in or not. And if not, it will simply redirect the user back here to the homepage `/`.

**<span style='color: #9e5231'>Error:** we still get an error with null property on our `user` object in `User.jsx`

Remember how our effect is actually only executed after the component has already been rendered. nd so that is actually the key to understanding why this happens. **Our component will actually initially render the children**, which does of course include the user. And so then of course everything that the user is trying to read, from the user object does not exist. So that's why we get this error.

But in that split second, we are still rendering the `User` component.

**<span style='color: #875c5c'>IMPORTANT:** And so again, that then gives us that error because again, this effect is only executed after the render has already happened.

**<span style='color: #a8c62c'> ProtectedRoute.jsx**

```javascript
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
 
 useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
  //ERROR: return children;
}
```

### CHALLENGE #2: Refactoring "React Quiz" to Context API

In the `QuizProvider` where we pass all these different state values, **plus the dispatch function**, into the context, which is quite different to what we did earlier in the *WorldWise* application.

**<span style='color: #875c5c'>IMPORTANT:** In *WorldWise*, we didn't pass the dispatch function but really just the event handler functions. But that was because we were dealing with **asynchronous code**, which here is not the case.

And so in *ReactQuiz*, we don't need any intermediary event handler functions. We can simply dispatch this function so that we can then dispatch events in the components.

## Performance Optimization and Advanced useEffect

### The Profiler Developer Tool

So with the `Profiler`, we can basically analyze renders and re-renders. So we can see which components have rendered, see why they're rendered, and also how long each render took.

![image info](./19_sc1.png)

And so basically, once enabled this will give us one of the three reasons, of why each component has re-rendered:

- state update
- context update
- a parent re-rendering

We get a Flamegraph & Ranked graph, providing a representation of the component tree.

**Grey components** are actually the one that did not render while the application re-rendered. The more yellow the color the longer it took.

When hovering over we get the reason why a component did re-render.

You can access the list of different commits, or in other words, each of them here is one re-render.

### A Surprising Optimization Trick With children

**<span style='color: #a8c62c'> Test.jsx**

the idea here is that this simulates a very SlowComponent, and it takes 1/2 second until the *increase* button updates.

each time we click on the button, this `count` state updates, and so this entire component needs to get re-rendered. And so therefore this SlowComponent is also nre-rendered each time that we click the `increase` button even though this actually isn't really dependent on the state.

So the `SlowComponent` does not need the state at all but still it is being re-rendered simply because it is inside this `Test` component.

```javascript
export default function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

      <SlowComponent />
    </div>
  );
}
```

to solve this issue: we pass the `SlowComponent` as a `{children}`, and as this component exists already since the initial render, and is not affected by the state, it doesn't need to be re-rendered.

```javascript
function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

      {children}
    </div>
  );
}

export default function Test() {
  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
```

**<span style='color: #495fcb'> Note:** You could use any `prop` name , instead of the reserved `children` prop, that would work the same way.

That's why when using the *search posts* functionality, components like `Main` and `Posts` which are passed as `children` and not affected by any states are not re-rendered (using the *Profiler*)

### Understanding memo

#### What is Memoization

if the arguments are exactly the same as before, it means that in a pure function, the output will be the same. So the result on the first call of the function can be cached, and the function won't be executed again, and the cached result can be read.

### Understanding Memo

#### the Memo function

only use `memo` when the component is heavy (slow rendering), re-renders often and with the same props.

### Memo in practice

If we set the number of archived posts to 30k, the problem is that this will slow down the entire page.

So what happens when I type something into the search bar? notice how this created a big lag, only when the archive is shown.

![image info](./19_sc2.png)

The first render is extremely fast when i enter a key in the searchBar, 1 ms, the second box is the time it took to load the archive, but the third render is when i used again the searchBar, which took more than 350ms, just the rendering itself, so painting to the DOM took even longer than this!

**<span style='color: #875c5c'>IMPORTANT:** the `Archive` is a child component of the `App` component, which is where that state actually lives. And so if we update the state in the app component, that will then trigger a re-render in all the child components and so that includes the archive. so this `Archive` component is a perfect candidate for memorization

`const Archive = memo( function Archive({ show }) {...}`

once the component is memorized, it did not render again when the state of the search bar changed, which is because the prop that it received
was still the same as before `show={true}`. And so then this component didn't have to re-render as the parent re-rendered.

**<span style='color: #9e5231'>Error:**  if we pass an **object instead of a boolean**, we are now back to basically re-rendering this component even though it is memorized and even though it looks as though our prop hasn't changed.

### useMemo in Practice

**<span style='color: #a8c62c'> App-memo.jsx**

```javascript
const archiveOptions = useMemo(() => {
  return {
    show: false,
    // title: 'Post archive in addition to main posts',
    title: `Post archive in addition to ${posts.length} main posts`,
  };
}, [posts.length]) 
```

**<span style='color: #875c5c'>IMPORTANT:** If we didn't pass `post.length` as a dependency to `useMemo`, React is still using the **stale value of this Posts state**.

we are in the presence of stale state and of a stale closure.

So a stale closure because this function was created initially and from there on, it now remembers all the variables that are referenced inside of it as they were at the time that the function was created. So that's what a closure is, and it is a stale closure because it never run again, and so it is still remembering the old values.

### useCallback in Practice

if we use our profiler, the first time we use the night color button, it's very quick but if we expand our `Archive`, so we are back again to having our memorized component re-render even though it is memorized.

**<span style='color: #9e5231'>Error:** And so now, we have the same problem but with a function `<Archive archiveOptions={archiveOptions} onAddPost={handleAddPost} />`. the solution is to memoize the function.

```javascript
const handleAddPost = useCallback(
  (post) => setPosts((posts) => [post, ...posts]),
  []
);
```

**<span style='color: #495fcb'> Note:** Using one of these functions here, like useCallback, actually has a cost as well. React needs to run this function and needs to store the function in memory. And so, that only makes sense if we actually see some improvement here in our application.

React team is currently researching a compiler that would basically automatically memorize all the values that need memorization behind the scenes.

**<span style='color: #875c5c'>IMPORTANT:** React guarantees that the **setter functions** of the `useState` hook always have a stable identity, which means that they will not change on renders. **We can basically think of these state setter functions as being automatically memorized**.

And in fact, this is also the reason why it's completely okay to omit them from the dependency array of all these hooks, `useEffect, useCallback, useMemo`.

### Optimizing Context Re-Renders

You can either:

- pass the components as `{children}` to the `Context.Provider`
- memoize the components

And this `PostProvider` is a child element of the app component. And so therefore, when the app component re-renders then this post provider re-renders, as well and therefore, this context-provider object will be recreated. And so, if this object will be recreated it means that the context value has changed and therefore, all the components that consume that context are going to be re-rendered.

that's why if we use `setIsFakeDark`, the state of the `App` component change, hence the context gets recreated and components like `List` are re-rendered. **To avoid such behavior we can memoize with `useCallback` the value of our `PostContext.Provider`.**

#### avoiding re-render due to context changes

![image info](./19_sc3.png)

**<span style='color: #a8c62c'> PostProvider.jsx**

```javascript
const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      onAddPost: handleAddPost,
      searchQuery,
      setSearchQuery,
    };
  }, [searchQuery, searchedPosts]);

  return (
    <PostContext.Provider value={value}>{children}</PostContext.Provider>)
```

**<span style='color: #875c5c'>IMPORTANT:** as soon as you change one of these states for example, the `Post` or the `searchQuery` then all of the components that read at least one of these five values will get re-rendered.

And so, again, this is not ideal and it's the reason why in the beginning I told you that we usually create one context per state.

So we would have one `Post` context and one `searchQuery` context.

And so, in that situation, whenever we updated for example, the search Query, then all the components that consume the posts would not get re-rendered. While in this case, all of them are because it is enough for one value here to change to re-render the entire thing.

### Back to The "WorldWise" App

using the `profiler dev tools`, in order to identify some really bad performing components, it's best to come to the ranked tab.

**<span style='color: #a8c62c'> City.jsx / getCity**

So here we see that issue where *eslint* is telling us to add the *getCity* to the dependencies, but remember that this created an infinite loop of HTTP requests to our API. And indeed, immediately we get like a thousand requests (devTools / network / number of requests & from the profiler very numbers of renders in a few seconds confirm too)

**<span style='color: #495fcb'> Explanation:**

- now that we have this `getCity` function in our dependency array, the `useEffect` effect will rerun each time that it `getCity` function gets updated, or in other words, that it gets recreated.
- Now, when does this function get recreated? Well, since it lives in the context, it is created in this `CitiesProvider`
- But the problem is that this `getCity` function will update the state each time that it is executed, which will then end up in an infinite loop. When we call the `getCity` function, that function will then update the state in the `CitiesProvider` component, which will then re-render, which will then recreate the `getCity` function. And as the function gets recreated, since it is here in the dependency array, then `getCity` will get called again, which then again will update a state, which will re-render, which will cause the effect to run over.
- And the way to solve the issue is to use the `useCallback` hook

### Optimizing Bundle Size With Code Splitting

We've talked a lot about optimizing wasted renders and overall app performance.

However, probably the most important thing that we can and should optimize is the **bundle size**.

So whenever some user navigates to our application, they're basically visiting a website that is hosted on some server. Now, once the user actually navigates to the app, the server will send back a huge JavaScript file to the client that is requesting it. And this file is the bundle.

**So the bundle is simply a JavaScript file that contains the entire code of the application.** And it is called a bundle because a **tool like Vite or Webpack has bundled all our development files** into one huge bundle which contains all the application code.

This means that once the code has been downloaded, the entire React application is loaded at once, which essentially turns it into a single-page application that is running entirely on the client. So whenever the URL changes in the app, the client just renders a new React component but without loading any new files from the server because all the JavaScript code is already there in the bundle.

**<span style='color: #875c5c'>IMPORTANT:** **code splitting** basically takes the bundle and, as the name says, splits it into multiple parts. So instead of just having one huge JavaScript file, we will have multiple smaller files which can then be downloaded over time as they become necessary for the application. **And this process of loading code sequentially is called lazy loading**.

this `lazy loading` feature has nothing to do with *React Router*. So any component can be lazy loaded.

`const Homepage = lazy(() => import('./pages/Homepage'));`

#### Suspense

Suspense is a **concurrent feature** that is part of modern React, and that allows certain components to suspend, which basically means that it allows them to wait for something to happen.

in our case, basically these lazy components are gonna be suspended while they're loading. And so we can then use the built-in `Suspense` component to show a fallback, which is gonna be that loading indicator

#### Bundle without lazy loading

![image info](./19_sc4.png)

#### Bundle WITH lazy loading

![image info](./19_sc5.png)

### Summary

really nice feature powered by:

- the bundler, so Vite or Webpack
- and the lazy function provided by React
- plus the import function provided by JavaScript
- and then also this Suspense component

#### Bug to import from Public folder

**<span style='color: #9e5231'>Error:** you have to prefix with `/`

```javascript
const FAKE_USER = {
  name: 'Eric',
  // avatar: 'https://i.pravatar.cc/100?u=zz',
  avatar: '/ecr.svg',
};
```

#### Bug with Suspense fallback - breaking change

From reading [Bug] [https://github.com/remix-run/react-router/issues/10568]: Suspense around router not render fallback since v6.12.0 (breaking-change) · Issue #10568 · remix-run/react-router, it looks like this was an intended change by the developers.  Following some guidance in the discussion, I was able to get something to work.  It requires adding a top-level route that directs to a component which wraps an Outlet with the Suspense.  In addition, this component uses the useLocation() hook to provide a key to the Suspense so that a new instance is created.

### CHALLENGE #1: Fix Performance Issues in "Workout Timer"

once we have memoized our 2 components, `ToggleSounds` doesn't re-render anymore as its props are either primitives, and a state setter function for which React guarantees such functions won't change between renders.

for `Calculator`, one of the prop is an array, essentially a JavaScript object, which then gets recreated on each render. we need to use `useMemo()` hook and pass the reactive value `partOfDay` used inside the array as a dependency.

also the function `formatTime` that is inside the component `App` doesn't actually use any reactive value. And so there's no need to recreate this function on every render. So we can move outside of the component.

### Setting State Based on Other State Updates

We shouldn't use the `useEffect` hook to keep state variables in sync with all these other state variables. However this can be accepted when many state variables are involved, and would be impractical to use all state setters functions inside of an event.

#### Problem with using useEffect to update states

when changing any of our inputs, state variables (sets, speed, break), this trigger a render, but which then also trigger the useEffect hook, which only runs after the render has already happened, and so as we set the state inside of useEffect, we get a second render.

This is something to keep in mind when using useEffect for that reason,But when you have so many state variables that influence the value of another state, then you can do this.

### Using Helper Functions In Effects

So each time that we click here on this button, it will set the duration and it will play the sound. Now updating the state will of course re-render the component, which will recreate this function here. So React will see a brand new function. And since this function is part of the dependency array of this effect, it will then run this effect as well. Also our timer doesn't update anymore.

- So the best strategy is always to move a function like this out of the component. However, that doesn't work because this function is of course a reactive value that depends on the prop `allowSound` and so we cannot move it outside.
- Then the other strategy would be to take the function and move it into the useEffect. But then the problem with that would be that we could no longer use it in our `handleInc/dec` functions
- And so then what we have to do is to memorize the function. And so then the function will not be recreated between these renders, using `useCallback`

**<span style='color: #9e5231'>Error:** this combination of `useCallback` and `useEffect` has now introduced 2 bugs, the sound is played and our time is changed when click on the sound toggler. the reason is that when click on the sound icon, , the `allowSound` state changes, and the function `playSound` gets recreated, and since this function is in the dependency array, it will run the effect again.

**<span style='color: #875c5c'>IMPORTANT:** The solution is to create a new separate effect which will be responsible for playing the sound.

### Closures in Effects

a stale closure / an outdated closure occurs when the function has captured the values from the closure of the function, but has changed since then.

## Redux and Modern Redux Toolkit (with Thunks)

### Creating a Reducer: Bank Account

`default:` case:

- with *useReducer*, `throw new Error()`
- with *Redux*, `return state;`

**<span style='color: #495fcb'> Note:** if you want to run the reducer, you can simply `import './stores/bank-store';` in the `App` component.

### Creating a Redux Store

After creating the `reducer` function, we now install `Redux`, `npm i redux`

**<span style='color: #495fcb'> Note:** `createStore` has now been deprecated, and the new modern way of writing Redux is `Redux Toolkit`.

### Working With Action Creators

**Action creators are nothing more than simply functions, that return actions**. So they are really not a Redux thing, and Redux would work perfectly fine without them, but they are a useful convention that Redux developers use.

One of the reason/advantage to use action creators is that it's a lot more reusable than always writing the object here by hand.

### Adding more state: Customer

**<span style='color: #495fcb'> Note:** `createdAt: new Date().toISOString()` would create a side-effect within the reducer, so even though most logic should be in the reducer, in that case it must stay within the action creator.

```javascript
function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
```

### Back to React! Connecting our Redux App With React

`npm i react-redux`, we then need to import from that package the Provider.

we can wrap our entire application in that `Provider`, just like we do with the React `Context` API.

### The Legacy Way of Connecting Components to Redux

**<span style='color: #a8c62c'> BalanceDisplay.jsx**

`export default connect(mapStateToProps)(BalanceDisplay);` connect() will create a new function to which `BalanceDisplay` will passed as an argument , and this will return a component.

Below function maps the props and that's the name that we will destructure into our `BalanceDisplay` function/component

```javascript
function mapStateToProps(state) {
  return { balance: state.account.balance };
}
```

### Redux Middleware and Thunks

a Redux store doesn't know anything about performing asynchronous logic like this. It only knows how to synchronously dispatch actions and update the state. Therefore, any asynchronous operations like that API call need to happen outside a reducer.

we could also fetch the data inside the component and then dispatch an action to the store with that received data? it's not an ideal solution and the reason for that is that we usually want to keep our components clean and free of data fetching and we also want our important data fetching logic encapsulated somewhere, so all in one place and not have it spread all over the application. **Therefore, fetching data inside components, like we have been doing all this time, is not ideal.**

#### Redux Middleware

in Redux, Middleware is basically a function that sits between the dispatching and the store. This means that a Middleware allows developers to run some code after dispatching an action, but before that action reaches the reducer in the store.

usually after we dispatch, the action immediately reaches the reducer and the state is updated. But with a Middleware, we can do something with the action before that action actually gets into the reducer. **therefore, this is the perfect place for our asynchronous API call, as well as other operations.**

**<span style='color: #875c5c'>IMPORTANT:** Middleware is the go-to place for side effects in the Redux cycle.

we can write Middleware functions ourselves, but usually, we just use some third party package. And in the case of asynchronous operations, the most popular Middleware in Redux is called **Redux Thunk**.

data fetching is performed in the middleware, and as soon as the data arrives, we place it into the actions payload and then we finally dispatch the action into the store.

### Making an API Call With Redux Thunks

`npm i redux-thunk`

**<span style='color: #a8c62c'> features/accounts/accountSlice.js**

```javascript
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurrency' });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: 'account/deposit', payload: converted });
  };
}
```

if the currency is <> USD, we will dispatch a function. And so when Redux sees that, it will know that that function is the thunk. And so it will then execute that function and not immediately dispatch the action to the store.

### The Redux DevTools

`npm i @redux-devtools/extension`

**<span style='color: #9e5231'>Error:** Deprecated: `npm i redux-devtools-extension`

From the [redux-toolkit](https://redux-toolkit.js.org/api/configureStore) documentation:

```javascript
/**
   * Whether to enable Redux DevTools integration. Defaults to `true`.
   *
   * Additional configuration can be done by passing Redux DevTools options
*/
devTools?: boolean | DevToolsOptions
```

**<span style='color: #a8c62c'> stores/bank-store.js**

```javascript
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
```

FireFox / Chrome DevTools  - new tab `Redux`

**<span style='color: #495fcb'> Note:** You can dispatch your own actions from the console.

![image info](./20_sc1.png)

### What is Redux Toolkit (RTK)?

Redux Toolkit allows us to write a lot less code to achieve the exact same result as before. So we say that we need a lot less boilerplate code, which is basically code that only sets things up but doesn't really do anything meaningful. And so Redux Toolkit hides all that stuff.

### Creating the Store With RTK

`npm i @redux/toolkit`

### Creating the Account Slice

**<span style='color: #495fcb'> Note:** Automatically created action creators with `redux-toolkit` only accept one single argument. And so this is basically one of the limitations of having this opinionated structure. **what we have to do is to prepare the data before it reaches the reducer.**

### Back to Thunks

**Thunks** actually automatically work out of the box. And so that's because Thunks are automatically provided in Redux Toolkit, so we don't have to install anything, and this will simply already work. So no setup required.

## React Router with Data loading

### A new way of implementing Routes

in our previous app *WorldWise* we used `BrowserRouter`, `Routes` and `Route` components with which routes were declared in a more declarative way.

With `createBrowserRouter` it is done in a more imperative way. So we're declaring the router outside of the JSX and using this JavaScript array right here.

**<span style='color: #875c5c'>IMPORTANT:** This is necessary in React Router 6.4 (or later) to use this new syntax in order to enable data ew powerful APIs like data loaders, data actions, or data features of *react-router*.

### Building the App Layout

we created this `appLayout` component which we will want to use as the parent route of every single other route that we have in our application.

we made all the other routes child routes of the `appLayout`. So they are all nested routes. And then inside the parent route, we can use the `Outlet` component to render whatever is the current nested route.

**<span style='color: #495fcb'> Note:** when a route doesn't have a path, it is technically called in *React Router* a layout route.

### Fetching Data With React Router "Loaders": Pizza Menu

When using then `loader:` property, `react-router` will actually start fetching the data at the same time as it starts rendering the correct route.

**<span style='color: #495fcb'> Note:** What we did when using `useEffect`, was always a **fetch on render approach**. We rendered the component first, and then after the component was already rendered is when we then would start to fetch the data, a so-called **data loading waterfall**.

React Router is no longer only responsible for matching component to URLs in the browser but to also provide the data that is necessary for each page.

### Handling Errors With Error Elements

it's important to notice that errors (including API requests) will bubble up to the parent route unless it is actually handled in the route itself, which is done by placing error element right on the route where the error might happen.

### Fetching Orders

`useParams` is a hook and only works inside components, not within regular *JavaScript* function, however *react-router* provides the `{params}` prop.

### Writing data with react-router actions

**<span style='color: #a8c62c'> features/order/CreateOrder.jsx**

So while the loaders that we used earlier are to read data, actions are used to write data or to mutate data.

To make this form work nicely with `react-router`, we need to replace this with a `<Form />` component that `react-router` gives us.

We could also specify the action where we could then write the path that this form should be submitted to `<Form method='POST' action='/order/new'>` but this is not going to be necessary, because by default, `react-router` will simply match the closest route.

**<span style='color: #495fcb'> Note:** in your `createBrowserRouter` function, once you have added the `action` option, whenever there will be a new form submission on the route/path `/order/new`, then action `createOrderAction` that we specified here will be called.

```javascript
{
  path: '/order/new',
  element: <CreateOrder />,
  action: createOrderAction,
},
```

This entire `<Form />` works completely without any JavaScript, without any state variables and without any onSubmit handlers. So all we have is this `<Form />` component, and then *react-router* takes care of the rest.

we didn't even have to create a loading state. So React Router will do all of this automatically without us having to do anything. And the idea behind all this is to basically allow us to go back to the basics, so to the way HTML used to work back in the day before everyone started using JavaScript for the front end. So back then, we simply created HTML forms similar to this one, and then when we submitted them, a request was sent to the server.

We only need to connect the action to a specific URL.

We can use an *hidden <Input>* to get data into the action.

Once the new order data return by our API response on the `POST createOrder` endpoint, is actually returned, we can immediately redirect the page to the `/order/:id`, showing the user all the information about that new order.

**<span style='color: #9e5231'>Error:** we cannot use the navigate function comes from the `useNavigate` hook, as we cannot call hooks inside this function. So hooks can only be called inside components. And so here we need to use another function, which is called `redirect`, another function that is provided by *react-router*,which basically will just create a new response or a new request.

What matters is that behind the scenes, all of this really works with the web API's standard request and response API's.

![image info](./22_sc1.png)

`orderAction.js`: `return redirect(`/order/${newOrder.id}`);`

a `Post` request returning the new `id` in the response can then be used to redirect `GET` request to the `/order/:id` route/path.

### Error Handling in Form Actions

in the component that is connected to this action, we can get access to whatever was returned from that action in case there was no submission.

`orderAction.js`: `const formErrors = useActionData();`

## Tailwind CSS Crash Course: Styling the App

### Setting Up Tailwind CSS

**<span style='color: #a3842c'>Link:** [https://tailwindcss.com/docs/installation/using-vite]

VSCode Extension: Tailwind CSS IntelliSense

Prettier  Plugin for Tailwind CSS (dev-dependency `-D`), that will always organize your classes in the same order in your *html, jsx* files: `npm install -D prettier prettier-plugin-tailwindcss`

**<span style='color: #a3842c'>Prettier JSX Single Quote:** [https://prettier.io/docs/options#jsx-quotes]

### Styling Text

You can apply Tailwind CSS styling to your `.jsx` files but also to the HTML elements of root html files such as `index.html`

you can apply arbitrary values to most classes when the pre-defined class are not what you need: `<Link to='/' className='tracking-[2rem]'>`

### Responsive Design

All default classes; without any prefix, are the **mobile-first classes**. So they apply only if there is no breakpoint overriding them.

for example `<div className='my-10 text-center sm:my-16'>`, the `sm:my-16` means that margin top & bottom gets applied from the `sm` value on; which is *640px* for that breakpoint.

**<span style='color: #495fcb'> Note:** You can customize your own breakpoints which aligns with CSS rule that they should match the values when your application breaks rather than pre-fixed values.

### Using Flexbox

`<div className='hidden text-sm font-semibold md:block'>Eric</div>;` will hide by default or show the user name once a certain screen size breakpoint (`md`) is reached.

### Using CSS Grid

Implementing CSS Grid will allow to easily push the overview all the way to the bottom of the screen.

### Reusing Styles With @apply

**<span style='color: #495fcb'> Note:** we should not start using `@apply` technique all over the place for all our elements because then we would simply go back to writing *CSS* in the old school way. So this should really be treated as an exception here when there are so many classes that we are using all at the same time.

**<span style='color: #875c5c'>IMPORTANT:** the actual better solution would be to reuse all of this by creating a React component.

### Configuring Tailwind: Custom Font Family

**<span style='color: #a3842c'>Tailwind Default theme variable reference:** [https://tailwindcss.com/docs/theme]

If we want to use the Google font in specific space we update the `index.css` file and in our components reuse the created font name `<header className='font-roboto'>`

**<span style='color: #a8c62c'> index.css**

```css
@theme {
  --font-roboto: 'Roboto Mono', 'monospace';
}
```

To apply it as a default font to all our components, you need to use the `--font-sans` option:

```css
@theme {
  --font-sans: 'Roboto Mono', 'monospace';
}
```

To extend Tailwind color palette:

```css
@theme {
  --color-pizza: #439ECB
}
```

## Adding Redux and Advanced React Router

### Modeling the "User" State With Redux Toolkit

Let's just use Redux in order to store that global state. Of course we could also just create a state variable right here, so inside `App.jsx` and then I guess we could somehow pass that into the components.

### Reading and Updating the User State

it is a very bad practice to connect an input field right to the Redux store.

So as we change the username here, so as we type a new input, we should really update a local state variable and not always update the Redux store.

**<span style='color: #a8c62c'> CreateOrder.jsx**

`defaultValue` allows us to set a default value at the beginning but which we can then still change, while `value` would be static.

**<span style='color: #495fcb'> Note:** this is not a controlled element but it's simply a normal HTML element which happens to have a default value, that you can still change.

```javascript
<input
  type='text'
  name='customer'
  defaultValue={username}
  required
  className='input grow'
/>
```

### Modeling the "Cart" State

**<span style='color: #875c5c'>IMPORTANT:** remember that with *Redux* we can actually mutate the state directly.

with *traditional state management*, we would do: `function handleAddItems(item) {  setItems((items) => [...items, item]);}`

### Building the Cart Overview With Redux Selectors

Redux actually recommends that we do data manipulation right inside the selector function and not out in a component.

```javascript
function CartOverview() {
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => (sum += item.quantity), 0),
  );
// ...
}
```

**<span style='color: #495fcb'> Note:** *Redux* recommends to place such functions right into the **slice**.

**<span style='color: #495fcb'> Note:** To improve performance of the selectors (inside slices), you can use the `redux reselect` library: [https://github.com/reduxjs/reselect]

### Using the Cart for New Orders

For dispatching, we need to call the `useDispatch` hook, which is only available in components and not in a regular function like this one.

So the hack to use if you need to dispatch within a **regular function .js like Redux actions**, and which we should really, really not overuse is to directly import the store object and then dispatch directly on that store.

**<span style='color: #a8c62c'> features/order/orderAction.js**

```javascript
export async function action({ request }) {
// ...

  // Do NOT overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
```

### Redux Thunks With createAsyncThunk

**<span style='color: #a8c62c'> userSlice.jsx**

`async function fetchAddress() {}` is an *async* function which means that we cannot just call this function directly inside a *Redux reducer* because remember Redux is by nature completely synchronous, and so that's why we now need to use `Thunks`.

**<span style='color: #875c5c'>IMPORTANT:** a Thunk is a middleware that sits between the dispatching and the reducer itself.

**<span style='color: #495fcb'> Note:** we name our async thunk function `export const fetchAddress = createAsyncThunk(){}` and not something like `getAddress` which are reserved for selectors.

in this example, we used the Redux Toolkit way of creating a Thunk function with `createAsyncThunk`. We passed in:

- the action type name `'user/fetchAddress'`, which we will never manually use, but still Redux needs this internally, as a first argument
- and as a second argument, we pass in the actual Thunk function, the code that we want to execute as soon as this action here will be dispatched

`createAsyncThunk` will basically produce three additional action types:

- one for the ending promise state
- one for the fulfilled state
- and one for the rejected state

And so now we need to handle these cases separately back in our reducers.

it's done using the `extraReducers` option, where you define your case, like `fulfilled`, and then pass your reducer `(state, action) => {...}`

```javascript
.addCase(fetchAddress.fulfilled, (state, action) => {
  state.position = action.payload.position;
  state.address = action.payload.address;
  state.status = 'idle';
})
```

**<span style='color: #a8c62c'> user/fetchAddress/pending**

![image info](./24_sc1.png)

**<span style='color: #a8c62c'> user/fetchAddress/fulfilled**

![image info](./24_sc2.png)

### Integrating Geolocation

when nesting our *get position* button inside of the form, it would automatically submit the form with the `onClick` event, we need to prevent that default behavior.

### Fetching Data Without Navigation: useFetcher

`useFetcher` allows you to fetch data without going to the page where the data is actually coming from, in this example `loader()` from `menuLoader.js` is called within `Order.jsx`.

### Updating Data Without Navigation

Redux will connect our `updateOrderAction` to the child component of `Order`, which is `UpdateOrder.jsx`.

```javascript
{
  path: '/order/:orderId',
  element: <Order />,
  loader: orderLoader,
  errorElement: <Error />,
  action: updateOrderAction,
},
```

## Setting up our biggest project + Styled Components

### Introduction to Styled Components

```javascript
function App() {
  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
  `;

  return <H1>Hello</H1>;
}
```

this CSS is of course only scoped to this exact component `App.jsx`, which eliminates all the problems of global CSS that we talked about earlier such as name collisions between class names, or for example another developer changing the class without some other developer knowing about that which would create all sorts of problems.

```javascript
const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--color-primary);
    color: var(--color-white);
  `;

  return (
    <>
      <Button onClick={() => console.log('clicked')}>Check in</Button>
    </>
  );
```

So without us having to do any additional work, where before if we were to create our own button component then we would have to manually accept the `onClick` prop and then pass it to the regular HTML element, but with *styled Components*, we don't need to do that.

### Global Styles With Styled Components

`GlobalStyles` component doesn't accept any children. So it's a self-closing component, and it needs to be, then, a sibling of all the other components.

**<span style='color: #495fcb'> Note:** You can also created `Themes` with styled components.

**<span style='color: #a3842c'>Link:** [https://styled-components.com/docs/advanced]

### Styled Component Props and the "css" Function

As Styled Components are written using template literals, you can leverage a lot of JavaScript tools such as ternaries for example

to apply specific logic outside of a component, you can import `css` from styled components:

```javascript
const test = css`
  text-align: center;
  ${10 > 5 && "background-color: yellow"}
`;

const Heading = styled.h1`${test}`;
```

**<span style='color: #875c5c'>IMPORTANT:** we can pass a special prop to our components to tell them as which HTML element they should be rendered, and that special prop is called the `as` prop.

Any prop can be used, but if you want your markup to be semantically correct you have to use the `as` prop.

### Building More Reusable Styled Components

**<span style='color: #a8c62c'> ui/Row.jsx**

With React, we can define default props this below which is useful with styled components where we can use the usual `function Foo({prop = 'test'}){}`:

**<span style='color: #9e5231'>Error:**  `defaultProps` is deprecated and `attrs` should be used instead.

### Building the Sidebar and Main Navigation

To be able to style a third-party library component such as `NavLink` of `react-router-dom`, we use the following syntax provided by `styled-components`:

```javascript
const StyledNavLink = styled(NavLink)`...`
```

**<span style='color: #a3842c'>Third Party Library for React Icons:** [https://react-icons.github.io/react-icons/]

## Supabase Crash Course: Building a Back-end

### Creating a new database

**<span style='color: #a3842c'>Link:** [https://supabase.com/dashboard/project/yljpcegklwdkugjneisu]

### Adding Security Policies (RLS)

in the left Sidebar `API Docs`: Supabase automatically creates an entire API documentation for all of our tables

You can choose your tables and get a Javascript snippet or bash `curl` command to read all rows for example, **after changing the API key to Anon/public**, instead of hidden.

**<span style='color: #495fcb'> Note:** You would get an empty array because of RLS, *Role Level Security*.

#### RLS policies

So if it wasn't for the role level security or RLS policies then whoever had this key here could really, for example, delete our database or edit whatever they wanted. So of course, we don't want that to happen. We only want certain operations to be allowed, and so that's what we can set these RLS policies for.

You set them under `Authentication/Policies`

**<span style='color: #495fcb'> Note:** And by the way, if you're wondering why we didn't create that users table for authentication, it's because we will do that separately. So the Supabase authentication feature doesn't require us to manually create a table, but instead, Supabase will do that automatically.

### Connecting Supabase With Our React App

```bash
npm i @supabase/supabase-js  
```

**<span style='color: #875c5c'>IMPORTANT:** You might be wondering that if we are exposing our supabase key on the client, that then some malicious user might be able to hack our database. And the answer Would actually be true if we didn't activate row level security. But since we did anyone who has this key can only do whatever we allowed in the row level security policies.

So even though we said earlier that we were not going to do side effects inside pages, let's just do this as an experiment and use our `apiCabins` inside of `Cabins.jsx`

### Setting Up Storage Buckets

`Storage` menu in the left sidebar.

## React Query: Managing Remote State

### What is React Query?

we need a library with all these features because remote state is fundamentally different from UI state. It's asynchronous and usually shared by many users of the app, which makes it so that applications running in different browsers can very easily get out of sync with the remote data that is stored on a server.

remote state has many special needs, and so that's the reason why we use something like *React Query*.

### Setting-up React Query

**<span style='color: #a3842c'>Tanstack/react-query documentation:** [https://tanstack.com/query/latest]

`npm i @tanstack/react-query`

`staleTime` is basically the amount of time that the data in the cache will stay fresh so that it will stay valid until it is refetched again.

**<span style='color: #495fcb'> Note:** So just like `Redux`, `React Query` also has some excellent Dev Tools.

### Make sure to use React Query v4

If you want to use React Query **v5**, there are only two small things to change in the project:

- `isLoading` is now called `isPending`
- The `cacheTime` option is now called `gcTime`

### Fetching Cabin Data

**<span style='color: #a8c62c'> features/cabins/CabinTable.jsx**

Below will actually function as a table, but we don't implement it using the table HTML elements, but instead using `Table / divs` and `TableHeader / header`.

But by specifying the role, we then make sure that the browser knows that this actually should be a table and a row.

```javascript
<Table role='table'>
  <TableHeader role='row'>
```

**<span style='color: #495fcb'> Note:** we also use in our `utils/helpers` file a third-party library: `npm i data-fns`

**<span style='color: #875c5c'>IMPORTANT:** if we changed a data table, say `discount` to 200, if the data is still `fresh`, it will not immediately re-fetch the page. if on the opposite, the data is marked as `stale`, if we come back to the tab, it will automatically re-fetch/refresh the data.

And the time that it takes until the data becomes old, so until it becomes stale, is exactly that stale time that we defined in `const queryClient = new QueryClient({..})`.

### Mutations: Deleting a Cabin

**<span style='color: #495fcb'> Note:** once we've added `deleteCabin` to our `apiCabins.js` file, we also need to update our `RLS` in `Supabase`

**<span style='color: #875c5c'>IMPORTANT:** Make sure to pass a SQL condition that enables to all; such as `true`

![image info](./27_sc1.png)

![image info](./27_sc2.png)

to simulate an error , we update in `supabase.js` the `supabaseUrl` and indeed we get the exact error message defined inside our `apiCabins` file.

![image info](./27_sc3.png)

**<span style='color: #a8c62c'> features/cabins/CabinRow.jsx**

```javascript
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: async (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries('cabins');
    },
    onError: (err) => console.error(err.message),
  });
```

`npm i react-hot-toast`

**<span style='color: #a3842c'>React Hot Toast:** <https://react-hot-toast.com/>

### Introducing Another Library: React Hook Form

When using `npm i react-hook-form`, you don't have state variable attached to any of the input elements; i.e. *controlled elements*,  because now we will handle everything about this form using this library.

**<span style='color: #495fcb'> Note:** once we've added `<Input type="text" id="name" {...register("name")} />` to our `input` elements within `CreateCabinForm`, new props such as `onChange` are automatically added.

![image info](./1_sc1.png)

### Creating a New Cabin

`data: cabins` state within `CabinTable` behind the scenes is going to be just *React state* in the end.

And so whenever some new data is fetched by React Query, whenever that state updates, then the component will re-render.

### Abstracting React Query Into Custom Hooks

Abstracting  all the React query logic that we have written so far into a few custom hooks which is the best practice in a large application

**<span style='color: #495fcb'> Note:** We placed our `useDeleteCabin` custom hook inside the `features/cabin` folder, as the `hook` folder is really only for hooks that are reusable across multiple features, but this one here really is related to the cabin's feature only.

![image info](./27_sc5.png)

We can call the `reset()` method of the `useForm` hook provided by `react-form` inside a  `.jxs` component, but not in a `.js` custom hook. To tackle this situation well thought by `react-query`.

the `onSuccess` handler function; the result of `useMutation()` hook can be placed:

- not only right inside the `useMutation()` itself, now living within the `useCreateCabin` custom hook
- but also right in the function where the mutation actually happens `onSubmit()` function of `CreateCabinForm.jsx` component

so all we need to do is to pass in an object of options and so then there we can do `onSuccess` and then here we can very simply call the `reset` function.

**<span style='color: #a8c62c'> features/cabins/CreateCabinForm.jsx**

```javascript
if (isEditSession)
  editCabin({ newCabinData: { ...data, image }, id: editId });
else
  createCabin(
    { ...data, image: image },
    {
      onSuccess: (data) => {
        console.log(data);
        reset();
      },
    }
  );
```

Creating our custom hook makes very re-usable if we need data or mutation somewhere else in our application. we just need to copy `const { cabins, isLoading } = useCabins();` to get the cabins data as an example.

A common example is to load data on the `homepage` and then our data will get into the cache and so then whenever we come to the a page next that uses the same data, they will already be cached. so that's one of the huge, maybe even the biggest advantage of *react-query*.

## Advanced React Patterns

### The Render Props pattern

**<span style='color: #a8c62c'> App.jsx**

```javascript
export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className='col-2'>
        <List
          title='Products'
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
      </div>
    </div>
  );
}
```

```javascript
function List({ title, items, render }) {
// ...
    <ul className='list'>
      
      {/* {displayItems.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))} */}
      {displayItems.map(render)}
    </ul>
}
```

**<span style='color: #875c5c'>IMPORTANT:** we basically inverted the control of how it should render. So this is what we call **inversion of control** and it's an important principle in software development.

This `<List>` now no longer knows actually what it is rendering. It has no idea what will happen here inside this map function for each of the display items. All that it knows is that it received a function `render`, and that it will call that function for each items in the array. That's it.

And so now that this component doesn't know anymore what it is actually rendering, and it doesn't even care about what it is rendering, well, it then makes that very easy to reuse the component for other render props.

**<span style='color: #495fcb'> Note:** the `render` prop used to be really the main way of sharing (indistinct) logic across multiple components. So that was before we had React hooks, but now that we do have them, the render props is not that used anymore except for situations like this one. **Custom hooks are now usually the way to go when we want to share logic.**

### A Look at Higher-Order Components (HOC)

Higher Order Component is simply a component that takes in another component and then returns a new component that is better, so an enhanced version of the initial component.

### The Compound Component Pattern

We use `useContext/createContext` to implement the compound component pattern.

we need to place the children `Label, Increase, Decrease` on the counter component. And this is possible because this is simply a function. in JavaScript, we can add properties almost to everything. And so that includes functions.

### Building a Modal Window Using a React Portal

**<span style='color: #495fcb'> Note:** Pages have to be as simple as possible. So we don't want them to have any state or any effects.

If we would re-use our `createCabinForm` component in some place where it isn't contained in a modal, then it's not going to receive the `onCloseModal`, so we need to call this function conditionally, as it might not exist. To do that, **we create a callback, in the `onClick` event and call that function with the optional chaining operator.**

`<Button variation='secondary' type='reset' onClick={() => onCloseModal?.()}>`

So a React portal is a feature that essentially allows us to render an element outside of the parent component's DOM structure while still keeping the element in the original position of the component tree. So in other words, with a portal we can basically render a component in any place that we want inside the DOM tree but still leave the component at the same place in the React component tree.

And so then things like props keep working normally. And so this is great and generally used for all elements that we want to stay on top of other elements. So things like modal windows, tool tips, menus and so on.

if you choose `document.body` with `createPortal()`, the modal will become a direct child element of the *body element*. And the modal now  will leave completely outside of the DOM structure of the application which leaves inside of `root`. However `Modal` still has the same place in the React Component Tree, so we can pass the same props that we want.

But now you might be wondering, this worked really great already in the beginning with just regular CSS positioning, so without the portal. And so why do we even need to use this portal? Well, the main reason why a portal becomes necessary is in order to avoid conflicts with the CSS property overflow set to hidden.

So many times we build a component like a modal and it works just fine, but then some other developer will reuse it somewhere else and that somewhere else might be a place where the modal will get cut off by a overflow hidden set on the parent.

So this is basically all about reusability and making sure that the component will never be cut off by an overflow property set to hidden on some parent element. And to avoid such situation we simply render the modal completely outside of the rest of the DOM (on top of the DOM tree).

### Converting the Modal to a Compound Component

this modal that we have built is really not ideal when it comes to the state management and to the way in which we actually render this modal. So remember how we render the modal right here based on this `isOpenModal` state.

Now the problem with this is that we really do not want the component who uses the modal to be responsible for creating this piece of state and to keep track of whether the modal is open or not. So again, it shouldn't be the task of the AddCabin component here to track whether right now the modal should be displayed or not.

So instead, the modal component itself should actually know whether it is currently open or not, and so it should keep this state internally. So it should track this basically encapsulated inside the component.

**<span style='color: #a3842c'>React cloneElement:** [https://react.dev/reference/react/cloneElement]

![image info](./28_sc1.png)

Our 2 `Windows` are actually rendered in the React Component Tree, but they are not rendering anything. So they only start rendering something when this `openName` state equals the name of the window.

### Declaring a click outside the Modal

**<span style='color: #a8c62c'> hooks/useOutsideClick.jsx**

```javascript
if (ref.current && !ref.current.contains(e.target)) {
    handler();
}
```

Our Modal would automatically close as soon as we click on the *Add new cabin*, because of the way events work in JavaScript.

we have to listen and so the way that we fix this is to **not** listen for these events on the bubbling phase, but on the capturing phase, so basically, as the event moves down the DOM tree and not up the DOM tree,

`document.addEventListener("click", handleClick, listenCapturing);`

### Confirming Cabin Deletions

**<span style='color: #a8c62c'> ui/ConfirmDelete.jsx**

```javascript
<Button
  variation='secondary'
  disabled={disabled}
  onClick={() => onCloseModal?.()}
>
  Cancel
</Button>
```

In `CreateCabinForm` component, we had to pass `onCloseModal` to the `onSuccess` event of `@tanstack/react-query` to make sure that the modal closes after inserting a new cabin.

after deletion the modal window closes itself, which makes sense because after we delete the cabin, the row does no longer exist. And so, therefore, the modal component inside the row also no longer exists.

## Implementing more features: authentication, dark mode

### Client-Side Filtering: Filtering Cabins

Now we will do this in practice by storing the value by which the table should be filtered in the URL again. Because this way the URL is gonna be easily shareable and bookmarkable. And since we can read that state from everywhere in the app, the filter component doesn't have to be close to the cabin table. So it can really be anywhere we want in the component tree.

### Client-side Sorting: Sorting Cabins

By default `sort()` method sorts in an ascending way by default, so we apply a modifier conditionally to change the sort order.

```javascript
const [field, direction] = sortBy.split('-');
const modifier = direction === 'asc' ? 1 : -1;

const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
```

### Building the Bookings Table

when fetching data from *supabase* with foreign key, you need to reference the foreign table and fields you need if you don't want to retrieve only the ids but some data themselves:

**<span style='color: #a8c62c'> services/apiBookings.js**

```javascript
export async function getBookings() {
  let query = supabase
    .from('bookings')
    .select('*, cabins(name), guests(fullName, email)');
// ...
}
```

![image info](./29_sc1.png)

### API-Side Filtering Bookings

**<span style='color: #a8c62c'> features/bookings/useBookings.jsx**

`queryKey: ['bookings', filter],` by passing a dynamic key of the `react-query` cached query, the data will re-fetched each time that key change, just like the dependency array of `useEffect()`. this `filter` is then passed to our function call of the API service `apiBookings`.

```javascript
const [searchParams] = useSearchParams();
  // FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({filter}),
  });
```

**<span style='color: #495fcb'> Note:** To pass more complex query filters, you would need to pass an array to loop and build a more complex query within the `apiBookings`.

### API-Side Pagination: Paginating Bookings

*Supabase* can provide you directly the count of data, within the `select` statement, when fetching data from a `get`request. This is more elegant than using `length` of an the data array.

**<span style='color: #a8c62c'> services/apiBookings.js**

```javascript
let query = supabase
  .from('bookings')
  .select(
    'id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)',
    { count: 'exact' }
);

// ...
const { data, error, count } = await query;
return {data, count};
```

**<span style='color: #a8c62c'> features/bookings/useBookings.js**

you of course need then to destructure the data differently in your `hook`.

```javascript
 const {
    isLoading,
    data: { data: bookings, count } = {}, //IMPORTANT
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, error, bookings, count };
```

**<span style='color: #495fcb'> Note:** `query = query.range(from, to);` Supabase is 0 based !

### Prefetching With React Query

Prefetching is all about fetching some data that we know might become necessary before we actually need that data to render it on the user interface. And in the context of pagination, usually that means that we fetch the next page before it is actually displayed.

The user will never see any loading spinner, meaning that this looks just as if the data would actually be paginated on the front end. While in reality we know that this data is indeed actually fetched from the server. But since it is prefetched we really do not notice it.

**<span style='color: #495fcb'> Note:** As an alternative to prefetching and having pagination in the first place, would be to use infinite queries for infinite scroll with `react-query`. So React Query also has that feature built in.

### Building the single Booking page

**<span style='color: #875c5c'>IMPORTANT:** remember the rule that we set for ourselves in the beginning, which is that **a page should not fetch data and also not have any other side effects**.

this is not a hard rule in React or in front end development, but it's a rule that I've seen many people use, and I also use it myself because this makes the `pages` folder a lot cleaner and then leaves much of the development work in the `features` folder.

we can just implement a page, close the folder, and completely forget about it because all the things that are related to bookings will live here in the `features` folder.

remember that by default, React Query will try to fetch data three times in case that it fails in the beginning, but sometimes that might not make so much sense.

**<span style='color: #a8c62c'> features/useBooking.js**

```javascript
useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
```

### Checking in a Booking

**<span style='color: #a8c62c'> features/useCheckin.js**

The mutation function has an `onSuccess` callback that receives the data returned by the `updateBooking` function of `services/apiBooking`, we can use it then inside the `onSuccess` callback:

```javascript
const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error while checking in"),
  });
```

**<span style='color: #495fcb'> Note:** as alternative to invalidate queries by passing the *query key*, we can invalidate all *active queries* of the page: `queryClient.invalidateQueries({ active: true });`

### Deleting a Booking

**<span style='color: #495fcb'> Note:** We can also add `onSuccess`, or `onError` handlers, not only into the on *mutation hook* but only right into the individual *mutate functions*. we do not need to specify these handlers for all of the mutations, but we can also do it for individual mutations.

This is very useful if we want to have a different behavior in each mutation as in `BookingRow,jsx` and `BookingDetail.jsx`.

in the deletion of `BookingRow,jsx`, we want nothing to happen once it was successful but in `BookingDetail.jsx` deletion, we want to move back, we can then use the `onSuccess` handler there, rather than in the generic `useDeleteBooking` which would apply to both cases.

**<span style='color: #495fcb'> Note:** You can either use `onSuccess` or `onSettled` which will run whether it is a success or not.

**<span style='color: #a8c62c'> features/bookings/BookingDetail.jsx**

```javascript
<ConfirmDelete
  resourceName={`booking ${bookingId}`}
  disabled={isDeleting}
  onConfirm={() =>
    deleteBooking(bookingId, { onSettled: () => navigate(-1) })
  }
/>
```

### Authentication: User Login with Supabase

**<span style='color: #495fcb'> Note:** Users are not stored in a table like *bookings, cabins*, but you need to go the `authentication` tab, where the user table is created by default.

![image info](./29_sc2.png)

Deactivate *confirm email* for dev purpose:

![image info](./29_sc3.png)

*Users* table / Add user: [ecr@test.com], [uolm4l3te@mozmail.com], [yovined130@oziere.com]  
password: test1234

#### API Docs / Authentication

Behind the scenes, Supabase authentication is using JWT technology.

#### API Docs / User Management

Code snippets for sign up / login / password forgotten / log out / get current logged in user

our `login` function within `services/apiAuth` will return a *session object* with an access and refresh tokens, that can be found in `Dev Tools / Storage / Local Storage`

- access token
- refresh token
- user Object

### Authorization: Protecting Routes

**<span style='color: #9e5231'>Error:** You can only call a hook such as `useNavigate` inside another function such as a `callback` or a `useEffect`, **but not at the top level of a component**:

**<span style='color: #a8c62c'> ui/ProtectedRoute.jsx**

```javascript
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );
//...
}
```

**<span style='color: #495fcb'> Note:** on `queryClient` on which we call `invalidateQueries, prefetchQuery`, we can also `setQueryData`, to manually set some data in the *react-query* cache. Remember that the first argument, the `queryKey` has to be an **array**!

In our case, once the `useLogin` was called and it reached the `onSuccess` block, it will navigate to *dashboard*. And so our `useUser` hook will be called as it's part of the protected routes; within `AppLayout`. this `useUser` hook uses the same key `user`, and if we set it manually `queryClient.setQueryData(['user'], user.user);`, *react-query* will simply get this data from the cache, instead of refetching the data, and the navigation to *dashboard* will work. Without this line, it won't be available in the *react-query* cache, and `isAuthenticated` will be false, and the redirection will then be to *login* page, while we are effectively logged in.

**<span style='color: #a8c62c'> features/authentication/useLogin.jsx**

```javascript
const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user); //HACK: !!! allow redirection to dashboard right after login
      console.log(user);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    },
// ...
});
```

So just logging out from *Supabase api* `await supabase.auth.signOut()` will remove the user from local storage and also from the server but it will stay inside the cache, that's why in our mutation we add: `queryClient.removeQueries();` (to remove all of them)

### Fixing an Important Bug

**<span style='color: #9e5231'>Error:** Initially the `useLogin` hook was using: `queryClient.setQueriesData(['user'], user);`

If un-logged we try to access the root which is unprotected: `http://localhost:5173` (no trailing /), it will store a null user, and this will then cause an issue when we then log in and in our `useUser` hook, where we run this test: `return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };` as `user` will now be null, this will always return `false` and you won't be automatically navigated to *dashboard*.

What needs to be used is instead: `queryClient.setQueryData(['user'], user.user);`

### User Sign Up

in *Supabase / Authentication / Emails*, you have the templated emails sent when you activate the *confirm email*.

in *Supabase / Authentication / URL Configuration*,m we need to update our application URL, for having a redirect URL working

![image info](./29_sc5.png)

**<span style='color: #495fcb'> Note:** Just make sure to update these two URLs again once you deploy this application to a production server.

The new user will now be created but the log in would not work until the *supabase* confirmation link has not been confirmed, that will bring us to our dashboard with the new logged in user.

![image info](./29_sc6.png)

### Authorization on Supabase: Protecting Database (RLS)

Right now everyone could still fetch and mutate data from our API even if they cannot log into the applications UI that we have been building.  any malicious actor could very easily find out the URL to our API even if they cannot see this graphical user interface. So just from reading our front end code, they could figure that out and then they could, for example, delete all of our bookings, or all of our cabins, and really destroy our entire app.

**<span style='color: #a3842c'>Supabase Authenticated & unauthenticated roles:** [https://supabase.com/docs/guides/database/postgres/row-level-security#authenticated-and-unauthenticated-roles]

You can edit all *RLS* and change the `to` clause from `public` to `authenticated` under `Authentication / Policies / Edit Policy`.

![image info](./29_sc7.png)

**<span style='color: #a8c62c'> pages/Login.jsx** When you are not authenticated, you can manipulate the DOM and add components to have malicious effect on the **database without RLS on the database.**

```javascript
function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as='h4'>Log in to your account</Heading>
      <LoginForm />

      <CabinTable /> //ERROR: this would still retrieve the cabins , and you could also delete, even when not being authenticated
    </LoginLayout>
  );
}
```

![image info](./29_sc8.png)

### Building The App Header

**<span style='color: #a3842c'>Supabase user-metadata:** [<https://supabase.com/docs/guides/auth/managing-user-data#adding-and-retrieving-user-metadata>]

`select email, raw_user_meta_data from auth.users`

for the new component `UserAvatar`, note that the user_metadata are created for users that were created subsequently when the `options` were created:

**<span style='color: #a8c62c'> services/apiAuth.js**

```javascript
const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });
```

**<span style='color: #495fcb'> Note:** You can either use:

- [https://temp-mail.org/en/]
- Mozilla FireFox Relay extension

### Updating User Data and Password

`const { register, formState, getValues, handleSubmit, reset } = useForm();`, the `reset` function of *react-hook-form*  will reset both the input field and the error associated, if any.

### Implementing Dark Mode with CSS Variables

```css
:root {
  &.light-mode {
  }
}
```

`&.light-mode {...}` is equivalent to `:root.light-mode`

to implement a default case if no light-mode or dark-mode has been passed to the root element which is `<html ...>`: `&, &.light-mode {..}`

### Displaying a Line Chart with the Recharts Library

**<span style='color: #a3842c'>Recharts Library:** [https://recharts.org/en-US/]

`npm install recharts`

### Displaying Stays for current day

**<span style='color: #a8c62c'> features/check-in-out.jsx**

```javascript
<Button
  size='small'
  variation='primary'
  as={Link}
  to={`/checkin/${id}`}
>
  Check in
</Button>
```

**<span style='color: #495fcb'> Note:** *React* extends *html* `button` with an `as` prop, which allows to easily turn a button into an html `link`, or directly to a React `Link` (which is an `anchor` element), by overriding the underlying HTML tag of the `Button.jsx` component, and handle external links. We of course specify the link with the `to` props.

**<span style='color: #a3842c'>Link:** [https://whereisthemouse.com/how-to-use-button-as-link-in-react]

Shifting from grid template with 4 columns to 5 columns, and how to center *today's activity* and *stay duration* components (shifting to 10 columns grid)

- **<span style='color: #a3842c'>CSS nth child:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child]
- **<span style='color: #a3842c'>Take half width in 3 columns CSS grid layout:** [https://stackoverflow.com/questions/63222551/take-half-width-in-3-columns-css-grid-layout]

### Error Boundaries

So all these times where we get a white screen in development when the app stops working, our users would also only get that white screen in production. And so that's just completely unacceptable, because then the user has no idea what to do.

So **error boundaries** are like try-catch but for React rendering, which basically allows us to react to JavaScript errors in our render code, so in React render logic.

**<span style='color: #a3842c'>react-error-boundary:** [https://www.npmjs.com/package/react-error-boundary]

**<span style='color: #875c5c'>IMPORTANT:** these error boundaries really only catch errors while React is rendering.

So bugs that occur in some event handlers, or in an effect or in some asynchronous code will not be caught by the error boundary. But for those, we many times have some other mechanisms, like for example, those errors that are usually returned from `useQuery()`.

### Fixing Bugs

if a user pass an unknown booking id, it would trigger an error boundary. To avoid this behavior, we update our `BookingDetail.jsx` with: `if (!booking) return <Empty resource='booking' />;`

if there is no `isDarkMode` key already set in our *localStorage*, by passing the below **media query** to our `useLocalStorage` as the initial state, the first time we access the app, it would be in dark mode then. After the *localStorage* value would be used.

```javascript
useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode'
  );
```

### Additional features: create booking

**<span style='color: #a3842c'>react-hook-form setValue:** [https://react-hook-form.com/docs/useform/setvalue]

## Deployment with Netlify and Vercel

### Deploying to Netlify

`npm run build`

You can select in the main menu *Add new Site / Manually*:  [https://app.netlify.com/drop]

Site Settings / Change site name

### CI/CD with Github & Netlify / Vercel

**<span style='color: #a3842c'>OAuth Access list:** [https://github.com/settings/installations]

Section *Integration* / *Applications* / *Installed GitHub Apps*: you can revoke oAuth access from that menu once you have selected the app.

## Full-Stack React with Next.js

### Useful Resources

**<span style='color: #a3842c'>Next.js documentation:** [https://nextjs.org/docs]

**<span style='color: #a3842c'>Server Components:** [https://react.dev/reference/rsc/server-components]

**<span style='color: #a3842c'>How React server components work:** [https://www.plasmic.app/blog/how-react-server-components-work]

**<span style='color: #a3842c'>Devtools for React Server Components:** [https://www.alvar.dev/blog/creating-devtools-for-react-server-components]

**<span style='color: #a3842c'>Auth.js:** [https://authjs.dev/getting-started]

**<span style='color: #a3842c'>28 advanced next.js features:** [https://codedrivendevelopment.com/posts/rarely-known-nextjs-features]

**<span style='color: #a3842c'>Next.js Image Component:** [https://www.fullstackfoundations.com/blog/nextjs-image-component-tutorial]

**<span style='color: #a3842c'>Next.js caching:** [https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/]

**<span style='color: #a3842c'>Next.js static exports:** [https://nextjs.org/docs/app/building-your-application/deploying/static-exports]

**<span style='color: #a3842c'>Example app using Next.js 13 server components:** [https://tx.shadcn.com/]

## Overview Next.js with App Router

### Experiment: Manual SSR With React DOM + Node.js

`npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/register`  
`npm i react react-dom`

**<span style='color: #9e5231'>Error:** Our buttons and all JavaScript code is not working and so that's exactly the big issue with server side rendered React, which again simply renders the whole thing as HTML or basically just as a string, but that JavaScript will of course not be there.

To solve this, we need the another aspect of server-side rendering: **hydration**.

### Implementing Hydration

we duplicate our *react* code in the `client.js` file, normally you wouldn't have to do that, the bundler would inject what's necessary to both the server and what is sent to the client.

Our .jsx components are not valid JavaScript on the client-side just like it was on the server-side, so we also need to add `babel` again, this time using the `cdn` version, into our `index.html` file.

**<span style='color: #a3842c'>Babel cdn:** [https://babeljs.io/docs/babel-standalone]

And then we're also going to need *React*!

So again, React is only on the server right now, but we don't have any React anywhere on the client. All the code that we have on the client is the HTML string that is being sent from the server, and also all the code that is here in the client.js file that is also sent along.

**<span style='color: #a3842c'>React cdn:** [https://legacy.reactjs.org/docs/cdn-links.html]

### Setting up a Next.js project

Having this `app` folder here is what enables the App Router to be used.

**<span style='color: #495fcb'> Note:** Remember that the `page.js` content has been executed on the server!

if you right-click and do `page source`, this is really the source that was downloaded/ so what came directly from the server, the content of our `page.js` file. This was indeed **server-side rendered** and sent to the browser.

### Defining Routes and Pages

So each folder is responsible for each of the segments in this URL. So `app` folder is the root.

### Navigating between pages

If we use `<a>` elements, we have a full hard reload as we move between pages in this way. Instead, we want our application to feel a bit like a single page application like we had before. And so that's why Next.js provides to us the `Link` (`next/link`) component.

even though we're server rendering, it feels again like a single page application.

**<span style='color: #495fcb'> Note:**So behind the scenes, what this does is to apply a few optimization techniques, provided by Next.js out of the box:

- So first of all, it will actually prefetch all the routes that are linked on a certain page, even though that only works in production. So we cannot see that happening here in development.
- What also happens is that each page is downloaded separately as a separate chunk, which will also improve performance again.
- And finally, each page that we visit in the browser will actually be cached right in the browser as well. So it will be stored there temporarily. And then as we move around, all these pages will not have to be refetched again.

just like React Router, Next.js also provides us with some React hooks for programmatic navigation. However, these are not going to work in these page components, because they are server components and React hooks don't work there.

**<span style='color: #9e5231'>Error:** When creating our `components` folder and `Navigation.js` file, then this would become a new page / route  in the application. Now that's actually not what we want, and so we will fix that a bit later when we will talk about how to organize or project with some better project architecture.

### Creating a Layout

So each and every Next.js app or website needs to have one global layout, which we call the **root layout**. That's why earlier when we tried to delete this layout.js file, Next.js would create a new one for us automatically.

#### root layout

the root layout (at the root of the `app` folder) will actually wrap the entire application. So it will apply to every single route in the app, and therefore it needs to contain the HTML and the body tag.

**<span style='color: #875c5c'>IMPORTANT:** Layouts, just like all the pages, are actually something that we call **server components**. So there are components that run or are rendered right on the server.

And that's something entirely new for us. It's a completely new paradigm in React.

### What are React Server Components? (RSC – Part 1)

#### Client-side App

React apps require a lot of JavaScript to be downloaded to the user's computer, which can have huge impacts on performance and is always a constraint for us developers that we have to constantly think about when we're building our apps.

And a client-server waterfall is a problem that happens when multiple components on a page need to fetch different data one after another. So when data from one component depends on the data fetched in another component, this is a very common problem in large applications, caused by the fact that we have to fetch data on the client when we have a 100% client-side app.

#### Server-side App

Now the alternative it seems is to have a 100% server-side rendered app. What we did have was an easy and fast way to fetch data directly from the data source, for example, from a database. Therefore there was no need to build an API to communicate between frontend and backend, because we were always on the backend anyway.

And for displaying all this data, no JavaScript was needed at all, meaning faster page load for our users.

#### Best of both worlds

What if we could take the best of both worlds having React components both on the server and on the client, and therefore being able to be either interactive or to be close to the data source and ship no JavaScript at all?

The answer to all this is a completely new React paradigm, a completely new way of building React apps that changes everything and **it's called React Server Components**.

#### What are React server components

React Server Components is a completely new full-stack architecture for building React apps.

The term *React Server Components*, which you'll often see abbreviated as RSC, is the name of this whole new paradigm, this new architecture.

The term *server component* alone is then the name of the new type of component that RSC introduces.

- And these are components that are only rendered on the server, never on the client.
- They're usually responsible for fetching data right on the server.
- Now, since server components run only on the server, they have no interactivity, so no state, which means that they require exactly zero JavaScript in the downloadable bundle to do their job. And this is one of the main advantages of this model besides server components,

#### Client components

Of course we still have our old regular components that we already know and that run entirely on the client. Therefore these are called client components and they are responsible for the interactivity.

client and server components allow us to write frontend code, right next to backend code in a way that feels completely natural because it feels just like the regular React apps that we've been building so far, we're still using just components and can even compose server and client components together to build full-stack apps that are really entirely controlled by React.

React Server Components are not active by default in new React apps. if we just start a new React project in Vite like we did earlier, we will not get this architecture. And this makes sense because there is no server involved in a Vite application.

### Next.js

So the server needs to be somewhere, it needs to be integrated into this whole idea. And so that's where full-stack frameworks like Next.js or Remix finally come into the picture again.

So basically, React provides this architecture and frameworks can then choose to adopt and to implement it if they want. And that's exactly what Next.js did in the app router. So any app that we built in the Next.js app folder will use this new RSC architecture in which server components become the default components actually.

so we need to specifically tell a component that it should be a client component if that's what we need `use client;`

#### Client or Server components

**<span style='color: #495fcb'> Note:** if a component is not interactive and its data needed to be fetched from somewhere, which means that this is a great candidate for a *server component* because in this new model, whenever possible, data should be fetched right on the server for the first render to be faster and to avoid client-server waterfalls.

And starting again in the header, we have this *DarkMode* toggle that we can click, and therefore this one cannot be rendered on the server. It needs to be a client component. And the same happens with the filter and the SortBy components. The user actually needs to interact with these in order to make them work.

we're already starting to see that our component tree now contains backend code as well as frontend code, all mixed together and all controlled by React with the client components usually appearing at the end of the tree, so as the last children.

#### server-client boundary

child components of components that are already *client components* don't need to specify `use client` again, the reason for that is that these children are already inside the so-called server-client boundary. And this boundary is another super important concept in the RSC architecture.

So React Server Components is all about boundaries because they are what marks the split points between code that runs on the server and code that runs on the client. we use, `use client`, in order to create these **client-server boundaries, which in turn will create client sub-trees**. So sub-trees that will only be executed in the browser.

and technically SortBy and DarkMode are also sub-trees, but just very small ones.

#### Server components vs. client components

Functions and classes are examples of data structures that are not serializable, and so we cannot pass those as props from server to client components.

with **import**, we mean that the component module imports another module using the import syntax.

On the other hand, with **render**, what we mean is that one component calls another one, so it uses another component inside its own JSX body.

server components can import both client and server components.

client components however can only import other client components but not server components. Once the client-server boundary has been passed, there is no way of going back to the server again. what is possible though is for client components to render server components, as long as these have been passed to them as props.

when does this component type re-render? Well for client components it's very simple. It's whenever its own state or a parent state changes. So we've been using that idea throughout the entire course.

So do server components ever get re-rendered? Well, as it turns out, the answer is yes, server components are executed again each time that the URL changes, so when the user navigates to the URL that has the server component in question, that's because usually server components are tied to specific routes in the framework, so in our case, Next.js. So when the URL changes and the framework moves to another route, all server components associated with that route re-render, so they are executed again and might even fetch data again.

#### Props Bridge

So server and client components are essentially connected by props. They are like the **bridge across the client-server boundary**.

So we have two types of components that contribute to the same view, but by using different mechanisms. One type of component runs on the client and one on the server, and they can even be connected by props.

#### RSC Architecture

the biggest selling point of the RSC model is that we can now write **React components on the frontend and on the backend**, meaning that we can now encapsulate all server-side concerns right into components as well. And by doing so, we can compose entire full-stack applications by only writing components, with one single codebase for front and back-end of an app.

Also, we don't even have to build an API in order to access our data on the frontend in many situations, our server components are already on the backend, so they have a direct access to the data source.

For example, we can directly grab some data from a database right in a server component and then simply send the already rendered page to the browser, so instead of sending only the data as JSON.

Plus, if we need to access a third party API, we no longer need to worry about securely storing our API keys, which is always a problem in a pure client-side app.

Cons:

- Then once we understand server components, using them is actually pretty easy and natural in practice, they have no state or effects, no stale closures or memorization-like client components, and therefore they're actually pretty easy to reason about. At some point we completely forget that we're even working on the server in some components. Now, some more practical cons are the fact that APIs like the **context API don't work on server components just like all other hooks**.
- we need to make more decisions all the time. Things like should this be a client or a server component? Should I fetch this data on the server or on the client and so on. This again, comes from the added complexity of this architecture, but I believe it's still a good trade-off.
- Also, if on top of a web app, you also need a mobile app, you'll probably still need to build an API, even if you don't need one for the web application where you can just get data directly from the data source in server components.
- And finally, one thing that many people don't like about React Server Components is the fact that they can only be implemented and used within a framework. So you cannot just set up a Vite app and implement RSC yourself. And as a consequence, you always have to buy into a framework if you want to use the power of server components.

### Fetching Data in a Page

**<span style='color: #a3842c'>JSON Placeholder:** [https://jsonplaceholder.typicode.com/]

we use the `users` resource.

**<span style='color: #a3842c'>How to Fetch API Data in React:** [https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/]

**<span style='color: #a8c62c'> components/cabins.js**

```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();
console.log(data);

return (
    <div>
      <h1>Cabins page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
```

**<span style='color: #495fcb'> Note:** the console log prints in the server terminal, validating that such data are coming from the server.

Also since latest Next.js versions, it also prints in the browser's console (client), with the `server` tag!

If we inspect the page source, our names generated from this API call, would already be in the HTML downloaded from the server. and in the DevTools of Firefox, we wouldn't see any HTTP request to *[https://jsonplaceholder.typicode.com/]* endpoint. So it's not being fetched from the client.

So the data fetching really happens on the server. Then everything is assembled into this HTML page that we see here and sent off to the browser. And so that is the power of server components.  all while still using React components that we already know.

**<span style='color: #495fcb'> Note:** if we reload the page and then click on cabins, it'll take some time for the rendering. But that's simply because this data still needs to be fetched on the server, which of course takes some time. And only after that data has been fetched, so after that time, then the HTML can be generated and sent to the browser. So again, that's why it takes some time when we go to the cabins page for the first time. **but then if we go back there afterwards, the data has been cached in the browser's Next.js cache.**

### Adding Interactivity With Client Components

there is actually hydration involved here. So if we load this page really slow again, maybe even Slow 3G. So then as we expect, the static HTML will be downloaded. So then nothing works as we click here.

So in the background, the React bundle is now being downloaded, and once that kicks in, then the whole page will be hydrated, meaning that the event handlers will be added back and all the interactivity will be added back.

This is a good solution: at least the user could see the most important information already. And then after everything has finished loading and the React bundle has been downloaded, then this button became interactive.

**<span style='color: #875c5c'>IMPORTANT:** on the initial render, all the components are first rendered on the client and then sent as HTML to the client,  no matter if it's a server or a client component.

But here we already have the practical effect that this string `<p>There are {users.length} users</p>` was rendered on the server, and we could see it here immediately, even though the React bundle, which contains this client component, was still being downloaded.

### Displaying a Loading Indicator

when we create a global loading file, so `loading.js` in the root `app` folder, this will be a global loader because this one will actually apply to any page that is in our application.

Now, behind the scenes, this loading.js file actually activates streaming. So basically this data right here will be streamed from the server to the client automatically and not sent in one go (`renderToReadableStream`)

**<span style='color: #495fcb'> Note:** this feature actually needs JavaScript to be enabled in the browser. And so that means that streaming will not work when the user has JavaScript disabled. So if you want that your website works without JavaScript,

### How RSC Works Behind the Scenes (RSC – Part 2)

Client components are serialized; transformed as strings when sent from server to the client, remember that they are not executed on the server

#### Re-renders

whenever a server component re-renders and produces a new React element, that element can basically be merged seamlessly into the already  existing virtual DOM on the client. So again, when a server component is re-rendered, a new RSC payload is generated and sent to the client where React can then reconcile the current tree on the client with the new tree that's coming from the server.

Being able to reconcile a new tree, with an existing tree on re-render, is really what React is all about at its core. And so this core idea should also work with server components. And it's actually extremely important that this works correctly, because it allows React to preserve UI state as a new tree comes in from the server.

#### RSC Payload

Now in the RSC architecture, the render process is split into two steps where the first step is to render only server components. The result of this is a virtual DOM of these already rendered server components, plus the un-rendered sub trees of client components. So server components are rendered and client components are not, and they both exist in the same data structure, which we call the RSC payload.

Now in this RSC payload, there is some information for each client component that is essential for React to render these components on the client later.

it is actually basically the same rendering process on both 'traditional' React and React with 'RCS', but split up between two different environments with the RSC payload bridging the gap between server and client.

**<span style='color: #495fcb'> Note:** given this two-step process, UI is first a function of data and only then later of UI state => `UI = f(data)(state)`

### RSC vs. SSR: How are They Related? (RSC – Part 3)

So, the React server and React client are simply two different environments, two different parts of the RSC protocol.

In the RSD model, a server is just a computer different from the browser. So, a computer that the developer has access to and can run code on. This means that in theory, React server components don't actually require a running web server. Instead, server and client components, could just be rendered once at build time in a process that we call static site generation.

Now, in a similar spirit, the React client also doesn't need to be a traditional web browser. The React client is simply the part of the protocol that basically consumes the rendered React App. And in the case of server-side rendering that consuming means to render the app not as DOM elements, but as HTML.

both client and server components are rendered on the web server that Next.js provides in the two different environments on the React server components protocol: the React server and the React client. Both of these environments run on the server on the initial render, and therefore the output is not DOM nodes, but HTML.

## Starting to build the Wild Oasis website

### Project Organization

#### _folder

we can use a Next.js convention, which is to start a folder name with an underscore `_foldername`.

So this will then basically make it private and opt this folder out of the router. So this means that no route will then be created for that given folder.

#### using aliases

You need to make sure that `jsconfig.json` `compilerOptions` was correctly set and can then use below syntax instead of `../../*`:

```javascript
// import Counter from '../_components/Counter';
import Counter from '@/app/_components/Counter';
```

### Styling With Tailwind CSS

Even if in your Next.js template you have chosen tailwind, to use it;

**<span style='color: #a3842c'>Tailwind CSS in Next.js project** [https://tailwindcss.com/docs/installation/framework-guides/nextjs]

- `npm install tailwindcss @tailwindcss/postcss postcss`
- `global.css`: `@import "tailwindcss";`
- -Prettier  Plugin for Tailwind CSS (dev-dependency `-D`), that will always organize your classes in the same order in your *html, jsx* files: `npm install -D prettier prettier-plugin-tailwindcss`
- **<span style='color: #a3842c'>Prettier JSX Single Quote:** [https://prettier.io/docs/options#jsx-quotes]
- add your `.prettierrc` for your configuration such as the single quote.

![image info](./33_sc1.png)

**<span style='color: #a3842c'>Tailwind CSS / customizing colors:** [https://tailwindcss.com/docs/colors#customizing-your-colors]

#### React Icons

`npm i @heroicons/react`

### Adding Page Metadata and Favicon

Another very important thing for SEO  is a page description.

Another Next.js convention for having an icon, is to paste the icon at the root, so in the `app` folder, and it has to be named `icon.png`

### Loading and Optimizing Fonts

So what Next.js allows us to do is to very easily and automatically self-host any Google font that we want, without that font being downloaded from Google, improving privacy, performance, and avoiding layout shifts.

So maybe you're aware that if we use fonts from Google fonts, that is not good for privacy, and might even be a problem with the GDPR regulation.

And it's not so good for performance, because that font or those files for the fonts will need to be downloaded from some Google server. And it's always best to actually have those files right on your own server, because that will make downloading them a lot faster and therefore improving performance and preventing layout shifts.

`import { Josefin_Sans } from 'next/font/google';` is a function that we then call and pass some options:

```javascript
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});
```

### Improving the Navigation and Root Layout

To make sure that `<main>` element in our `layout.js` will occupy all the page we pass `grid flex-1`

```CSS
<div className='grid flex-1 px-8 py-12'>
  <main className='mx-auto w-full max-w-7xl'>{children}</main>
</div>
```

### Optimizing Images with Next.js

So optimizing images is hugely important because images are always one of the biggest factors that contribute to page size. So usually, they have huge impacts on loading speeds, and therefore, being able to optimize images with Next.js is a huge advantage of this framework.

Next.js provides us with their own `<Image>` components that we can use instead of the native HTML `<image/>`

if you don't want to specify the width and height you need to import the image that way, and the default size of the image would be applied, and you can also apply a `quality={1}` option with 1 being the lowest possible quality, hence smallest image download size.

```javascript
{/* <Image src='/logo.png' height='60' width='60' alt='The Wild Oasis logo' /> */}
<Image src={logo} alt='The Wild Oasis logo' />
```

### Building the Home Page

for a responsive image, a background image taking the entire screen size, you can pass the option `fill` to the `next/Image` component and you don't need to specify the height and width,

`placeholder='blur'` allows to show a low quality preview of the image while it's loading ! **<span style='color: #495fcb'> Note:** it can only be used with statically imported images.

**<span style='color: #495fcb'> Note:** `next/Image` is optimizing the image on demand. As the page is loaded, next.js will figure out what the image should look like and what size it should be. So this is really amazing how much bandwidth this saves.

### Building the About Page With Responsive Images

to have an automatic resizing of the `next/Image` component, you can:

- import statically the image: `import image1 from '@/public/about-1.jpg';`
- you place the image inside a container set to `relative` & `aspect-square` corresponding to CSS `aspect-ratio: 1 / 1`, and use the `fill` property and add the `object-cover` class, if the image is not imported statically, but would come from a url /database and would be passed

```javascript
<div className='relative col-span-2 aspect-square'>
  <Image
    src='/about-2.jpg'
    fill
    className='object-cover'
    alt='Family that manages The Wild Oasis'
  />
</div>
```

### Active Link of the navbar

**<span style='color: #a3842c'>Nextjs/app-router:** [https://nextjs.org/docs/app/api-reference/functions/use-router]

**<span style='color: #495fcb'> Note:** You need to make your `Navigation` component a client component.

## Data Fetching, Caching, and Rendering

### Setting up Supabase

`npm i @supabase/supabase-js`

#### Environment variables

`.env.local` file at the root of the project and retrieved with syntax: `process.env.SUPABASE_URL`

So one key thing, is that by default, environment variables will not leak to the browser. So they're only really available inside this environment where the application is running, on the server basically.

However, Next.js also allows us to make this public to the client; i.e. leak to the client. And all we need for that is to just prefix the variable with `NEXT_PUBLIC_`, and then some variable name.

**<span style='color: #495fcb'> Note:** So remember how in Supabase, we could just use this public key, even on the front end without worrying that someone might do something to our database that we don't want. Because in order to protect our database, **we would activate row level security**.

**<span style='color: #9e5231'>Error:** we have allowed only authenticated users to view cabin information, but we actually want everyone to be able to see information on the cabins without being authenticated, And so basically we need a way of bypassing this row level security policy here because we do not want to remove it for our other application, developed in part IV.

what we want to do is to not use this public key, but instead, use this **service role key**, `Settings / Data API / Project API Keys`. And again, that is completely fine because we can just store this secret key right here as an environment variable without ever worrying that it will leak to the client. it will only stay on our server where it's secure, so where no one has access to.

whoever has this **service_role** key has full access to all your data. So you need to be very, very careful with it and making sure that it doesn't leak to the client.

And if we need the data on the client as well, we can just fetch it in a server component as well, and then pass it down to a client component as props.

### Fetching and Displaying Cabin List

**<span style='color: #a8c62c'> cabins/page.js**

```javascript
export default async function Page() {
  const cabins = await getCabins();
    return (...page content)
}
```

The page will only be displayed once the await piece of code is finished.

So again, this might look pretty crazy for you if you're not yet used to React server components, but this is really great.

- we don't need any `useEffect`
- We don't need `state` to store that data into.
- And we don't even need any separate data fetching libraries.
- All we do is await the data fetching function right here in an async function. **and all this happens on the server And then the already rendered HTML is what will be sent to the browser**.

**<span style='color: #495fcb'> Note:**

- One of the great thing about this pattern; React server components, is that we are really close to the data source right here on the server, and many times don't even need the API layer.
- Now in this case, since we're using an external service, which relies on an API, we actually do still have an API layer here. It's just hidden from us because these supabase functions here, they abstract the API away from us, but we're still grabbing the data right here behind the scenes from the supabase API.

#### next/image un-configured host

**<span style='color: #9e5231'>Error - next/image Un-configured Host:** [https://nextjs.org/docs/messages/next-image-unconfigured-host]

you have to update the `next.config.mjs`

#### Image / Fill property

with the `fill` property passed to `next/Image` component,  it will fill the entire view port if we don't have any parent element that has the `position` attribute, to `relative` for example, and also set to the `Image` the `object-fit: cover` attribute.

```javascript
<div className='relative flex-1'>
  <Image
    src={image}
    fill
    alt={`Cabin ${name}`}
    className='border-primary-800 border-r object-cover'
  />
</div>
```

Our image will be responsive, optimized and fitting its container.

### Streaming Route Segments With loading.js File

**<span style='color: #a3842c'>Next.js Streaming:** [https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#what-is-streaming]

![image info](./34_sc1.png)

### What is React Suspense?

When using `Suspense` component, we implement a React native way to support and handle asynchronous operations like data fetching **in a declarative way**. **declarative means that we can use components in our JSX instead of imperative render logic**.

In this case, all we have to do is to just wrap a component that an asynchronous operation into a `Suspense`. So we'll no longer need `isLoading` states and ternaries in our render logic, which will make our components so much simpler.

**<span style='color: #875c5c'>IMPORTANT:**

- The whole `Suspense` architecture is extremely complex and manually integrating asynchronous operations with Suspense is very hard. And so we leave this work to libraries and frameworks
- thankfully for us Suspense works out of the box if we use something like *react-query*, *remix*, or of course *Next.js*.
- Also, Suspense works just as advertised when combined with `React.lazy`

### Streaming UI With Suspense: Cabin List

The idea is to wrap the asynchronous component, that is in charge of the data fetching and that will suspend at some point,  i.e. `<CabinList />`, into the `<Suspense>`

**<span style='color: #a8c62c'> CabinList.js**

```javascript
<Suspense fallback={<Spinner />}>
  <CabinList />
</Suspense>
```

the `Suspense` component and its `Spinner` fallback now overwrites the `loading.js` we had created in `app/cabins/loading.js`

we can remove the `async` from our `cabins/page.js` as it's no longer an async component: `export default function Page() {}`

### Dynamic Routes Segment: Building the cabin page

**<span style='color: #495fcb'> Note:** `loading.js` defined as a fallback within the `Suspense` of `cabins/page.js`  Loading.js file will apply to the current route segment, plus all of the child segments, such as `cabins/id`

### Dynamic APIs are Asynchronous

**<span style='color: #9e5231'>Error:** Dynamic APIs are Asynchronous

**<span style='color: #a3842c'>Next.js Dynamic Parameters:** [https://nextjs.org/docs/messages/sync-dynamic-apis]

### Generating Dynamic Metadata

`export async function generateMetadata({ params }) {}`: this conventional function `generateMetadata` also gets access to the `{params}` of the page/component.

### Error Handling: Setting Up Error Boundaries

```javascript
"use client";

export default function Error({ error, reset }) { }
```

**<span style='color: #875c5c'>IMPORTANT:**

- Error Boundary always has to be a **client component**.
- when we manually set up an error boundary, this works for all errors and exceptions that happen anywhere in the app, **but only in rendering**. So any errors that will happen in callback functions will actually not be caught by a React error boundary.
- Error.js boundary does not catch errors that might happen in the root layout.

we can for example fetch data in the *root layout*, which is something perfectly fine, because this is just another server component. But if that data fetching would create some error, then our error boundary would not catch that. To catch *rendering errors in the root layout*, then we would need to create a file called `global-error.js`.

### Error Handling: "Not Found" Errors

in case the parameter of a dynamic route doesn't exist, it won't trigger by default the not found page, but the error page. To change this behavior, we can manually call our `not-found.js` function

```javascript
import { notFound } from 'next/navigation';

export async function getCabin(id) {
  //...

  if (error) {
    console.error(error);
    notFound();
  }
}
```

**<span style='color: #495fcb'> Note:** You can also create dedicated *not-found* pages for each url endpoint of your app, bu adding the file in the corresponding folder.

### Different Types of SSR: Static vs. Dynamic Rendering

#### Content Delivery network

most hosting providers like *Vercel or Netlify or render.com* will automatically host all your website's static assets on a **global CDN**

#### Serverless computing

- *Next.js* app is not simply one huge *Node.js* app that's running on a server, but instead a collection of serverless functions with the servers automatically managed by Vercel (for example)
- For example, if one of our routes gets a huge sudden boost in traffic, Vercel will automatically provide more resources for that serverless function in order to handle all that additional load.

**<span style='color: #495fcb'> Note:** if we only have static routes, then none of this applies. Because in that case, all of these static routes will simply be built on build time and will then be hosted on a *CDN*.

### Analyzing Rendering in Our App

it's basically Next.js who decides how each of our routes are rendered. So whether each of the routes is going to be:

- a dynamic route
- or a static route.

Now to see how each route is actually rendered, we need to build the site, basically using the `npm run build` command

![image info](./34_sc2.png)

Only our `cabins/[cabinId]` route is rendered dynamically, as it has this dynamic segment, `cabinId` which cannot be known by Next.js at build time,and cannot pre-render the HTML as static content.

### Making Dynamic Pages Static With generateStaticParams

We can use the `generateStaticParams` function to let *Next.js* know about all the possible values of a dynamic URL segment so that we can then export those pages as static pages.

If all pages of an app will be *static* and we could then export or we could generate the entire site as a static site and deploy it very easily on any static hosting provider that we want.

We just have to export a function name predefined by *Next.js* `export async function generateStaticParams()`

**<span style='color: #495fcb'> Note:** we need to return an object which has that name of the dynamic segment, `cabinId`, i.e. the name of the folder.

`npm run build` now returns 18 pages

![image info](./34_sc3.png)

**<span style='color: #495fcb'> Note:** if an app has a finite set of values for a dynamic segment of a URL, it's always a good idea to tell Next.js about those by using degenerate static params function. this way, this route can then be entirely statically generated, which is a lot better for performance. and since all of our routes are static, we can actually do **static site generation.**

### Static Site Generation (SSG)

`next.config.mjs`: add `output: 'export'`. the default folder name is `out`.

**<span style='color: #9e5231'>Error:** we would get an error if some pages were not static and we had set the output to *export*, when building the app.

so usually deploying a Next.js application is a bit complicated if you do not use **Vercel**, but for static deployment, it's really easy. You can place this on *GitHub pages or on Netlify, on render.com*, or really, all these other services out there.

if you open that folder in VSCode, and us *LiveServer / GoLive*, the website will build except the images will be missing.

in order for this to work, notice how we have these text files; for each of the HTML files, what we have is actually a real **React Server Components payload - RSC payload**.

the next.js `<Images />` components won't work, because these images are optimized behind the scenes by Vercel on the Vercel server using their own image optimization API, so that optimization basically happens dynamically on a server, which we now no longer have, so therefore, we cannot use this Vercel service anymore,

- we could not optimize images and go back to HTML `<img />`
- create our own custom loader that will then use a different service, for example, *Cloudinary*. [https://cloudinary.com/]

**<span style='color: #a3842c'>Next.js Static export - Image optimization - Cloudinary:** [https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization]

### Experimenting with Caching and ISR

to simulate a production environment, `npm run build && npm run start` or add a script, called `prod: next build && next start` to our `package.json`

**<span style='color: #495fcb'> Note:** it will not listen for changes in our code. So whenever we do something in our code and want to see it live basically on this production server, we need to quit this process and run it all over again.

#### initial cache behavior

if we change the price of a cabin directly on *supabase*, and refresh our page it won't be reflected.  **It is actually because of the data cache and therefore, of the full route cache**. this page has been statically generated. And so this means that this route here has now been cached with this data, so with the data that was in place when the page was statically generated.

all the data from our website was set in stone and will now be used for all the users who will visit our page until we revalidate that data.

Now, that is great for something where the content is really static, for example, like a blog, but it doesn't work for any data-intensive app.

#### test1: opting out of data cache

by opting out of the data cache, which will automatically also opt out of the full route cache, this means that we will make the `/cabins` route dynamic.

**<span style='color: #a8c62c'> cabins/Page.js** `export const revalidate = 0;`

![image info](./34_sc4.png)

Each price change directly in the *supabase* would be reflected when we refresh the page, as the page is now regenerated for each request, and always the fresh data out of the database. *we can perfectly imagine why that is not always ideal in all circumstances.*

that's the reason why static rendering is actually the default in Next.js, because then we don't always have to go to the database when the data doesn't need to be queried so often.

#### ISR: Incremental Static Regeneration

**<span style='color: #495fcb'> Note:** in many situations, what we actually need is kind of a middle ground between these two strategies. So between completely static rendering and dynamic rendering. So incremental static regeneration will regenerate a static page and fetch fresh data for it from time to time.

**<span style='color: #a8c62c'> cabins/Page.js** `export const revalidate = 3600;` (in seconds)

an acceptable approach could be to refresh the *overview* page once per hour, and on the individual pages we could refetch the data more often so that when the user wants to really book the cabin, then they really always get the freshest data.

So for some time, the page is still static. And so that's exactly the middle ground that we want. And this is of course especially important for pages that get a lot of traffic. So all the traffic in the meantime, so during that time where the data is still cached, doesn't have to come from the database and is instead basically read from the data cache and full route cache.

#### revalidation at component level

**<span style='color: #a8c62c'> cabins/CabinList.js** Below would make the entire page rendered dynamically again.

```javascript
import { unstable_noStore } from 'next/cache';

export default async function CabinList() {
  unstable_noStore(); //NOTE: with partial pre-rendering
// ...
}
```

in practice, opting out one of the components of the page out of the data cache, is basically telling that it should not cache any data and will opt out the entire route out of the data cache because it will dynamically generate this entire route. So why should we ever do this here instead of just always revalidating the entire route?

But if we think about partial pre-rendering, it actually makes a lot of sense. So in that scenario, this entire shell of the page would still be static. but then, the `CabinList`, since it's already wrapped in a suspense, would then become the dynamic hole, which would be rendered in the background, and then be streamed in as soon as it's ready while this fallback would be rendered in the beginning.

With partial pre-rendering, you can have part of your page that is static, which we call the *static shell*, and another part of the page is the *dynamic hole*.

## Client and Server Interactions

### Blurring the Boundary Between Server and Client (RSC – Part 4)

with *React server components*, there is this mixing of server and client **'Knitting'**:

- one immediate consequence of all this is that in many cases we no longer need to even build an API that acts as an intermediary between back-end and front-end.
- we don't need an artificial API boundary to fetch and mutate data.
- in the RSC model, for fetching data, as we already know, we can simply get some data into a server component, for example, reading straight from a database and then render the data directly in the server component.
- Or as an alternative, if we need that data on the front-end, we can just send it to a client component in the form of props. Again, no need for an API here.
- to do mutations in *Next.js*,  as part of React's full stack architecture vision, we have something called **server actions** that we can use *to mutate data on the server directly from client components*.

**<span style='color: #495fcb'> Note:** we can render a server component inside a client component if we pass the server component as a prop. And this can be the children prop or any other regular prop.

The parent component needs to import both the child client component, and the 2nd rank child server component too, this is the dependence tree, showing modules imported by other modules, and is different from the component tree.

### Client Components in Server Components

**<span style='color: #875c5c'>IMPORTANT:** we should always, whenever possible, move Client Components as low into the component tree as possible, because as we already know, all child components of Client Components will be Client Components by default, and so they will then not be server rendered, even if they could be rendered on the server perfectly fine.

We just use the term `components` to make it a bit easier to talk, but we should refer to `component instance`.

### Highlighting Current Side Navigation Link

in our *DevTools / components*, we can see which components instances are server rendered, and which one are not, like the `TextExpander`.

![image info](./35_sc1.png)

**<span style='color: #495fcb'> Note:** this component was first rendered on the server and then it has been hydrated here on the client:

![image info](./35_sc2.png)

We can manually interact with components, for example if we set `Suspended: true` in the *DevTools/ Components* then the spinner appears until we set it back to false:

![image info](./35_sc3.png)

#### Adding styling to the SideNavigation

It might have seemed that we could add this functionality; i.e. adding the highlighting of the current menu already on the server, but we need to actually use a **React hook**, even though this doesn't seem like a very dynamic feature. So what this means is that sometimes we just need to **switch to a client component** only in order to be able to use a React hook.

### Sharing State Between Client and Server: The URL

**<span style='color: #875c5c'>IMPORTANT:** **how can we pass data from the client back to the server?**

it is very easy to basically share state *from server to client*, we just need to pass it as a prop.

the most obvious and easiest, and I would say best way of doing that is to **store the state right in the URL**.

So basically what we're gonna do is as the user clicks on the filter, that will then add the filter term to the URL. And then in the server component, we can read that data from the URL and filter accordingly.

when using `{searchParams}` prop, it needs to be awaited !

  **<span style='color: #a8c62c'> cabins/Page.js**

```javascript
export default async function Page({ searchParams }) {
  const params = await searchParams;
// ...
}
```

**<span style='color: #875c5c'>IMPORTANT:** one important thing about `searchParams`, which can not be known at runtime, which means is that whenever we make use of the searchParams, the page can no longer be statically rendered.

We can then remove `export const revalidate = 3600;` which we had set previously, and `revalidate` only applies to static pages, i.e. **there's no need to revalidate a page that is dynamic anyway**.

`const router = useRouter();` allows to do programmatic navigation between routes in *Next.js*. This is the imperative way of navigating, while `<Link />` is the declarative way of navigating.

#### Spinner doesn't appear anymore

**<span style='color: #9e5231'>Error:** the reason that a spinner is not rendered in the meantime is that a navigation in Next.js is always wrapped in a React transition. And in a transition, the suspense will not hide the content that has already been rendered earlier. So that's just the default behavior of suspense that we're seeing here.

Next.js automatically wraps these page transitions or navigation, and as we're getting a new URL, we are indeed doing a navigation. And so in that case, since it is wrapped in a transition, suspense will not hide the already rendered content, it will just wait and swap it out as soon as the new content comes in.

To fix this, we pass in a unique key to `<Suspense />`, in our case the `filter` itself is the value we can use a unique key!

**<span style='color: #a8c62c'> cabins/Page.js**

```javascript
<Suspense fallback={<Loading />} key={filter}>
  <CabinList filter={filter} />
</Suspense>
```

**<span style='color: #495fcb'> Note:** the `<Filter>` component created within the `Filter.js` file will automatically be a client component, as we have the `use client` directive at the top fo this file.

#### Summary

And then as we click on each of the *filter* buttons, we just use the router.replace function to navigate to that new URL. And so thanks to Next.js, this will create a nice client site navigation. So there's not gonna be any full page reloads here.

**<span style='color: #875c5c'>IMPORTANT:** whenever the `searchParams` changes, which is a result of the URL changing, the server component here will re-render. **A server component re-renders whenever there is a navigation**.

- when we click on one of the filters, we have a navigation. So the URL changes.
- as a result of the navigation, then the `cabins/page.js` server component will re-render.
- that will then of course re-render the `CabinList` because it's a child component. And so just like in client-side React, in server-side React, also the entire child component tree will re-render.
- And so then this CabinList will just re fetch the data because the whole component will run again.

### Advanced: Server Components in Client Components

If nest a server component `SelectCountry` inside a client component `UpdateProfileForm`, it will fail as the fetching code `getCountries` won't work as the environment variables won't be found. It need to be run as a server component but this will not work as it is below the server/client boundary, and it will just become a client component.

**<span style='color: #875c5c'>IMPORTANT:** the only way in which we can render a server component in a client component is by passing it as a prop, or as a children prop.

We will now import a sever component `<SelectCountry />` inside a server component `account/profile/page.js`, so it will already create the component instance, and only that instance, this already executed component basically is then being passed into the client component, which is allowed, because all the work in has already happened:  the data fetching has happened on the server, all the JSX has run and so basically this just becomes a React element and so then that React element is what's gonna be passed into the client component.

### Data Fetching Strategies for the Reservation Section

Instead of fetching all the data here on the parent page, with `Promise.all()`, we can just create a bunch of different components and then have each component fetch all the data that it needs, and then those components can be streamed in as they become ready.

**<span style='color: #a8c62c'> cabins/[cabinId]/page.js** Instead of passing `cabin` as a prop, we could use request memoization and also do the `getCabin` request inside of `<Reservation />` component, and with this caching mechanism provided by *Nest.js*, that request wouldn't be duplicated.

```javascript
export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
// ...
  <Suspense fallback={<Spinner />}>
    <Reservation cabin={cabin} />
  </Suspense>
}
```

### Using the Context API for State Management

Remember  the filter component that we built earlier. So, whenever we clicked on one of the buttons there, the page would navigate to a different URL, which would then re-render the server component. And re-rendering the server component will then re-fetch all the data that's on the page. And so that then creates a significant delay.

**Storing in the URL** the calendar dates from our `DayPicker`  makes no sense at all. if we were to click, then store the date right here in the URL, then it would re-fetch all the data that is necessary in this server component page.

The second option would be to create a parent component and then **lift the state up** like we are already used to doing.

let's use the third option, which is to use the **context API**. just keep in mind that the context API is only going to work for **client components** because only those, can use the hooks that are necessary to read the values out of the context. So, if we wanted to share a state between client and server, then we would have to use the URL.

**<span style='color: #495fcb'> Note:** `ReservationContext.js` uses the react `useContext` hook so it needs to be a client component.

**<span style='color: #875c5c'>IMPORTANT:**  let's consider that usually a provider should always be placed as deep down as possible in the component tree in order to not cause unnecessary re-renders.

In this case, the parent component `<Reservation/>` of `DateSelector` and `ReservationForm` would be ideal. However, let's pretend that we also need this data/state  in some other places of the app. So, let's say that we want to provide this state here to our entire application tree, at least the client portion of that tree. And so, a good place to place this context is our **global  layout** around the `<main>` HTML element.

**<span style='color: #a8c62c'> app/layout.js**

```javascript
<main className='max-w-75% mx-auto w-full'>
  <ReservationProvider>{children}</ReservationProvider>
</main>
```

The `ReservationProvider` is actually a *client component*. And this `children` is the page component of whatever page that we're visiting, so this is actually a *server component*. So, we're passing in a server component into a client component, as we did with the `SelectCountry` component.

**<span style='color: #495fcb'> Note:** it is no problem, because these `{children}` have already been generated and have already been rendered on the server. So this result, the React elements have been created, and so that's what we pass now into this client component.

**<span style='color: #9e5231'>Error:** We could not use `ReservationContext.Provider` directly in the layout, because those are indeed client features and the root layout needs to be a server component. So, in order to use the *context API* in a *Next.js* application, we need to do it that way.

We can see that our context now holds the dates selected:

![image info](./35_sc4.png)

If the user selects dates and decides to change cabins, the dates will still be selected. So, this is another nice bonus of having the context. So, of having the state stored in a global object that doesn't reset as soon as the user leaves this page.

So, this reservation provider lives at the top of the tree. And so, of course, once we leave this page, the data will still be there. we can also add a nice reminder `<ReservationReminder />` at the `cabins/page.js` level.

### Creating an API Endpoint With Route Handlers

[http://192.168.1.30:3000/api/cabins/39] matches the structure/folder in our app: `app/api/cabins/[cabinId]`

- *Next.js* allows us to create an easy-to-use abstraction for someone who might want to consume our data in a custom way, and still keep our API keys private.
- we can also aggregate different *supabase* data sources into one single *JSON response*.

**<span style='color: #495fcb'> Note:** these *Next.js custom endpoints* are not that common and not that useful anymore, because now we have **server actions**.

## Authentication with NextAuth

### Setting up NextAuth

**<span style='color: #a3842c'>NextAuth.js:** [https://next-auth.js.org/] is the old library until v4. with the v5, which works with many frameworks and not only *Next.js*, it is [https://authjs.dev] it's yet a **beta version**.

#### .env.local

- NEXTAUTH_URL='<http://localhost:3000>'
- NEXTAUTH_SECRET with [https://string-gen.vercel.app/]

#### Google developer console

- [https://console.cloud.google.com/], from **Chrome**
- New Project *wild-oasis* then select this project
- OAuth Consent screen to set up the screen that's displayed when using a google account to login an app.
  - app-name: *The Wild Oasis*, support-email: [eric.xxx@gmail.com], audience: external
  - Branding: add the logo
  - Audience: add test-user: [eric.xxx@gmail.com]
- APIs & Services (if no direct access, go to dashboard, and search for *explore APIs*) / **Credentials**
  - Create Credentials - OAuth Client id (re-directs to Clients sub-menu)
    - Application-type: Web application
    - Authorized JavaScript Origin / Add URI / paste the *NEXTAUTH_URL* value of the `.env.local` [http://localhost:3000]
    - from the documentation [https://next-auth.js.org/providers/google], add [http://localhost:3000/api/auth/callback/google] to Authorized redirect URIs
    - from the pop-up window confirming the OAuth creation, paste in your `.env.local`
      - the *client ID* with key: AUTH_GOOGLE_ID
      - *client secret* with key: AUTH_GOOGLE_SECRET
      - above access disclaimer: *OAuth access is restricted to the test users  listed on your OAuth consent screen*

when everything was set-up:

![image info](./36_sc0.png)

#### NPM

from [https://authjs.dev/getting-started/installation?framework=Next.js], for *Next.js* framework: `npm install next-auth@beta`

### _lib/auth.js

**<span style='color: #a3842c'>Auth.js/Google provider:** [https://authjs.dev/getting-started/providers/google]

the catch-all segment `api/auth/[...nextauth]` means that all URLs that start with `/api/auth`, and then slash whatever, will be handled by this `auth.js`; so for example, */auth/providers* or */auth/signin*, or */auth/signout*.

**<span style='color: #a8c62c'> app/_lib/auth.js**

```javascript
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
```

**<span style='color: #a8c62c'> app/api/auth/[...nextauth]/route.js**

```javascript
export { GET, POST } from "@/app/_lib/auth";
```

![image info](./36_sc1.png)

![image info](./36_sc2.png)

**<span style='color: #495fcb'> Note:** this works here because behind the scenes, *Next.js* has created all these relevant API routes that start with `/api/auth` so that the API requests can be entirely handled by *Next.js*, and so this way, our `auth.js` stays in charge of the whole application authentication flow.

### Getting the User Session

One important is that whenever we use `auth()` function from `next-auth` in a component, it will actually make the entire route dynamic because this authentication works with **cookies and headers** This auth function needs to read these cookies from the incoming request.

Reading cookies actually switches the route to dynamic rendering because, of course, these cookies can only be known at runtime, so never at build time. So if we just statically built this site, we cannot know all the users that might eventually be logged in. So, of course, this needs to be dynamic.

**<span style='color: #875c5c'>IMPORTANT:** since we're calling this auth function in the navigation, which is part of the layout, so it is part of every single route, this makes that our entire website becomes dynamic. So every single route here is now dynamic, because of this image/ user info, coming from the `auth()` function call!

**<span style='color: #495fcb'> Note:** `reservation.js` is the server component that includes these `reservationForm`, itself a client component. there is a way of using auth.js on client components. it's highly beneficial to only deal with logged in and logged out users right **on the server**.

#### Authentication & Authorization

- authentication, which is basically getting the right information about the current user and making sure that the user actually is who they claim to be.
- So authorization is basically to only allow access of certain areas of our website or application to users that are actually logged in and have the right privilege to visit that part. So in this case, to visit a route.

### Protecting Routes With NextAuth Middleware

**<span style='color: #a8c62c'> middleware.js**

below, both `/cabins` and `/account` would redirect to `/about` as we defined that rule through our custom middleware and `matcher`.

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL('/about', request.url));
}

export const config = {
  matcher: ['/account', '/cabins'],
};
```

#### next-auth

The `auth` function of `next-auth` package, that we are using in our `app/lib/auth.js` has many different functionalities.

- it serves to get to current session
- but it also serves as a middleware function.

and below is all we have to do to protect a route defined in the `matcher`

```javascript
import { auth } from '@/app/_lib/auth';
export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
```

we also add a **callback** object into the config we pass to `NextAuth()` function.

We pass an `authorized()` function that returns either true or false.

If we return true, then the current user is authorized to go through onto that route that is being protected. But if we return false, then not. So *NextAuth* is going to call this function whenever one user tries to access this route `/account` that has been protected when added to the `matcher`.

we can pass data to this `authorized({auth, request} {...})` function:

- the first one is called `auth`, but which is actually the current session
- we also get access to the request object

**<span style='color: #495fcb'> Note:** to return a boolean from `auth.user` we can use this syntax: `!!auth?.user`

out-of-the-box is to redirect to the signin page `api/auth/signin` the unauthorized user.

### Building a Custom Sign In Page

**<span style='color: #875c5c'>IMPORTANT:** the entire flow; clicking on the `SignInButton` and its action is gonna stay on the server, and so therefore this `SignInButton` cannot be a client component.

And so since this is a server component, we actually cannot use `onClick` event on this button, because we cannot have any interactivity in a server component.

So instead, what we need to do is to create something called a **server action**. **they allow us to add interactivity also to server components, and usually to forms**.

So the idea is to connect a server action with a form, so basically  wrapping the button in the form. once the button will be clicked, then the form will automatically get submitted and when the submission is happening, the action prop that we passed gets executed. we can now pass in a special function which is called **a server action**.

**<span style='color: #a8c62c'> _lib/actions.js**

```javascript
export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}
```

- the first parameter `google` that we pass to the `signIn` function can be found in `http://localhost:3000/api/auth/providers`. as we have a single provider, we can pass it manually.
- And then as the second argument, we can pass in an object of some options. And the one we want to specify is the `redirectTo`. And so what's gonna happen is that we want the login to then redirect to the account page as soon as it has been successful, similar to an `onSuccess`. Only when the user successfully logs in to the Google provider, they will get redirected to our account route, which is a protected page.

### Building a Custom Sign Out Button

we need to wire our `signOutAction()` function to the `SignOutButton.js` component.

**<span style='color: #875c5c'>IMPORTANT:** remember that the `signOuButton` is part of the `sideNavigation`, which is  a client component, meaning that the `signOutButton` component will also be a client component, and we can now use the `onClick` prop, rather than wrapping it in a form and pass a server action to the wrapper form `action` prop.

**<span style='color: #495fcb'> Note:** we can also pass the server action, which would work even with a client component. that's a special thing about **server actions, they can even be called from the client and will still only be executed on the server**.

### Creating a new guest on first sign in

`async signIn` can be added as a new callback within the `authConfig` of `next-auth`.

this callback here actually runs before the actual sign-up process happens. And so that means that we can perform all kinds of operations here that are associated with the signing in process.

it's like middleware, if you think about it. It happens after the user has put in their credentials, but before they're actually like really logged into the application.

after a new user has been created, or the existing user has been retrieved, we're going to need the `guestId` so that we can:

- create new reservations,
- see our current reservations,
- and update our profile.

we could go fetch that ID in all those different places manually, but we can also do it just in one central place by specifying and by *writing another callback*. it will be the `session` callback, which runs after the sign in callback, and also each time that the session is checked out.

we will get the current logged in user and mutate the `session user`, and of course return the session otherwise the whole session would be broken once we call off.

**<span style='color: #a8c62c'> app/_lib/auth.js**

```javascript
async session({ session }) {
  const guest = await getGuest(session.user.email);
  session.user.guestId = guest.id; //NOTE: mutating the session user object
  return session;
},
```

**<span style='color: #495fcb'> Note:** if we do a `console.log(session)` in the `app/account/page.js`, we get our object and can now access the guestId, which has been added as we mutated our `session.user` inside our `session` callback:

![image info](./36_sc3.png)

## Mutations with Server Actions + Modern React Hooks

### What are Server Actions?

So each Server Action basically gets its own URL, which is sent to the client.

**<span style='color: #875c5c'>IMPORTANT:** it's important to note that the function itself never reaches the client, only the URL. This means that the code itself will always stay on the server and therefore, in Server Actions, it's safe to directly connect to databases, use secret API keys and so on. Again, because it's impossible that the code is leaked to the browser.

whenever a Server Action is invoked, so when it's called as a result of a user interaction, behind the scenes, a POST request will be made to the endpoint and all inputs that are sent along the request will be serialized. But as developers, we never see or use an API endpoint or a URL. It's all abstracted away in the Server Action. So all we see and use is the function itself, which looks just like any other regular function.

So we don't need to deal with the API that Next.js creates behind the scenes.

we can write server actions:

- inside the component of a server component
- a standalone module
  - `use server;` directive, which is a bridge from going to the client back to the server. So, this is not for defining server components, but really only to define server actions. any *async functions* exported from such module will become server actions.

### Updating the Profile Using a Server Action

**<span style='color: #a8c62c'> app/components/UpdateProfileForm.js**

```javascript
<form
  action={updateGuest}
  className='bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg'
>
```

we don't need any additional JavaScript above and no additional state at all. This form will simply automatically pass all the `formData` right into the `updateGuest` server action function, using the native `formData API`.

**<span style='color: #495fcb'> Note:** All our `input` fields need a name so that the `formData` can identify each fields by the name property.

**<span style='color: #495fcb'> Note:** when we select a country, the `SelectCountry` component, encodes both the country name and the flag URL separated by a *%*:   `<option key={c.name} value={`${c.name}%${c.flag}`}>`, which is what the native `formData` API will send to our server action

**<span style='color: #875c5c'>IMPORTANT:** within *Server Actions*, keep in mind that here we are now really on the backend. So, we're doing basically backend development.

And so, we need to always make sure of two things:

- First, that the user who is invoking the server action actually has the authorization of doing the action that the server action is supposed to do.
- second, we also need to always treat all the inputs as unsafe

it's a common practice in server actions, not to use a try catch declaration, but instead, we simply throw errors in the function body, and they will then just be caught by the closest error boundary, like `profile.js` or `account.js` in this example.

Once our update request is successful, the updated data will not appear because of the **browser cache** or also called the Router cache. The previous data will still be stored in the browser cache, and will only refresh after the time that the browser cache stores dynamic pages or the data of dynamic routes (30 seconds).

### Manual Cache Revalidation

what we do want is that the data always stays fresh in our user interface. So we need to clear the cache and then refill it with the fresh data.

**<span style='color: #9e5231'>Error:** the country update would fail in Next.js15 🤔, while working with the flag. Add a `key` to the `<select>` HTML element of  `<SelectCountry/>` component solved the issue.

### Displaying a Loading Indicator: The useFormStatus Hook

how can we let this form that has called the form action , that it is still doing some work, that it's performing an asynchronous action?

`useFormStatus` is a new *react-dom* hook that must be used in a component that's rendered inside a form.

### Deleting a Reservation

in our `<DeleteReservation />` component, we could add directly a server action inside the component marked with the `use server;` directive.

```javascript
function DeleteReservation({ bookingId }) {
  function deleteReservationAction() {
    'use server';
    // code...
  }
    
  return ()
}
```

**<span style='color: #875c5c'>IMPORTANT:** we cannot know if this `<DeleteReservation />` will be a client or a server component.

Even if it doesn't have the use client directive here at the top, if this was imported by a client component, then the whole component would become a client component. **And so we need to make sure that a server action always stays on the server, and always need the `'use server';` directive**

That's also why keeping all actions in a central place where the `'use server';` has been added once, and cannot be forgotten when adding new functions, is better overall.

#### malicious operation

in our *Devtools / Network* tab, if we look for the delete/post request , we can do `copy value / copy as cURL` and paste it in a terminal

we can see:

- the URL
- the cookie showing that we are authenticated on the server
- Next.js uniquely identifies each action with an ID (the API endpoint automatically created)
- `data-raw` which is the *bookingId*

**<span style='color: #9e5231'>Error:** Now what this means is that if there was any malicious user that would be logged into application, he would be already authenticated (cookie) and  he could actually delete any booking that they wanted, not just their own bookings. All they'd have to do is to grab that code, so this request code, and then change the ID and then run this `curl` command.

![image info](./37_sc1.png)

we then need to protect that route in the action and make sure that the user can only delete his ids.

### Another Loading Indicator: The useTransition Hook

So at the core, `useTransition` allows us to mark a state update as a so-called transition.

And when a state update is marked as a transition by using the useTransition hook, that state update will happen without blocking the UI, which means that the UI will stay responsive during a re-render, and we also get an indication that a state transition is happening.

- this can be useful in vanilla React for state updates
- in Next.js, we can actually use this hook to mark a server action as a transition too,

### CHALLENGE #1: Updating a Reservation

Hiding the bookingId in the `<form/>` is necessary, because server actions do not have access to the URL.

they're basically just API endpoints that run completely independently of the current URL and so we cannot really get any of the params that we get in a server component here in a server action.

### Removing Reservations Immediately: The useOptimistic Hook

with *optimistic update*, what we do is remove a booking from the UI immediately when the user clicks delete button.

So while it is actually still being deleted in the background, we're being optimistic that the deletion will indeed be successful. And if it's not, then the state will simply return and the UI will come back to this current form.

So the goal of this technique is to improve the user experience by a lot, because it makes the app feel so much faster and more responsive, without having all these loading spinners all over the place. React can help us implement this common pattern by using a new modern hook called `useOptimistic`.

**<span style='color: #875c5c'>IMPORTANT:** since we're using a hook, of course we need a client component.

We create the `ReservationList.js` client component, all we're doing now on the server is to grab the data and then we pass it onto the client, which is now responsible for rendering the reservations.

with the `useOptimistic`, we always need to be thinking basically about two types of state:

- one is the actual state, so the actual booking data,
- and one is the optimistic state.

```javascript
const [optimisticBookings, optimisticDelete] = useOptimistic(
  bookings, //NOTE: current state
  (curBookings, bookingId) => {
    return curBookings.filter((booking) => booking.id !== bookingId);
  },
);
```

#### loading.js child routes

**<span style='color: #9e5231'>Error:** in *Next.js* documentation it says that the `loading.js` that we had in the root folder would be applied to a child routes, but apparently that is not the case.

### Creating a New Reservation

When updating a booking, we also needed to pass in some additional data besides just the input fields.

in that update form, we solve this problem by adding a hidden field. And that's a great solution for the situation in which we only have few pieces of data because then we can just create one or two additional hidden fields.

**<span style='color: #875c5c'>IMPORTANT:** the second alternative besides creating a hidden field is to use the **bind method**. So what the bind method does when you call it on a function is:

- to basically set the `this` keyword of that function.
- and plus, which is the part that interests us, is that it allows us to pass some additional arguments into the function, and we can then create a brand new function.

`const createBookingWithData = createBooking.bind(null, bookingData);`

**<span style='color: #495fcb'> Note:** the `formData` argument which is automatically passed from `<form action={...}>` must always be the last argument.

**<span style='color: #495fcb'> Note:** *Zod.dev* is a very popular library to validate data.

**<span style='color: #875c5c'>IMPORTANT:** we should actually also on the server side validate that no one has already booked these dates. we did that on the client side, so we can no longer select them here on the client side, but if some malicious user wanted, they could just remove the `disabled` prop , and then they would be selectable again.

**<span style='color: #875c5c'>IMPORTANT:** remember that this on-demand revalidation `revalidatePath` clears:

- the browser cache, which is also called the router cache,
- but also at least for static sites, the data cache and full route cache, which are located on the server.

But again, these only apply for statically generated pages, and this one is dynamic. And so in this case, this will only clear the browser cache, cause that's the only one that exists.

#### resetRange() bug

Just found an interesting issue with form submissions. If I put resetRange() after callback function, it won't run. But if I put resetRange() before callback function, it works.

I am guess it is because that when the form submission succeeds, the page automatically navigates away, interrupting the JavaScript.

```javascript
action={async (formData) => {
    resetRange();  //NOTE: OK !
    await createBookingWithData(formData);  // Page navigates after this
    // resetRange();  //ERROR: This never runs!
}}
```

#### 3rd way of sending additional data to server action

a bit easier and less complicated, You can also just add the bookingData to the server action as a new parameter inside the action call:  `action={(formData) => createBooking(bookingData, formData)}`

#### UTC Time-zone issue

Below code was generated by *Supabase AI* to update the dates only

```javascript
const { data: dataDateUpdate, error: errorUpdateDate } = await supabase.rpc(
  'update_booking_date',
  {
    booking_id: bookingId,
    new_start_date: updateData.startDate,
    new_end_date: updateData.endDate,
  },
);

if (errorUpdateDate) {
  console.error('Error updating date:', errorUpdateDate);
} else {
  console.log('Number of affected rows:', dataDateUpdate);
}
```

```sql
-- DROP FUNCTION update_booking_date(bigint,timestamp with time zone,timestamp with time zone)

CREATE OR REPLACE FUNCTION update_booking_date(booking_id bigint, new_start_date timestamp with time zone, new_end_date timestamp with time zone)
RETURNS TABLE(affected_rows integer, start_date timestamp with time zone, end_date timestamp with time zone) AS $$
DECLARE
    affected_rows integer;
    
BEGIN
    UPDATE bookings
    SET "startDate" = new_start_date AT TIME ZONE 'UTC'
    WHERE id = booking_id;

    UPDATE bookings
    SET "endDate" = new_end_date AT TIME ZONE 'UTC'
    WHERE id = booking_id;

    GET DIAGNOSTICS affected_rows = ROW_COUNT;

   RETURN QUERY SELECT affected_rows, start_date, end_date;
END;
$$ LANGUAGE plpgsql;
```

in the end, this was not useful and the external library `date-fns/tz` was the most practical:

- [https://github.com/date-fns/tz]
- [https://blog.date-fns.org/v40-with-time-zone-support/]

```javascript
  const startDate = new Date(formData.get('startDate'));
  const utcStartDate = new TZDate(startDate, 'Europe/Berlin');
```

## Deployment with Vercel

### Deploying to Vercel

- create a dedicated public/private Github repository

- **<span style='color: #a3842c'>Vercel:** [https://vercel.com/]

### Updating Environment Variables and OAuth Credentials

go to `Dashboard/Settings/Environment Variables` on the Vercel platform

- NEXTAUTH_URL still points to `http://localhost:3000` and needs to be updated to `https://wild-oasis-website-rust.vercel.app/`
- [https://vercel.com/ericpantarottos-projects/wild-oasis-website/settings/environment-variables]: Environment Variables

In order to provide your Deployment with Environment Variables at Build and Runtime, you may enter them right here, for the Environment of your choice. **A new Deployment is required for your changes to take effect.**

go to `Dashboard/Deployments`, then `...`, then Redeploy

- [https://console.cloud.google.com/], then `APIs & Services`, `Credentials`, `OAuth 2.0 Client IDs`, `Add URI`:  (no ending `/`):
  - `Authorized JavaScript origins`: [https://wild-oasis-website-rust.vercel.app]
  - `Authorized redirect URIs`: [https://wild-oasis-website-rust.vercel.app/api/auth/callback/google]
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