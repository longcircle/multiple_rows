import styled from "styled-components";

import React from "react";

const InnerBlock = styled.div`
  position: relative;
  width: 100%;
  height: 236px;
  &:first-child {
    margin-bottom: 29px;
  }
  & a {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 0.7rem;
    text-decoration-line: none;
  }
  &.title {
    font-weight: bold;
  }
  & p {
    font-size: 0.7rem;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }
  & img:not(:first-child) {
    margin-top: 29px;
  }
`;

const InnerContainerBlock = styled.div`
  float: left;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 14.1%;
  height: 100%;
  margin-left: 29px;
  /* &:not(:nth-child(3n)) {
    margin-right: 29px;
  } */
`;

const InnerContainer = ({ src1, src2, alt }) => {
  return (
    <InnerContainerBlock>
      <InnerBlock>
        <img src={src1} alt={alt} />
        <a href="about:blank">
          <span className="title"></span>
          <p></p>
        </a>
      </InnerBlock>
      <InnerBlock>
        <img src={src2} alt={alt} />
        <a href="about:blank">
          <span className="title"></span>
          <p></p>
        </a>
      </InnerBlock>
    </InnerContainerBlock>
  );
};

export default InnerContainer;
