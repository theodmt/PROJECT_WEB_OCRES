import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import "./Modal.css";
import { Link } from 'react-router-dom';



function PrendreCours2() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    };

    if(modal) {
        document.body.classList.add('active-modl')
    }
    else {
        document.body.classList.remove('active-modl')
    }

    return (
        <>
        <Link to="#">
            <p onClick={toggleModal} className="btn-modal prendreuncours2">
                Reserver
            </p>
        </Link>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <main class=" connexionpopup courspopup">

                    <h1>Reserver un cours</h1>

                    <div class="nometniveau">
                        <input class="nomdutilisateur" type="text" placeholder="Nom"/>

                        <label for="niveau"></label>
                        <select name="nvx" id="niveau-select">
                            <option value="">Niveau</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>
                            <option value="Seconde">Seconde</option>
                            <option value="Première">Première</option>
                            <option value="Terminale">Terminale</option>
                            <option value="Bac+1">Bac+1</option>
                        <option value="Bac+2">Bac+2</option>
                        </select>
                    </div>

                    <input class="nomdprof" type="text" placeholder="Nom du professeur"/>


                    <div class="dateheure">
                        <input class="heure" type="time" id="hours" name="hours" min="09:00" max="20:00" required></input>
                        <small>Disponibilité possible entre 09:00 et 20:00</small>

                        <input class="date" type="date" id="start" name="trip-start" min="2021-11-01" max="2025-12-31"></input>
                    </div>

                    <button class="reserverboutton">Réserver</button>

                </main>
            </div>
        </div>
        )}

        </>
    );
}

export default PrendreCours2;