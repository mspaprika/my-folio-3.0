import "../styles/SkillsCards.scss"
import "../styles/ProjectCards.scss"
import { skills } from "../library/skillsList";

import cave from "../data/images/cave.jpg";


function SkillsCard(props) {

    const skill = props.skill;
    const color = skill.color;

    return (
        <>
            <div className="flip-card skill-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundColor: color }}>

                    </div>
                    <div className="flip-card-back">
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsCard;