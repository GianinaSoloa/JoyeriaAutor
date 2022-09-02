import "../Us/us.css";
import Slider from "../Us/Slider";

const Us = () => {
    return (
        <div className="us">
            <h1>Como Decirtelo Joyas: La Historia</h1>
            <p>La pandemia nos quitó muchas cosas. Pero en mi caso, también me dejó grandes cosas. Una de ellas fue el oficio de la joyería. Esa curiosidad por el rubro, que sin saberlo estuvo dentro por años, finalmente salió a la luz. Mi nombre es Gianina, soy diseñadora industrial, gráfica y web. Y en mis ratos libres, incursiono en la joyería.</p>
            <p>CDJ es una marca joven, descontracturada que apela a que puedas decir aquello que tanto deseas, aquello que no sabes cómo decirlo, con una joya. Nace justamente con ese objetivo: evocar, unir y comunicar.</p>
            <div className="slider__container">
                <Slider/>
            </div>
        </div>
    )
}

export default Us