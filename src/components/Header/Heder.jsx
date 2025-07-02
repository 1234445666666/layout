import React from "react";
import "./Header.css";
import HeaderTitle from "./Header-Title/Header-Title.jsx";
import HeaderMain from "./Header-Main/Header-Main.jsx";

export default function Header() {
  return (
    <header className="header">
      <HeaderTitle />
      <HeaderMain />
    </header>
  );
}
