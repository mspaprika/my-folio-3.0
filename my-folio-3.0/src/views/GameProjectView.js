import "../styles/GameProject.scss"

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/git2.svg';

import { gameProjects } from "../library/gameProjects";

import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";

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
        navigate("/gameview")
        props.setCurrentGame(nextProject)
    }


    return (
        <>
            <div className="game-project-container">

                <div className="game-wrapper" >
                    <img className="project-gif" src={project?.gifs[0]} alt=""></img>


                    <div className="game-title">{project.title}</div>


                    <p className="game-description">
                        {project.description}
                    </p>

                    <h3 className="game-features game-h3">Main features...</h3>

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
                    {project.lastUpdated ?
                        <span className="last-updated"
                            style={project.gifs[1] ? { marginBottom: "800px" } : { marginBottom: "30px" }}

                        >
                            Last updated: {project.lastUpdated}
                        </span> : ""}

                    {project.gifs[1] ?
                        <img className="project-gif-bottom" src={project.gifs[1]} alt=""></img> : ""}

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