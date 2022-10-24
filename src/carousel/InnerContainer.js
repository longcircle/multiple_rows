import styled from "styled-components";
import React, { useRef } from "react";

const InnerBlock = styled.div`
  position: relative;
  float: left;
  width: 28vw;
  height: 236px;
  margin-left: 29px;
  &:nth-child(-n + 6) {
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

// const InnerContainerBlock = styled.div`
//   float: left;
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   width: 28vw;
//   height: 100%;
//   margin-left: 29px;
//   &:not(:nth-child(3n)) {
//     margin-right: 29px;
//   }
// `;

const InnerContainer = ({ info }) => {
  const { title, addr, src } = info;
  return (
    <InnerBlock>
      <img src={src} alt="" />
      <a href="about:blank">
        <span>{title}</span>
        <p>{addr}</p>
      </a>
    </InnerBlock>
  );
};

export default InnerContainer;
