import React from "react";
import "./style.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImgCarousel = styled.img`
  @media (min-width: 768px) {
    height: 90vh;
  }
`;

function ContentTopImg() {
  return (
    <Carousel>
      <div>
        <ImgCarousel src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/yoga-3053488_1920.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <ImgCarousel src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/yoga-3053488_1920.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <ImgCarousel src="http://alphanetguaruja.com.br/wp-content/uploads/2022/03/yoga-3053488_1920.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    // <main className='content-image'>
    // </main>
  );
}

export default ContentTopImg;
