import React from "react";
import "./BackButton.scss";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <div className="back-button">
            <Link to='/'>Cofnij</Link>
        </div>
    );
}
