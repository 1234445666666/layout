import React from "react";
import "./About-Main.css";
import { card } from "/src/components/Main/About-Main/About.js";
export default function AboutMain() {
  return (
    <section className="about-main">
      <div className="about-main-text">
        <p className="about-main-title">
          <span className="about-main-title-span">Robo School </span> –
          учреждение для формирования кадрового педагогического резерва в сфере
          робототехники и программирования
        </p>
      </div>

      <div className="about-main-cards">
        {card.map((item, index) => (
          <div className="about-main-card" key={"card" + index}>
            <p className="about-main-card-number">{item.number}</p>
            <p className="about-main-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
