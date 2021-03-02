import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <nav className='home'>
            <ul className='menu'>
                <li className="menu__currencies">
                    <Link to='/currencies'>WALUTY</Link>
                </li>
                <li className="menu__gold">
                    <Link to='/gold'>ZŁOTO</Link>
                </li>
            </ul>
        </nav>
    )
}
