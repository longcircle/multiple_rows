import React from "react";
import styled from "styled-components";
import Contents from "./Contents";
import ModuleTitle from "./ModuleTitle";

const Container = styled.div`
  width: 100vw;
  height: 784px;
  border-top: 1px solid #dbdbdb;
  padding: 38px 0 36px 0;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 10px 60px auto;
  justify-content: center;
  /* float: left; */
`;

const EatDeal = ({ title, children }) => {
  return (
    <Container>
      <ModuleTitle title={title} />
      <Wrapper>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/436177/1885051_1614654229985_23793?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="디저트뷰"
          info="연남동 - 카페 / 디저트"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80"
          title="코코부코"
          info="합정/망원 - 카페 / 디저트"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/253733/1466459_1603731710117_1956?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="릿잇타미"
          info="동작/사당 - 브런치 / 버거 / 샌드위치"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/354889_1473237481855916.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="그라나다"
          info="인천 남동구 - 퓨전 양식"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/339080/962726_1592180358075_2720?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="봉쉐프의 옛날수제돈까스"
          info="건대/군자/광진 - 기타 한식"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/1367378_1591778517331785.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="지노스 뉴욕피자"
          info="이태원/한남동 - 기타 양식"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/463989_1528088895185650.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="사네샤"
          info="관악구 - 인도 음식"
        >
          {children}
        </Contents>
        <Contents
          src="https://mp-seoul-image-production-s3.mangoplate.com/338216/s7hlawose_yzkb.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
          title="브롱스"
          info="관악구 - 인도 음식"
        >
          {children}
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default EatDeal;
