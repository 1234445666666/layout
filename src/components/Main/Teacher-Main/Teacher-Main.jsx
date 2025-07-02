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
    },
    {
      img: teacherTwo,
      name: "Марина Орлова",
      text: "преподаватель по робототехнике",
      detail: "Подробнее",
    },
    {
      img: teacherThree,
      name: "Максим Петров",
      text: "преподаватель по программированию",
      detail: "Подробнее",
    },
    {
      img: teacherOne,
      name: "Константин Назаров",
      text: "преподаватель по робототехнике",
      detail: "Подробнее",
    },
    {
      img: teacherFive,
      name: "Лиза Весенняя",
      text: "преподаватель по программированию",
      detail: "Подробнее",
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

  const visibleCards = cards.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  const [open , setOpen] = useState(false)

  return (
    <section className="teacher-main">
      <h1 className="teacher-main-title">Профессиональные тренеры</h1>

      <div className="teacher-main-cards">
        {visibleCards.map((item, index) => (
          <div className="teacher-main-card" key={index}>
            <img className="teacher-main-img" src={item.img} alt={item.name} />
            <p className="teacher-main-name">{item.name}</p>
            <p className="teacher-main-text">{item.text}</p>
            <a className="teacher-main-detail" onClick={() =>setOpen(true)}>{item.detail}</a>
          </div>
        ))}

        {
          open && (<div className="overlay fade-in">
            <div className="modal">
              <h1>Модальное окно открыто</h1>
              <button
                onClick={() => setOpen(false)}
                className="close-modal-btn"
              >
                Закрыть модальное окно
              </button>
            </div>
          </div>)
        }
      </div>

      <div className="teacher-main-carousel">
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>&#60;</button>
          <button className="carousel-button" onClick={handleNext}>&#62;</button>
        </div>
      </div>
    </section>
  );
}
