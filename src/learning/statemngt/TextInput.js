import React, { Component } from 'react'
//Container
export default class TextInput extends Component {
    state = {inputText: 'Gowri'}

    handler(event) {
        this.setState({inputText: event.target.value})
    }
  render() {
    return (
      <div className="containe bg-primary text-light">
        <h4 className="bg-info">Form Details</h4>
        Company: <input type="text" id ="txt1"/>
        <br>
        </br>
        Info: <input type="text" value="BOA Offers"></input>
        <br/>
        UserName:
        <input type ="text" value={this.state.inputText} 
        onChange={ (event) => this.handler(event)}/>

        <h4>Data: {this.state.inputText}</h4>
        <Child dataProps={this.state.inputText}/>
      </div>
      

    )
  }
}

const Child = (props) => {
  return (
    <div> <h5>In Child : {props.dataProps}</h5></div>
  )
}

