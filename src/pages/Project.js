import { projects } from "../utils/projects";
import Breadcrumb from "../components/Breadcrumb";
import { NavLink } from "react-router-dom";
import './Project.scss';

const Project = (name) => {
    let selectedProject = projects.find(project => project.name === name.name);
    let projectIndex = projects.findIndex(project => project.name === name.name);
    let prevProj = projects[projectIndex-1];
    let nextProj = projects[projectIndex+1];
    const count = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Breadcrumb />
            <div className="Project">
                <h1 id='proj-title'>{selectedProject.name}</h1>
                <div className="proj-section sec-1">
                    <div className="sec-1-blurb">
                        <h1>A blurb about the project</h1>
                    </div>
                    {count.map(count => {
                        return (
                            <img src={selectedProject.img} alt={selectedProject.name} key={count} />
                        )
                    })}
                </div>
                
                <div className="proj-section sec-2">
                    <div className="sec-2-img"></div>
                    <div className="sec-2-blurb">
                        <h1>Headline H2</h1>
                        <div className="sec-2-blurb-img"></div>
                        <div className="sec-2-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                
                <div className="proj-section sec-3">
                    <img src={selectedProject.img} alt={selectedProject.name} />
                </div>
                
                <div className="proj-section sec-4">
                    <img src={selectedProject.img} alt={selectedProject.name} />
                </div>
                
                <div className="proj-section sec-5">
                    <img src={selectedProject.img} alt={selectedProject.name} />
                    <div className="sec-5-blurb">
                        <h1>
                            Excepteur sint occa®cat cupidatat non proident, $ in culpa qui officia &eserunt collit anim id est laborum.
                        </h1>
                    </div>
                    <img src={selectedProject.img} alt={selectedProject.name} />
                </div>
                
                <div className="proj-section sec-6">
                    <img src={selectedProject.img} alt={selectedProject.name} />
                </div>
                
                <div className="proj-section sec-7">
                    <div className="sec-7-blurb">
                        <h1>A blurb about the project</h1>
                    </div>
                    {count.map(count => {
                        return (
                            <img src={selectedProject.img} alt={selectedProject.name} key={count} />
                        )
                    })}
                </div>

                <div className="prev-next" style={prevProj ? { justifyContent: "space-between" } : { justifyContent: "flex-end" }}>
                    {prevProj &&
                        <div className="prev">
                            <NavLink to={`/work/${prevProj.path}`} className="foot-link">&#60; PREV...</NavLink>
                            {/* <p>&#60; PREV...</p> */}
                        </div>
                    }
                    {nextProj &&
                        <div className="next">
                            <NavLink to={`/work/${nextProj.path}`} className="foot-link">...NEXT &#62;</NavLink>
                            {/* <p>...NEXT &#62;</p> */}
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Project;