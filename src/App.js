import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Form from './Form.js';


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
    
    clearButton(){
      this.setState({
          nameValue: "",
          emailValue: ""
      });
  }
    
  render() {
    return (
      <div className="App">
       <Form handleImputName={this.handleImputName}
                handleImputEmail={this.handleImputEmail}
                namnvalue={this.state.namnvalue}
                emailvalue={this.state.emailvalue}/>
            
            <Button clearButton={this.clearButton}/>
      </div>
    );
  }
    
  
    }
        



export default App;

