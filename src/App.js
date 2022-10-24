import React from "react";
import Carousel from "./carousel/Carousel";
import List from "./List/List";
import styled from "styled-components";
import { Info } from "./carousel/Info";
import { Info2 } from "./carousel/Info2";
import { Info3 } from "./carousel/Info3";
import { EatDeal } from "./List/EatDeal";
import { Editor } from "./List/Editor";
import { TV } from "./List/TV";
import { HighRate } from "./List/HighRate";

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

const App = () => {
  return (
    <div>
      <Carousel
        title="믿고 보는 맛집리스트"
        more="리스트 더보기"
        info={Info}
      ></Carousel>
      <List title="EAT딜을 판매 중인 식당" info={EatDeal}>
        <Badge />
      </List>
      <List title="에디터가 선정한 식당" info={Editor} />
      <List title="TV에 나온 식당" info={TV} />
      <List title="평점이 높은 인기 식당" info={HighRate} />
      <Carousel title="지역별 인기 맛집" info={Info3} hidden="true" />
      <Carousel title="메뉴별 인기 맛집" info={Info2}></Carousel>
    </div>
  );
};

export default App;
