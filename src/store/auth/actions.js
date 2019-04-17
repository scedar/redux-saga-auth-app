import * as types from "./actionTypes";

/* Get access token */
export const loginRequest = function loginRequest(filterObj) {
    return {
        type: types.LOGIN_REQUESTING,
        filterObj
    }
};

export const loginRequestSuccess = function loginRequestSuccess(login) {
    return {
        type: types.LOGIN_REQUEST_SUCCESS,
        login,
    }
};

export const loginRequestError = function loginRequestError(error) {
    return {
        type: types.LOGIN_REQUEST_ERROR,
        error,
    }
};

export const resetLoginRequest = function resetLoginRequest() {
    return {
        type: types.RESET_LOGIN_REQUEST
    }
};

/* Keep track of urls */
export const setInitUrl = (url) => {
  return {
    type: types.INIT_URL,
    payload: url
  };
};

/* Sign out user */
export const userSignOut = () => {
  return {
    type: types.SIGNOUT_USER
  };
};

export const userSignOutSuccess = () => {
  return {
    type: types.SIGNOUT_USER_SUCCESS,
  }
};


/* Refresh access token */
export const refreshTokenRequest = function refreshTokenRequest(filterObj) {
    return {
        type: types.REFRESH_TOKEN_REQUESTING,
        filterObj
    }
};

export const refreshTokenRequestSuccess = function refreshTokenRequestSuccess(refreshToken) {
    return {
        type: types.REFRESH_TOKEN_REQUEST_SUCCESS,
        refreshToken,
    }
};

export const refreshTokenRequestError = function refreshTokenRequestError(error) {
    return {
        type: types.REFRESH_TOKEN_REQUEST_ERROR,
        error,
    }
};

export const resetRefreshTokenRequest = function resetRefreshTokenRequest() {
    return {
        type: types.RESET_REFRESH_TOKEN_REQUEST
    }
};

/* Revoke access token */
export const revokeTokenRequest = function revokeTokenRequest(filterObj) {
    return {
        type: types.REVOKE_TOKEN_REQUESTING,
        filterObj
    }
};

export const revokeTokenRequestSuccess = function revokeTokenRequestSuccess(revokeToken) {
    return {
        type: types.REVOKE_TOKEN_REQUEST_SUCCESS,
        revokeToken,
    }
};

export const revokeTokenRequestError = function revokeTokenRequestError(error) {
    return {
        type: types.REVOKE_TOKEN_REQUEST_ERROR,
        error,
    }
};

export const resetRevokeTokenRequest = function resetRevokeTokenRequest() {
    return {
        type: types.RESET_REVOKE_TOKEN_REQUEST
    }
};
