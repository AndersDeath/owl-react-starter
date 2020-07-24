import { Action } from 'redux';

export enum COUNTER_ACTION_TYPES {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
}

export interface DecrementAction extends Action {
    type: COUNTER_ACTION_TYPES.DECREMENT;
}

export interface IncrementAction extends Action {
    type: COUNTER_ACTION_TYPES.INCREMENT;
}

export interface ICounterInitialState {
    count: number
}
export const initialState: ICounterInitialState  = {
    count: 0
}

export type CounterActions = IncrementAction | DecrementAction;

export interface State {
    count: ICounterInitialState;
}