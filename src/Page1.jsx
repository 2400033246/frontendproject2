import React, { Component } from 'react'
import{Link} from 'react-router-dom';
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>India is my country</h1>
        <br/><br/>
               <Link to="/page2">Go To Page2</Link>
                       <Link to="/">Go To HomePage</Link>
      </div>
    )
  }
}
