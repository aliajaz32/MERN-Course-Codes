import './App.css';
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'
import CustomBtn from './components/CustomBtn'

function App() {
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

        <Dashboard />
        <Profile />

        <br /><br /><br /><br /><br />

        <CustomBtn title="Paana" heading="Kaisa Diya?" />
      </header>
    </div>
  )
}

export default App


/* Components */
/*

  1.1 Types of components in terms of usage
    i) Reusable component (bar bar use hona, CustomButton.js)
      -> src -> components

    ii) Screenwise component (Home.js, Profile.js)
      -> src -> views OR screens

  1.2 Types of components in terms of implementation
    i) Functional component
    ii) Class component
*/

/*
  Props: passing data from parent to child
*/