import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Namastey React using JSX</h1>;
};

// React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
    {HeadingComponent()}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
