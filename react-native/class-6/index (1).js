import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    /*
      Kab: Sab se pehle aur ek hi baar
      Usage: 
        i. State intialization (optional: along with props)
        ii. bindings
    */
    this.state = {
      title: 'hello world',
      age: this.props.color === 'white' ? 49 : 20
    }

    this.updateState = this.updateState.bind(this)

    console.log('constructor')
  }

  //jab component render ho chukha
  componentDidMount() {
    console.log('componentDidMount')
    /* 
    Kab: 1st render honay ke baad
    Usage: 
      i. Initial API calls
      ii. Initial logic calls
    */
  }

  componentDidUpdate(prevProps, prevState) {
  // console.log('prevProps', prevProps)
  console.log('prevState', prevState)
  console.log('this.state', this.state)
  /* 
    Kab: jab state ya props change ho
    Usage: 
      i. State ya props ke change per koi bhi kaam karwalo

      Note: is ke ander jab bhi setState karwaen to 
      prevState/prevProps and currentState/currentProps dono compare
      lazmi karwana hai warna lag jae infinite loop.
    */


    console.log('componentDidUpdate')



    const { title } = this.state
    const { title: prevTitle } = prevState //alias

    if (title !== prevTitle && title === 'Kashif') {
      this.setState({
        age: 16
      })
    }
  }

  componentWillUnmount() {
    /*
      Kab: component khatam honay se pehle
      Usage: 
        1. Unsubscribe listeners
        2. Any logic
    */
  }

  // updateState = () => {
  //   console.log('this in arrow', this)
  //   this.setState({
  //     title: 'Kashif',
  //     age: 23
  //   })
  // }

  updateState(txt) {
    console.log('updateState -->', this)
    this.setState({
      title: 'Kashif',
      // age: 23
    })
  }

  render() {
    console.log('render')
    const { title, age } = this.state
    return <div>
      <h2 onClick={this.updateState}>{title}</h2>
      <h2>{age}</h2>
    </div>
  }
}

export default Dashboard


/*
  Unit test:

  1. Single function test
  2. Rendering test
  
  Class component: Both above
  Functional: 2nd
*/