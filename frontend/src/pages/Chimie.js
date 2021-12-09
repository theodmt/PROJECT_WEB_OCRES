import react from 'react';
import { Link } from 'react-router-dom';

function Chimie() {
    return (
    <div className="chimie">
        <div class="title_chimie">
            <img class="img_chimie"src="img_chimie.png" alt="img_chimie"/>
            <h1>Chimie</h1>
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

export default Chimie;