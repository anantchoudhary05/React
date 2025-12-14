const heading = React.createElement("h1", { id: "heading" }, "Hello form react app");
const root = ReactDOM.createRoot(document.getElementById("root"));


//react nested structure

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 tag from child1"),
        React.createElement("h2", {}, "I am h2 tag from child1")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 tag from child2"),
        React.createElement("h2", {}, "I am h2 tag from child2")])]
);
        //if we want to add more sibiling tag one after another to parent then we can do like this
root.render(parent);

//adding both heading and parent to the root
// root.render([parent,heading]);
