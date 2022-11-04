import React, {useEffect} from "react";
import {Selector} from "ui/selector";
import {useBrands} from "./hooks";
import _ from "lodash";
import {Brand} from "types";

type Props = {
    onChange: (code: string) => void,
    maxHeight?: number,
    selected?: string[],
};

export const Brands: React.FC<Props> = ({onChange, maxHeight, selected = []}) => {
    const [items] = useBrands();

    useEffect(() => {
        console.log('selected', selected);
    }, [selected]);

    return (
        <Selector
            dataSource={
                _.map(items, (item: Brand) => {
                    return {
                        name: item.brand_name,
                        code: item.brand_code,
                        isActivated: _.includes(selected, item.brand_code)
                    };
                })
            }
            onChange={onChange}
            maxHeight={maxHeight}
            title="Thương hiệu"
            placeholder="Tìm kiếm thương hiệu"
        />
    );
}