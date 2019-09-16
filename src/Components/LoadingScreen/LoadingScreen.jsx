import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as loader } from "./loader.svg";

export class LoadingScreen extends React.Component {
  render() {
    return (
      <LoadingContent>
        <LoadingSVG />
      </LoadingContent>
    );
  }
}

export const DeleteLoading = keyframes`
    0% {
        opacity: 1
        z-index: 99;
    }
    90% {
        opacity: 0;
        z-index: 99;
    }
    100% {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
`;

export const LoadingContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1a1a;
  transition: 0.7s;
  animation: ${DeleteLoading} 1 0.5s;
  opacity: 0;
  animation-fill-mode: backwards;
  animation-delay: 4.5s;
  position: absolute;
  z-index: -99;
`;

export const Fading = keyframes`
    0% {
        stroke: #4C4C4C;
        fill: #4C4C4C;
    }
    50% {
        stroke: #ff3509;
        fill: #ff3509;
    }
    100% {
        stroke: #4C4C4C;
        fill: #4C4C4C;
    }
`;

export const LoadingSVG = styled(loader)`
  width: 8rem;
  height: 11rem;
  path {
    stroke: #4c4c4c;
    fill: #4c4c4c;
    &:nth-child(4) {
      animation: ${Fading} 1 1.5s;
      animation-delay: 0;
    }
    &:nth-child(2) {
      animation: ${Fading} 1 1.5s;
      animation-delay: 1.5s;
    }
    &:nth-child(3) {
      animation: ${Fading} 1 1.5s;
      animation-delay: 3s;
    }
  }
`;
