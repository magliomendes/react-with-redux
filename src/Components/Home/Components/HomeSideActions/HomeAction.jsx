import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../../../Actions/User.actions";
import styled from "styled-components";
import { Logo, Trailers } from "./HomeStyles";
import "./HomeAction.scss";

class HomeAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
    return (
      <>
        <Toggle onClick={this.toggleMenu} className={!this.state.open ? "toggleUp" : "toggleDown"}>
          <ArrowDown className={!this.state.open ? "arrowDown" : "arrowUp"} />
        </Toggle>
        {this.state.open &&
          <Backfade onClick={() => this.setState({ open: false })} />
        }
        <ActionContent className={`col-12 col-md-4 row ${!this.state.open ? "menuClosed" : "menuOpened"}`}>
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
    z-index: 1;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.9) 98.3%);
  }
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
  z-index: 3;
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
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    z-index: 2;
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
    margin-top: 5rem;
  }
  &.arrowUp {
    transform: rotate(-135deg);
    margin-top: 2rem;
  }
`;

export const Backfade = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;