import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import "./Modal.css";

function Modal() {

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
            Open
        </button>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>Hello Modal</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
                </p>
                <AiIcons.AiOutlineClose className="close-modal" onClick={toggleModal}/>
            </div>
        </div>
        )}

        <p>ldkqfkqdnfnqnknqsknknkq</p>

        </>
    );
}

export default Modal