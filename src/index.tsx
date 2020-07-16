import * as React from "react";
import * as ReactDOM from "react-dom";

import './index.scss';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello name="Owl" author="AndersDeath" />,
    document.getElementById("app")
);