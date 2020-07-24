import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import { allReducers } from '../reducers/index';
import { State } from '../interfaces/index';


const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: State) =>
    createStore(
        allReducers,
        initialState,
        composeEnhancers(applyMiddleware(logger))
    );

export const store = configureStore();

