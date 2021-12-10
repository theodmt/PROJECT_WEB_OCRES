import react from 'react';
import { Link } from 'react-router-dom';
import Widget1 from './Widget1';

function Maths() {
    return (
    <div className="maths">
        <div class="title_maths">
            <img class="img_maths"src="img_maths.png" alt="img_maths"/>
            <h1>Maths</h1>
        </div>
        <articile class="cours">
        <Link to="#">
                <p>4 ème</p>
            </Link>
            <Link to="#">
                <p href="#">3 ème</p>
            </Link>
            <Link to="#">
                <p href="#">Seconde</p>
            </Link>
            <Link to="#">
                <p href="#">Première</p>
            </Link>
            <Link to="#">
                <p href="#">Terminale</p>
            </Link>
            <Link to="#">
                <p href="#">Bac +1</p>
            </Link>
            <Link to="#">
                <p href="#">Bac +2</p>
            </Link>
        </articile>
        <Widget1 />
    </div>
    );
}

export default Maths;