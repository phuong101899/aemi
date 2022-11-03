import React from "react";
import {Categories} from "../Category";
import {Brands} from "../Brand";
import {useRouter} from "next/router";


export const Sidebar: React.FC = () => {
    const router = useRouter();

    const goFilter = (filter: {key: string, value: string}) => {

        let query = new URLSearchParams(location.search);

        router.push('/', {
            query: {
                ...Object.fromEntries(query),
                [filter.key]: filter.value,
            },
        });
    }

    return (
        <>
            <nav aria-label="Sidebar" className="sticky top-4">
                <div className="space-y-4">
                    <Brands onChange={(code) => goFilter({key: 'brand', value: code})} />
                    <Categories onChange={(code) => goFilter({key: 'category', value: code})} />
                </div>
            </nav>
        </>
    );
}