import React from "react";
import arrow from "../img/arrow-icon.png";
import "../components/styles/Modal.css";

export default function Modal() {
  return (
    <div className="popAp">
      <div className="popAp__wrapper">
        <div className="popAp__content">
          <div className="popAp__title">Enter Task</div>

          <div className="popAp__input">
            <input className="input__input" type="text" />
            <div className="input__button">
              <img className="button__img" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
