import Cards from "./components/cards";
import ContentTopImg from "./components/content-top-img";
import Menu from "./components/menu";

import "./App.css";
import About from "./components/about";
import Navbar from "./components/Nav/Navbar";

import styled from "styled-components";
import ScrollToTop from "./components/scrollToTop";

const Border = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NoneNavBar = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MainWrapper = styled.main `
  margin-top: 170px;
`

function App() {
  return (
    <div className="App">
      <NoneNavBar>
        <Navbar />
      </NoneNavBar>
      <header className="App-header">
        <Border>
          <Menu />
        </Border>
      </header>
      <MainWrapper>
        <ContentTopImg />
        <About />
        <section className="content-cards">
          <Cards />
        </section>
      </MainWrapper>
      <ScrollToTop />
    </div>
  );
}

export default App;
