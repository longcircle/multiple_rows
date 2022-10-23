import React from "react";
import Carousel from "./carousel/Carousel";
import EatDeal from "./EatDeal";

const App = () => {
  return (
    <div>
      <Carousel title="믿고 보는 맛집리스트" more="리스트 더보기" />
      <EatDeal title="EAT딜을 판매 중인 식당" />
    </div>
  );
};

export default App;
