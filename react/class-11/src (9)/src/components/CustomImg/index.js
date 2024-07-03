import { useEffect } from "react"

/*
  jab hum ne CustomImg component me
  useEffect me ek listener chalaya.
  To hum ne dekha ke CustomImg khatam
  honay ke baad bhi listener chal raha hai
  jo ke intehae bekar baat hai.
  Is ka hal ye hai ke useEffect ke third
  case yani return () => {} me is listener
  ko khatam karden
*/

function CustomImg(props) {
  useEffect(() => {
    console.log('Aamir bhai aae')

    document.addEventListener('click', () => {
      console.log('click from image component')
    })

    return () => {
      console.log('Aamir Bhai Chal Basay')
      //function1
      //function2
      // document.removeEventListener
    }
  }, [])


  return (
    <div>
      <img width="200" src={props.src} />
    </div>
  )
}

export default CustomImg