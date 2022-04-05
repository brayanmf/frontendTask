import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./RegisterForm.css";
import { createTask } from "../../api/index";

const RegisterForm = ({ setList }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(task).then((el) => {
      return setList((setList) => [...setList, el]);
    });
    e.target.reset();
  };
  return (
    <Form className="content_form" onSubmit={handleSubmit}>
      <h2>Lista de tareas </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titulo de la tarea</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese aqui"
          name="task"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          Escribe la tarea que desea Registrar
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
};

export default RegisterForm;
