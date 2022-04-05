import React from "react";
import styled from "styled-components";
import Burger from "./Burguer";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;

  padding: 10px 10px ;
  
  
`;

const ImgLogo = styled.img `
  margin-top: -30px;
  width: 300px;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <ImgLogo
          src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/logo-dralisa.png"
          alt="logo redondo"
        />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
