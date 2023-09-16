import "../styles/ProjectCards.scss"
import { webProjects } from "../library/webProjects";

const project = webProjects[0];

function WebCard(props) {


    return (
        <>

            <div className="flip-card">
                <img src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="project" />

            </div>
        </>
    )
}

export default WebCard;