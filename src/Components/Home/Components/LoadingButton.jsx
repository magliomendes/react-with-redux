import React from "react";
import styled from "styled-components";

export const LoadingButton = () => <Button>LOAD MORE</Button>;

export const Button = styled.button`
  max-width: 25.4rem;
  width: 100%;
  height: 3.9rem;
  border: 1px solid #a99e7e;
  color: #a99e7e;
  font-size: 1.4rem;
  background-color: transparent;
  transition: 0.25s;
  margin: 4rem 0;
  &:hover,
  &:focus {
    box-shadow: inset -12.7rem 0 0 0 #a99e7e, inset 12.7rem 0 0 0 #a99e7e;
    color: #fff;
  }
`;
