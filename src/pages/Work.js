import projects from '../utils/projects';
import './Work.css';

const Work = () => {
    return (
        <div className='Work'>
            {projects.map(project => {
                return (
                    <div className='project-container'>
                        <div className='project-title'>
                            <h1>{project.name} &#62;</h1>
                        </div>
                        <div className='project-cover'>
                            <img className="d-block w-100" src={project.img} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Work