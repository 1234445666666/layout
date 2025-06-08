import React from "react";
import "./About-Main.css";

export default function AboutMain() {
  const aboutMain = [
    {
      number: 10,
      text: "УМК по различным направлениям по робототехнике",
    },
    {
      number: 20,
      text: "Школ, в которых запущена робототехника",
    },
    {
      number: 100,
      text: "Педагогов прошедших курсы повышения квалификации",
    },
    {
      number: "10 000",
      text: "Обученных детей на базе собственных центров",
    },
  ];
  return (
    <div className="about-main">
      <div className="about-main-text">
        <p className="about-main-title">
          <span className="about-main-title-span">Robo School </span> –
          учреждение для формирования кадрового педагогического резерва в сфере
          робототехники и программирования
        </p>
      </div>

      <div className="about-main-cards">
        {aboutMain.map((item, index) => (
          <div className="about-main-card" key={index}>
            <p className="about-main-card-number">{item.number}</p>
            <p className="about-main-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
