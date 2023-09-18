
import '../App.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Git } from '../data/svg/github.svg';
import { ReactComponent as LinkedIn } from '../data/svg/linkedin.svg';
import { ReactComponent as Email } from '../data/svg/email.svg';
import { ReactComponent as Twitter } from '../data/svg/twitter.svg';
import { ReactComponent as Doc } from '../data/svg/doc.svg';
import { useNavigate } from 'react-router-dom';


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
                <Git className="git" />
                <LinkedIn className="linkedin" />
                <Doc className="doc" />
                <Email className="email" />
                <Twitter className="twitter" />
            </div>
        </>
    );
}

export default Home;