
//("html element", data, children )
// const Header = (props) => {
//   //ES6
//   const { place } = props;
//   // const place = props.place;
//
//   const myColor = place === "ReactLAND" ? "red" : "blue";
//
//     return React.createElement("h1", {style:{color:myColor}}, `Hello ${place}`);
// }

//Components - function that returns an element


const App = React.createElement("div", null,
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("h2", null, "Things I need to do:"),
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Climb Mt. Everest"),
    React.createElement("li", null, "Run a marathon"),
    React.createElement("li", null, "Feed the dogs"),

);


ReactDOM.render(App, document.getElementById("root"));
