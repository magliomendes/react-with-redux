import * as React from "react";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import { Content } from "./Content";
import { Login } from "../Account/Login/Login";
import { HomeComponent } from "../Home/Home";

import { history } from "../../Helpers/History";
import { PrivateRoute } from "../PrivateRouter";

import thunk from "redux-thunk";
import { logger } from "redux-logger";
import youtubeReducer from "../../Reducers/Youtube.reducer";
import accountReducer from "../../Reducers/User.reducer";
import { createStore, applyMiddleware } from "redux";
import styled from "styled-components";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

const background = require("./background.png");

export const youTubestore = createStore(
  youtubeReducer,
  applyMiddleware(thunk, logger)
);

export const accountstore = createStore(
  accountReducer,
  applyMiddleware(thunk, logger)
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("user")) {
      this.state = {
        alreadyLoaded: false
      };
    } else {
      this.state = {
        alreadyLoaded: true
      };
    }
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ alreadyLoaded: true });
      }.bind(this),
      5000
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Content>
            {!this.state.alreadyLoaded && <LoadingScreen />}
            <BackgroundSection>
              <Switch>
                <Provider store={youTubestore}>
                  <PrivateRoute
                    exact
                    path="/react-with-redux/home"
                    component={HomeComponent}
                  />
                </Provider>
              </Switch>
              <Provider store={accountstore}>
                <Route exact path="/react-with-redux/login" component={Login} />
              </Provider>
              <Redirect to="/react-with-redux/login" />
            </BackgroundSection>
          </Content>
        </Router>
      </BrowserRouter>
    );
  }
}

export const BackgroundSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  overflow: hidden;
`;
