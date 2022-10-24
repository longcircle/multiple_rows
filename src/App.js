import React from "react";
import Carousel from "./carousel/Carousel";
import EatDeal from "./EatDeal";
import styled from "styled-components";
import { Info } from "./carousel/Info";

const Badge = styled.i`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  width: 14%;
  padding-bottom: 14%;
  background-size: cover;
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/badge_pictures/r-i0n1w_hdfo4vlf.png");
`;

let info = ["맛집", "주소"];

const App = () => {
  return (
    <div>
      <Carousel title="믿고 보는 맛집리스트" more="리스트 더보기">
        {[info, info, info, info, info, info]}
      </Carousel>
      <EatDeal title="EAT딜을 판매 중인 식당">
        <Badge />
      </EatDeal>
    </div>
  );
};

export default App;
