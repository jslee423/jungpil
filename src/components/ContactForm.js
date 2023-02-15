import { useState, useRef } from "react"
import './ContactForm.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    let errMsg = '';

    return (
        <div className="ContactForm">
            <h1>Get in touch</h1>
            <p>For inquires about creative services,<br/>consultations and/or art commisions.</p>
            {/* <form ref={form} onSubmit={sendEmail} id="emailForm"> */}
            <form ref={form} id="emailForm">
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
    )
}

export default ContactForm