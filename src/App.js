import { useState } from "react";
import "./App.css";
import Completed from "./components/Completed";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState({ id: "", text: "" });
  const [taskList, setTaskList] = useState([]);
  let completedTask = { id: "", text: "" };
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [modal, setModal] = useState(false);

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask({ id: "", text: "" });
    setModal(false);
  };

  const removeTask = (task) => {
    setTaskList(taskList.filter((t) => t.id !== task.id));
  };

  const removeCompletedTask = (task) => {
    setCompletedTaskList(completedTaskList.filter((t) => t.id !== task.id));
  };

  const completeTask = (task) => {
    completedTask = task;
    setCompletedTaskList([...completedTaskList, completedTask]);
    setTaskList(taskList.filter((t) => t.id !== task.id));
  };
  const setVisible = () => setModal(true);

  return (
    <div className="App">
      <Header
        task={task}
        setTask={setTask}
        addTask={addTask}
        setVisible={setVisible}
      />
      <Tasks
        taskList={taskList}
        task={task}
        remove={removeTask}
        complete={completeTask}
      />
      <Completed
        completedTaskList={completedTaskList}
        completedTask={completedTask}
        remove={removeCompletedTask}
      />
      <Modal task={task} setTask={setTask} addTask={addTask} visible={modal} />
    </div>
  );
}

export default App;
