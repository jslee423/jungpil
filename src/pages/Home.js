import { Carousel } from "react-bootstrap"
import img1 from '../img/sc_5.jpg'
import img2 from '../img/lny_tiger.gif';
import img3 from '../img/rod_title.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
        <div className="carousel-container">

            <Carousel controls={false} touch pause={false} interval={4000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h3></h3>
                    <p></p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    {/* <h3></h3>
                    <p></p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3></h3>
                    <p></p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}

export default Home