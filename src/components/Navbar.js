import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squeeze as Hamburger } from 'hamburger-react';
import { projects } from "../utils/projects";
import squid from '../img/squid.png';
import { scrollToTop } from "../utils/global";
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = (toggled) => {
        const navLinks = document.getElementById('toggleMenu');
        const navBar = document.getElementById('nav');
        if (toggled) {
            navLinks.style= "display:flex";
            navBar.style="min-height:100svh; position:absolute";
            document.body.style = "overflow: hidden";
            scrollToTop('instant');
        } else {
            navLinks.style = "display:none";
            navBar.style="min-height: null";
            document.body.style = "overflow: visible";
        }
    };

    const scrollFunction = () => {
        if (document.body.clientWidth <= '600') {
            if (document.body.scrollTop > '100' || document.documentElement.scrollTop > '100') {
                document.getElementById("nav").style.position = 'fixed';
                document.getElementById("nav").style.top = '0';
            } else {
                document.getElementById("nav").style.position = 'static';
                document.getElementById("nav").style.top='-20vh';
            }
        }
    }

    window.addEventListener('scroll', scrollFunction);

    return (
        <nav className="nav" id='nav'>
            <div className="nav-brand">
                <NavLink to='/' id='site-title' onClick={() => {setOpen(false); toggleMenu(false); scrollToTop('instant')}}>JUNGPIL®</NavLink>
            </div>
            <div className="toggleBtn">
                <Hamburger
                    size={40}v
                    distance="sm"
                    duration={0.2}
                    onToggle={toggled => {
                        toggleMenu(toggled);
                    }}
                    toggled={isOpen}
                    toggle={setOpen} />
            </div>
            <div className="toggleMenu" id='toggleMenu'>
                <ul>
                        <li>
                            <NavLink
                                to='/work'
                                onClick={() => {
                                    setOpen(false);
                                    toggleMenu(false)
                                }}>
                                    WORK
                            </NavLink>
                            <div className="toggleProjects">
                                {projects.map((project, index) => {
                                    return (
                                        <NavLink
                                            to={`/work/${project.path}`}
                                            key={index}
                                            onClick={() => {
                                                setOpen(false);
                                                toggleMenu(false)
                                            }}>
                                                {project.name}
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </li>
                        <li>
                            <NavLink to='/about' onClick={() => {setOpen(false); toggleMenu(false)}}>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop' onClick={() => {setOpen(false); toggleMenu(false)}}>SHOP</NavLink>
                        </li>
                </ul>

                <ul className="toggleFooter">
                    <li>
                        <NavLink to='/contact' onClick={() => {setOpen(false); toggleMenu(false)}}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/client' onClick={() => {setOpen(false); toggleMenu(false)}}>CLIENT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/search' onClick={() => {setOpen(false); toggleMenu(false)}}>SEARCH</NavLink>
                    </li>
                </ul>
                <div className="copyright">
                    <img src={squid} alt='squid logo' className="squidLogo" />
                    <p>Copyright JUNGPIL® 2022</p>
                    <p>Don't steal my shit.</p>
                </div>
            </div>
            <div className='nav-links' id='nav-links'>
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
    );
};

export default Navbar;