import * as React from "react";
import { Display } from '@components/display';
import { connect } from 'react-redux';
import { Dispatch } from "redux";

import './App.scss';
import { Button } from "@components/button";
import { decrementAction, incrementAction } from '@state/actions';
import { ICounterInitialState } from '@state/interfaces';

interface ICounterProps {
    readonly increment: () => void;
    readonly decrement: () => void;
    readonly state: any;
}

class AppC extends React.Component<ICounterProps> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <Button click={this.props.increment} name={'increment'} />
                <Display count={this.props.state.count} />
                <Button click={this.props.decrement} name={'decrement'} />
            </div>
        )
    }
}

const mapStateToProps = (state: ICounterInitialState) => {
    return {
        state: state.count
    };
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppC)
