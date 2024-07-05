import { useState, useEffect } from 'react'
import Question from './components/Question'
import './App.css';


/*
  3 cases of useEffect

  1. Initially koi kam karwana ho (after first render). 
     For e.g. 
     i. Initial data fetch
     ii. Any logical function to be called

     useEffect(() => {

     }, [])
     [] is specifiying that it will run initially once.
     and is called dependency array

  2. Kisi state ya props ke 
  update hone per koi kam karwana ho.
     For e.g.
     1. Jab props.title === 'kashif',
     to kashif ka data API se fetch karlo
     is ke ilawa kuch na karo

     useEffect(() => {
        if(props.title === 'kashif') {
          //call api
        }
     }, [props.title, useLessState])

  3. End
*/


// useEffect()

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [aamirBhaiState, setAamirBhaiState] = useState(false)

  useEffect(() => {
    console.log('hello useEffect --->')
    getQuestions()
  }, [])

  useEffect(() => {
    console.log('useEffect update wala')
  }, [aamirBhaiState])

  const getQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    const tempQuestions = await response.json()
    setQuestions(tempQuestions.results)
  }

  console.log('aamirBhaiState -->', aamirBhaiState)

  if(!questions.length) return <h1>Loading</h1>

  return (
    <div className="App">
      <header className="App-header">
        {aamirBhaiState && <img width="200" src="https://thumbs.gfycat.com/AmbitiousSnappyBichonfrise-size_restricted.gif" />}

        {<Question questionObj={questions[currentIndex]} />}


        <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>

        <button onClick={() => setAamirBhaiState(!aamirBhaiState)}>Click me</button>

        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
    </div>
  )
}

export default App
