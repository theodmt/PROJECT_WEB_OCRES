import react from 'react';
import { Link } from 'react-router-dom';

function Programmation() {
    return (
    <div className="programmation">
        <div class="title_programmation">
            <img class="img_programmation"src="img_programmation.png" alt="img_programmation"/>
            <h1>Programmation</h1>
        </div>
        <articile class="cours">
        <Link to="#">
                <p>C</p>
            </Link>
            <Link to="#">
                <p href="#">C++</p>
            </Link>
            <Link to="#">
                <p href="#">Java</p>
            </Link>
            <Link to="#">
                <p href="#">Python</p>
            </Link>
            <Link to="#">
                <p href="#">SQL</p>
            </Link>
            <Link to="#">
                <p href="#">HTML & CSS</p>
            </Link>
            <Link to="#">
                <p href="#">Javascript</p>
            </Link>
        </articile>
    </div>
    );
}

export default Programmation;