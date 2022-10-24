import styled from "styled-components";
import React, { useRef } from "react";

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
    & span {
      font-size: 1.7rem;
    }
    & p {
      font-size: 1rem;
    }
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
    filter: brightness(60%);
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
  width: 28vw;
  height: 100%;
  margin-left: 29px;
  /* &:not(:nth-child(3n)) {
    margin-right: 29px;
  } */
`;

const InnerContainer = ({ info }) => {
  const { title1, title2, addr1, addr2, src1, src2 } = info;
  return (
    <InnerContainerBlock>
      <InnerBlock>
        <img src={src1} alt="" />
        <a href="about:blank">
          <span>{title1}</span>
          <p>{addr1}</p>
        </a>
      </InnerBlock>
      <InnerBlock>
        <img src={src2} alt="" />
        <a href="about:blank">
          <span>{title2}</span>
          <p>{addr2}</p>
        </a>
      </InnerBlock>
    </InnerContainerBlock>
  );
};

export default InnerContainer;
