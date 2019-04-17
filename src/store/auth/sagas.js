import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import AuthService from './services'

import timeUtils from "../../util/datetime"
import globalVariables from "../../util/global"

/* Get access token flow */
function* loginRequestFlow(action) {
	try {
		//const value = yield call(globalVariables.logout);
		//console.log("hrer is the value ", value);

		const {filterObj} = action;
		const login = yield call(AuthService.getAccessToken, filterObj);

		if (login.hasOwnProperty("accessToken")) {
			yield put(actions.loginRequestSuccess(login));
			localStorage.setItem('app.Authorization', JSON.stringify(login));
			localStorage.setItem('app.init', JSON.stringify(timeUtils.CurrentDateTime()));
			yield put(actions.resetLoginRequest())
		} else {
			yield put(actions.loginRequestError(login.error))
		}
	} catch (error) {
		yield put(actions.loginRequestError(error))
	}
}


/* Sign out user */
function* signOut() {
	try {
		const revokeTokenStatus = yield call(AuthService.revokeAccessToken);
		if (revokeTokenStatus === 200) {
			localStorage.removeItem('app.Authorization');
			localStorage.removeItem('app.init');
			//globalVariables.logout();
			yield put(actions.userSignOutSuccess());
		} else {
			yield put("Couldn't revoke token!!");
		}
	} catch (error) {
		yield put(error);
	}
}

/* Refresh access token flow */
function* refreshTokenRequestFlow() {
	try {
		yield call(globalVariables.logout());
		const refreshToken = yield call(AuthService.refreshAccessToken);

		if (refreshToken.hasOwnProperty("accessToken")) {
			yield put(actions.refreshTokenRequestSuccess(refreshToken));
			/*localStorage.removeItem('app.Authorization');
			localStorage.removeItem('app.init');*/
			localStorage.setItem('app.Authorization', JSON.stringify(refreshToken));
			localStorage.setItem('app.init', JSON.stringify(timeUtils.CurrentDateTime()));
			yield put(actions.resetRefreshTokenRequest())
		} else {
			yield put(actions.refreshTokenRequestError(refreshToken.error))
		}
	} catch (error) {
		yield put(actions.refreshTokenRequestError(error))
	}
}

/* Revoke access token flow */
function* revokeTokenRequestFlow() {
	try {


		const revokeToken = yield call(AuthService.revokeAccessToken);

		if (revokeToken.hasOwnProperty("accessToken")) {
			yield put(actions.revokeTokenRequestSuccess(revokeToken));
			yield put(actions.resetRevokeTokenRequest())
		} else {
			yield put(actions.revokeTokenRequestError(revokeToken.error))
		}
	} catch (error) {
		yield put(actions.revokeTokenRequestError(error))
	}
}

/* Watcher */
function* authWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.LOGIN_REQUESTING, loginRequestFlow),
		takeLatest(types.SIGNOUT_USER, signOut),
		takeLatest(types.REFRESH_TOKEN_REQUESTING, refreshTokenRequestFlow),
		takeLatest(types.REVOKE_TOKEN_REQUESTING, revokeTokenRequestFlow),
	]
}

export default authWatcher
