import React from "react";

import "./styles.css";


export function Navbar() {
    return (
        <header>
            <nav id="navbar">
                <div className="nav-brand">
                    <img src="" alt="" />
                    <h1>Primeiro App React</h1>
                </div>
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre Nós</a></li>
                    <li><a href="/">Categorias</a></li>
                    <li><a href="/">Contatos</a></li>
                </ul>
            </nav>
        </header>
    )
}


