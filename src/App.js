import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MenuComponent from './components/menu';
import Staff from './components/staff';
import Kitchen from './components/kitchen';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </>
  );
};

export default App;
