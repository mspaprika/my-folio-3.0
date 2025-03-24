import "../styles/ProjectCards.scss"

import { useNavigate } from 'react-router-dom';

import { ReactComponent as Git } from '../data/svg/git.svg';
import { ReactComponent as Host } from '../data/svg/tower.svg';

import { icons } from "../library/icons";
import UE from '../data/png/ue.png';

const pngs = [ UE ];

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
        } else {
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
                            <h3>{project.title}{project?.emoji}</h3>
                        </div>
                        <div className="card-middle">

                            <div className="skill-icons">
                                {project.icons.map((icon, index) =>
                                <>
                                <span key={index}>
                                        {icons[icon] ? icons[icon] : ""}
                                </span>   
                                </>
                                )}
                                {pngs.map((png, index) =>
                                project.png?.[index] ? 
                                <img src={pngs[index]} className="skill-png">
                                </img> 
                                : null
                                )}
                            </div>
                            {project.mainFeatures}
                        </div>
                        <button onClick={onClickHandler} className="card-button">See More</button>


                        <div className="link-section">
                        { project.gitHub === ""  ? null :
                        <>
                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                                    <Git className="git" />
                                </a>
                            </>}
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