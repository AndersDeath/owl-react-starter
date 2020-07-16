import * as React from "react";
import './Hello.scss';

export interface HelloProps {
    name: string;
    author: string;
}

export const Hello = (props: HelloProps) => (
    <h1 className="hello">
        Hello from {props.name} and {props.author}!
    </h1>
);
