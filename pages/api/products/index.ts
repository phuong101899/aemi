import {NextApiRequest, NextApiResponse} from "next";
import {Product} from "types";

import mockupData from "./products.json";
import _ from "lodash";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>
) {
    let brand = req.query?.brand;
    let category = req.query?.category;

    let result = mockupData;

    if(brand) {
        result = _.filter(result, (item: Product) => {
            return item.brand_code === brand;
        });
    }

    if(category) {
        result = _.filter(result, (item: Product) => {
            return item.category_code === category;
        });
    }

    res.status(200).json(result);
}