export default function CustomBtn(props) {
  return <div>
    <h1>{props.heading}</h1>
    <button onClick={props.onClick} style={{ backgroundColor: 'gray', color: 'white', fontSize: 30 }}>
      {props.title}
    </button>
  </div>
}

/*
  Task 1 (15 minutes, 30 marks)
  - Use two images, render them conditionally
  - Create a custom Button component, use that component
  to toggle the images
*/

/*
  Steps for Child to parent state update

  1. Create a function that will update the state.
  2. Pass that function into that child component via props
  3. Use that function on any event (for e.g. onClick)
*/