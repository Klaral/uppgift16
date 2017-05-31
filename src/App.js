import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

class App extends Component {
    constructor(props){
        super(props);
            this.state={
                namnvalue: "",
                emailvalue: ""
            }
            this.handleImputName=this.handleImputName.bind(this);
            this.handleImputEmail=this.handleImputEmail.bind(this);
            this.clearButton = this.clearButton.bind(this);
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
    
    clearButton(event){
      this.setState({
          nameValue: "",
          emailValue: ""
      });
  }
    
  render() {
    return (
      <div className="App">
       <input placeholder='name' className='nameinput' value={this.state.namevalue} onChange={this.handleImputName}/>
        <input placeholder='email' className= 'emailinput' value={this.state.emailvalue} onChange={this.handleImputEmail}/>
            
            <Button clearButton={this.clearButton}/>
      </div>
    );
  }
        }



export default App;

