import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from  "./Components";
import { About, Contacts, Home, Skills, Projects } from "./components";
import "./components/Home.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Projects" element={< Projects />} />
      </Routes>
    </div>
     );
    }
    
    export default App;
