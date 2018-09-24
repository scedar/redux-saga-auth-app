import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import client from '../containers/client/reducer'
import signup from '../containers/signup/reducer'
import login from '../containers/login/reducer'
import widgets from '../containers/widgets/reducer'

const IndexReducer = combineReducers({
    login,
    signup,
    client,
    widgets,
    form,
});

export default IndexReducer