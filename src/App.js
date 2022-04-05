import RegisterForm from "./components/RegisterForm/RegisterForm";
import Task from "./components/tasks/Task";
import ModalTask from "./components/modalTask/ModalTask";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { updateTask, deleteTask, asyncTask } from "./api/index";

function App() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [task, setTask] = useState({
    title: "",
    status: false,
  });
  const handleShow = (e, objList) => {
    setTask(objList);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleClick = (e, id_obj, status) => {
    updateTask(id_obj, { status: !status }).then((res) => {
      const newElement = list.map((el) => (el._id === id_obj ? res : el));
      setList(newElement);
    });
  };
  const handleClickDelete = (e, id_obj) => {
    deleteTask(id_obj).then((data) => {
      const newElement = list.filter((e) => e._id !== id_obj);
      setList(newElement);
      alert("Tarea deleted");
    });
  };

  useEffect(() => {
    asyncTask().then((data) => {
      setList(data);
    });
  }, [setList]);

  return (
    <>
      <div className="container mt-5">
        <RegisterForm setList={setList} />

        <div className="row">
          {list?.map((item, index) => (
            <Task
              handleClick={handleClick}
              handleClickDelete={handleClickDelete}
              key={index}
              objList={{ status: item.status, id: item._id, title: item.title }}
              handleShow={handleShow}
              setTask={setTask}
            />
          ))}
        </div>
      </div>
      {show && (
        <ModalTask
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          setList={setList}
          list={list}
          task={task}
          setTask={setTask}
        />
      )}
    </>
  );
}

export default App;
