import Navigation from './config/router'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
