import "../styles/ProjectCards.scss"
import "../styles/About.scss"
import "../library/common.js"

import { ReactComponent as Leet } from "../data/svg/leet.svg";
import { ReactComponent as CodeWars } from "../data/svg/codewars.svg";
import { ReactComponent as Logo } from '../data/svg/logop.svg';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';

import TCity from '../data/png/tc.png';
import Ado from '../data/png/ado.png';
import Blend from '../data/png/blender.png';
import Gimp from '../data/png/gimp.png';
import Git from '../data/png/git.png';
import P4 from '../data/png/p4.png';
import Rend from '../data/png/render.png';
import UE from '../data/png/ue.png';
import Unity from '../data/png/unity.png';
import Aud from '../data/png/aud.png';
import VTune from '../data/png/vtune.png';

import { myInfo } from "../library/myInfo";
import { icons } from "../library/icons";
import { Link } from 'react-router-dom';

function About(props) {

    return (
        <div className="about-container">

            <Link to="/" className="home">
                <Arrow className="arr-up" />
            </Link>

            <h1 className="headline">About Me...</h1>

            <p className="my-info text">
                {myInfo.mainInfo}
            </p>
            <div className="tech-icon-wrapper">
                <img src={TCity} className="png"></img>
                <img src={Ado} className="png"></img>
                <img src={Blend} className="png"></img>
                <img src={Gimp} className="png"></img>
                <img src={Git} className="png"></img>
                <img src={P4} className="png"></img>
                <img src={Rend} className="png"></img>
                <img src={UE} className="png"></img>
                <img src={Unity} className="png"></img>
                <img src={VTune} className="png"></img>
                <img src={Aud} className="png"></img>
                {icons.cpp}
                {icons.cSharp}
                {icons.sass}
                {icons.react}
                {icons.html}
                {icons.css}
                {icons.javascript}
                {icons.python}
                {icons.mySql}
                {icons.mongo}
            </div>

            <h6>How I solve it...</h6>

            <div className="another-wrapper">
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

            <Link to="/skills" className="">
                <Arrow className="arr-down" />
            </Link>
        </div>
    );
}

export default About;