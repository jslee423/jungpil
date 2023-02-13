import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-brand'>
            <NavLink to='/' id='site-title'>JUNGPIL®</NavLink>
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <div class="dropdown">
                        <NavLink to='/work'>WORK</NavLink>
                        <div class="dropdown-content">
                            <NavLink to="/project1">Ride Or Die</NavLink>
                            <NavLink to="/project2">Growlerz</NavLink>
                            <NavLink to="/project3">Remind Me Later</NavLink>
                            <NavLink to="/project4">Music Art</NavLink>
                            <NavLink to="/project1">Ride Or Die</NavLink>
                            <NavLink to="/project2">Growlerz</NavLink>
                            <NavLink to="/project3">Remind Me Later</NavLink>
                            <NavLink to="/project4">Music Art</NavLink>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>SHOP</NavLink>
                </li>
            </ul>
            <ul>
                <li className='nav-cart'>
                    <NavLink to='/cart' className='nav-cart'>CART 0</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar