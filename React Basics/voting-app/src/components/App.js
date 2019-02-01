import React from 'react';
import Vote from './Vote';

const App = (props) => {
    return (
        <div>
            <Vote framework="React"/>
            <Vote framework="Vue"/>
            <Vote framework="Angular"/>
            <Vote framework="Ember"/>
        </div>
    );
};


export default App;
