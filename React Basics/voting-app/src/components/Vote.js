import React from 'react';
import './Vote.css';

class Vote extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count:0,
    }
  }


  updateCount = () => {
    this.setState({count: this.state.count + 1})
  }

  alert = () => {
    alert(`You have voted for ${this.props.framework}`)
  }

  render(){
    const { framework } = this.props;

    return(
      <div>
        <h2>{this.state.count} {framework}</h2>
        <button onClick = {() => {this.updateCount(); this.alert();}}> Vote </button>
      </div>
    );
  }
}

export default Vote;
