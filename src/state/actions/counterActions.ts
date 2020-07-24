import { COUNTER_ACTION_TYPES, IncrementAction, DecrementAction } from '../interfaces/index';

export const decrementAction = (): DecrementAction => {
    return {
        type: COUNTER_ACTION_TYPES.DECREMENT
    };
};

export const incrementAction = ():IncrementAction => {
    return {
        type: COUNTER_ACTION_TYPES.INCREMENT
    };
};
