import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
            this.state={
                namnvalue: "",
                emailvalue: ""
            }
            this.handleImputName=this.handleImputName.bind(this);
            this.handleImputEmail=this.handleImputEmail.bind(this);
            
            }
    handleImputName(event){
                this.setState({
                    namevalue: event.target.value
                })
    }
    handleImputEmail(event){
                this.setState({
                    emailvalue: event.target.value
                })
        
    }
  render() {
    return (
      <div className="App">
       <input placeholder='name' className='nameinput' value={this.state.namevalue} onChange={this.handleImputName}/>
        <input placeholder='email' className= 'emailinput' value={this.state.emailvalue} onChange={this.handleImputEmail}/>
      </div>
    );
  }
        }



export default App;

