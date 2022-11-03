import React from "react";
import {useProducts} from "./hooks";
import _ from "lodash";
import {ProductCard} from "ui/cards";
import {Brand, Category, Product} from "types";
import {FilterTag} from "ui/tags/FilterTag";
import {Tags} from "../../ui/tags";
import {useRouter} from "next/router";
import {useCategories} from "../Category";
import {useBrands} from "../Brand";

type Props = {
    brand: string,
    category: string,
};

export const Products: React.FC<Props> = ({brand, category}) => {
    const [items] = useProducts({brand, category});

    return (
        <>
            <div className="mb-4">
                <FilterTags brand={brand} category={category} />
            </div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {
                    _.map(items, (product: Product) => (
                        <ProductCard
                            key={product.product_id}
                            imageSrc={product.thumbnail}
                            imageAlt="Product image"
                            name={product.brand}
                            description={product.product_name}
                            price={product.discounted_price}
                            categoryName={product.category_name}
                            size={product.size}
                            supplierName={product.supplier_name}
                            originalPrice={product.original_price}
                            priceCurrency={product.price_currency}
                            officialStore={product.official_store}
                        />
                    ))
                }
            </div>
        </>
    );
};


type Filter = {
    label: string,
    code: string,
};

interface iFilterTags {
    brand: string,
    category: string,
}

const FilterTags: React.FC<iFilterTags> = ({brand, category}) => {

    const router = useRouter();
    const [categoriesData] = useCategories();
    const [brandsData] = useBrands();

    const getCategoryLabel = (code: string): string => {
        let item = _.find(categoriesData, (item: Category) => {
            return item.category_code === code;
        })

        return _.get(item, 'category_name', '');
    };

    const getBrandLabel = (code: string): string => {
        let item = _.find(brandsData, (item: Brand) => {
            return item.brand_code === code;
        })

        return _.get(item, 'brand_name', '');
    };

    const getBrands = (): Filter[] => {
        let brands = _.split(brand, ',');

        return _.map(_.compact(brands), (item) => {
            return {
                label: getBrandLabel(item),
                code: item,
            };
        });
    };

    const getCategories = (): Filter[] => {
        let categories = _.split(category, ',');

        return _.map(_.compact(categories), (item: string) => {
            return {
                label: getCategoryLabel(item),
                code: item,
            };
        });
    };

    const getTags = (): Filter[]  => {
        let result: Filter[] = [];
        if(brand) {
            result = [
                ...result,
                ...getBrands(),
            ];
        }

        if(category) {
            result = [
                ...result,
                ...getCategories(),
            ];
        }

        return result;
    };

    const onClose = (code: string) => {
        let query = new URLSearchParams(location.search);

        let filters = _.pickBy(Object.fromEntries(query), (item) => {
            return item !== code;
        });

        router.push('/', {
            query: {
                ...filters,
            },
        });
    }


    return (
        <Tags>
            {
                _.map(getTags(), (item) => (
                    <FilterTag key={item.code} label={item.label} onClose={() => onClose(item.code)} />
                ))
            }
        </Tags>
    );
}