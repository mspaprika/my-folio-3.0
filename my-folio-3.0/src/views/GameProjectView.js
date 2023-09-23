import "../styles/GameProject.scss"

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/git2.svg';

import { useEffect } from "react";

function GameProjectView(props) {

    let isMobile = window.innerWidth < 700;

    const project = props.currentGame;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="game-project-container">

                <div className="game-wrapper" >
                    <img className="project-gif" src={project.gifs[0]} alt=""></img>

                    <div>
                        <h1 className="game-title">{project.title}</h1>
                    </div>

                    <p className="game-description">
                        {project.description}
                    </p>

                    <h3>Main features...</h3>

                    <div className="game-features">
                        {project.mainFeatures}
                    </div>

                    <span className="message"><i>{project.message}</i></span>
                    <div className="game-links">
                        GitHub:
                        <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                            <Git className="git" />
                        </a>
                    </div>
                    <span className="last-updated"
                        style={project.gifs[1] ? { marginBottom: "800px" } : { marginBottom: "30px" }}

                    >
                        Last updated: {project.lastUpdated}
                    </span>

                    {project.gifs[1] ?
                        <img className="project-gif-bottom" src={project.gifs[1]} alt=""></img> : ""}

                </div>

                <Link to="/games" className="home-link">
                    <Arrow className="arrow-up" />
                </Link>

                <Link to="/games" className="">
                    <Arrow className="arrow-down" />
                </Link>
            </div>
        </>
    )
}

export default GameProjectView;