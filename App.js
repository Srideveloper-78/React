// const heading=React.createElement("h1",{id:"header"}, "Hello world from React");
// const root= ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);



const parent= React.createElement("div", {id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"H1 tag"),
        React.createElement("h2",{},"H2 tag"),



    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"H1 tag"),
        React.createElement("h2",{},"H2 tag"),
    
     ]) ,
]);

console.log(parent)

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);