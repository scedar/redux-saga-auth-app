import * as types from './actionTypes'
import Immutable from 'seamless-immutable'
import globalVariable from "../../util/global"

const initialState = Immutable({
  /* Get access token */
  login: globalVariable.getUserDetails(),
  loginTracker: {status: 'idle'},
  loginTimestamp: undefined,

  /* Refresh access token */
  refreshToken: [],
  refreshTokenTracker: {status: 'idle'},
  refreshTokenTimestamp: undefined,

  /* Revoke access token */
  revokeToken: [],
  revokeTokenTracker: {status: 'idle'},
  revokeTokenTimestamp: undefined,

  initURL: '',

});

const reducer = function authReducer(state = initialState, action) {
  switch (action.type) {

    /* Get access token */
    case types.LOGIN_REQUESTING:
      return state.merge({
        loginTracker: {status: 'processing'},
      });

    case types.LOGIN_REQUEST_SUCCESS:
      return state.merge({
        loginTracker: {status: 'success'},
        login: action.login,
        loginTimestamp: action.timestamp,
      });

    case types.LOGIN_REQUEST_ERROR:
      return state.merge({
        loginTracker: {
          status: 'error',
          errors: action.error,
        },
        loginTimestamp: action.timestamp,
      });

    case types.RESET_LOGIN_REQUEST:
      return state.merge({
        loginTracker: {status: 'idle'},
      });

    /* Keep track of urls */
    case types.INIT_URL: {
      return state.merge({
        ...state,
        initURL: action.payload
      })
    }

    /* Logout user */
    case types.SIGNOUT_USER_SUCCESS: {
      return state.merge({
        ...state,
        login: undefined,
        initURL: '/'
      })
    }

    /* Refresh access token */
    case types.REFRESH_TOKEN_REQUESTING:
      return state.merge({
        refreshTokenTracker: {status: 'processing'},
      });

    case types.REFRESH_TOKEN_REQUEST_SUCCESS:
      return state.merge({
        refreshTokenTracker: {status: 'success'},
        refreshToken: action.refreshToken,
        refreshTokenTimestamp: action.timestamp,
      });

    case types.REFRESH_TOKEN_REQUEST_ERROR:
      return state.merge({
        refreshTokenTracker: {
          status: 'error',
          errors: action.error,
        },
        refreshTokenTimestamp: action.timestamp,
      });

    case types.RESET_REFRESH_TOKEN_REQUEST:
      return state.merge({
        refreshTokenTracker: {status: 'idle'},
      });

    /* Revoke access token */
    case types.REVOKE_TOKEN_REQUESTING:
      return state.merge({
        revokeTokenTracker: {status: 'processing'},
      });

    case types.REVOKE_TOKEN_REQUEST_SUCCESS:
      return state.merge({
        revokeTokenTracker: {status: 'success'},
        revokeToken: action.revokeToken,
        revokeTokenTimestamp: action.timestamp,
      });

    case types.REVOKE_TOKEN_REQUEST_ERROR:
      return state.merge({
        revokeTokenTracker: {
          status: 'error',
          errors: action.error,
        },
        revokeTokenTimestamp: action.timestamp,
      });

    case types.RESET_REVOKE_TOKEN_REQUEST:
      return state.merge({
        revokeTokenTracker: {status: 'idle'},
      });

    default:
      return state
  }
};

export default reducer
