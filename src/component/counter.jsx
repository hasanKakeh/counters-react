import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  // constructor(){
  //     super();
  //    this.handleIncrement= this.handleIncrement.bind(this);
  // }

  //    state={count:this.props.value,
  // };
  // handleIncrement=()=>{
  //    console.log(product)
  //     this.setState({count : this.state.count + 1}) ;
  // }
  // doHandleIncrement=()=>{
  //     this.handleIncrement({id:1})
  // }
  render() {
    return (
      <div>
        {" "}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.id)}
          disabled={this.props.value === 0 ? true : false}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const value = this.props.value;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
