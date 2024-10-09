import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter ,Route,Routes,Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
const App=()=>{
  return (
    <div >
      <BrowserRouter>
         <Header />
         <Routes>
              <Route path='/satyaPortfolio' element={<Body/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='Contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
