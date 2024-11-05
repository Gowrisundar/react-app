import React, { Component } from 'react'

export default class DataFlow extends Component {

    state = {data : 'Computer'}

    handler(event) {
        this.setState({data: event.target.value})
    }

  render() {
    return (
      <div className ="bg-warning"> 
      <h1>Parent component</h1>
      <h2>Search : {this.state.data}</h2>
      <Search dataProps = {this.state.data} updateStateProp= {(event) => this.handler(event)}/>
    <Result dataProps = {this.state.data}/>
      </div>
    )
  }
}


const Search = (props) => {
  return (
    <div>
        search: <input type = "text" value = {props.dataProps}
        onChange={props.updateStateProp}/>
    </div>
  )
}

const Result = (props) => {
    return (
      <div>
          <h2>Search Data: {props.dataProps}</h2>
      </div>
    )
  }

