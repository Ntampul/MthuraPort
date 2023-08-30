// src/App.js
// import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contacts />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
