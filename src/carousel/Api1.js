import { useState, useEffect } from "react";
import axios from "axios";
import ContainerBlock from "./Carousel";

const Api1 = () => {
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

  // 대기 중일 때
  if (loading) {
    return <ContainerBlock>대기 중…</ContainerBlock>;
  }
  // 아직 data 값이 설정되지 않았을 때
  if (!data) {
    return null;
  }
  return;
};
export default Api1;
