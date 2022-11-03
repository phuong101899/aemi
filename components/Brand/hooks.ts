import {useEffect, useState} from "react";
import {Brand} from "types";
import {BrandsRepository} from "repositories/brands";
let brandsRepository = new BrandsRepository();

export const useBrands = () => {
    const [items, setItems] = useState<Brand[]>([]);

    useEffect(() => {
        brandsRepository.getList().then(res => {
            setItems(res.data);
        });
    }, []);

    return [items, {setItems}];
}