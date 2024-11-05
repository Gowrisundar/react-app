import React, { Component } from 'react'
// stateful class component - SCC - container - parent
export default class Heading extends Component {
    state={name: "Gowri Sundar Suriyanarayanan"}
  render() {
    return (
      <div>
        <h2 className="bg-warning text-center">SPA in React 18.x for {this.props.companyProps}</h2>
        <h4>by {this.state.name}</h4>
        </div>
      
    )
  }
}

Heading.defaultProps = {
    companyProps: 'Gowri Defaul Company'
}
