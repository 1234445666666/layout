import React from "react";
import "./Main.css";
import AboutMain from "./About-Main/About-Main.jsx";     
import InformationMain from "./Information-Main/Information-Main.jsx";   

export default function Main() {
    return (
        <div className="main">
            <AboutMain />
            <InformationMain />
        </div>

    )
}