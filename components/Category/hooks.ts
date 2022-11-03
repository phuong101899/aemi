import {useEffect, useState} from "react";
import { Category } from "types";
import {CategoriesRepository} from "repositories/categories";
let categoriesRepository = new CategoriesRepository();

export const useCategories = () => {
    const [items, setItems] = useState<Category[]>([]);

    useEffect(() => {
        categoriesRepository.getList().then(res => {
            setItems(res.data);
        });
    }, [])

    return [items, {setItems}];
}