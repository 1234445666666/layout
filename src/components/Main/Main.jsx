import React from "react";
import "./Main.css";
import AboutMain from "./About-Main/About-Main.jsx";     
import InformationMain from "./Information-Main/Information-Main.jsx";   
import TeacherMain from "./Teacher-Main/Teacher-Main.jsx";
import PriceMain from "./Price-Main/Price-Main.jsx";
import FormMain from "./Form-Main/Form-Main.jsx";

export default function Main() {
    return (
        <main className="main">
            <AboutMain />
            <InformationMain />
            <TeacherMain />
            <PriceMain />
            <FormMain />
        </main>
    )
}
