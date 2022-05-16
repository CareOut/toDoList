import React from "react";
import ellipse from "../img/Ellipse-icon.png";
import plus from "../img/Plus-icon.svg";
import "../components/styles/Task.css";

export default function Task({ task, remove, complete }) {
  return (
    <div className="tasks__card">
      <div className="card__img">
        <img
          className="card__img-img"
          src={ellipse}
          alt=""
          onClick={() => complete(task)}
        />
      </div>
      <div className="card__content">{task.text}</div>
      <div className="card__close">
        <img
          className="close__img"
          src={plus}
          alt=""
          onClick={() => remove(task)}
        />
      </div>
    </div>
  );
}
