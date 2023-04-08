import portrait from '../img/portrait.jpg';
import { Link } from 'react-router-dom';
import { socials } from '../utils/projects';
import ContactForm from '../components/ContactForm';
import './About.scss';

const About = () => {
    return (
        <div className="About">
            <h1 id='about-title'>Artist,<br/>Graphic Designer</h1>
            <div className='about-sec-1'>
                <div className='sec-1-bio'>
                    <div className='about-bio'>
                        <p>Graphic Designer, Artist.</p>
                        <p>I think a lot about sociology and the human condition, particularly my interactions with others and the impressions they leave.</p>
                        <p>I do my best not to take myself or life too seriously, but it doesn’t always work.</p>
                        <p>I try to familiarize myself with mortality only to make life easier.</p>
                        <p>My favorite question to ask:<br/>“Will there be beer?”</p>
                    </div>
                    <div className='about-socials'>
                        {socials.map((social, index) => {
                            return (
                                <Link to={social.link} target="_blank" rel="noopener noreferrer" key={index}>{social.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className='sec-1-portrait'>
                    <img src={portrait} alt='portrait' />
                </div>
            </div>
            <div className='about-sec-2'>
                {/* <ContactForm /> */}
                <div className='sec-2-blank'></div>
                <div className='sec-2-contact'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default About;