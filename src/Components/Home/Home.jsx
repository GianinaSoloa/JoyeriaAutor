import "../Home/home.css";
import Carousel from "../Home/Carousel";

const Home = () => {

    return (
        <div className="home">
            <div className="carusel">
                <Carousel/>
            </div>
            <h1>Como decirtelo joyas</h1>
            <div className="container__home">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue non risus vehicula sollicitudin. Aliquam porta eleifend tincidunt. Nunc eget ultrices felis. Sed eu ex mauris. Quisque elementum mi quis velit efficitur, finibus feugiat tellus elementum. Donec feugiat egestas ultrices. Duis venenatis consectetur purus a tempor. Vivamus et nisl velit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare quam non neque maximus consequat. Pellentesque pretium, urna ac eleifend luctus, lacus orci pharetra orci, eget ullamcorper justo velit eget justo. Cras et efficitur erat. Pellentesque faucibus venenatis purus. Nulla rhoncus justo et consectetur iaculis. Donec eleifend velit et nisi tempor 
                pellentesque. Nunc sed vehicula orci. Pellentesque sed porttitor quam, quis ultrices ex. Nulla scelerisque ligula in porttitor viverra. Praesent eu ex ante. Nullam sollicitudin purus et diam consequat varius. Duis suscipit tempor purus, eget sagittis leo sodales non.</p>
            </div>
        </div>
    )
    
}

export default Home