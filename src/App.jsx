import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import {HomePage } from "./components/HomePage";
import  {AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import NavBar from "./components/NavBar";
import "./App.css"



function App () {

  return (
    <Router>
      <NavBar/>
     
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/contactme" element={<ContactMe/>}/>
         
      </Routes>
    </Router>
  )
}

export default App