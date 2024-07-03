//Component
//export
//img
//button
//onclick function and function itself
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { register, login } from '../../config/firebase'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  const onSignin = async () => {
    try {
      await login(email, password)
      alert('Successfully Logged in Component')
      navigate('/dashboard')
    } catch (e) {

    }
  }

  return (
    <div className="column">
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Write email here" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write password here" />
      <br />
      <button onClick={onSignin}>Login</button>
      <p onClick={() => navigate('/register')}>New user? Register here</p>
    </div>
  )
}

export default Signup