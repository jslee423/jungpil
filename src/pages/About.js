import { Link } from "react-router-dom"
import headshot from '../img/lny_tiger.gif'
import './About.css';

const About = () => {
  return (
    <div className='About'>
        <div className='about-bio'>
            <div className='bio-body'>
                <p>Graphic Designer, Artist.</p>
                <p>I think a lot about sociology and the human condition, particularly my interactions with others and impressions they leave.</p>
                <p>I do my best not to take myself or life too seriously, but it doesn't always work.</p>
                <p>I try to familiarize myself with mortality only to make life easier.</p>
                <p>My favorite question to ask:<br/>"Will there be beer?"</p>
            </div>
            <div className='social'>
                <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">IG</Link>
                <Link to="" target="_blank" rel="noopener noreferrer">Dribble</Link>
                <Link to="" target="_blank" rel="noopener noreferrer">Behance</Link>
                <Link to="" target="_blank" rel="noopener noreferrer">Society 6</Link>
                <Link to="" target="_blank" rel="noopener noreferrer">Youtube</Link>
                <Link to="" target="_blank" rel="noopener noreferrer">Twitter</Link>
            </div>
        </div>
        <div className='about-contact'>
            <div className="headshot">
                <img src={headshot} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default About