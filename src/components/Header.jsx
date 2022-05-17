import React from "react";
import search from "../img/search_icon.png";
import arrow from "../img/arrow-icon.png";
import add from "../img/Add-icon.png";
import burger from "../img/Burger-icon.png";
import "../components/styles/Header.css";

export default function Header({ task, setTask, addTask, setVisible }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__search">
            <img className="search__icon" src={search} alt="" />
          </div>
          <div className="header__input">
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
          <div className="header__add">
            <img src={add} alt="" onClick={setVisible} />
          </div>
          <div className="header__burger">
            <img className="burger__icon" src={burger} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
