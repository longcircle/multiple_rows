import React, { useState, useEffect } from "react";
import axios from "axios";
import ContainerBlock from "./Carousel";
import InnerContainer from "./InnerContainer";
import { List } from "./function/ListFunc";
import { Image } from "./Json/Image1";

const ApiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=12&serviceKey=iOgxDdfAPCg9el%2BtPlGWR1GD8VdhAcInYf9ScWgsSarm%2BUIhn2NeLawCOkg25nW8MhyRZwmWrwlGgF95nwcXXw%3D%3D"
        );
        setData(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);
  console.log(Image);
  // 대기 중일 때
  if (loading) {
    return <ContainerBlock>대기 중…</ContainerBlock>;
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      {List(data, Image).map((content) => (
        <InnerContainer key={content.상호} info={content} />
      ))}
    </div>
  );
};

export default ApiData;
