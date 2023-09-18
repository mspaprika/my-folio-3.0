import "../styles/ProjectCards.scss"
import "../styles/About.scss"
import { ReactComponent as Leet } from "../data/svg/leet.svg";
import { ReactComponent as CodeWars } from "../data/svg/codewars.svg";
import { ReactComponent as Logo } from '../data/svg/logop.svg';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about-container">
            <Link to="/" className="home">
                <Arrow className="arr-up" />
            </Link>

            <h1 className="headline">About Me</h1>
            <Leet className="leet" />
            <CodeWars className="codewars" />

            <Link to="/" className="logo" >
                <Logo className="top-logo" />
            </Link>

            <div>
                <Arrow className="arr-down" />
            </div>
        </div>
    );
}

export default About;