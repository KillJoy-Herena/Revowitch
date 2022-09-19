import  Donacion  from './Donacion';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/js/bootstrap.bundle";
import { Form, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';

 

const StaticModal= ({show, handleClose}) => {
  const  [monto ,setMonto] = useState  ();
  const  obtenerMonto = ({target}) => {
    setMonto(target.value)
  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contribuye a nuestra causa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ayudar a preservar el planeta de las siguientes generaciones 
          <Form>
          
          {['radio'].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
            <FormGroup>
            <Form.Check reverse type={type}
            value="90"
             name="group1" 
              id={`reverse-${type}-1`}
              label=" Donar $90 USD" />
            <Form.Check reverse 
            id={`reverse-${type}-2`}type={type} 
            value="45"
            name="group1" label=" Donar $45  USD" />
            </FormGroup>  </div>
            ))}
        
          </Form>
          Aceptamos todas las tarjetas, no almacenamos ningun dato al procesar el pago, trabajamos junto con las APIS mas potentes y demandadas en la red para brindar conexiones seguras.
        </Modal.Body>
        <Donacion/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, gracias.
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StaticModal ;