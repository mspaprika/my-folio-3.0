import "../styles/WebProject.scss";

import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/git2.svg';
import { ReactComponent as Host } from '../data/svg/tower2.svg';

import { webProjects } from "../library/webProjects";


function WebProject(props) {

    let project = props.currentWeb;

    if (!project) {
        project = JSON.parse(window.localStorage.getItem("currentWeb"))
    }

    const nextWebProject = webProjects.filter(pro => pro.id === project.next);
    const nextProject = nextWebProject[0];

    const navigate = useNavigate();

    const showImages = () => {
        return project.images?.map((image, index) =>
            <img className="project-image"
                key={index}
                src={image}
                alt=""></img>
        )
    }

    const onClickHandler = () => {
        props.setCurrentWeb(nextProject)
        navigate("/webview")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, [])

    useEffect(() => {
        window.localStorage.setItem("currentWeb", JSON.stringify(project))
    }, [project])

    return (
        <>
            <div key={JSON.stringify(project)} className="web-project-container">


                <div className="web-wrapper">
                    <div className="top-image-wrapper">
                        {showImages()}
                    </div>

                    <div className="web-title">
                        {project.title}
                    </div>

                    <p className="web-description text">
                        {project.description}
                    </p>
                       
                        {project.myCollab ? 
                        <>
                            <h2 className="collab-header">My collaboration...</h2>
                            <div className="collab-wrapper">
                                <p className="my-collab">{project.myCollab}</p>
                            </div>
                        </> : ""}


                    <h2 className="collab-header">Main features...</h2>
                    <div className="web-features">
                        {project.mainFeatures}
                    </div>

                    <span className="message"><i>{project.message}</i></span>

                    <div className="web-links">
                        <div className="git-wrapper">

                            GitHub:
                            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" >
                                <Git className="git link" />
                            </a>
                        </div>
                        <div className="live-wrapper">
                            Live Page:
                            <a href={project.live} target="_blank" rel="noopener noreferrer" >
                                <Host className="host link" />
                            </a>
                        </div>
                        {project.lastUpdated ?
                            <span className="last-updated">
                                Last updated: {project.lastUpdated}
                            </span> :
                            ""}

                    </div>
                </div>

                <Link to="/web" className="home-link">
                    <Arrow className="arrow-up" />
                </Link>

                <Arrow onClick={onClickHandler} className="arrow-down" />

            </div>
        </>
    )
}

export default WebProject;