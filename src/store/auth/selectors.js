export function getAccessToken(state) {
    return {
        name: 'Auth',
        tracker: state.authReducer.loginTracker,
        timestamp: state.authReducer.loginTimestamp,
        data: state.authReducer.login,
        noRecordMessage: '',
    }
}

export function getRefreshAccessToken(state) {
    return {
        name: 'Auth',
        tracker: state.authReducer.refreshTokenTracker,
        timestamp: state.authReducer.refreshTokenTimestamp,
        data: state.authReducer.refreshToken,
        noRecordMessage: '',
    }
}

export function getRevokeAccessToken(state) {
    return {
        name: 'Auth',
        tracker: state.authReducer.revokeTokenTracker,
        timestamp: state.authReducer.revokeTokenTimestamp,
        data: state.authReducer.revokeToken,
        noRecordMessage: '',
    }
}