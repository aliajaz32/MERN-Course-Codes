import Navigation from './config/router'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h2>Header</h2>

          <Navigation />

          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Footer</h2>
        </header>
      </div>
    </Provider>
  )
}

export default App
