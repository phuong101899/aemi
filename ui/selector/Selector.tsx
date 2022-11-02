import React from "react";
import {Input} from "../inputs";
import Image from "next/image";


type dataSourceItem = {
    name: string,
};

type Props = {
    title: string,
    dataSource: dataSourceItem[],
    placeholder?: string,
};

export const Selector: React.FC<Props> = ({title, dataSource, placeholder}) => {
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
            <div className="mt-4">
                {dataSource.map((community) => (
                    <span
                        key={community.name}
                        className="group flex items-center rounded-md px-3 py-2 text-base text-secondary hover:bg-gray-50"
                    >
                        <span className="truncate">{community.name}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}