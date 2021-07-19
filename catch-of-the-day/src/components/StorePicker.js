import React from 'react';
import {getFunName} from './../helpers.js'
class StorePicker extends React.Component {
  render() {
    return ( 
    <form action = "" className = 'store-selector' >
      <h2> Please Enter A Store</h2>
import {getFunName} from './../helpers.js'
      <input type="text" required placeholder='Store name' defaultValue={getFunName()}/>
      <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;