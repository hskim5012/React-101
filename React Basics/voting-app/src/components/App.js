import React from 'react';
import Vote from './Vote';
import './App.css'

const App = (props) => {
    return (
        <div class="container">
            <Vote framework="React"/>
            <Vote framework="Vue"/>
            <Vote framework="Angular"/>
            <Vote framework="Ember"/>
        </div>
    );
};


export default App;
