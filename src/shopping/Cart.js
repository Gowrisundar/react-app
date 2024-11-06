import React, { Component } from 'react'

export default class Cart extends Component {
    state = {item: []}
    
    
    handleAddCart(item) {
        var newArray = this.state.item.slice();    
        newArray.push(item);   
        this.setState({item:newArray})
    }

    captureText(event) {
        this.inputText = event.target.value
    }
  render() {
    return (
      <div>
        <AddCart addCartProps={(event) => {this.handleAddCart(event)}} captureText={(event) => this.captureText(event)}></AddCart>
        {/* <Display inputProps={this.inputText}></Display> */}
        <RemoveCart itemProps = {this.state} />
      </div>
    )
  }
}

export class RemoveCart extends Component {
    state = {item: []}
    
    
    static getDerivedStateFromProps(props, state) {
        if (props.itemProps !== state.item) {
            this.setState({item: props.item})
        }
        return null
    }
  render() {
    return (
      <div>
         <table className="table table-hover table-striped">
        <tbody>
            {
                this.state.item.map((item) => {
                    return <TableRow dataProps={item}></TableRow>
                })
            }
        </tbody>
      </table>
      </div>
    )
  }
}


export const AddCart = (props) => {
  return (
    <div>
        Enter Item: <input  type="text" onChange={props.captureText}></input>
        <button className="bg-info" onClick={props.addCartProps}>Enter</button>
    </div>
  )
}

export const Display = (props) => {
    return (
      <div>
          Entered Item: <h5>{props.inputProps}</h5>
      </div>
    )
  }

  export const TableRow = (props) => {
    return (
          <tr>
              <td>{props.dataProps}</td>
          </tr>
    )
  }

