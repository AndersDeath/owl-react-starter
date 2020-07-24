import * as React from "react";
import './Display.scss';

interface IDisplayProps {
    count: number
}

export const Display = (props: IDisplayProps) => (
    <h1 className="display">
        {props.count}
    </h1>
);
