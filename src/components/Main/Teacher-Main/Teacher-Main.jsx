import React, { useState } from "react";
import "./Teacher-Main.css";
import "./Modal.css";
import { card } from "/src/components/Main/Teacher-Main/Teacher.js";

export default function TeacherMain() {
  const visibleCount = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? card.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + visibleCount >= card.length ? 0 : prevIndex + 1
    );
  };

  const visibleCard = card.slice(activeIndex, activeIndex + visibleCount);

  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (teacher) => {
    setSelectedCard(teacher);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="teacher-main">
      <h1 className="teacher-main-title">Профессиональные тренеры</h1>

      <div className="teacher-main-cards">
        {visibleCard.map((item, index) => (
          <div className="teacher-main-card" key={"card-" + index}>
            <img className="teacher-main-img" src={item.img} alt={item.name} />
            <p className="teacher-main-name">{item.name}</p>
            <p className="teacher-main-text">{item.text}</p>
            <a className="teacher-main-detail" onClick={() => openModal(item)}>
              {item.detail}
            </a>
          </div>
        ))}

        {selectedCard && (
          <div className="overlay fade-in">
            <div className="modal">
              <h1>{selectedCard.name}</h1>
              <img src={selectedCard.img} alt="{selectedCard.name}" />
              <p>{selectedCard.fullInfo}</p>
              <img src="{seltectedCard.img}" alt="" />
              <a onClick={() => closeModal(false)} className="close-modal-link">
                Закрыть модальное окно
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="teacher-main-carousel">
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>
            &#60;
          </button>
          <button className="carousel-button" onClick={handleNext}>
            &#62;
          </button>
        </div>
      </div>
    </section>
  );
}
