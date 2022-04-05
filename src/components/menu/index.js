import React from "react";

import "./style.css";

function Menu() {
  return (
    <main className="main-container">
      <nav className="nav-menu">
        <aside className="top-menu">
          <section>
            <aside className="wpp-tel-container">
              <span>
                <img
                  src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/ligar.png"
                  alt="logo redondo"
                />
                <span>(13) 9999-9999</span>
              </span>
            </aside>
            <aside className="wpp-tel-container">
              <span>
                <img
                  src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/whatsapp-1.png"
                  alt="logo redondo"
                />
                <span>(13) 9999-9999</span>
              </span>
            </aside>
          </section>
        </aside>

        <ul>
          <aside className="img-content">
            <img
              src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/logo-dralisa.png"
              alt="logo redondo"
            />
          </aside>
          <li className="nav-itens">
            <a href="#">Inicio</a>
          </li>
          <li className="nav-itens">
            <a href="#">Feedbacks</a>
          </li>
          <li className="nav-itens">
            <a href="#">Sobre a Dra.Lissa</a>
          </li>
          <li className="nav-itens">
            <a href="#">Serviços</a>
          </li>
          <li className="nav-itens">
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Menu;
