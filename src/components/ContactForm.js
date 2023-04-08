import { useState, useRef } from "react"
import './ContactForm.scss';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    // let errMsg = '';

    return (
        <div className="ContactForm">
            <div className="form-container">
                <h1>Get in touch</h1>
                <p>For inquires about creative services,<br/>consultations and/or art commission.</p>
                {/* <form ref={form} onSubmit={sendEmail} id="emailForm"> */}
                <form ref={form} id="emailForm">
                    <div className="form-names">
                        <input
                            type="text"
                            name="first_name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            placeholder="First"
                            id='first-name'
                        />
                        <input
                            type="text"
                            name="last_name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            placeholder="Last"
                            id='last-name'
                        />
                    </div>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        id='email'
                    />
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        placeholder="Subject"
                        id='subject'
                    />
                    <textarea
                        name="message"
                        rows='10'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                        id='message'
                    />
                </form>
            </div>
            <div className="button-container">
                <input id="sendBtn" type="submit" value="Send &#62;"/>
            </div>
        </div>
    )
};

export default ContactForm;