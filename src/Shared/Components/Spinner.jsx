import React from "react";
import styled from "styled-components";
import { LoadingRotation } from "../../Shared/Keyframes/Keyframes";

export const Spinner = () => <Loading />;

export const Loading = styled.div`
  margin: 4rem auto;
  width: 7.6rem;
  height: 7.6rem;
  border: 0.3rem solid #a99e7e;
  border-left: 0.3rem solid transparent;
  border-radius: 50%;
  animation: ${LoadingRotation} 1s infinite linear;
`;
