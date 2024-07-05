import { useState, useEffect } from 'react'
import Question from './components/Question'
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    const tempQuestions = await response.json()
    setQuestions(tempQuestions.results)
  }

  console.log('questions -->', questions)

  if(!questions.length) return <h1>Loading</h1>

  return (
    <div className="App">
      <header className="App-header">
        {/* {questions[0].question} */}
        <Question questionObj={questions[currentIndex]} />

        <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>
      </header>
    </div>
  )
}

export default App

/*
  Task 2 (30 minutes, 70 marks)
    Task 2.1 (10 minute):
    - Create a Question component having question UI
    - Render each question one by one in that component
    - Create a Next button
    - At last question, it should render Restart button that
    will render first question again

    Task 2.2:
*/