
import styled from "styled-components";
import { Opacity } from "../../Shared/Keyframes/Keyframes"

export const HomeContent = styled.div`
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 98.3%);
  padding: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Opacity} .3s 1;
`;

export const Playlist = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 1px solid #4c4c4c;
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 98.3%);
  padding-bottom: 4rem;
  margin: 0;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 10rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a99e7e;
    width: 0.5rem;
    border-radius: 0.2rem;
    height: 10rem;
  }
  ::-webkit-scrollbar-track {
    margin: 4rem;
  }
`;
