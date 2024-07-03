import './App.css'

function App() {
  var text = "Hello World"
  var car = {
    name: 'Civic',
    model: '1986'
  }
  var list = ['aalo', 'anday', 'doodh', 'double roti', 'halwa pori', 'chicken 16 pieces']

  return (
    <div>
      <h1>{text}</h1>
      <p>Ye P ka text hai: {text} {car.name}</p>
      <p>Car name: {car.name}</p>
      <p>Car model: {car.model}</p>

      <ul>
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

/*
  JSX= Javascript XML
*/

/*
REDUX: To store the data globally,
and make it available for every component.

PLUS POINT: It has the listener that tells every
component on each update

Flow:
1. Component
2. Action (A function that will receive data from Component)
3. Reducer (A function that will update the received data in redux/store)
4. Store

Libraries:
1. react-redux
2. redux
*/