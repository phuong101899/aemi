import React, {HTMLAttributes} from "react";
import classNames from "classnames";

interface iListTile extends HTMLAttributes<HTMLDivElement>{
    children: JSX.Element | string,
    isActivated?: boolean,
}
export const ListTile: React.FC<iListTile> = ({children, isActivated = false}) => {
    return (
        <div className={classNames('text-base p-2', {
            "text-primary bg-[#F7F9FD]": isActivated,
            "text-secondary": isActivated === false,
        })}>
            {children}
        </div>
    );
}