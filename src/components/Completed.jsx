import React from "react";
import "../components/styles/Completed.css";
import CompletedTask from "./CompletedTask";

export default function Completed({
  completedTask,
  completedTaskList,
  remove,
}) {
  return (
    <section className="completed">
      <div className="container">
        <div className="completed__wrapper">
          <div className="completed__title">Completed</div>
          <div className="completed__content">
            {completedTaskList.map((completedTask) => (
              <CompletedTask completedTask={completedTask} remove={remove} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
