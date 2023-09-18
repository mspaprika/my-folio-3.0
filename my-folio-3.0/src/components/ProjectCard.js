import "../styles/ProjectCards.scss"


function ProjectCard(props) {

    const project = props.project;

    return (

        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={project.image} alt="project" />
                    </div>
                    <div className="flip-card-back">
                        <h1>{project.title}</h1>
                        <p>{project.mainFeatures}</p>
                        <button className="card-button">Dive Into</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard;