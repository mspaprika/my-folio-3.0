
import SkillsCard from "../components/SkillsCard";
import "../styles/ProjectCards.scss"
import "../styles/SkillsCards.scss"
import { skills } from "../library/skillsList.js"
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../data/svg/logo.svg';

function Skills() {


    const generateCards = () => {
        return skills.map((skill, index) =>
            <SkillsCard
                key={index}
                skill={skill}
            />
        )
    }

    return (
        <>
            <div className="skills-container">
                <h1 className="headline">Skills</h1>

                <div className="card-wrapper">
                    {generateCards()}
                </div>

                <Link to="/" className="logo-link" >
                    <Logo className="top-logo" />
                </Link>
            </div>
        </>
    );
}

export default Skills;
