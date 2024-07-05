import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

/* Todo App */
/*
  Create
  Read
  Update
  Delete
*/

function App() {
  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState('')

  const addTodo = () => {
    //Things required:
    //1. todoList
    //2. input ka text
    console.log('todoList --->', todoList)
    console.log('inputText --->', inputText)
    // todoList.push(inputText) WRONG because states are directly immutable

    const tempList = [...todoList]
    tempList.push(inputText)
    setTodoList(tempList)
  }

  const deleteItem = () => {

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i.ytimg.com/vi/EB3C0qslBqI/mqdefault.jpg' className="App-logo" alt="logo" />

        <br /><br /><br /><br /><br />

        <input onChange={(e) => setInputText(e.target.value)} placeholder="Enter any item" />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todoList.map(item => {
            return <li>
              {item}
              <button>Edit</button>
              <button>Delete</button>
              </li>
          })}
        </ul>

        <br /><br /><br /><br /><br />
      </header>
    </div>
  );
}

export default App;
