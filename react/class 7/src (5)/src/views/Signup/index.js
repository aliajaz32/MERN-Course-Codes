//Component
//export
//img
//button
//onclick function and function itself
import React, { useState, useEffect } from 'react'
import { register, login } from '../../config/firebase'
import './index.css'

function Signup() {
  const [fullname, setFullname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignup= () => {
    console.log('signUp --->', email, password)
    register(email, password, fullname, phoneNumber)
  }
  
  const onSignin = async () => {
    try {
      await login(email, password)
      alert('Successfully Logged in Component')
    } catch (e) {

    }
  }

  return (
    <div className="column">
      <input
        onChange={(e) => setFullname(e.target.value)}
        placeholder="Write fullname here" />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Write email here" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write password here" />
      <input
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Write phone number here" />

      <br />
      <button onClick={onSignup}>Register</button>
      <button onClick={onSignin}>Login</button>
    </div>
  )
}

export default Signup