
import './App.scss';

import GameProjectView from './views/GameProjectView';
import WebProjectView from './views/WebProjectView';

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

  const [currentGame, setCurrentGame] = useState({
    id: 1,
    title: "",
    description: "",
    image: "",
    mainFeatures: "",
    myCollab: "",
    gitHub: "",
    gitHubFront: "",
    gitHubBack: "",
    live: "",
    lastUpdated: "",
    message: "",

  });

  const [currentWeb, setCurrentWeb] = useState({
    id: 1,
    type: "",
    title: "",
    description: "",
    image: "spy",
    gif: "spyGif",
    mainFeatures: "",
    gitHub: "",
    live: "",
    lastUpdated: "",
    message: "",
  });

  const [nextPage, setNextPage] = useState("/games")

  const [nextGame, setNextGame] = useState({
    id: 1,
    title: "",
    description: "",
    image: "",
    mainFeatures: "",
    myCollab: "",
    gitHub: "",
    gitHubFront: "",
    gitHubBack: "",
    live: "",
    lastUpdated: "",
    message: "",
  })


  const [nextWeb, setNextWeb] = useState(
    {
      id: 1,
      type: "",
      title: "",
      description: "",
      image: "spy",
      gif: "spyGif",
      mainFeatures: "",
      gitHub: "",
      live: "",
      lastUpdated: "",
      message: "",
    })

  return (
    <>
      <div className="main-container">

        <Routes>
          <Route path="/" element={
            <Home
              setNextPage={setNextPage}
              setNextGame={setNextGame}
              setNextWeb={setNextWeb}
              nextPage={nextPage}
              nextGame={nextGame}
              nextWeb={nextWeb}
            />} />
          <Route path="/about" element={
            <About
              setNextPage={setNextPage}
              nextPage={nextPage}
            />} />
          <Route path="/web" element={
            <Web
              setCurrentWeb={setCurrentWeb}
              setNextWeb={setNextWeb}
            />} />
          <Route path="/games" element={
            <Games
              setCurrentGame={setCurrentGame}
              setCurrentWeb={setCurrentWeb}
              setNextGame={setNextGame}

            />} />
          <Route path="/skills" element={
            <Skills
              setNextPage={setNextPage}
              nextPage={nextPage}
            />} />
          <Route path="/gameview" element={
            <GameProjectView
              currentGame={currentGame}
              setCurrentGame={setCurrentGame}
              nextGame={nextGame}

            />} />
          <Route path="/webview" element={
            <WebProjectView
              currentWeb={currentWeb}
              setCurrentWeb={setCurrentWeb}
              nextWeb={nextWeb}
            />} />
        </Routes>

      </div >

    </>
  );
}

export default App;

/* 
 */