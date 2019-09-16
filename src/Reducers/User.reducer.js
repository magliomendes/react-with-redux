import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../Actions/User.actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: undefined };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.user, error: undefined };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LOGOUT:
      return { ...state, loading: false, error: undefined };
    default:
      return state
  }
}

export default reducer;