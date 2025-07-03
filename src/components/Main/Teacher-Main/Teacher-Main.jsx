import React, { useState } from "react";
import "./Teacher-Main.css";
import "./Modal.css";
import teacherOne from "/assets/teacher/teacher1.png";
import teacherTwo from "/assets/teacher/teacher2.png";
import teacherThree from "/assets/teacher/teacher3.png";
import teacherFour from "/assets/teacher/teacher4.png";
import teacherFive from "/assets/teacher/teacher5.png";

export default function TeacherMain() {
  const cards = [
    {
      img: teacherFour,
      name: "Ирина Лайм",
      text: "преподаватель по робототехнике",
      detail: "Подробнее",
      fullInfo:
        "34 года. 8 лет опыта в робототехнике и AI. Разрабатывала образовательные программы для Lego Mindstorms и Arduino. Учит детей создавать и программировать роботов.",
    },
    {
      img: teacherTwo,
      name: "Марина Орлова",
      text: "преподаватель по робототехнике",
      detail: "Подробнее",
      fullInfo:
        "29 лет. 5 лет преподает робототехнику. Участвовала в соревнованиях RoboCup. Специализируется на Python и ROS (Robot Operating System).",
    },
    {
      img: teacherThree,
      name: "Максим Петров",
      text: "преподаватель по программированию",
      detail: "Подробнее",
      fullInfo:
        "31 год. 7 лет в IT, из них 4 года преподает. Эксперт в Python, JavaScript и алгоритмах. Помогает ученикам участвовать в олимпиадах по программированию.",
    },
    {
      img: teacherOne,
      name: "Константин Назаров",
      text: "преподаватель по робототехнике",
      detail: "Подробнее",
      fullInfo:
        "40 лет. 12 лет опыта в инженерии и образовании. Работал с промышленными роботами Fanuc. Учит проектированию и 3D-моделированию.",
    },
    {
      img: teacherFive,
      name: "Лиза Весенняя",
      text: "преподаватель по программированию",
      detail: "Подробнее",
      fullInfo:
        "26 лет. 4 года преподает. Специалист по фронтенду (HTML/CSS/JS) и геймдеву на Unity. Ведет курсы по созданию игр для детей.",
    },
  ];
  const visibleCount = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + visibleCount >= cards.length ? 0 : prevIndex + 1
    );
  };

  const visibleCards = cards.slice(activeIndex, activeIndex + visibleCount);

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
        {visibleCards.map((item, index) => (
          <div className="teacher-main-card" key={index}>
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
