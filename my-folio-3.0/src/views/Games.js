import "../styles/ProjectCards.scss";
import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logop.svg';
import { gameProjects } from "../library/gameProjects";

function Games() {

    const generateCards = () => {

        return gameProjects.map((project, index) =>
            <ProjectCard
                key={index}
                project={project}
            />
        )
    }

    return (
        <>
            <div className="games-container">
                <Link to="/" className="home">
                    <Arrow className="arr-up" />
                </Link>
                <div className="card-wrapper">
                    <h1 className="headline">Games</h1>
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

};

export default Games;