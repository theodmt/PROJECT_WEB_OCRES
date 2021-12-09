import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Basdepage from './pages/Basdepage.js';

import Chimie from './pages/Chimie';
import Avis from './pages/Avis';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/Chimie' element={<Chimie/>} />
        <Route path='/Avis' element={<Avis/>} />
      </Routes>
      <Basdepage />
    </Router>
    </>
  );
}

export default App;
