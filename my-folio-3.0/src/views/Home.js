
import '../App.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../data/svg/arrow.svg';
import { ReactComponent as Git } from '../data/svg/icons8-github.svg';
import { ReactComponent as LinkedIn } from '../data/svg/icons8-linkedin.svg';
import { ReactComponent as Email } from '../data/svg/icons8-email.svg';
import { ReactComponent as Twitter } from '../data/svg/icons8-twitter.svg';
import { ReactComponent as Doc } from '../data/svg/icons8-doc.svg';
import { ReactComponent as Logo } from '../data/svg/logo.svg';


function Home() {
    return (
        <>
            <Link to="/skills" className="top link purple">Skills</Link>

            <div className="bottom-icons">
                <Email className="email" />
                <Twitter className="twitter" />
            </div>
            <Link to="/about" className="left link">About Me</Link>


            <div className="bottom">
                <Link to="/web" className="web link purple">Web</Link>
                <Link to="/games" className="games link ">Games</Link>
            </div>
            <div className="purple-circle">

                <h1 className="main-text">I'm Arune</h1>
                <h3 className="sub-text">Games / Web Developer</h3>
            </div>
        </>
    );
}

export default Home;