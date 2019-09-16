import React from "react";
import styled from "styled-components";
import VideoModal from "./VideoModal";

export class Thumb extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    };
  }

  openModalHandler = video => {
    this.setState({
      modalOpen: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <>
        <VideoThumbnail
          thumb={this.props.thumb}
          className="col-10 col-md-5"
          onClick={() => this.openModalHandler()}
        >
          <p className="text-center">{this.props.thumb.snippet.title}</p>
        </VideoThumbnail>
        {this.state.modalOpen && (
          <VideoModal
            className="modal"
            show={this.state.modalOpen}
            onHide={() => this.closeModalHandler()}
            videourl={this.props.thumb.snippet.resourceId.videoId}
          />
        )}
      </>
    );
  }
}

export const VideoThumbnail = styled.div`
  height: 22.2rem;
  width: 37.5rem;
  border: 0.1rem solid #a99e7e;
  ${props =>
    props.thumb.snippet.thumbnails.maxres.url &&
    `background-image: url(${props.thumb.snippet.thumbnails.maxres.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 0;
  margin: 4rem auto 0 auto;
  &:first-child {
    @media screen and (max-width: 768px) {
      margin-top: 6rem;
    }
  }
  p {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.6rem;
    height: 4.7rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`;
