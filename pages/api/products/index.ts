import {NextApiRequest, NextApiResponse} from "next";
import {Product} from "types";

import mockupData from "./products.json";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>
) {
    res.status(200).json(mockupData);
}