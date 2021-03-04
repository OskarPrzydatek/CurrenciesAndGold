import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="not-found">
            <article className="not-found__currencies not-found__currencies-animation">
                <Link to='/'>Brak walut!</Link>
            </article>
            <article className="not-found__gold not-found__gold-animation">
                <Link to='/'>Brak złota!</Link>
            </article>
        </section>
    )
}
