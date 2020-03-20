import React from 'react';
import Modal from 'react-modal'

const Modall = ({setmodalOpen,modalIsOpen}) =>{


    return (
        <div className="App">
        <button onClick={()=> setmodalOpen(true)}>Open modal</button>
    <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>setmodalOpen(false)}
    >
        <h2> Aide CS:GO</h2>
        <p>Ivan Popov </p>
        <div>
            <button onClick={()=>setmodalOpen(false)}>Close modal</button>
        </div>
    </Modal>
        </div>
    );
};

Modal.propTypes = {

};

export default Modall;