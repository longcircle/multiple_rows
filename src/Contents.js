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
    text-decoration: none;
    color: black;
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

const Contents = ({ src, title, info, children }) => {
  return (
    <ContentBlock>
      <a href="">
        {children}
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
