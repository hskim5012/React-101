import React from 'react';
import Square from './Square';

const App = (props) => {
    return (
        <div style = {{width:'750px'}}>
            <Square color="white" bg="blue"/>
            <Square color="blue" bg="red"/>
            <Square color="green" bg="pink"/>
        </div>
    );
};


export default App;
