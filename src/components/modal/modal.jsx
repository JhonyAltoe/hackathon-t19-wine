import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function modal(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h4 className="text-center">Boas vindas à Wine!</h4>
        <p className="text-center">Você tem mais de 18 anos?</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="outline-success" onClick={props.onHide}>
          Sim
        </Button>
        <Button
          variant="outline-danger"
          as="a"
          href="https://www.abrabe.org.br/responsabilidade-social/autorregulamentacao-publicitaria/">
          Não
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
