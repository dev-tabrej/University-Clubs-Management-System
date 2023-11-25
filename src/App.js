import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import SignUpForm from './components/SignUp'
import Landing from './components/Landing'


const App = () => {
  return (<app className="app">
    <Navbar />
    {/* <Landing/> */}
    {/* <LoginForm /> */}
    <SignUpForm/>
  </app>
  )
}

export default App

