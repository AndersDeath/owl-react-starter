import { Action } from "redux";
import { COUNTER_ACTION_TYPES, ICounterInitialState, initialState, CounterActions } from '../interfaces/index';

export const counterReducer = (state: ICounterInitialState = initialState, action: Action | CounterActions): ICounterInitialState => {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {...state, count: state.count + 1};

        case COUNTER_ACTION_TYPES.DECREMENT:
            return {...state, count: state.count - 1};

        default:
            return state;
    }
};
