import CustomBtn from '../../components/CustomBtn'

export default function Profile() {
  return <div style={{ backgroundColor: 'green' }}>
    <h1>Profile Page</h1>

    <CustomBtn onClick={() => console.log('hey')} title="Shuf!" />
  </div>
}