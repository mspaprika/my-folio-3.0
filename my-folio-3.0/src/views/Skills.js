//import "../styles/ProjectCards.scss"
import "../styles/SkillsCards.scss"

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../data/svg/logo.svg';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';

import SkillsCard from "../components/SkillsCard";
import { skills } from "../library/skillsList.js"


function Skills(props) {

    const generateCards = () => {
        return skills.map((skill, index) =>
            <SkillsCard
                key={index}
                skill={skill}
            />
        )
    }

    return (
        <div className="skills-wrapper">
            <div className="skills-container">

                <Link to="/" className="home">
                    <Arrow className="arrow-up" />
                </Link>
                <h1 className="headline-skills">Skills...</h1>

                <div className="card-wrapper">
                    {generateCards()}
                </div>

                <Link to="/" className="logo-link" >
                    <Logo className="top-logo" />
                </Link>

                <Link to="/about" className="">
                    <Arrow className="arrow-down" />
                </Link>

            </div>
        </div>
    );
}

export default Skills;
