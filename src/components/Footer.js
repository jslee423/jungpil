import squid from '../img/squid.png';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
        {/* <img src={squid} alt="" /> */}
        <div className='footer-links'>
            <NavLink to="/"><img src={squid} alt="squid" /></NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/client">CLIENT</NavLink>
            <NavLink to="/search">SEARCH</NavLink>
        </div>
        <p>Copyright JUNGPIL® 2022  •  Don’t steal my shit.</p>
    </div>
  )
}

export default Footer