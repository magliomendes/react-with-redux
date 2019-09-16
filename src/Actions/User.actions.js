import { userService } from '../Services/Account.service';
import { history } from '../Helpers/History';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request());

        return userService.login(username, password)
            .then(
                user => {
                    const { token } = user;
                    if (token) {
                        dispatch(success(user));
                        return history.push('/');
                    } else {
                        return dispatch(failure("Username or password is invalid."));
                    }
                },
                error => {
                    return dispatch(failure(error.toString()));
                }
            );
    };
}

function logout() {
    userService.logout();
    history.push('/login');
    return { type: LOGOUT };
}

function request(user) { return { type: LOGIN_REQUEST, user } }
function success(user) { return { type: LOGIN_SUCCESS, user } }
function failure(error) { return { type: LOGIN_FAILURE, error } }