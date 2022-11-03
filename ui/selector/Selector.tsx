import React from "react";
import {Input} from "../inputs";
import Image from "next/image";


type dataSourceItem = {
    name: string,
    code: string,
};

type Props = {
    title: string,
    dataSource: dataSourceItem[],
    placeholder?: string,
    maxHeight?: number,
    onChange: (code: string) => void,
};

export const Selector: React.FC<Props> = ({title, dataSource, placeholder, maxHeight = 240, onChange}) => {
    return (
        <div>
            <p className="px-3 text-[22px] font-medium text-secondary font-[700]">
                {title}
            </p>
            <Input
                trailing={
                    <Image src={require('ui/icons/assets/search.svg')} alt="search icon" />
                }
                placeholder={placeholder}
            />
            <div className="mt-4" style={{maxHeight, overflowY: "auto"}}>
                {dataSource.map((item) => (
                    <span
                        key={item.name}
                        onClick={() => onChange(item.code)}
                        className="group flex items-center rounded-md px-3 py-2 text-base text-secondary hover:bg-gray-50"
                    >
                        <span className="truncate">{item.name}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}