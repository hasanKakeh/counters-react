import logo from "./logo.svg";
import "./App.css";
import Counters from "./component/counters";
import NavBar from "./component/navbar";
import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((c) => {
      if (counterId === c.id) {
        c.value += 1;
      }
      return c;
    });

    console.log(counters);
    this.setState({ counters });
  };

  handleDecrement=(counterId) => {
    const counters = this.state.counters.map((c) => {
      if (counterId === c.id &&c.value>0) {
        c.value -= 1;
      }
      return c;
    });

    console.log(counters);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  totalCount = () => {
  
  };
  render() {
    return (
      <div>
        <NavBar totalCount={ this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            
          />
        </main>
      </div>
    );
  }
}

export default App;
