import "../styles/SkillsCards.scss"
import "../styles/ProjectCards.scss"

import { icons } from "../library/icons";
import { pngMap } from "../library/icons";


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
                                {skill.icons ? 
                                    <span className="skill-icon">
                                        {[skill.icons[index]] ? icons[skill.icons[index]] : ""}
                                    </span> :

                                    skill?.iconPng.length > index ?
                                    <img className="skill-png" src={skill?.iconPng[index]}></img> : null
                                }
                            </li>
                        )}
                       
                        <hr className="hr" />
                        {skill.tech.map((item, index) =>

                            <li className="list-item" key={index}>{item}
                                {skill?.png && skill?.png.length > index ? 
                                    <img className="skill-png" src={skill?.png[index]}>
                                    </img>
                                    
                                : null}
                            </li>
                            
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default SkillsCard;