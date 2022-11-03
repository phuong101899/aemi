import React, {useEffect, useState} from "react";
import {Products} from "components/Product/Products";
import {useRouter} from "next/router";

type Props = {
    brand: string,
    category: string,
};
export const Home: React.FC<Props> = ({brand, category}) => {
    const router = useRouter();

    const [brandFilter, setBrandFilter] = useState<string>(brand);
    const [categoryFilter, setCategoryFilter] = useState<string>(category);

    useEffect(() => {
        let query = new URLSearchParams(location.search);
        let queryParsed = Object.fromEntries(query);

        if(brandFilter !== queryParsed?.brand) {
            setBrandFilter(queryParsed?.brand as string);
        }

        if(categoryFilter !== queryParsed?.category) {
            setCategoryFilter(queryParsed?.category as string);
        }

    }, [router])

    return (
        <>
            <Products brand={brandFilter} category={categoryFilter} />
        </>
    );
};