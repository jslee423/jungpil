import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-brand'>
            <Link to='/' className='site-title'>JUNGPIL®</Link>
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <NavLink to='/work'>WORK</NavLink>
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