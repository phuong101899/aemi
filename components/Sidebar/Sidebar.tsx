import React, {useEffect, useState} from "react";
import {Categories} from "../Category";
import {Brands} from "../Brand";
import {useRouter} from "next/router";
import _ from "lodash";


export const Sidebar: React.FC = () => {
    const router = useRouter();
    const [brands, addBrands] = useState<string[]>([]);
    const [categories, addCategories] = useState<string[]>([]);

    const goFilter = (filter: {key: string, value: string}) => {

        let query = new URLSearchParams(location.search);

        router.push('/', {
            query: _.mergeWith(
                Object.fromEntries(query),
                {[filter.key]: filter.value},
                (objValue, srcValue) => {
                    let values = _.split(objValue, ',');
                    return _.join(_.uniq(_.compact([
                        ...values,
                        srcValue
                    ])), ',');
                },
            ),
        }, {
            scroll: false,
        });
    }

    useEffect(() => {
        let queries = Object.fromEntries(new URLSearchParams(location.search));
        let _brands = _.get(queries, 'brand');
        if(_brands) {
            addBrands(
                _.split(_brands, ',')
            )
        }

        let _categories = _.get(queries, 'category');
        if(_categories) {
            addCategories(
                _.split(_categories, ',')
            )
        }

    }, [router])

    return (
        <>
            <nav aria-label="Sidebar" className="sticky top-4">
                <div className="space-y-4">
                    <Brands
                        onChange={(code) => goFilter({key: 'brand', value: code})}
                        selected={brands}
                    />
                    <Categories
                        onChange={(code) => goFilter({key: 'category', value: code})}
                        selected={categories}
                    />
                </div>
            </nav>
        </>
    );
}