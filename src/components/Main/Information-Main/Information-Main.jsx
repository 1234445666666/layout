import React from "react";
import "./Information-Main.css";
import { card } from "/src/components/Main/Information-Main/Information.jsx";

export default function InformationMain() {
  return (
    <section className="information-main">
      <div className="information-main-text">
        <h1 className="information-main-title">Что вы получите после курса</h1>
      </div>

      <div className="information-main-cards">
        {card.map((item, index) => (
          <div className="information-main-card" key={"card-" + index}>
            <h2 className="information-main-card-title">
              {item.title}
              <span className="information-main-card-span">{item.span}</span>
            </h2>

            <p className="information-main-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
