import { combineReducers } from 'redux';
import { counterReducer } from './counter';


const allReducers = combineReducers({
    count: counterReducer
});

export {
    counterReducer,
    allReducers
}