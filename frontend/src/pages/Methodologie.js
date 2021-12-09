import react from 'react';
import { Link } from 'react-router-dom';

function Methodologie() {
    return (
    <div className="methodologie">
        <div class="title_methodologie">
            <img class="img_methodologie"src="img_methodologie.png" alt="img_methodologie"/>
            <h1>Methodologie</h1>
        </div>
        <articile class="cours">
        <Link to="#">
                <p>Brevet</p>
            </Link>
            <Link to="#">
                <p href="#">Bac</p>
            </Link>
            <Link to="#">
                <p href="#">DUT</p>
            </Link>
            <Link to="#">
                <p href="#">Ecole d'ingénieurs</p>
            </Link>
            <Link to="#">
                <p href="#">Prepa</p>
            </Link>
            
        </articile>
    </div>
    );
}

export default Methodologie;