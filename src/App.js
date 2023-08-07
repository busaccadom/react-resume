import './App.css';
import Home from './components/Home/Home.js';
import Languages from './components/Languages/Languages';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar>
      </NavBar>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Languages' element={<Languages/>} />
        <Route exact path='/Experience' element={<Experience/>} />
      </Routes>
    </>
  );
}

export default App;
