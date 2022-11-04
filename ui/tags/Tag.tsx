import React from "react";

type Props = {
    label: string,
};

export const Tag: React.FC<Props> = ({label}) => {
    return (
        <div className="bg-[#F7F9FD] py-1 px-2 rounded">
            <span className="text-primary font-semibold text-[10px] lg:text-xs">{label}</span>
        </div>
    );
}