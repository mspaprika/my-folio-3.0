import "../styles/GameProject.scss"
import "../library/common.js"

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/git2.svg';
import { ReactComponent as Host } from '../data/svg/tower2.svg';

import { gameProjects } from "../library/gameProjects";

import Snake from '../data/games/SnakePass.png';
import Bendy from '../data/games/Bendy.png';
import Dark from '../data/games/Darkside.png';
import Pac from '../data/games/Pacman.png';
import Spy from '../data/games/Spy.png';
import Shroom from '../data/games/MushroomWar.png';
import Nuts from '../data/games/NutsMilk.png';
import Honse from '../data/games/Honse.png';

const games = 
{
    "SnakePass": Snake,
    "NutsMilk": Nuts,
    "Darkside": Dark,
    "Pacman": Pac,
    "Spy": Spy,
    "MushroomWar": Shroom,
    "Bendy": Bendy,
    "Honse": Honse,
}

function GameProjectView(props) {

    const navigate = useNavigate();
    let project = props.currentGame;

    if (!project) {
        project = JSON.parse(window.localStorage.getItem("currentGame"))
    }

    const nextGameProject = gameProjects.filter(pro => pro.id === project.next);
    const nextProject = nextGameProject[0];



    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, [])

    useEffect(() => {
        window.localStorage.setItem("currentGame", JSON.stringify(project))
    }, [project])

    const onClickHandler = () => {
        props.setCurrentGame(nextProject)
        navigate("/gameview")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const elementRefMain = useRef(null);  
  const [size, setSize] = useState({ width: 0, height: 0 });  

  const elementRefBot = useRef(null);  


  useEffect(() => {
    if (elementRefBot.current) {
      const { width, height } = elementRefBot.current.getBoundingClientRect();
      setSize({ width, height }); 
    }
  }, []);

    return (
        <>
            <div key={JSON.stringify(project)} ref={elementRefMain} className="game-project-container">

                <div className="game-wrapper">
                    <img 
                        className={`project-gif ${ project?.offset ? "offset-left" : "" }`} 
                        src={project?.gifs[0]} alt="">
                    </img>

                    <div className="game-title">{project.title}</div>

                    <p className="game-description text">
                        {project.description}
                    </p>

                    { project?.myCollab ? 
                    <>
                        <h3 className="game-h3">My collaboration...</h3> 
                        

                        <p className="game-description text">
                            {project?.myCollab}
                        </p>
                    </>
                    : null }

                    <h3 className="game-h3">Main features...</h3>

                    <div className="game-features">
                        {project.mainFeatures}
                    </div>

                    { project?.inspiredMsg ? 
                    <>
                        <h3 className="game-h3">Inspiration...</h3>
                        <div className="game-inspired">
                            <p className="msg">
                                {project?.inspiredMsg}
                            </p>
                            <a href={project?.inspiredLink} target="_blank" rel="noopener noreferrer" >
                                <img className="" src={games[project.inspiredPic]}></img>
                            </a>
                        </div>
                    </>
                    : null}

                    <span className="message"><i>{project.message}</i></span>
                    <div className="game-links">
                       { project.gitHub === ""  ? null :
                        <div className="git-wrapper">
                            GitHub:
                            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                                <Git className="git" />
                            </a>
                        </div>}
                        { project?.live === ""  ? null :
                        <div className="live-wrapper">
                            Live:
                            <a href={project.live} target="_blank" rel="noopener noreferrer" >
                                <Host className="host link" />
                            </a>
                        </div>}
                    </div>
                    {project.lastUpdated ?
                        <span className="last-updated"
                            style={project.gifs[1] ? 
                                { marginBottom: "800px" } : 
                                { marginBottom: "30px" }}
                        >
                            Last updated: {project.lastUpdated}
                        </span> : ""}

                    {project.gifs[1] ?
                        <img 
                        ref={elementRefBot} 
                        className={`project-gif-bottom ${ project?.offset && project.offset !== 0 ? "offset-right" : "" }`}
                        src={project.gifs[1]} 
                        alt=""></img> : ""}
                </div>

                <Link to="/games" className="home-link">
                    <Arrow className="arrow-up" />
                </Link>

                <Arrow onClick={onClickHandler} className="arrow-down" />
            </div>
        </>
    )
}

export default GameProjectView;