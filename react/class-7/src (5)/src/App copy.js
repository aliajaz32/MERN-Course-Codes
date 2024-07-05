

/*
  Task 1 (15 minutes, 30 marks)
  - Use two images, render them conditionally
  - Create a custom Button component, use that component
  to toggle the images
*/

import { useState } from 'react'
import './App.css';
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'
import CustomBtn from './components/CustomBtn'

function App() {
  const [currentView, setCurrentView] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <CustomBtn title="Pipe" />

        <img src='https://i.makeagif.com/media/5-08-2021/CqBnXY.gif' className="App-logo" alt="logo" />
        
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Contact Us</li>
        </ul>

        {currentView && <Dashboard />}
        {currentView && <Profile />}

        <br /><br /><br /><br /><br />

        <CustomBtn onClick={() => setCurrentView(false)} title="Paana" heading="Kaisa Diya?" />

      </header>
    </div>
  )
}

export default App

/*
  Task 1 (15 minutes, 30 marks)
  - Use two images, render them conditionally
  - Create a custom Button component, use that component
  to toggle the images
*/