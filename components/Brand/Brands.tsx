import React from "react";
import {Selector} from "ui/selector";
import {useBrands} from "./hooks";
import _ from "lodash";
import {Brand} from "types";

type Props = {
    onChange: (code: string) => void,
    maxHeight?: number,
};

export const Brands: React.FC<Props> = ({onChange, maxHeight}) => {
    const [items] = useBrands();
    return (
        <Selector
            dataSource={_.map(items, (item: Brand) => ({name: item.brand_name, code: item.brand_code}))}
            onChange={onChange}
            maxHeight={maxHeight}
            title="Thương hiệu"
            placeholder="Tìm kiếm thương hiệu"
        />
    );
}