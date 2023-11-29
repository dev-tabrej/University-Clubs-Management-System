import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import SignUpForm from './components/SignUp'
import Landing from './components/Landing'
import ClubList from './components/ClubList'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (<div className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/components/ClubList' element={< ClubList />}/>
        <Route exact path="/components/Login" element={<LoginForm />} />
        <Route exact path="/components/SignUp" element={<SignUpForm />} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  )
}

export default App

