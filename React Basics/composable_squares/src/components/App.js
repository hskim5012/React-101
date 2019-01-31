import React from 'react';
import Square from './Square';

const App = (props) => {
    return (
        <div>
            <Square text="white on blue" color="white" bg="blue"/>
            <Square text="blue on red" color="blue" bg="red"/>
            <Square text="green on pink" color="green" bg="pink"/>
        </div>
    );
};


export default App;
