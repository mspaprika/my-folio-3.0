import "../styles/ProjectCards.scss";
import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logop.svg';
import { gameProjects } from "../library/gameProjects";

function Games(props) {

    const generateCards = () => {

        return gameProjects.map((project, index) =>
            <ProjectCard
                key={index}
                project={project}
                setCurrentGame={props.setCurrentGame}
                setCurrentWeb={props.setCurrentWeb}
                setNextWeb={props.setNextWeb}

            />
        )
    }

    return (
        <>
            <div className="games-container">
                <Link to="/" className="home">
                    <Arrow className="arr-up" />
                </Link>
                <h1 className="headline-game">Games...</h1>
                <div className="card-wrapper">
                    {generateCards()}
                </div>
            </div>
        </>
    )

};

export default Games;