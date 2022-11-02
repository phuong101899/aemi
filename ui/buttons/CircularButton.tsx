import React from "react";
import classNames from "classnames";
type Props = {
    children: JSX.Element,
    className?: string,
    onClick?:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const CircularButton: React.FC<Props> = ({children, className, onClick, ...props}) => {
    return (
        <button
            type="button"
            className={classNames(
                'inline-flex items-center rounded-full border border-transparent p-1 text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
                className,
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}