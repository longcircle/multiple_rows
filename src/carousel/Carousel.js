import { useEffect, useRef, useState } from "react";
import InnerContainer from "./InnerContainer";
import styled from "styled-components";
import SlideBtn from "./SlideBtn";
import DotBtn from "./DotBtn";
import ModuleTitle from "../ModuleTitle";

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
  width: 88.6vw;
  height: 501px;
  margin: 10px 90px auto;
`;

const CarouselBlock = styled.section`
  /* display: inline; */
  box-sizing: border-box;
  position: absolute;
  width: 200vw;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Carousel = ({ title, more, info, hidden }) => {
  const container_Carousel = useRef();
  const Dot1 = useRef();
  const Dot2 = useRef();
  const Body = useRef();
  const [nowX, setNowX] = useState(0);
  const arr = info.map((content) => (
    <InnerContainer key={content.textId} info={content} />
  ));
  // console.log(InnerContainer);

  // let width = Body.current.offsetWidth;

  useEffect(() => {
    container_Carousel.current.style.transform = `translateX(${nowX}px)`;
  }, [nowX]);

  useEffect(() => {
    container_Carousel.current.style.width = `calc((${
      arr.length * 28 + arr.length * 1.5 + 23
    }vw)/2)`;
  }, []);

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

  console.log(arr.length);
  return (
    <ContainerBlock>
      <ModuleTitle title={title} more={more} />
      {nowX === 0 ? (
        <SlideBtn onClick={Button} value={-1} hidden={hidden} />
      ) : (
        <SlideBtn onClick={Button} value={0} direction="left" hidden={hidden} />
      )}
      <BodyBlock ref={Body}>
        <CarouselBlock ref={container_Carousel}>
          {info.map((content) => (
            <InnerContainer key={content.textId} info={content} />
          ))}
        </CarouselBlock>
      </BodyBlock>
      <DotBtn ref1={Dot1} ref2={Dot2} hidden={hidden} />
    </ContainerBlock>
  );
};

export default Carousel;
