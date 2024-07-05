import { useState } from 'react'
import './App.css';

/*
  Variable vs State
  =================
  Both are storing data tools
  but the difference is that, when we update
  the variable, it will not rerender the component,
  thus we don't get the updated value.

  Whereas, when state updates, it rerenders the component,
  thus we get the update value.
*/

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h3>{count}</h3>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
