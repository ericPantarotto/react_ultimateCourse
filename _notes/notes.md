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

### State Update Batching in practise

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
    .then((data) => setMovies(data['Search'])); // ERROR: Infinite loop of http resquests
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
    // console.log(movies); //ERROR: above line is asyncrhonous, so we will get the prev. value of movies
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

**<span style='color: #495fcb'> Note:** if we type new text in the searchBar, then only `C` and `B` are logged again, but not `A`, which has an empty dependency while `B`, with no dependency defined will be executed/synchronised on each render, which is indeed triggered when `states` or `props` of a component change.

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