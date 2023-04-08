import { Carousel } from "react-bootstrap";
import { projects } from '../utils/projects';
import { NavLink } from "react-router-dom";
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="carousel-container">
                <Carousel controls={false} touch pause={false} interval={4000}>
                    {projects.map((project, index) => {
                        console.log(project.name)
                        return (
                            <Carousel.Item>
                                    <NavLink to={`/work/${project.path}`} key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={project.img}
                                            alt={project.name}
                                        />
                                    </NavLink>
                                </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default Home;