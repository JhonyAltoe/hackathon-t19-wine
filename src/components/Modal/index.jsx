import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function modal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="teste">
      <Modal.Header className="flex-column">
        <h4 className="text-center">Boas vindas à Wine!</h4>
        <p className="text-center">Você tem mais de 18 anos?</p>
      </Modal.Header>
      <Modal.Footer className="justify-content-center">
        <Button variant="outline-success" onClick={props.onHide}>
          Sim
        </Button>
        <Button variant="outline-danger" as="a" href="https://youtu.be/mn4rkKbFK6I?t=16">
          Não
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
