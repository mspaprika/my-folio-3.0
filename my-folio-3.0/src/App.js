
import './App.scss';
import { Container } from 'react-bootstrap';

import Home from './views/Home';
import About from './views/About';
import Web from './views/Web';
import Games from './views/Games';

import { ReactComponent as Arrow } from './data/svg/arrow.svg';
import { ReactComponent as Git } from './data/svg/icons8-github.svg';
import { ReactComponent as LinkedIn } from './data/svg/icons8-linkedin.svg';
import { ReactComponent as Email } from './data/svg/icons8-email.svg';
import { ReactComponent as Twitter } from './data/svg/icons8-twitter.svg';
import { ReactComponent as Doc } from './data/svg/icons8-doc.svg';
import { ReactComponent as Logo } from './data/svg/logo.svg';

import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useNavigate, Navigate, Link } from "react-router-dom";




function App() {

  const navigate = useNavigate();

  return (
    <>


      <div className="main-container">

        <Link to="/" className="home">
          <Arrow className="arrow-up" />
        </Link>

        <Link to="/" className='logo' >
          <Logo className="top-icon" />
        </Link>
        <Link to="/about" className="left purple">About Me</Link>
        <div className="bottom">
          <Arrow className="arrow-down" />

        </div>

        <div className='icon-wrapper'>
          <div className="right-icons">
            <Git className="git" />
            <LinkedIn className="linkedin" />
            <Doc className="doc" />
          </div>
          <div className="bottom-icons">
            <Email className="email" />
            <Twitter className="twitter" />
          </div>




        </div>

        <Container>
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/web" element={<Web />} />
              <Route path="/games" element={<Games />} />
            </Routes>

          </main>
        </Container>
      </div >

    </>
  );
}

export default App;
