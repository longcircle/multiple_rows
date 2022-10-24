import { useEffect, useRef, useState } from "react";
import InnerContainer from "./InnerContainer";
import styled from "styled-components";
import SlideBtn from "./SlideBtn";
import DotBtn from "./DotBtn";
import ModuleTitle from "../ModuleTitle";
import { Info } from "./Info";

const ContainerBlock = styled.div`
  margin: 0;
  width: 100vw;
  height: 660px;
  display: block;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid #dbdbdb;
  padding: 38px 0 36px 0;
`;

const BodyBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 501px;
  margin: 10px 90px auto;
`;

const CarouselBlock = styled.section`
  box-sizing: border-box;
  position: absolute;
  width: 200vw;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Carousel = ({ title, more, children }) => {
  const container_Carousel = useRef();
  const Dot1 = useRef();
  const Dot2 = useRef();
  const Body = useRef();
  const [nowX, setNowX] = useState(0);

  // let width = Body.current.offsetWidth;

  useEffect(() => {
    container_Carousel.current.style.transform = `translateX(${nowX}px)`;
  }, [nowX]);

  // useState 말고 useEffect를 이용해야할듯.
  const Button = (e) => {
    if (parseInt(e.target.value) === 0) {
      setNowX((prop) => 0);
      Dot1.current.style.backgroundColor = "orange";
      Dot2.current.style.backgroundColor = "";
    } else if (parseInt(e.target.value) === -1) {
      let width = Body.current.offsetWidth;
      setNowX((prop) => e.target.value * width);
      Dot2.current.style.backgroundColor = "orange";
      Dot1.current.style.backgroundColor = "";
    }
  };
  return (
    <ContainerBlock>
      <ModuleTitle title={title} more={more} />
      {nowX === 0 ? (
        <SlideBtn onClick={Button} value={-1} />
      ) : (
        <SlideBtn onClick={Button} value={0} direction="left" />
      )}
      <BodyBlock ref={Body}>
        <CarouselBlock ref={container_Carousel}>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/gwjm44q804mbmvji.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/dkiovygfrwyedw_r.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[0] = ["맛집1", "주소1"])}
          </InnerContainer>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xp8tqpzvpnkze1up.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/j32ez3ban9-rxaur.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[1] = ["맛집2", "주소2"])}
          </InnerContainer>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/pgzkxfxjdtfhpxrh.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zwh3kvnq1aiwzjjy.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[2] = ["맛집3", "주소3"])}
          </InnerContainer>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zn-9npqsx9hugpzb.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/bk2rrl18v7kdrjds.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[3] = ["맛집4", "주소4"])}
          </InnerContainer>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/yollmteq-ktxy6ec.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/sjfnxiidoh22pp-4.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[4] = ["맛집5", "주소5"])}
          </InnerContainer>
          <InnerContainer
            src1="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/of-6ku6surah9hjs.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            src2="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xzxz-ozjnlzqugrv.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
          >
            {(children[5] = ["맛집6", "주소6"])}
          </InnerContainer>
        </CarouselBlock>
      </BodyBlock>
      <DotBtn ref1={Dot1} ref2={Dot2} />
    </ContainerBlock>
  );
};

export default Carousel;
