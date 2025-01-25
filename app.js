// const heading = React.createElement(
//     'h1',
//     {id:'main-header'},
//     'helo from react'
// );
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
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
