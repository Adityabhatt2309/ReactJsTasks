import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: green;
  cursor: pointer;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: "red",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


const ReactModal = () => {
    const [showModal, setShowModal] = useState(false);

    function handleOpenModal() {
      setShowModal(true);
    }
  
    function handleCloseModal() {
      setShowModal(false);
    }
  return (
    <div>
    <Button onClick={handleOpenModal}>Open Modal</Button>
    <Modal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <h2>Modal Title</h2>
      <p>Modal content goes here</p>
      <Button onClick={handleCloseModal}>Close Modal</Button>
    </Modal>
  </div>
  )
}

export default ReactModal