import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const OutlineButton: React.FC<Props> = ({className ,children, ...props}) => {
    return (
        <button
            type="button"
            className={classNames('inline-flex items-center justify-center rounded border border-primary disabled:opacity-70 bg-white px-4 py-2 text-base font-medium text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2', className)}
            {...props}
        >
            {children}
        </button>
    );
}