import "../styles/SkillsCards.scss"
import "../styles/ProjectCards.scss"

import { icons } from "../library/icons";
import Rend from '../data/png/render.png';
import UE from '../data/png/ue.png';
import Unity from '../data/png/unity.png';
import VTune from '../data/png/vtune.png';
import Blend from '../data/png/blender.png';

const pngs = [ UE, Unity, Rend, VTune, Blend];


function SkillsCard(props) {

    const skill = props.skill;
    const color = skill.color;

    return (
        <>
            <div className="flip-card skill-card">
                <div className="flip-card-inner">

                    <div className="flip-card-front" style={{ backgroundColor: color }}>
                        {skill.type}
                    </div>

                    <div className="flip-card-back">
                     
                        {skill.list.map((item, index) =>
                            <li className="list-item" key={index}>
                                {item}
                                <span className="skill-icon">
                                    {[skill.icons[index]] ? icons[skill.icons[index]] : ""}
                                </span>
                            </li>
                        )}
                       
                        <hr className="hr" />
                        {skill.tech.map((item, index) =>
                            <li className="list-item" key={index}>{item}
                            <img className="skill-png" src={skill?.png?.[index] ? pngs?.[index] : ""}>
                            </img>
                            </li>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default SkillsCard;