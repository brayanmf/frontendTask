import { Card, Button } from "react-bootstrap";
const Task = ({ objList, handleClick, handleClickDelete, handleShow }) => {
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
                <Button
                  variant="warning"
                  onClick={(e) => {
                    handleShow(e, objList);
                  }}
                >
                  Editar
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Task;
