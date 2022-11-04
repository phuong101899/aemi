import React from "react";
import {Categories} from "../Category";
import {Brands} from "../Brand";
import {useRouter} from "next/router";
import _ from "lodash";


export const Sidebar: React.FC = () => {
    const router = useRouter();

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