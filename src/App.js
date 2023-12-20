import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

function App() {

  return (
    <Routes>
			<Route path="/" element={<Home />} />
      <Route path='/search' element={<Search/>} />
    </Routes>
    
  );
}

export default App;
