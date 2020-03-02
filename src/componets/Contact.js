import React from "react";
import { Component } from "react";
import "./contact.css";

class Contact extends Component {
    
    state = {
        myValue:'my First Company',
        myValue1 :'this is new Value'
    }
    changeHandler=()=>{ ///add()
       this.setState({
            myValue: 'my next company'
        })
    }
    
  render() {
    return (
      <div className="contact">
        <h2>HI {this.props.name}</h2>
        <p>This is class based component</p>
        <p>My age is {this.props.age}</p>
    <p>{this.state.myValue}</p>
    <button onClick={this.changeHandler}>ChangeMyCompanyName</button>
      </div>
    );
  }
}

export default Contact;
