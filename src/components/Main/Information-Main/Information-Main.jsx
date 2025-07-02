import React from "react";
import "./Information-Main.css";

export default function InformationMain() {
  const cards = [
    {
      title: "Удостоверение",
      text: "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
    },
    {
      title: "Знания",
      text: "По основам разработки учебно-методических комплев по робототехнике и программированию",
    },
    {
      title: "Практику",
      span: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#141024" fill-opacity="0.08" />

          <g fill="#141024">
            <path d="M11.55 7.87c-.59 0-.89-.28-.89-.84 0-.55.3-.82.89-.82.59 0 .89.27.89.82 0 .56-.3.84-.89.84z" />

            <path d="M11.55 18.08c-.45 0-.67-.25-.67-.73v-6.87c0-.48.22-.72.67-.72.46 0 .69.24.69.72v6.87c0 .48-.23.73-.69.73z" />
          </g>
        </svg>
      ),
      text: "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)",
    },
  ];
  return (
    <section className="information-main">
      <div className="information-main-text">
        <h1 className="information-main-title">Что вы получите после курса</h1>
      </div>

      <div className="information-main-cards">
        {cards.map((item, index) => (
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
