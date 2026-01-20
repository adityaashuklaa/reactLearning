import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> React router dom */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App

// First we'll create a loading state, which is a good practice to follow, as whenever you're making any network call at that particular moment you can do conditional rendering, using the loading state.
// useDispatch is a merger which combines redux with react

// There are two ways to import any component in react application, common.js and module js. 
// using import is a type of module js import which is asynchonorous in nature, and the other method is require, which is synchonorous in nature.
// require syntax is used for common js, and import is used for module js.
// USing import in react will throw an error, which can be fixed by defining the type of js file which is module in the package.json file.