import { projects } from '../utils/projects';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils/global';
import './Work.scss';

const Work = () => {
    return (
        <div className='Work'>
            {projects.map((project, index) => {
                return (
                    <div className='project-container' key={index}>
                        <div className='project-title'>
                            <NavLink to={project.path} onClick={() => scrollToTop('smooth')}>
                                <h1>{project.name} &#62;</h1>
                            </NavLink>
                        </div>
                        <div className='project-cover'>
                            <NavLink to={project.path} onClick={() => scrollToTop('smooth')}>
                                <img className="d-block w-100" src={project.img} alt="" />
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Work;