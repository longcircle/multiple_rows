import React from "react";
import styled from "styled-components";

const ContentBlock = styled.div`
  width: 431px;
  height: 345px;
  position: relative;
  box-sizing: border-box;
  padding: 0 17px 20px 17px;
  /* &:not(:nth-child(4n + 1)) {
    margin-left: 34px;
  } */

  & a {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-decoration-line: none;
    font-size: larger;
    font-weight: normal;
    & p {
      font-size: small;
    }
    & img {
      /* object-fit: cover; */
      height: 264px;
      width: 397px;
    }
  }
`;

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

const Contents = ({ src, title, info }) => {
  return (
    <ContentBlock>
      <a href="">
        <Badge />
        <img src={src} />
        <div>
          <span>{title}</span>
          <p>{info}</p>
        </div>
      </a>
    </ContentBlock>
  );
};

export default Contents;
