import React from "react";
import ReactDOM from "react-dom/client";



  

const root = ReactDOM.createRoot(document.getElementById("root"));




//react nested structure

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1",key:"child1" },
        [React.createElement("h1", {id:"head1",key:"head1"}, "I am h1 tag from child1"),
        React.createElement("h2", {id:"head2",key:"head2"}, "I am h2 tag from child1")]
    ),
    React.createElement("div", { id: "child2",key:"child2" },
        [React.createElement("h1", {id:"head3",key:"head3"}, "I am h1 tag from child2"),
        React.createElement("h2", {id:"head4",key:"head4"}, "I am h2 tag from child2")])]
);
        //if we want to add more sibiling tag one after another to parent then we can do like this
root.render(parent);

//adding both heading and parent to the root
// root.render([parent,heading]);
