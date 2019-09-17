import React from "react";
import { Modal } from "react-bootstrap";
import "./VideoModal.scss";
import styled from "styled-components";

const VideoModal = props => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <VideoThumbnail
            id="ytplayer"
            type="text/html"
            src={"http://www.youtube.com/embed/" + props.videourl}
            frameBorder="0"
            allowfullscreen
          />
        </Modal.Body>
      </Modal>
      <CloseOption onClick={props.onHide}>CLOSE</CloseOption>

    </>
  );
};

export default VideoModal;

export const VideoThumbnail = styled.iframe`
  height: calc(100vw / 2);
  width: 100%;
  max-height: 53.4rem;
  max-width: 90.2rem;
  border: 0.1rem solid #a99e7e;
  position: relative;
  padding: 0;
`;

export const CloseOption = styled.button`
  font-size: 1.4rem;
  position: absolute;
  top: 2.6rem;
  right: 2.6rem;
  z-index: 1051;
  background-color: transparent;
  color: #FFF;
  border: 0;
  &:focus {
      outline: 0;
  }
`;
