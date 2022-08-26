import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider1.png' alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider2.png' alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider3.png' alt="Third slide"/>
            </Carousel.Item>
    </Carousel>
);
}

export default CarouselFadeExample;