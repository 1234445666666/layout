import React from "react";
import "./Price-Main.css";
import { card } from "/src/components/Main/Price-Main/Price.js";

export default function PriceMain() {
  return (
    <section className="price-main">
      <h2 className="price-main-title">Выберите нужный пакет</h2>
      <div className="price-main-cards">
        {card.map((card, index) => (
          <div className="price-main-card" key={"card-" + index}>
            <p className="price-main-card-title">{card.title}</p>
            <p className="price-main-card-price">{card.price}</p>
            <p className="price-main-card-text">{card.text}</p>
            <button
              onClick={() => alert("Заявка отправлена")}
              className="price-main-card-button"
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
