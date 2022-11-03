import {useEffect, useState} from "react";
import {Product} from "types";
import { ProductsRepository } from "repositories/products";
const productsRepository = new ProductsRepository();

type Props = {
    brand?: string,
    category?: string,
};

export const useProducts = (filter?: Props) => {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        productsRepository.getList({brand: filter?.brand, category: filter?.category}).then(res => {
            setItems(res.data);
        });
    }, [filter?.brand, filter?.category]);

    return [items, {setItems}];
}