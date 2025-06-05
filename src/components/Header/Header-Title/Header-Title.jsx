import React from "react";
import "./Header-Title.css";

export default function HeaderTitle() {
  const linkHeader = ["О школе", "Тренеры", "Стоимость"];

  return (
    <div className="header-title">
      <h1 className="header-name">ROBO.SCHOOL</h1>

      <nav className="header-nav">
        <ul className="header-link-list">
          {linkHeader.map((item, index) => (
            <li className="header-link-item">
              <a href="#" className="header-link-link" key={index}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="header-number">+7 800 000 11 22</h1>
    </div>
  );
}
