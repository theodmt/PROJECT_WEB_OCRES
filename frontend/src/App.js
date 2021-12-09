import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Basdepage from './components/Modal/Basdepage.js';

import Chimie from './pages/Chimie';
import Avis from './pages/Avis';
import Nosprofils from './pages/Nosprofils';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div class="page">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/Chimie' element={<Chimie/>} />
          <Route path='/Avis' element={<Avis/>} />
          <Route path='/Nosprofils' element={<Nosprofils/>} />
        </Routes>
        </div>
      <Basdepage />
    </Router>
    </>
  );
}

export default App;
