import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';

class App extends Component {
  state = {
    demoComponentVisible: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ demoComponentVisible: false });
    }, 8000);
  }

  render() {
    return (
      <div className="App">{this.state.demoComponentVisible && <Demo />}</div>
    );
  }
}

export default App;
