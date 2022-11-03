import React from "react";
import {Selector} from "ui/selector";
import {useBrands} from "./hooks";
import _ from "lodash";
import {Brand} from "types";

export const Brands: React.FC = () => {
    const [items] = useBrands();
    return (
        <Selector
            dataSource={_.map(items, (item: Brand) => ({name: item.brand_name}))}
            title="Thương hiệu"
            placeholder="Tìm kiếm thương hiệu"
        />
    );
}