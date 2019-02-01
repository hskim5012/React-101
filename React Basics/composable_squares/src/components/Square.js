import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count:0,
      isHovering: false,
    }
  }

  updateCount = () => {
    this.setState({count: this.state.count + 1})
  }

  render(){
    const { color, bg } = this.props;

    const style = (this.state.isHovering)
    ? {
      backgroundColor: bg,
      border: `5px solid ${this.props.color}`
    } : {
      backgroundColor:bg,
      border: `5px solid ${this.props.bg}`
    };

    return (
      <div
        onMouseEnter = {() => this.setState({isHovering: true})}
        onMouseLeave = {() => this.setState({isHovering: false})}
        onClick={this.updateCount}
        style = {style} className="square">
        <h1 style = {{color:color}}> {color} on {bg} </h1>
        <h2>Count:{this.state.count}</h2>
      </div>
    );
  }
}

// const Square = (props) => {
//
//   const { color, bg } = props;
//
//   return (
//     <div style = {{backgroundColor: bg}} className="square">
//       <h1 style = {{color:color}}> {color} on {bg} </h1>
//     </div>
//   );
// }

export default Square;
