async function updateTask(id, data) {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const res = await fetch(
    `http://localhost:5000/api/tasks/update/${id}`,
    config
  );

  const { editTask } = await res.json();
  return editTask;
}
async function deleteTask(id) {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    `http://localhost:5000/api/tasks/delete/${id}`,
    config
  );
  const data = await res.json();
  return data.newTask;
}
async function asyncTask() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("http://localhost:5000/api/tasks/all", config);
  const data = await response.json();
  return data;
}
async function createTask(task) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: task }),
  };
  const res = await fetch("http://localhost:5000/api/tasks/create", config);
  const data = await res.json();
  return data.newTask;
}

export { updateTask, deleteTask, asyncTask, createTask };
