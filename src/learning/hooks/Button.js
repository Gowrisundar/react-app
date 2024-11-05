// import React, { Component } from 'react'

// export default class Button extends Component {

//     state = {buttonText: 'gowri'}
    
//     handleClick = () => {
//         this.setState({buttonText: "Iam changed"})
//     }

//   render() {
//     return (
//       <div>
//         <button className="btn btn-success" onClick={this.handleClick}>
//             {this.state.buttonText}
//         </button>
//       </div>
//     )
//   }
// }

import React, { useState } from 'react'

export default function Button() {
  const[buttonText, setButtonText] = useState("click Me Please")
  //const[user, setUser] = useState([])
  function handleClick() {
    setButtonText("Gowri used use state to demo this")
  }
  return (
    <>
        <button className="btn btn-danger" onClick={handleClick}>
            {buttonText}
        </button>
    </>
  )

}


