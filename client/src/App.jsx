import { React, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Fits } from './pages/fits/Page';
import { Pieces } from './pages/pieces/Page';
import { Daily } from './pages/daily/Page';
import { Layout } from './Layout';
import axios from "axios";


function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
