import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// jSX - HTML- like or XML - like syntax
// JSX (transpiled or converted in to JS engine understandle code before it reaches the JS engine)
// even your react.render doesn't understand jsx
// parcel transpiled jsx to browser understandble code using babel

const jsxHeading = <h1>Namaste React using JSX</h1>;

console.log("jsx", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// The job render function is to take this heading object which is react element and covert into browser understandable html h1 element and put it inside root
root.render(heading);
