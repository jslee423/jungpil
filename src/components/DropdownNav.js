import { NavLink, useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/global';
import './DropdownNav.scss';

const DropdownNav = () => {
    const location = useLocation();
    const currentPathArray = location.pathname.replace('/', '').split('/');
    const scrollFunction = () => {
        if (document.body.scrollTop > '200' || document.documentElement.scrollTop > '200') {
            document.getElementById("DropdownNav").style.top = '0';
        } else {
            document.getElementById("DropdownNav").style.top='-100px';
        }
    }

    window.addEventListener('scroll', scrollFunction);

    return (
        <div id='DropdownNav'>
            <div className='nav-breadcrumb'>
                <NavLink to="/">JUNGPIL®</NavLink>
                {currentPathArray.map((path, index) => {
                    if (index + 1 === currentPathArray.length) {
                        return (
                            <div key ={index} className='nav-crumb'>
                                <p>&#62;</p>
                                <NavLink to={location.pathname} element="" onClick={() => scrollToTop('smooth')}>{path.replaceAll('_', ' ')}</NavLink>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className='nav-crumb'>
                                <p>&#62;</p>
                                <NavLink to={path} element="" onClick={() => scrollToTop('smooth')}>{path.replaceAll('_', ' ').toUpperCase()}</NavLink>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DropdownNav