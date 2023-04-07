import squid from '../img/squid.png';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils/global';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer-links'>
                <NavLink to='/' onClick={() => scrollToTop('instant')}><img src={squid} alt='squid' id='squid' /></NavLink>
                <NavLink to='/contact' className="foot-link">CONTACT</NavLink>
                <NavLink to='/client' className="foot-link">CLIENT</NavLink>
                <NavLink to='/search' className="foot-link">SEARCH</NavLink>
            </div>
            <p id='copyright'>Copyright JUNGPIL® 2022 • Don’t steal my shit.</p>
            <div className='small-copyright'>
                <p>Copyright JUNGPIL® 2022</p>
                <p>Don’t steal my shit.</p>
            </div>
        </div>
    )
};

export default Footer;