import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { localReducer, apiReducer } from './reducers';

export const store = createStore(combineReducers({
    local: localReducer,
    api: apiReducer
}), {}, applyMiddleware(createLogger()));