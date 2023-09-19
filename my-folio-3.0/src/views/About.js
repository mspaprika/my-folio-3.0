import "../styles/ProjectCards.scss"
import "../styles/About.scss"
import { ReactComponent as Leet } from "../data/svg/leet.svg";
import { ReactComponent as CodeWars } from "../data/svg/codewars.svg";
import { ReactComponent as Logo } from '../data/svg/logop.svg';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';

import { myInfo } from "../library/myInfo";

import { icons } from "../library/icons";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about-container">
            <Link to="/" className="home">
                <Arrow className="arr-up" />
            </Link>

            <h1 className="headline">About Me...</h1>

            <div className="tech-icon-wrapper">

                {icons.cpp}
                {icons.cSharp}
                {icons.react}
                {icons.sass}
                {icons.html}
                {icons.css}
                {icons.javascript}
                {icons.mongo}
                {icons.mySql}

            </div>
            <div className="another-wrapper">
                {/* <a href={myInfo.leet} target="_blank" rel="noopener noreferrer" >
                    <Leet className="leet icon" />
                </a>
                <a href={myInfo.codeWars} target="_blank" rel="noopener noreferrer" >
                    <CodeWars className="codewars icon" />
                </a> */}
                <a href={myInfo.leetCodeLink} target="_blank" rel="noopener noreferrer" >
                    <Leet className="leet icon" />
                </a>
                <a href={myInfo.codeWarsLink} target="_blank" rel="noopener noreferrer" >
                    <CodeWars className="code-wars icon" />
                </a>
            </div>
            <Link to="/" className="logo" >
                <Logo className="top-logo" />
            </Link>

            <div>
                <Arrow className="arr-down" />
            </div>
        </div>
    );
}

export default About;