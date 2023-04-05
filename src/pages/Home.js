import { Carousel } from "react-bootstrap";
import { headerImages } from '../utils/projects';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="carousel-container">
                <Carousel controls={false} touch pause={false} interval={4000}>
                    {headerImages.map((image, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image.img}
                                    alt={image.name}
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default Home;