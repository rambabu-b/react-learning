import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     'h1',
//     {id:'main-header'},
//     'helo from react'
// );

//using react
const parent = React.createElement("div", { id: "parent" }, [
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "iam-h1" }, "i am h1"),
      React.createElement("h2", { id: "iam-h2" }, "i am h2q"),
    ]),
    [
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "iam-h1" }, "i am h1"),
        React.createElement("h2", { id: "iam-h2" }, "i am h2q"),
      ]),
    ],
  ]
]);
const TitleComponent = () => (
  <div>
    {parent}
    <span> small heading</span>
  </div>
);
// using jxs it a html like syntax.
//babel is the one who converts the jsx into react code to understand by js engine.
const HeadingComponent = () => (
  <>
    <h1 id="main-header">react learning </h1>
    <TitleComponent />
  </>
);
//console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
