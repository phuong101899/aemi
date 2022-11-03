import React from "react";
import {Selector} from "ui/selector";
import {useCategories} from "./hooks";
import _ from "lodash";
import {Category} from "types";

type Props = {
    onChange: (code: string) => void,
};

export const Categories: React.FC<Props> = ({onChange}) => {
    const [items] = useCategories();
    return (
        <Selector
            dataSource={_.map(items, (item: Category) => ({name: item.category_name, code: item.category_code}))}
            onChange={onChange}
            title="Danh mục"
            placeholder="Tìm kiếm danh mục"
        />
    );
}