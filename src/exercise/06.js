// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'


function UsernameForm({onSubmitUsername}) {
  let [error, setError] = useState('Waiting for you to type...');

  let handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(event.target.elements[0].value)
  }
  
  let changeHandler = (event) => {
    let value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(
      isValid ? '' : 'Username must be in lowercase, sorry!'
    )
    let submitBtn = document.querySelector('button')
    isValid ? submitBtn.disabled = false : submitBtn.disabled = true
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={changeHandler} />
      </div>
      <p>{error}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
