import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter ,Route,Routes,Router } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
const App=()=>{
  return (
    <div >
      <BrowserRouter>
         <Header/>
         <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='Contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
