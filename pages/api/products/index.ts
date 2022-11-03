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
            return _.includes(_.split(brand as string, ','), item.brand_code);
        });
    }

    if(category) {
        result = _.filter(result, (item: Product) => {
            return _.includes(_.split(category as string, ','), item.category_code);
        });
    }

    res.status(200).json(result);
}