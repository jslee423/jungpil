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
                            <NavLink to="/project1">Project Title</NavLink>
                            <NavLink to="project2">Title of Project</NavLink>
                            <NavLink to="project3">Project Title</NavLink>
                            <NavLink to="project4">Title of Project</NavLink>
                            <NavLink to="project5">Project Title</NavLink>
                            <NavLink to="project6">Title of Project</NavLink>
                            <NavLink to="project7">Project Title</NavLink>
                            <NavLink to="project8">Title of Project</NavLink>
                            <NavLink to="project9">Project Title</NavLink>
                            <NavLink to="project10">Title of Project</NavLink>
                            <NavLink to="project11">Project Title</NavLink>
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