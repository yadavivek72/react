/**
 * <div id='parent'>
 *      <div id='child'>
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 *   <div id='child2'>
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 *
 * React Element(object) => HTML(Browser Understands)
 */
// Writing react this way is not a easy task that's why we need JSX
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    // To create sibling we can pass array of element
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    // To create sibling we can pass array of element
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
// This will print a object which is react element
console.log("heading", heading);
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// The job render function is to take this heading object which is react element and covert into browser understandable html h1 element and put it inside root
root.render(parent);

// 1 hrs 4 min
