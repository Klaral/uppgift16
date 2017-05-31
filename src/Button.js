import React, {Component} from 'react';

class Button extends Component {
    render(){
        return (
        <div>
            <button className="buttonClass" onClick={this.props.clearButton}>Clear</button>
        </div>
        );
    }
}

export default Button;