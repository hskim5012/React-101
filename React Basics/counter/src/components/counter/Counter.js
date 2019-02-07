import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

      updateCount = () => {
        this.setState({count: this.state.count + 1})
    }

  render(){
    const { name } = this.props;

    const style = (this.state.count === 15)
    ? {
        backgroundColor:"red",
      } : {
        backgroundColor:"blue",
      }

    return (
      <div>
        <h1>Hello {name}!</h1>
        <button onClick= {this.updateCount} style={style}> Click Me </button>
        <p>You clicked me {this.state.count} times</p>
      </div>
    );
  }
}

export default Counter;
