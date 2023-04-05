import { projects } from "../utils/projects";
import Breadcrumb from "../components/Breadcrumb";
import './Project.scss';

const Project = (name) => {
    let selectedProject = projects.find(project => project.name === name.name);
    console.log(selectedProject)

    return (
        <>
            <Breadcrumb />
            <div className="Project">
                <h1 id='proj-title'>{selectedProject.name}</h1>
                <div className="proj-img-container">
                    <div className="proj-blurb">
                        <h1>A blurb about the project</h1>
                    </div>
                    <div className="proj-img">
                        {/* <h1>A blurb about the project</h1> */}
                    </div>
                    <div className="proj-img">
                        {/* <h1>A blurb about the project</h1> */}
                    </div>
                    <div className="proj-img">
                        {/* <h1>A blurb about the project</h1> */}
                    </div>
                </div>
                <div className="proj-headline">
                    <div className="headline-img"></div>
                    <div className="headline-blurb">
                        <h1>Headline H2</h1>
                        <div className="headline-img-sm"></div>
                        <div className="headline-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;