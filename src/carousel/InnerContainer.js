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

const InnerContainer = ({ src1, src2, alt, children }) => {
  const title1 = useRef();
  const title2 = useRef();
  const addr1 = useRef();
  const addr2 = useRef();
  // const [name1, addr1] = { children };
  // const [name2, addr2] = { children };
  return (
    <InnerContainerBlock>
      <InnerBlock>
        <img src={src1} alt={alt} />
        <a href="about:blank">
          <span ref={title1}>{children[0]}</span>
          <p ref={addr1}>{children[1]}</p>
        </a>
      </InnerBlock>
      <InnerBlock>
        <img src={src2} alt={alt} />
        <a href="about:blank">
          <span ref={title2}></span>
          <p ref={addr2}></p>
        </a>
      </InnerBlock>
    </InnerContainerBlock>
  );
};

export default InnerContainer;
