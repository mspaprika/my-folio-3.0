import "../styles/SkillsCards.scss"
import "../styles/ProjectCards.scss"


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
                            <li className="list-item" key={index}>{item}</li>
                        )}
                        <hr className="hr" />
                        {skill.tech.map((item, index) =>
                            <li className="list-item" key={index}>{item}</li>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default SkillsCard;