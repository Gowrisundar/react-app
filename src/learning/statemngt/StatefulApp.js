//container/parent
import React, { Component } from 'react'

export default class StatefulApp extends Component {
    state = {
        data :[
            {'id' : 101, 'name': 'Gowri', 'balance': 50000},
            {'id' : 102, 'name': 'Sundar', 'balance': 55000},
            {'id' : 103, 'name': 'Suriyanarayanan', 'balance': 58000}
        ]
    }
  render() {
    return (
      //<div>StatefulApp</div>
      <>
      <h3 className="bg-success text-light"> Account Holder Details</h3>
      <table className="table table-hover table-striped">
        <tbody>
            {
                this.state.data.map((customer,index) => {
                    return <TableRow dataProps={customer}></TableRow>
                })
            }
        </tbody>
      </table>
      </>
    )
  }
}
//presentation/child

export const TableRow = (props) => {
  return (
        <tr>
            <td>{props.dataProps.id}</td>
            <td>{props.dataProps.name}</td>
            <td>{props.dataProps.balance}</td>
        </tr>
  )
}
