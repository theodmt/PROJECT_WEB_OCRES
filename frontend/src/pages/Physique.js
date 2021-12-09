import react from 'react';
import { Link } from 'react-router-dom';

function Physique() {
    return (
    <div className="physique">
        <div class="title_physique">
            <img class="img_physique"src="img_physique.png" alt="img_physique"/>
            <h1>Physique</h1>
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
    </div>
    );
}

export default Physique;