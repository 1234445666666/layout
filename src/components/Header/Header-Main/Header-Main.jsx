import React from "react";
import "./Header-Main.css";
import headerMain from "/assets/header-main.png";

export default function HeaderMain() {
  return (
    <div className="header-main">
      <div className="content-one">
        <h1 className="header-main-title">ROBO SCHOOL</h1>
        <p className="header-main-text">
          Курсы повышения квалификации по робототехнике для педагогов начальной
          школы
        </p>
        <button className="header-main-button">Записаться на курс</button>
      </div>

      <div className="content-two">
        <img className="header-main-img" src={headerMain} alt="фото человека" />
      </div>
    </div>
  );
}
