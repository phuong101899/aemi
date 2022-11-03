import type { NextApiRequest, NextApiResponse } from 'next';
import {Brand} from "types";
import mockupData from "./brands.json";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Brand[]>
) {
    res.status(200).json(mockupData);
}