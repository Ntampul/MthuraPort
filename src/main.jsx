
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './App.css'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contacts/>
    </BrowserRouter>
  
  </React.StrictMode>
)
