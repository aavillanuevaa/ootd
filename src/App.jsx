import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Fits } from './pages/fits/Page';
import { Pieces } from './pages/pieces/Page';
import { Daily } from './pages/daily/Page';
import { Layout } from './Layout';


function App() {

  return (
    <>  
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Fits/>}/>
            <Route path="/pieces" element={<Pieces/>}/>
            <Route path="/daily" element={<Daily/>}/>
          </Route>
        </Routes>
      </Router>  
    </>
      
  );
}

export default App
