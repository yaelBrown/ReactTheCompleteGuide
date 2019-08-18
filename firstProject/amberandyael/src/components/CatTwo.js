import React, { Component } from 'react'

export default class CatTwo extends Component {
  state = {
    likeCats : ''
  }

  handleChange = (e) => {
    this.setState({likeCats: e.target.value})
  }


  render() {
    return (
      <div>
        <h1>Do you like cats? {this.state.likeCats}</h1>
        <select 
        onChange={(e) => this.handleChange(e)}
        name="dropDown" 
        id="dropDown">
          <option value="yes">yes</option>
          <option value="maybe">maybe</option>
          <option value="no">naw</option>
        </select>
      </div>
    )
  }
}

// amberlikescats ?  console.log("yes") : console.log("no" )

// loading ? <Spinnerr/> : <CatTwo/>