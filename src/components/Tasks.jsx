import React from "react";
import "../components/styles/Tasks.css";
import Task from "./Task";

export default function Tasks({ taskList, task, remove, complete }) {
  return (
    <section className="tasks">
      <div className="container">
        <div className="tasks__wrapper">
          <div className="tasks__title">My Tasks</div>
          <div className="tasks__content">
            {taskList.map((task) => (
              <Task
                task={task}
                remove={remove}
                key={task.id}
                complete={complete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
