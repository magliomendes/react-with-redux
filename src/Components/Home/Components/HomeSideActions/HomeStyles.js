import { logo_dark } from "../../../../Helpers/Image-Routes.helper";
import styled from "styled-components";

export const Logo = styled.div`
  background-image: url(${logo_dark});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 90%;
  max-width: 27.4rem;
  height: 100%;
  max-height: 13.7rem;
  margin-bottom: 13.3rem;
  margin-top: 8rem;

  @media screen and (max-width: 768px) {
    /* position: absolute; */
    margin-bottom: 2rem;
    margin-top: 4rem;
    height: 10rem;
    width: 60vw;
  }
`;

export const Trailers = styled.button`
  max-width: 25.4rem;
  width: 90%;
  height: 3.9rem;
  border: 1px solid #a99e7e;
  color: #a99e7e;
  font-size: 1.4rem;
  background-color: transparent;
  margin-bottom: 2rem;
  cursor: context-menu;
`;