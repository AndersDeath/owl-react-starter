import * as React from "react";
import './Button.scss';

export interface IButtonProps {
    /**
     * Super Name
     */
    name: string,
    /**
     * Super click
     */
    click: () => void
}

/**
 * This is my  super duper button
 * @param props IButtonProps interface
 */
export const Button = (props: IButtonProps) => (
    <div>
        <button onClick={props.click} className="button">{props.name}</button>
    </div>
);
