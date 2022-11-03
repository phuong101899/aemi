import React from "react";
import {Selector} from "ui/selector";
import {useCategories} from "./hooks";
import _ from "lodash";
import {Category} from "types";

export const Categories: React.FC = () => {
    const [items] = useCategories();
    return (
        <Selector
            dataSource={_.map(items, (item: Category) => ({name: item.category_name}))}
            title="Danh mục"
            placeholder="Tìm kiếm danh mục"
        />
    );
}