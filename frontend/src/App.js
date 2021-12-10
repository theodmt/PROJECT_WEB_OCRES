import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Basdepage from './components/Modal/Basdepage.js';

import Chimie from './pages/Chimie';
import Maths from './pages/Maths';
import Methodologie from './pages/Methodologie';
import Physique from './pages/Physique';
import Programmation from './pages/Programmation';
import Nosprofils from './pages/Nosprofils';
import Avis from './pages/Avis';
import Tarifs from './pages/Tarifs';
import Disponibilite from './pages/Disponibilite';
import Localisation from './pages/Localisation';
import Laisseravis from './pages/Laisseravis';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div class="page">
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Nosprofils' element={<Nosprofils/>} />
        <Route path='/Avis' element={<Avis/>} />
        <Route path='/Disponibilite' element={<Disponibilite/>} />
        <Route path='/Tarifs' element={<Tarifs/>} />
        <Route path='/Localisation' element={<Localisation/>} />
        <Route path='/Laisseravis' element={<Laisseravis/>} />

        <Route path='/Chimie' element={<Chimie/>} />
        <Route path='/Maths' element={<Maths/>} />
        <Route path='/methodologie' element={<Methodologie/>} />
        <Route path='/Physique' element={<Physique/>} />
        <Route path='/Programmation' element={<Programmation/>} />

        </Routes>
        </div>
      <Basdepage />
    </Router>
    </>
  );
}

export default App;
