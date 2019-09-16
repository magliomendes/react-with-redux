import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logo_dark } from "../../../../Helpers/Image-Routes.helper";
import { userActions } from "../../../../Actions/User.actions";
import "./HomeAction.scss";

class HomeAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleLogout = e => {
    e.preventDefault();
    if (e) {
      this.props.logout();
    }
  };

  render() {
    let containerClass = "menuClosed";
    let containerToggle = "toggleUp";
    let arrowStyle = "arrowDown";
    if (this.state.open) {
      containerClass = "menuOpened";
      containerToggle = "toggleDown";
      arrowStyle = "arrowUp";
    } else {
      containerClass = "menuClosed";
      containerToggle = "toggleUp";
      arrowStyle = "arrowDown";
    }
    return (
      <>
        <Toggle onClick={this.toggleMenu} className={containerToggle}>
          <ArrowDown className={arrowStyle} />
        </Toggle>
        <ActionContent className={`col-12 col-md-4 row ${containerClass}`}>
          <Logo />
          <Trailers>TRAILERS</Trailers>
          <Logout onClick={this.handleLogout}>LOGOUT</Logout>
        </ActionContent>
      </>
    );
  }
}

function mapState(state) {
  const { logged } = state;
  return { logged };
}

const actionCreators = {
  logout: userActions.logout
};

const connectedActionPage = connect(
  mapState,
  actionCreators
)(HomeAction);
export { connectedActionPage as HomeAction };

export const ActionContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100vw;
    padding: 0;
    margin: 0;
    top: 0;
    height: 50%;
    z-index: 1053;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.9) 98.3%);
  }
`;

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

export const Logout = styled.button`
  max-width: 25.4rem;
  width: 90%;
  height: 3.9rem;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  background-color: transparent;
  transition: 0.25s;
  &:hover,
  &:focus {
    box-shadow: inset -12.7rem 0 0 0 #fff, inset 12.7rem 0 0 0 #fff;
    color: #a99e7e;
  }
`;

export const Toggle = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    margin: auto;
    width: 10rem;
    height: 10rem;
    border-radius: 30%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    z-index: 1054;
    cursor: pointer;
  }
`;

export const ArrowDown = styled.div`
  width: 2rem;
  height: 2rem;
  border-bottom: 0.2rem solid #fff;
  border-right: 0.2rem solid #fff;
  transition: 0.3s;
  &.arrowDown {
    transform: rotate(45deg);
    margin-top: 3rem;
  }
  &.arrowUp {
    transform: rotate(-135deg);
    margin-top: 7rem;
  }
`;
