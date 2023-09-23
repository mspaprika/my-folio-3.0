import "../styles/WebProject.scss";

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/git2.svg';
import { ReactComponent as Host } from '../data/svg/tower2.svg';

import { useEffect } from "react";

function WebProject(props) {

    const project = props.currentWeb;

    const showImages = () => {
        return project.images?.map((image, index) =>
            <img className="project-image"
                key={index}
                src={image}
                alt=""></img>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <div className="web-project-container">


                <div className="web-wrapper">
                    <div className="top-image-wrapper">
                        {showImages()}
                    </div>

                    <div className="web-title">
                        {project.title}
                    </div>

                    <p className="web-description">
                        {project.description}
                    </p>
                    {project.myCollab ? <div className="collab-wrapper">
                        <h3 className="collab-header">My collaboration...</h3>
                        <p className="my-collab">{project.myCollab}</p>
                    </div> : ""}


                    <h3 className="web-features">Main features...</h3>
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
                        <span className="last-updated">
                            Last updated: {project.lastUpdated}
                        </span>
                    </div>
                </div>

                <Link to="/web" className="home-link">
                    <Arrow className="arrow-up" />
                </Link>

                <Link to="/web" className="">
                    <Arrow className="arrow-down" />
                </Link>
            </div>
        </>
    )
}

export default WebProject;