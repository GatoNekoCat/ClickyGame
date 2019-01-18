import React from 'react';
import "./nav.css";

const Nav = props => (
    <nav className="navbar-nav">
        <ul>
            <li className="navbar-brand">
                <a href="/clickyGame/">{props.title}</a>
            </li>
            <li id='last-choice'>
                {props.lastChoice}
            </li>
            <li id="score">
                Score: {props.score}
            </li>
            <li id="top-score">
                Score: {props.highScore}
            </li>
        </ul>
    </nav>
)

export default Nav;