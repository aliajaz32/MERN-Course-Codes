//Component
//export
//img
//button
//onclick function and function itself
import React, { useState, useEffect } from 'react'
import { register, login } from '../../config/firebase'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignup= () => {
    console.log('signUp --->', email, password)
    register(email, password)
  }
  
  const onSignin = () => {
    login(email, password)
  }

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Write email here" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write password here" />

      <button onClick={onSignup}>Register</button>
      <button onClick={onSignin}>Login</button>
    </div>
  )
}

export default Signup