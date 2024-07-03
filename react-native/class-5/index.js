import React, { Component } from 'react'

class Dashboard extends Component {
  state = {
    text: 'hello world',
    status: 'pending'
  }

  updateStates = () => {
    this.setState({
      text: 'world hello',
      status: 'accepted'
    })
  }

  render() {
    const { text, status } = this.state
    console.log('this.props', this.props)
    return (
      <div>
        Hello World <br />
        Text: {text} <br />
        Status: {status} <br />

        <button onClick={this.updateStates}>Change the states</button>
      </div>
    ) 
  }
}

export default Dashboard