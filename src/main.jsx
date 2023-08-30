import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import './App.css'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contacts/>
  </React.StrictMode>
)
