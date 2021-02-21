import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <nav>
            <ul>
                <li><Link to='/currencies'>Waluty</Link></li>
                <li><Link to='/gold'>Złoto</Link></li>
            </ul>
        </nav>
    )
}
