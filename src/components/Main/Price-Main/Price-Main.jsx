import React from "react";
import "./Price-Main.css";

export default function PriceMain() {
  const cards = [
    {
      title: "– PRO –",
      price: "20.000 ₽",
      text: "УМК по робототетхнике и программированию",
      button: "Оставить заявку",
    },
    {
      title: "– POBO –",
      price: "15.000 ₽",
      text: "УМК по робототетхнике ",
      button: "Оставить заявку",
    },
    {
      title: "– PROG –",
      price: "10.000 ₽",
      text: "УМК по программированию",
      button: "Оставить заявку",
    },
  ];
  return (
    <section className="price-main">
      <h2 className="price-main-title">Выберите нужный пакет</h2>
      <div className="price-main-cards">
        {cards.map((card) => (
          <div className="price-main-card">
            <p className="price-main-card-title">{card.title}</p>
            <p className="price-main-card-price">{card.price}</p>
            <p className="price-main-card-text">{card.text}</p>
            <button onClick={() => alert("Заявка отправлена")} className="price-main-card-button">{card.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
