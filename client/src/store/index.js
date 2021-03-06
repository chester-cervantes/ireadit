import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFAULT_STATE = {
    // auth: { isAuthenticated: false },
    // error: { message: null }
};

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

export const store = createStore(
    rootReducer,
    DEFAULT_STATE,
    compose(
        applyMiddleware(thunk),
        devTools
    )
);