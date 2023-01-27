
import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formnavbar from './Components/Formnavbar';
import Home from './Components/Home';
import Weather from"./Components/Weather"

const Newcontext=createContext();

function App() {

  const[hide,sethide]=useState([]);
  const [New,setNew]=useState(true);

  return (
    <div>
      <Newcontext.Provider value={{value1:[hide,sethide],value2:[New,setNew]}}>
        <BrowserRouter>
        <Formnavbar/>
         <Routes>
  
  {/* <Route path="/details/:id" element={ <Detailpage/>}></Route> */}
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/" element={<Weather/>}></Route>
  
  
</Routes>
        </BrowserRouter>
      </Newcontext.Provider>
    </div>
  )
}

export default App
export {Newcontext}

















