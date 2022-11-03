import {useEffect, useState} from "react";
import {Product} from "types";
import { ProductsRepository } from "repositories/products";
const productsRepository = new ProductsRepository();
export const useProducts = () => {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        productsRepository.getList().then(res => {
            setItems(res.data);
        });
    }, []);

    return [items, {setItems}];
}