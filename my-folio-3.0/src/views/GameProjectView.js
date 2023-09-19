import "../styles/GameProject.scss"

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logo.svg';

function GameProjectView(props) {

    const project = props.currentGame;

    return (
        <>
            <div className="game-project-container">
                {/* <img className="project-image" src={project.image} alt=""></img> */}
                <img className="project-gif" src={project.gif} alt=""></img>

                <Link to="/" className="home-link">
                    <Arrow className="arrow-up" />
                </Link>

                <Link to="/" className="logo-link" >
                    <Logo className="top-logo" />
                </Link>
                <Link to="/games" className="">
                    <Arrow className="arrow-down" />
                </Link>
            </div>
        </>
    )
}

export default GameProjectView;