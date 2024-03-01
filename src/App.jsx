import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar";
import Main from "./Component/Main";
import About from "./Component/About";
import JblPages from "./Component/Jbl/Jbl.jsx";
import JblPage from "./Component/Jbl/JblPage.jsx";
import Create from "./Component/Create.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav className="awok"/>
        <Routes>
          <Route index element={<Main />}/>
          <Route path="about" element={<About />} />
         
        
          <Route path="Jbl" element={<JblPages />} />
          <Route path="Jbl/:id" element={<JblPage />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
