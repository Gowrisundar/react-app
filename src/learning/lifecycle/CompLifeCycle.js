import React, { Component } from 'react'

export default class CompLifeCycle extends Component {

    state = {data:0, msg: 'Gowri coding'}

    handleClick() {
        this.setState({data: this.state.data + 1})
    }

  render() {
    return (
      <div className="bg-warning">
        <button className="btn btn-primary" onClick={ () => this.handleClick()}>Increment</button>
        <h4>Data: {this.state.data} </h4>
        <h4>Message: {this.state.msg} </h4>
        <Child dataProps={this.state.data}/>
      </div>
    )
  }
}

//---
class Child extends Component {
    //Constructor
    constructor(props) {
        super(props)
        this.state = {username: 'Gowri', address: 'mumbai', email: 'sundar@email.com'}
        console.log(`In constructor of the child : ${props.dataProps}`)
    }
    
    componentDidMount() {
        console.log(`In CDM of the child : ${this.props.dataProps}`)
    }
  render() {
    return (
      <div className="bg-warning">
       <h2>Child Component</h2> 
       Counter: <h3 id='txt1'>{this.props.dataProps}</h3>
       <h2>data: {this.state.username} </h2>
       <h5>{this.state.address} - {this.state.email}</h5>
      </div>
    )
  }

  static getDerivedStateFromProps(props,state) {
    console.log(`In FDSFP of the child : ${props.dataProps} - ${state.username}`)
    return {address: 'chennai', email: 'xyz@gmail.com'}
  }

//   static getDerivedStateFromProps(props,state) {
//     console.log(`In FDSFP of the child : ${this.props.dataProps} - ${this.state.username}`)
//     return {}
//   }

shouldComponentUpdate(props) {
    if(props.dataProps>5) {
        return true
    } else {
        return false
    }
}

componentDidCatch(error) {
    console.error(error)
}

componentWillUnmount() {

}

}

