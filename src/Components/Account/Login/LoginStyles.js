import styled from "styled-components";
import { Opacity } from "../../../Shared/Keyframes/Keyframes";
const logo_dark = require("./logo_dark.png");

export const Wrapper = styled.section`
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 98.3%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

export const LogoWhite = styled.div`
  background-image: url(${logo_dark});
  width: 100%;
  max-width: 27.4rem;
  height: 100%;
  max-height: 13.7rem;
  min-height: 17rem;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const LoginButton = styled.button`
  width: 10.6rem;
  height: 3.9rem;
  border-radius: 0;
  border: 0.1rem solid #a99e7e;
  background-color: transparent;
  font-size: 1.4rem;
  color: #a99e7e;
  margin-top: 5rem;
  transition: 0.25s;
  &:hover,
  &:focus {
    box-shadow: inset -5.3rem 0 0 0 #a99e7e, inset 5.3rem 0 0 0 #a99e7e;
    color: #fff;
  }
`;

export const InputContent = styled.div`
  position: relative;
  input {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
    z-index: 1;
    height: 4rem;
    width: 28.5rem;
    color: rgba(169, 158, 126, 0.8);
    font-size: 1.4rem;
    color: #fff;
    margin-top: 1.4rem;
    &:focus {
      ~ label {
        transition: 0.3s;
        z-index: 0;
      }
    }
    &:-webkit-autofill {
      background-color: transparent !important;
      color: transparent !important;
    }
  }

  label {
    color: rgba(169, 158, 126, 0.8);
    &:not(.hasValue) {
      position: absolute;
      left: 0;
      width: 100%;
      top: 40%;
      color: #aaa;
      transition: 0.3s;
      z-index: 0;
      letter-spacing: 0.5px;
      font-size: 1.4rem;
      pointer-events: none;
    }
    &.hasValue {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      color: #aaa;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
      font-size: 1.3rem;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Required = styled.p`
  color: #e72e3d;
  font-size: 1.3rem;
  position: absolute;
  transition: 0.3s ease-in-out;
  animation: ${Opacity} 0.1s 1 linear;
`;

export const WrongAccess = styled.p`
  color: #e72e3d;
  font-size: 1.3rem;
  transition: 0.3s ease-in-out;
  animation: ${Opacity} 0.1s 1 linear;
  margin-top: 2rem;
`;
