import { useState, useRef } from "react";
import { Link } from "react-router-dom"
import headshot from '../img/lny_tiger.gif'
import ContactForm from "../components/ContactForm";
import './About.scss';

const About = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    let errMsg = '';

    return (
        <div className='About'>
            <div className="about-row">
                <div className="about-col">
                    <div className='bio'>
                            <p>Graphic Designer, Artist.</p>
                            <p>I think a lot about sociology and the<br/>human condition, particularly my<br/>interactions with others and the<br/>impressions they leave.</p>
                            <p>I do my best not to take myself or life<br/>too seriously, but it doesn't always work.</p>
                            <p>I try to familiarize myself with mortality<br/>only to make life easier.</p>
                            <p>My favorite question to ask:<br/>"Will there be beer?"</p>
                    </div>
                    <div className='bio-social'>
                        <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                        <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">IG</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Dribble</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Behance</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Society 6</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Youtube</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Twitter</Link>
                    </div>
                </div>
                <div className="about-col">
                    <div className="headshot">
                        <img src={headshot} alt=""/>
                    </div>
                </div>
            </div>
            <div className="about-row">
                <div className="about-col"></div>
                <div className="about-col">
                    <ContactForm />
                </div>
            </div>
            {/* <div className="bio-headshot">
                <div className='bio'>
                    <div className='bio-body'>
                        <p>Graphic Designer, Artist.</p>
                        <p>I think a lot about sociology and the<br/>human condition, particularly my<br/>interactions with others and the<br/>impressions they leave.</p>
                        <p>I do my best not to take myself or life<br/>too seriously, but it doesn't always work.</p>
                        <p>I try to familiarize myself with mortality<br/>only to make life easier.</p>
                        <p>My favorite question to ask:<br/>"Will there be beer?"</p>
                    </div>
                    <div className='bio-social'>
                        <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                        <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">IG</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Dribble</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Behance</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Society 6</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Youtube</Link>
                        <Link to="" target="_blank" rel="noopener noreferrer">Twitter</Link>
                    </div>
                </div>
                <div className="headshot">
                    <img src={headshot} alt=""/>
                </div>
            </div>


            <div className='about-contact'>
                <div className="contact-blank"></div>
                <div className="contact-form">
                    <h1>Get in touch</h1>
                    <p>For inquires about creative services,<br/>consultations and/or art commisions.</p>
                    <form ref={form} onSubmit={sendEmail} id="emailForm">
                        <div className="nameRow">
                            <input
                                type="text"
                                name="first_name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                placeholder="First"
                            />
                            <input
                                type="text"
                                name="last_name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                placeholder="Last"
                            />
                        </div>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            placeholder="Subject"
                        />
                        <div className="sendRow"></div>
                        <textarea
                            name="message"
                            rows='5'
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Message"
                        />
                    </form>
                    <div className="button-container">
                        <input id="sendBtn" for="emailForm" type="submit" value="SEND &#62;"/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About