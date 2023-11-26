import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import SignUpForm from './components/SignUp'
import Landing from './components/Landing'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'


const App = () => {
  return (<app className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path="/components/Login" element={<LoginForm />}/>
        <Route exact path="/components/SignUp" element={<SignUpForm />}/>
      </Routes>
    </Router>
  </app>
  )
}

export default App

