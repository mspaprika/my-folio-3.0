
import './App.scss';

import { ReactComponent as Arrow } from './data/svg/arrow.svg';
import { ReactComponent as Git } from './data/svg/icons8-github.svg';
import { ReactComponent as LinkedIn } from './data/svg/icons8-linkedin.svg';
import { ReactComponent as Email } from './data/svg/icons8-email.svg';
import { ReactComponent as Twitter } from './data/svg/icons8-twitter.svg';
import { ReactComponent as Doc } from './data/svg/icons8-doc.svg';
import { ReactComponent as Logo } from './data/svg/logo.svg';


function App() {
  return (
    <>
      <div className="main-container">

        <Arrow className="arrow-up" />
        <h1 className="top">Skills</h1>
        <Logo className="top-icon" />

        <div className="right-icons">
          <Git className="git" />
          <LinkedIn className="linkedin" />
          <Doc className="doc" />
        </div>

        <div className="bottom-icons">
          <Email className="email" />
          <Twitter className="twitter" />
        </div>

        <h1 className="left">About Me</h1>

        <div className="bottom">
          <h1 className="games">Games</h1>
          <Arrow className="arrow-down" />
          <h1 className="web">Web</h1>
        </div>

        <h1 className="main-text">I'm Arune</h1>
        <h3 className="sub-text">Web / Game Developer</h3>

      </div>
    </>
  );
}

export default App;
