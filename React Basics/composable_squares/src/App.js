import React from 'react';

//functional component and stateful component
const Square = (props) => {
     
    return <h1 style={{color:props.color, fontWeight:'bold', width:'250px', height:'250px', float:'left', background:props.bg}}>{props.text}</h1>;
    // note the double curly braces here:
    // the style property needs to be a complete javascript object,
    // and since we are embedding this value, it is also being wrapped in a set of
    // curly braces for JSX
}
 
const App = (props) => {
    return (
        <div>
            <Square text="white on blue" color="white" bg="blue"/>
            <Square text="blue on red" color="blue" bg="red"/>
            <Square text="green on pink" color="green" bg="pink"/>
        </div>
    )
}


export default App;
