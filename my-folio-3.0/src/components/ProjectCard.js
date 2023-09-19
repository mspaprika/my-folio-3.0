import "../styles/ProjectCards.scss"

import { ReactComponent as Git } from '../data/svg/git.svg';
import { ReactComponent as Host } from '../data/svg/tower.svg';

import { useNavigate } from 'react-router-dom';

function ProjectCard(props) {

    const project = props.project;

    const navigate = useNavigate();

    const onClickHandler = () => {
        if (project.type === "game") {
            props.setCurrentGame(project);
            navigate("/gameview")
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

                        {project.type === "game" ? "" :
                            <div className="link-section">
                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                                    <Git className="git" />
                                </a>
                                |
                                <a href={project.live} target="_blank" rel="noopener noreferrer" >
                                    <Host className="host" />
                                </a>
                            </div>}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard;