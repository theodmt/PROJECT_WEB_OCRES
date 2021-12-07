import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import "./Modal.css";


function ModalConnexion() {

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

        <button onClick={toggleModal} className="btn-modal">
            Connexion
        </button>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <main class="connexionpopup">

                    <h1>Connectez-vous</h1>
                    <input class="nomdutilisateur" type="text" placeholder="Nom d'utilisateur"/>
                    <input class="motdepasse"type="text" placeholder="Mot de passe"/>
                    <button class="connexionboutton">Connexion</button>
                    <a class="motdepasseoublié" href="#">Mot de passe oublié ?</a>
                    <p class="pasencoredecompte">Vous n'avez pas encore de compte ?</p>
                    <a class="inscrivezvous" href="#">Inscrivez-vous</a>

                </main>
                <AiIcons.AiFillCloseSquare className="close-modal" onClick={toggleModal}/>
            </div>
        </div>
        )}

        </>
    );
}

export default ModalConnexion;