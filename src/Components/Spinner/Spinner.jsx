import { Jelly } from '@uiball/loaders';
import "../Spinner/spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <Jelly size={80} speed={0.9} color="#d6cbc4" />
        </div>
    )
}

export default Spinner