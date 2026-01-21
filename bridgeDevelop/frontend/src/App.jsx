import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  return(
    <>
      <h1>Full stack development.</h1>
      <p>Jokes: {jokes.length}</p>
    </>
  )
}

export default App
