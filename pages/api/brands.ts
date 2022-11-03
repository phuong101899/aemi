import type { NextApiRequest, NextApiResponse } from 'next';
import {Brand} from "types";

let mockupData = [
    {
        "brand_code": "WCA",
        "brand_name": "WELLCA",
        "brand_short_description": ""
    },
    {
        "brand_code": "SYS",
        "brand_name": "SAYES",
        "brand_short_description": ""
    },
    {
        "brand_code": "BJK",
        "brand_name": "BEAUTY OF KOREA",
        "brand_short_description": ""
    },
    {
        "brand_code": "BEN",
        "brand_name": "BEN",
        "brand_short_description": ""
    },
    {
        "brand_code": "ORC",
        "brand_name": "ORACLE",
        "brand_short_description": ""
    },
    {
        "brand_code": "CRX",
        "brand_name": "CORS",
        "brand_short_description": ""
    },
    {
        "brand_code": "DNT",
        "brand_name": "DENTREE",
        "brand_short_description": ""
    },
    {
        "brand_code": "MTA",
        "brand_name": "MRS.THEA",
        "brand_short_description": ""
    },
    {
        "brand_code": "DJA",
        "brand_name": "DR.JPLUS",
        "brand_short_description": ""
    },
    {
        "brand_code": "GDL",
        "brand_name": "GDAL",
        "brand_short_description": ""
    },
    {
        "brand_code": "HUX",
        "brand_name": "HULEX",
        "brand_short_description": ""
    },
    {
        "brand_code": "ISN",
        "brand_name": "ISNPLANT",
        "brand_short_description": ""
    },
    {
        "brand_code": "KLN",
        "brand_name": "SLAIK",
        "brand_short_description": ""
    },
    {
        "brand_code": "LRP",
        "brand_name": "LA PO CHE",
        "brand_short_description": ""
    },
    {
        "brand_code": "LNE",
        "brand_name": "LEIGE",
        "brand_short_description": ""
    },
    {
        "brand_code": "MPR",
        "brand_name": "ME PEM",
        "brand_short_description": ""
    },
    {
        "brand_code": "NEO",
        "brand_name": "N DERMALOGY",
        "brand_short_description": ""
    },
    {
        "brand_code": "PLC",
        "brand_name": "AU'S CHOICE",
        "brand_short_description": ""
    },
    {
        "brand_code": "PRT",
        "brand_name": "PRUTO",
        "brand_short_description": ""
    },
    {
        "brand_code": "PKY",
        "brand_name": "PYUNKANG YUL",
        "brand_short_description": ""
    },
    {
        "brand_code": "RDL",
        "brand_name": "CIRCLE LAB",
        "brand_short_description": ""
    },
    {
        "brand_code": "RVT",
        "brand_name": "RAVTIN",
        "brand_short_description": ""
    },
    {
        "brand_code": "SKN",
        "brand_name": "SKINONE",
        "brand_short_description": ""
    },
    {
        "brand_code": "SBM",
        "brand_name": "SELECT BY MEE",
        "brand_short_description": ""
    },
    {
        "brand_code": "SVR",
        "brand_name": "SPIRIT VR",
        "brand_short_description": ""
    },
    {
        "brand_code": "VIS",
        "brand_name": "VIT SG",
        "brand_short_description": ""
    }
];


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Brand[]>
) {
    res.status(200).json(mockupData);
}