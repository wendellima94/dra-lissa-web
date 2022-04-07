import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    text-decoration: none;
    outline: none;
    list-style: none;
  }

  a {
    color: #a49f8b;
  }

  li {
    padding: 18px 10px;
    font-weight: 700;
    font-size: medium;

    padding: 10px 20px;
    background-color: rgb(234, 237, 241);
    border-radius: 8px;
    border: none;
  }

  @media (max-width: 768px) {
    div {
      top: 0;
      width: 400px;
      height: 200px;
      margin: -50px -70px -40px 0;
      background: url("http://alphanetguaruja.com.br/wp-content/uploads/2022/03/logo-dralisa.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    padding: 20px 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    z-index: 18;

    flex-flow: column nowrap;
    background-color: #f7efc7;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 60vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

const TopMenu = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }

  width: 92%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    height: 25px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  section span {
    color: gray;
    margin: 0 12px 0 12px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <Container>
        <TopMenu>
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
        </TopMenu>
        <Ul open={open}>
          <div />
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
        </Ul>
      </Container>
    </>
  );
};

export default RightNav;
