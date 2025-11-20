import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup'
import Log from './Log'
import Dashboard from './Dashboard';
import Details from './Details';
import Homepage from './Homepage';
import Halls from './Halls';
import HallUpload from './postHall';


function App() {

  

  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login" element={<Log/>}/>
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/halls" element={<Halls/>}/>
        <Route path="/HallUpload" element={<HallUpload/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
