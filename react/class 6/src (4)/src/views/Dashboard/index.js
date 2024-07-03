import CustomBtn from '../../components/CustomBtn'

function Dashboard() {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1> Dashboard </h1>
      <CustomBtn onClick={() => alert('Hello World')} title="Chamatein" />
      <p> Shuf Shuf!!!! </p>
    </div>
  )
}

export default Dashboard