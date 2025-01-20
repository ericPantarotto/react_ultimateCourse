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

you can change the value of the hooks inside the `Component` view. This can be convinient to change some state variables not accessible via the UI.

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

To display the items sorted by whatever criteria we selected, we will just create a new *varialbe* which is then sorted by that criteria. **So we are not going to manipulate the original items array**. That state should stay unchanged. We will **not** create a *new state variable* here because that's totally unnecessary.

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

So with proptypes, we can basically specify the type of value that we expect the consumer of the component to pass in for each of the props.

Now, if you really care about this, you should actually just use **TypeScript** instead of JavaScript.  Developers these days don't really use `PropTypes` anymore but moved to `TypeScript`.

there's no need to install this `proptypes` package because *vite / create-React-App* already comes with this package pre-installed.

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