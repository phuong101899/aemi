import React from "react";
import {useProducts} from "./hooks";
import _ from "lodash";
import {ProductCard} from "ui/cards";
import {Product} from "types";

type Props = {
    brand: string,
    category: string,
};

export const Products: React.FC<Props> = ({brand, category}) => {
    const [items] = useProducts({brand, category});

    return (
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
    );
};