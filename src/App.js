import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
            this.state={
                namnvalue: ""
            }
        
    }
  render() {
    return (
      <div className="App">
        <input placeholder='name'/>
        <input placeholder='email'/>
      </div>
    );
  }
        }

export default App;
