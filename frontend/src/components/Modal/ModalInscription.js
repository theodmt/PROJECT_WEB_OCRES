import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import "./Modal.css";


function ModalInscription() {

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
            Inscription
        </button>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
            <main class="inscriptionpopup">

                <h1>Inscrivez-vous</h1>
                <input class="nomdutilisateur" type="text" placeholder="Nom d'utilisateur"/>
                <input class="motdepasse"type="text" placeholder="Mot de passe"/>
                <input class="motdepasseconfirmation"type="text" placeholder="Confirmez votre mot de passe"/>
                <button class="inscription">Inscription</button>
                <p class="dejauncompte">Vous avez déjà un compte ?</p>
                <a class="connectezvous" href="#">Connectez-vous</a>
                <p> En vous inscrivant vous acceptez nos <a href="#">conditions générales d'utilisation</a></p>

            </main>
                <AiIcons.AiFillCloseSquare className="close-modal" onClick={toggleModal}/>
            </div>
        </div>
        )}

        </>
    );
}

export default ModalInscription;