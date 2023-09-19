import '../App.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Git } from '../data/svg/github.svg';
import { ReactComponent as LinkedIn } from '../data/svg/linkedin.svg';
import { ReactComponent as Email } from '../data/svg/email.svg';
import { ReactComponent as Twitter } from '../data/svg/twitter.svg';
import { ReactComponent as Doc } from '../data/svg/doc.svg';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Logo } from '../data/svg/logo.svg';

import { myInfo } from '../library/myInfo';


function Home() {

    const navigate = useNavigate();

    const handleCircleClick = () => {
        return () => {
            console.log("clicked");
            navigate("/about");
        }
    }

    return (
        <>
            <Link to="/skills" className="top link">Skills</Link>
            <Link to="/games" className="games link ">Games</Link>
            <Link to="/web" className="web link">Web</Link>
            <Link to="/about" className="about link">About Me</Link>

            <div onClick={handleCircleClick()} className="big-circle">
                <h1 className="main-text">I'm Arune</h1>
                <h3 className="sub-text">Games / Web Developer</h3>
            </div>

            <div className='icon-wrapper'>
                <a href={myInfo.gitHubLink} target="_blank" rel="noopener noreferrer" >
                    <Git className="git" />
                </a>
                <a href={myInfo.linkedInLink} target="_blank" rel="noopener noreferrer" >
                    <LinkedIn className="linkedin" />
                </a>
                <a href={myInfo.emailLink} target="_blank" rel="noopener noreferrer" >
                    <Doc className="doc" />
                </a>
                <a href={myInfo.emailLink} target="_blank" rel="noopener noreferrer" >
                    <Email className="email" />
                </a>
                <a href={myInfo.twitterLink} target="_blank" rel="noopener noreferrer" >
                    <Twitter className="twitter" />
                </a>
            </div>

            <Link to="/" className="home-link">
                <Arrow className="arrow-up" />
            </Link>

            <Link to="/" className="logo-link" >
                <Logo className="top-logo" />
            </Link>
            <Link to="/games" className="">
                <Arrow className="arrow-down" />
            </Link>
        </>
    );
}

export default Home;