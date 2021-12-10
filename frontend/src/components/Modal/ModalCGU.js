import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import "./Modal.css";


function ModalCGU() {

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


        <p> 
            En vous inscrivant vous acceptez nos <a href="#" onClick={toggleModal} className="btn-modalcgu"> Conditions générales d'utilisation</a>  
        </p>

        {modal && (
            <div className="modal-cgu">
            <div onClick={toggleModal}></div>
            <div className="modal-content-cgu">
            <main class="cgu">

            <h1>Conditions génerales d'utilisation</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed purus sapien. Vestibulum euismod laoreet tempor. Phasellus metus orci, malesuada imperdiet tincidunt ut, interdum vel urna. Proin vestibulum, ligula fermentum aliquam euismod, sem orci bibendum urna, accumsan vehicula purus purus vel lacus. Pellentesque interdum lorem eget mi cursus tincidunt. Morbi sed massa feugiat lacus commodo fringilla. Morbi vitae elit et arcu efficitur scelerisque. Sed auctor justo cursus interdum varius. Donec lobortis sem eget mauris accumsan malesuada. Morbi sagittis imperdiet sapien eget condimentum. Donec tellus nisl, congue id cursus non, fringilla vitae elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta risus in auctor lacinia.
            <br></br>
                Proin a odio sed dolor faucibus tristique id sit amet magna. Donec porta leo non elit egestas tempor. Donec ornare libero eu libero blandit, non gravida elit cursus. Aenean rutrum mi tellus, a tempor augue mattis et. Aliquam ac efficitur tellus, in aliquet nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ornare egestas tortor non hendrerit. Duis iaculis odio eu pellentesque efficitur. Nam molestie tellus a felis sodales, sit amet posuere augue varius. Sed lacinia, libero a tristique aliquam, felis odio suscipit urna, id pharetra nisi justo ultrices lectus. Donec vehicula egestas consequat.
            <br></br>
                Vivamus a nunc convallis, blandit augue ut, volutpat diam. Proin eu neque lorem. Ut in aliquet nulla. Nullam laoreet magna odio. Suspendisse vel diam sed felis luctus tristique a eget nisl. Nam sed lobortis eros, mattis tristique enim. Sed ut urna non sem rhoncus sagittis quis vitae nisl. In suscipit mi odio, vitae sodales tellus interdum vel. Fusce malesuada tellus eget augue hendrerit, a tincidunt felis tincidunt.
            </p>

            <a href="#" onClick={toggleModal}>Retour à l'accueil</a>

            </main>
                <AiIcons.AiFillCloseSquare className="close-modal" onClick={toggleModal}/>
            </div>
        </div>
        )}

        </>
    );
}

export default ModalCGU;