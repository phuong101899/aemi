import React from "react";
import {Selector} from "ui/selector";
import {useBrands} from "./hooks";
import _ from "lodash";
import {Brand} from "types";

type Props = {
    onChange: (code: string) => void,
};

export const Brands: React.FC<Props> = ({onChange}) => {
    const [items] = useBrands();
    return (
        <Selector
            dataSource={_.map(items, (item: Brand) => ({name: item.brand_name, code: item.brand_code}))}
            onChange={onChange}
            title="Thương hiệu"
            placeholder="Tìm kiếm thương hiệu"
        />
    );
}