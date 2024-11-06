import React, { Component } from 'react'

export default class Cart extends Component {
    state = {item: []}
    inputText=''
    
    handleAddCart(item) {
        var newArray = this.state.item.slice();    
        newArray.push(this.inputText);   
        this.setState({item:newArray})
    }

    handleRemoveCart(item) {
      var newArray = this.state.item.slice();    
      newArray.pop(this.inputText);   
      this.setState({item:newArray})
    }

    captureText(event) {
        this.inputText = event.target.value
    }

    captureRemoveText(event) {
      this.inputText = event.target.value
    }
  render() {
    return (
      <div>
        <AddCart addCartProps={(event) => {this.handleAddCart(event)}} captureText={(event) => this.captureText(event)}></AddCart>
        {/* <Display inputProps={this.inputText}></Display> */}
        <ShowCart itemProps = {this.state.item} />
        <RemoveFromCart removeCartProps={(event) => {this.handleRemoveCart(event)}} removeText={(event)=>{this.captureRemoveText(event)}}></RemoveFromCart>
      </div>
    )
  }
}

// export class RemoveCart extends Component {
   
    
    
    
//   render() {
//     return (
//       <div>
//          <table className="table table-hover table-striped">
//         <tbody>
//             {
//                 this.state.item.map((item) => {
//                     return <TableRow dataProps={item}></TableRow>
//                 })
//             }
//         </tbody>
//       </table>
//       </div>
//     )
//   }
// }


export const ShowCart = (props) => {
  return (
    <div>
         <table className="table table-hover table-striped">
        <tbody>
            {
                props.itemProps.map((item) => {
                    return <TableRow dataProps={item}></TableRow>
                })
            }
        </tbody>
      </table>
      </div>
  )
}

export const RemoveFromCart = (props) => {
  return (
    <div>
        Enter Item remove: <input  type="text" onChange={props.removeText}></input>
        <button className="bg-info" onClick={props.removeCartProps}>Enter</button>
    </div>
  )
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

