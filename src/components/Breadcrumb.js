import { NavLink, useLocation } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = () => {
    const location = useLocation();
    const currentPathArray = location.pathname.replace('/', '').split('/');

    return (
        <div className='Breadcrumb'>
            {currentPathArray.map((path, index) => {
                    if (index === 0) {
                        return (
                            <div key ={index} className='nav-crumb'>
                                <NavLink to={`/${path}`} element="">{path.replaceAll('_', ' ').toUpperCase()}</NavLink>
                            </div>
                        )
                    } else if (index + 1 === currentPathArray.length) {
                        console.log(location)
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
                                <NavLink to={`/${path}`} element="">{path.replaceAll('_', ' ').toUpperCase()}</NavLink>
                            </div>
                        )
                    }
                })}
        </div>
    )
}

export default Breadcrumb