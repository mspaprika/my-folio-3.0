import "../styles/ProjectCards.scss";
import { Link } from 'react-router-dom';
import { webProjects } from "../library/webProjects";
import ProjectCard from "../components/ProjectCard";
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logop.svg';

function Web(props) {

    const generateCards = () => {

        return webProjects.map((project, index) =>
            <ProjectCard
                key={index}
                project={project}
                setCurrentWeb={props.setCurrentWeb}
                setNextWeb={props.setNextWeb}
            />
        )
    }

    return (
        <>
            <div className="web-container">
                <Link to="/" className="home">
                    <Arrow className="arr-up" />
                </Link>
                <h1 className="headline-web">Web...</h1>
                <div className="card-wrapper">
                    {generateCards()}
                </div>
            </div>
        </>
    )
}

export default Web;