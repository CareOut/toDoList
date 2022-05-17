import React from "react";
import arrow from "../img/arrow-icon.png";
import "../components/styles/Modal.css";

export default function Modal({ task, setTask, addTask, visible }) {
  const rootClasses = ["popAp"];
  if (visible) {
    rootClasses.push("active");
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className="popAp__wrapper">
        <div className="popAp__content">
          <div className="popAp__title">Enter Task</div>

          <div className="popAp__input">
            <input
              className="input__input"
              type="text"
              value={task.text}
              onChange={(e) =>
                setTask({ id: Date.now(), text: e.target.value })
              }
            />
            <div className="input__button">
              <img
                className="button__img"
                src={arrow}
                alt=""
                onClick={addTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
