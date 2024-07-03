export default function CustomBtn(props) {
  return <div>
    <h1>{props.heading}</h1>
    <button style={{ backgroundColor: 'gray', color: 'white', fontSize: 30 }}>
      {props.title}
    </button>
  </div>
}