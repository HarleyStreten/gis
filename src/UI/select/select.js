import React, { Component } from 'react'
import "./select.css"

export class select extends Component {
  render() {
    return (
     <select className="posts">
        <option>Гидропост1</option>
        <option>Гидропост2</option>
     </select>
    )
  }
}

export default select