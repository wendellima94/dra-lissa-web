import React from "react";
import "./style.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImgCarousel = styled.img`
  padding: 0 40px;

  @media (min-width: 768px) {
    height: 90vh;
  }

  @media (max-width: 768px) {
    height: 280px;
    margin: 30px 0;
    max-height: 300px;
    padding: 0 0;
    background-color: #fff;
  }
`;

const MainWrapper = styled.main`
  @media (max-width: 768px) {
    margin: 50px 10px;

    max-height: 350px;
    padding: 0 0;
    background-color: #fff;
    height: 300px;
  }
`;

function ContentTopImg() {
  return (
    <MainWrapper>
      <Carousel>
        <div>
          <ImgCarousel
            src="https://live.staticflickr.com/65535/52043744145_74c5c9624b_o.jpg"
            alt="seria2"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <ImgCarousel src="https://live.staticflickr.com/65535/52043285698_daf22fe3b8_o.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <ImgCarousel src="https://live.staticflickr.com/65535/52046663669_5a9f8c1852_o.jpg"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </MainWrapper>
  );
}

export default ContentTopImg;
