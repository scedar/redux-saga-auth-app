import { combineReducers } from 'redux'

import authReducer from './auth/reducers'
import usersReducer from './users/reducers'
import postsReducer from './posts/reducers'
import commentsReducer from './comments/reducers'
import albumsReducer from './albums/reducers'
import photosReducer from './photos/reducers'
import todosReducer from './todos/reducers'

const IndexReducer = combineReducers({
    authReducer,
    usersReducer,
    postsReducer,
    commentsReducer,
    albumsReducer,
    photosReducer,
    todosReducer
});

export default IndexReducer