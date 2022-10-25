import { useEffect, useRef, useState } from "react";
import InnerContainer from "./InnerContainer";
import styled from "styled-components";
import SlideBtn from "./SlideBtn";
import DotBtn from "./DotBtn";
import ModuleTitle from "../ModuleTitle";
import { List } from "./function/ListFunc";
import axios from "axios";
import { Image } from "./Json/Image1";

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
  /* display: inline; */
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => props.width};
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Carousel = ({ title, more, info, hidden, image }) => {
  const container_Carousel = useRef();
  const Dot1 = useRef();
  const Dot2 = useRef();
  const Body = useRef();
  const [nowX, setNowX] = useState(0);
  const arr = info.length;
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    container_Carousel.current.style.transform = `translateX(${nowX}px)`;
  }, [nowX]);

  useEffect(() => {
    container_Carousel.current.style.width = `calc((${
      arr * 28 + arr * 1.5 + 24
    }vw)/2)`;
    Body.current.style.width = `clac(${
      container_Carousel.current.offsetWidth / 2
    })`;
  }, []);
  // useEffect(() => {
  //   // async를 사용하는 함수 따로 선언
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=12&serviceKey=iOgxDdfAPCg9el%2BtPlGWR1GD8VdhAcInYf9ScWgsSarm%2BUIhn2NeLawCOkg25nW8MhyRZwmWrwlGgF95nwcXXw%3D%3D"
  //       );
  //       setData(response.data.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);
  // if (loading) {
  //   return <ContainerBlock>대기 중…</ContainerBlock>;
  // }
  // if (!data) {
  //   return null;
  // }
  const onClick = (e) => {
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
        <SlideBtn onClick={onClick} value={-1} hidden={hidden} />
      ) : (
        <SlideBtn
          onClick={onClick}
          value={0}
          direction="left"
          hidden={hidden}
        />
      )}
      <BodyBlock ref={Body}>
        <CarouselBlock ref={container_Carousel}>
          {List(info, image).map((content) => (
            <InnerContainer key={content.상호} info={content} />
          ))}
        </CarouselBlock>
      </BodyBlock>
      <DotBtn ref1={Dot1} ref2={Dot2} onClick={onClick} hidden={hidden} />
    </ContainerBlock>
  );
};

export default Carousel;
