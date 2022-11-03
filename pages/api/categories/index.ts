import type { NextApiRequest, NextApiResponse } from 'next';
import {Category} from "types";
import mockupData from "./categories.json";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    res.status(200).json(mockupData);
}