import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Channel from './components/Channel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {...this.props}/> 
        <Channel />
      </div>
    );
  }
}

export default App;
