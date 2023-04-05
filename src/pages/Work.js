import { projects } from '../utils/projects';
import { NavLink } from 'react-router-dom';
import './Work.scss';

const Work = () => {
    return (
        <div className='Work'>
            {projects.map((project, index) => {
                return (
                    <div className='project-container' key={index}>
                        <div className='project-title'>
                            <NavLink to={project.path}>
                                <h1>{project.name} &#62;</h1>
                            </NavLink>
                        </div>
                        <div className='project-cover'>
                            <img className="d-block w-100" src={project.img} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Work;