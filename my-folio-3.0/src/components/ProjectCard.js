import "../styles/ProjectCards.scss"

import { ReactComponent as Git } from '../data/svg/git.svg';
import { ReactComponent as Host } from '../data/svg/tower.svg';

import { webProjects } from "../library/webProjects";

import { useNavigate } from 'react-router-dom';

function ProjectCard(props) {


    const project = props.project;

    const navigate = useNavigate();

    const onClickHandler = () => {

        if (project.type === "game") {

            if (project.title === "Escape Nuclear Mine" || project.title === "Tic Tac Toe") {
                props.setCurrentWeb(project);
                navigate("/webview")
            } else {
                props.setCurrentGame(project);
                navigate("/gameview")
            }
        }

        else {
            props.setCurrentWeb(project);
            navigate("/webview")
        }
    }

    return (

        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                        <img src={project.image} alt="project" />

                    </div>
                    <div className="flip-card-back">
                        <div className="card-title">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="card-middle">
                            {project.mainFeatures}
                        </div>
                        <button onClick={onClickHandler} className="card-button">See More</button>

                        <div className="link-section">
                            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                                <Git className="git" />
                            </a>
                            {project.type === "game" ? "" :

                                <a href={project.live} target="_blank" rel="noopener noreferrer" >
                                    <Host className="host" />
                                </a>}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard;