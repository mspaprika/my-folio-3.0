import '../App.scss';

import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Git } from '../data/svg/github.svg';
import { ReactComponent as LinkedIn } from '../data/svg/linkedin.svg';
import { ReactComponent as Email } from '../data/svg/email.svg';
import { ReactComponent as Twitter } from '../data/svg/twitter.svg';
import { ReactComponent as Doc } from '../data/svg/doc.svg';
import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logo.svg';
import { ReactComponent as Discord } from '../data/svg/discord.svg';

import { myInfo } from '../library/myInfo';

function Home(props) {

    const navigate = useNavigate();

    const handleCircleClick = () => {
        return () => {
            console.log("clicked");
            navigate("/about");
        }
    }

    return (
        <>
            <Link to="/skills" className="top link load-in load-out">Skills</Link>
            <Link to="/games" className="games link load-in load-out ">Games</Link>
            <Link to="/web" className="web link load-in load-out">Web</Link>
            <Link to="/about" className="about link load-in load-out">About Me</Link>

            <div onClick={handleCircleClick()} className="big-circle">
                <h1 className="main-text">I'm Arune</h1>
                <h3 className="sub-text">Game Developer</h3>
            </div>

            <div className='icon-wrapper'>
                <a href={myInfo.gitHubLink} target="_blank" rel="noopener noreferrer" >
                    <Git className="git load-in" />
                </a>
                <a href={myInfo.linkedInLink} target="_blank" rel="noopener noreferrer" >
                    <LinkedIn className="linkedin load-in" />
                </a>
                <a href={myInfo.cvLink} target="_blank" rel="noopener noreferrer" >
                    <Doc className="doc load-in" />
                </a>
                <a href={myInfo.emailLink} target="_blank" rel="noopener noreferrer" >
                    <Email className="email load-in" />
                </a>
                <a href={myInfo.discordLink} target="_blank" rel="noopener noreferrer" >
                    <Discord className="twitter load-in" />
                </a>
                <a href={myInfo.twitterLink} target="_blank" rel="noopener noreferrer" >
                    <Twitter className="twitter load-in" />
                </a>
            </div>

            <Link to="/" className="home-link">
                <Arrow className="arrow-up" />
            </Link>

            <Link to="/" className="logo-link" >
                <Logo className="top-logo" />
            </Link>
            <Link to={props.nextPage} className="">
                <Arrow className="arrow-down" />
            </Link>
        </>
    );
}

export default Home;
