import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

/*
 State vs Variable

 - On updating state, component rerenders, so that it renders with updated values
 - On updating variable, component doesn't rerender

 - States are directly immutable (unchangable)
*/

function App() {
  const text = 'Expertizo University'
  const car = {
    name: 'Civic',
    model: 1986
  }
  const tourExpenses = ['ticket', 'tour car', 'fuel', 'khaapa', 'hoteling', 'first aid']
  const cars = [{
    name: 'Civic',
    model: 1986
  }, {
    name: 'Cultus VXL',
    model: 2001
  }, {
    name: 'Cultus VXL',
    model: 2003
  }, {
    name: 'Prado',
    model: 2020
  }, {
    name: 'Mehran',
    model: 2010
  }]

  // let aamirBhaiSleep = true
  const [aamirBhaiSleep, setAamirBhaiSleep] = useState(true)
        //state name, state updating function

  const sleepImage = 'https://reviewit.pk/wp-content/uploads/2020/09/FotoJet-1-8.jpg'
  const awakeImage = 'https://www.geo.tv/assets/uploads/updates/2021-10-04/373846_7152442_updates.jpg'

  const makeAamirAwake = () => {
    // aamirBhaiSleep = false
    setAamirBhaiSleep(false)
  }

  const makeAamirSleep = () => {
    // aamirBhaiSleep = true
    setAamirBhaiSleep(true)
  }

  console.log('aamir Bhai sleep from bahar', aamirBhaiSleep)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://expertizo.pk/university"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn from {text}
        </a>

        <br /><br /><br />

        <table border="1">
          <tr>
            <th>Car Name</th>
            <th>Car Model</th>
          </tr>
          <tr>
            <td>{car.name}</td>
            <td>{car.model}</td>
          </tr>
        </table>

        <ul>
          {tourExpenses.map((item) => {
            return <li>{item} - kashif</li>
          })}
        </ul>

        <table border="2">
          <tr>
            <th>Car Name</th>
            <th>Car Model</th>
          </tr>
          {cars.map(car => {
            return <tr>
              <td>{car.name}</td>
              <td>{car.model}</td>
            </tr>
          })}
        </table>

        <br /><br /><br /><br /><br />

        {/* Conditional Rendering */}
        

        {/* Binary Operator */}
        {/* {aamirBhaiSleep && <img width="400" src="https://reviewit.pk/wp-content/uploads/2020/09/FotoJet-1-8.jpg" />}
        {!aamirBhaiSleep && <img width="400" src="https://www.geo.tv/assets/uploads/updates/2021-10-04/373846_7152442_updates.jpg" />} */}


        {/* Ternary Operator */}

        {/* {aamirBhaiSleep ? 
          <img width="400" src="https://reviewit.pk/wp-content/uploads/2020/09/FotoJet-1-8.jpg" />
          :
          <img width="400" src="https://www.geo.tv/assets/uploads/updates/2021-10-04/373846_7152442_updates.jpg" />
        } */}

        <img width="400" src={aamirBhaiSleep ? sleepImage : awakeImage} />

        {aamirBhaiSleep ?
          <button onClick={makeAamirAwake}>Aamir bhai ko uthao</button>
          : 
          <button onClick={makeAamirSleep}>Aamir bhai ko sulao</button>
        }

        <br /><br /><br /><br /><br />
      </header>
    </div>
  );
}

export default App;
