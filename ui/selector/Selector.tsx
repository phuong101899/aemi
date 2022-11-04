import React, {useState} from "react";
import {Input} from "../inputs";
import Image from "next/image";
import _ from "lodash";

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
    const [keyword, setKeyword] = useState('');

    const getList = (keyword: string) => {
        return _.filter(dataSource, item => {
            return _.includes(item.name, keyword);
        });
    }

    return (
        <div>
            <p className="px-3 text-[22px] font-medium text-secondary font-[700]">
                {title}
            </p>
            <div className="px-3">
                <Input
                    trailing={
                        <Image src={require('ui/icons/assets/search.svg')} alt="search icon" />
                    }
                    placeholder={placeholder}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div className="mt-4" style={{maxHeight, overflowY: "auto"}}>
                {getList(keyword).map((item) => (
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