import { NavLink, useLocation } from 'react-router-dom';
import './DropdownNav.scss';

const DropdownNav = () => {
    const location = useLocation();
    const currentPathArray = location.pathname.replace('/', '').split('/');
    // console.log('loc', location);
    function scrollFunction() {
        // console.log(document.body.scrollTop, document.documentElement.scrollTop)
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById("DropdownNav").style.top = '0';
        } else {
            document.getElementById("DropdownNav").style.top='-100px';
        }
    }

    window.onscroll = function() {
        scrollFunction();
    }

    return (
        <div id='DropdownNav'>
            <div className='nav-breadcrumb'>
                <NavLink to="/">JUNGPIL®</NavLink>
                {currentPathArray.map((path, index) => {
                    if (index + 1 === currentPathArray.length) {
                        return (
                            <div key ={index} className='nav-crumb'>
                                <p>&#62;</p>
                                <NavLink to={location.pathname} element="">{path.replaceAll('_', ' ').toUpperCase()}</NavLink>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className='nav-crumb'>
                                <p>&#62;</p>
                                <NavLink to={path} element="">{path.replaceAll('_', ' ').toUpperCase()}</NavLink>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DropdownNav