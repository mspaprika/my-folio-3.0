import "../styles/WebProject.scss";

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logo.svg';


function WebProject(props) {

    const project = props.currentWeb;
    return (
        <>

            <div className="web-project-container">
                <img src={project.image} alt=""></img>

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

export default WebProject;