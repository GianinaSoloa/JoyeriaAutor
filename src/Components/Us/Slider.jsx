import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel fade slide={true}>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider-1.png' alt="Slider 1"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider-2.png' alt="Slider 2"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider-3.png' alt="Slider 3"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='/img/slider-4.png' alt="Slider 4"/>
            </Carousel.Item>
    </Carousel>
);
}

export default Slider;