
import './App.scss';

import Home from './views/Home';
import About from './views/About';
import Web from './views/Web';
import Games from './views/Games';
import Skills from './views/Skills';

import { ReactComponent as Arrow } from './data/svg/arrow.svg';
import { ReactComponent as Logo } from './data/svg/logo.svg';

import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="main-container">

        <Link to="/" className="home-link">
          <Arrow className="arrow-up" />
        </Link>

        <Link to="/" className="logo-link" >
          <Logo className="top-logo" />
        </Link>
        <Link to="/games" className="">
          <Arrow className="arrow-down" />
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/web" element={<Web />} />
          <Route path="/games" element={<Games />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

      </div >

    </>
  );
}

export default App;
