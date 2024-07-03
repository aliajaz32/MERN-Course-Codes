import './App.css';

function App() {
  const text = 'Altaf Bhai'
  const list = ['aalo', 'piyaz', 'timatar']
  const politicians = [
    { name: 'Saad Rizvi', party: 'TLP' },
    { name: 'Altaf bhai', party: 'MQM' },
    { name: 'Imran Khan', party: 'PTI' },
    { name: 'Asif Ali Zardari', party: 'PPP' }
  ]
  return (
    <div className="App">
      <h1>{text}</h1>

      {list.map((item) => {
        return <p>{item}</p>
      })}

      <hr />

      <h1>List of Politicians</h1>
      <ol>
        {politicians.map(item => {
          return <li>{item.name}  {item.party}</li>
        })}
      </ol>
    </div>
  )
}

export default App
