import React from "react";
import ellipseFill from "../img/EllipseFill-icon.png";
import plus from "../img/Plus-icon.svg";
import "../components/styles/CompletedTask.css";

export default function CompletedTask({ completedTask, remove }) {
  return (
    <div className="completed__card">
      <div className="card__img">
        <img className="card__img-img" src={ellipseFill} alt="" />
      </div>
      <div className="card__content">{completedTask.text}</div>
      <div className="card__close">
        <img
          className="close__img"
          src={plus}
          alt=""
          onClick={() => remove(completedTask)}
        />
      </div>
    </div>
  );
}
