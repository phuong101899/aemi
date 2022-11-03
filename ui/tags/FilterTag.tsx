import React from "react";
import Image from "next/image";

type Props = {
    label: string,
    code?: string,
    onClose?: () => void,
};
export const FilterTag: React.FC<Props> = (props) => {
    return (
        <div className="bg-[#8AAAE5] text-base font-semibold px-2 rounded flex gap-3">
            <span className="text-[#F7F9FD]">{props.label}</span>
            <Image
                className="cursor-pointer"
                src={require('./assets/close.svg')}
                alt="close"
                width={16}
                height={16}
                onClick={props.onClose}
            />
        </div>
    )
}