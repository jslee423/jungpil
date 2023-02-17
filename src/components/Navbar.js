import { NavLink } from 'react-router-dom';
import projects from '../utils/projects';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav' id='nav'>
        <div className='nav-brand'>
            <NavLink to='/' id='site-title'>JUNGPIL®</NavLink>
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <div className="dropdown">
                        <NavLink to='/work'>WORK</NavLink>
                        <div className="dropdown-content">
                            {projects.map((project, index) => {
                                return (
                                    <NavLink to={`/work/${project.path}`} key={index}>{project.name}</NavLink>
                                )
                            })}
                            {/* <NavLink to="/ride_or_die">Ride Or Die</NavLink>
                            <NavLink to="/project2">Growlerz</NavLink>
                            <NavLink to="/project3">Remind Me Later</NavLink>
                            <NavLink to="/project4">Music Art</NavLink>
                            <NavLink to="/project1">Ride Or Die</NavLink>
                            <NavLink to="/project2">Growlerz</NavLink>
                            <NavLink to="/project3">Remind Me Later</NavLink>
                            <NavLink to="/project4">Music Art</NavLink> */}
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