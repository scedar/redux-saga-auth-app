import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore, compose} from 'redux'
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import {
    Router,
    Switch
} from 'react-router-dom'

// Import all of our components
import AppRoute from './components/AppRoute/AppRoute'
import routes from './routes/routes'

import './resources/index.css'

// Import the index reducer and sagas
import IndexReducer from './config/index-reducer'
import IndexSagas from './config/index-sagas'

import registerServiceWorker from './config/registerServiceWorker';


// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

export const hist = createBrowserHistory();

// Redux DevTools - completely optional, but this is necessary for it to
// work properly with redux saga.  Otherwise you'd just do:
//
// const store = createStore(
//   IndexReducer,
//   applyMiddleware(sagaMiddleware)
// )

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/*eslint-enable */

const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

// Setup the top level router component for our React Router
ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {
                    routes.map((route, key) => (
                        <AppRoute exact path={route.path} component={route.component} layout={route.layout}/>
                    ))
                }
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById('root'),
);


registerServiceWorker();
