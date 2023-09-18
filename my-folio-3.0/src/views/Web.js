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
            />
        )
    }

    return (
        <>
            <div className="web-container">
                <Link to="/" className="home">
                    <Arrow className="arr-up" />
                </Link>
                <div className="card-wrapper">
                    <h1 className="headline">Web</h1>
                    {generateCards()}
                </div>

                <div>
                    <Arrow className="arr-down" />
                </div>

                <Link to="/" className="logo" >
                    <Logo className="top-logo" />
                </Link>
            </div>
        </>
    )
}

export default Web;