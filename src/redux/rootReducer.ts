import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';
import createSagaMiddlewre from 'redux-saga';

import usersReducer from './users/users.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './rootSaga';

const { routerMiddleware, createReduxHistory, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: true,
});

const sagaMiddleware = createSagaMiddlewre();

const rootReducer = combineReducers({
    users: usersReducer,
    router: routerReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(routerMiddleware, sagaMiddleware)
    )
);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga);
