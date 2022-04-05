import { Button, Form, Modal } from "react-bootstrap";

import { updateTask } from "../../api/index";

const ModalTask = ({ handleClose, show, setList, list, task, setTask }) => {
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    setTask((task) => ({ ...task, status: !task.status }));
  };
  const handleSubmit = (e, id) => {
    e.preventDefault();

    updateTask(id, { title: task.title, status: task.status }).then((res) => {
      const newElement = list.map((el) => (el._id === id ? res : el));
      setList(newElement);
    });
    handleClose();
    e.target.reset();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{task.title}</p>
        <Form
          className="content_form"
          onSubmit={(e) => handleSubmit(e, task.id)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="ingrese aqui"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              name="status"
              label="Completa"
              onChange={(e) => handleClick(e)}
              checked={task.status}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Actualizar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTask;
