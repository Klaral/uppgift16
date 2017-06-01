import React, { Component } from 'react';
import App from './App.js';

class Form extends Component {
    render(){
        return (
        <div>
            <input placeholder='name' type="text" className='nameinput' value={this.props.namevalue} onChange={this.props.handleImputName}/>
            <input placeholder='email' type="text" className= 'emailinput' value={this.props.emailvalue} onChange={this.props.handleImputEmail}/>
        </div>
        );
    }
        
}

export default Form;