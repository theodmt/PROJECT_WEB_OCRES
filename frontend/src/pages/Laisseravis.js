import react from 'react';
import { Link } from 'react-router-dom';

function Laisseravis() {
    return (
    <div className="laisser_avis">
        <h1>Laisser un avis</h1>
        <div class="area">
            <textarea name="laisseravis" placeholder="Tapez votre avis ici.">
            </textarea>
        </div>
        <div class="btn_envoi">
            <button href="#">Envoyer</button>

        </div>
    </div>
    );
}

export default Laisseravis;