import React from "react";
import {Selector} from "ui/selector";
import {useCategories} from "./hooks";
import _ from "lodash";
import {Category} from "types";

type Props = {
    onChange: (code: string) => void,
    maxHeight?: number,
    selected?: string[],
};

export const Categories: React.FC<Props> = ({onChange, maxHeight, selected = []}) => {
    const [items] = useCategories();
    return (
        <Selector
            dataSource={_.map(items, (item: Category) => {
                return {
                    name: item.category_name,
                    code: item.category_code,
                    isActivated: _.includes(selected, item.category_code)
                };
            })}
            onChange={onChange}
            maxHeight={maxHeight}
            title="Danh mục"
            placeholder="Tìm kiếm danh mục"
        />
    );
}