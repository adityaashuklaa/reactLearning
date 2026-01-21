import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data) 
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  return(
    <>
      <h1>Full stack development.</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

// axios provided over the top, additional functionalities for the web requests.
// After setting up with axios and creating useEffect, the error of CORS is being generated. Cross Origin Request.
// It is fixed using whitelisting the url. you can also whitelist IP or domain.
// changing this 'http://localhost:3000/api/jokes' to axios.get('/api/jokes') will create and error of 404, as the url will not be found, but this is standarised approach, therefore proxies are being introduced over here.