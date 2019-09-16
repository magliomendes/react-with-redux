import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../../Actions/User.actions";
import {
  Wrapper,
  LogoWhite,
  LoginForm,
  InputContent,
  LoginButton,
  Required,
  WrongAccess
} from "./LoginStyles";
import { Spinner } from "../../../Shared/Components/Spinner";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ submitted: false });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <Wrapper>
        <LogoWhite />
        <LoginForm name="form" onSubmit={this.handleSubmit}>
          <InputContent
            className={"" + (submitted && !username ? " has-error" : "")}
          >
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              autoComplete="new-username"
            />
            <label htmlFor="username" className={username ? "hasValue" : ""}>
              Username
            </label>
            {submitted && !username && (
              <Required>Username is required</Required>
            )}
          </InputContent>
          <InputContent
            className={"" + (submitted && !password ? " has-error" : "")}
          >
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="new-password"
            />
            <label htmlFor="password" className={password ? "hasValue" : ""}>
              Password
            </label>
            {submitted && !password && (
              <Required>Password is required</Required>
            )}
          </InputContent>
          {!this.props.loading && <LoginButton>LOGIN</LoginButton>}
          {this.props.loading && <Spinner></Spinner>}
          {this.props.error && (
            <WrongAccess>Username or password is invalid.</WrongAccess>
          )}
        </LoginForm>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const loading = state.loading;
  const error = state.error;
  return { loading, error };
}

const actionCreators = {
  login: userActions.login
};

const connectedLoginPage = connect(
  mapStateToProps,
  actionCreators
)(Login);

export { connectedLoginPage as Login };
