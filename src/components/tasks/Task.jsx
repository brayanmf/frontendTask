import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ModalTask from "../modalTask/ModalTask";

const Task = ({ objList, handleClick, handleClickDelete, setList, list }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=" col-sm-4 ">
        <Card className="m-2 mt-5">
          <Card.Body>
            <Card.Title>{objList.title}</Card.Title>
            <Card.Text>
              Tarea {!objList.status ? "incompleta" : "completa"}
            </Card.Text>
            <div className="d-flex justify-content-around">
              <Button
                variant="primary"
                onClick={(e) => handleClick(e, objList.id, objList.status)}
              >
                Marcar {objList.status ? "incompleta" : "completa"}
              </Button>
              {objList.status ? (
                <Button
                  variant="danger"
                  onClick={(e) => {
                    handleClickDelete(e, objList.id);
                  }}
                >
                  Eliminar
                </Button>
              ) : (
                <Button variant="warning" onClick={handleShow}>
                  Editar
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <ModalTask
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        objList={objList}
        setList={setList}
        list={list}
      />
    </>
  );
};

export default Task;
