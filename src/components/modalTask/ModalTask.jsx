import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { updateTask } from "../../api/index";

const ModalTask = ({ objList, handleClose, show, setList, list }) => {
  const [task, setTask] = useState({
    name: objList.title,
    status: objList.status,
  });

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

    updateTask(id, { title: task.name, status: task.status }).then((res) => {
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
        <p>{objList.title}</p>
        <Form
          className="content_form"
          onSubmit={(e) => handleSubmit(e, objList.id)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="ingrese aqui"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
            <Form.Check
              required
              type="checkbox"
              name="status"
              label="Completa"
              onClick={(e) => handleClick(e)}
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
