import React from "react";
import "./Form-Main.css";

export default function FormMain() {
  return (
    <section className="form-main">
      <div className="form-main-content">
        <h2 className="form-main-title">Запишитесь на курс со скидкой 10%</h2>
        <p className="form-main-text">
          Акция действительна до 10 марта 2022 года
        </p>
      </div>

      <div className="form-main-form">
        <form
          action=""
          className="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Имя"
            className="form-main-input"
          />
          <input type="tel" placeholder="Телефон" className="form-main-input" />
          <input
            type="email"
            placeholder="E-mail"
            className="form-main-input"
          />
          <button
            onClick={() => alert("Заявка отправлена")}
            type="submit"
            className="form-main-button"
          >
            Оформить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
