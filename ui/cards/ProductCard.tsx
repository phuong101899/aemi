import React from "react";
import {Tag, Tags} from "../tags";
import Image from "next/image";

type Props = {
    href?: string,
    imageSrc: string,
    imageAlt: string,
    name: string,
    description: string,
    price: string,
    categoryName: string,
    size: string,
    supplierName: string,
    originalPrice: string,
    priceCurrency: string,
    officialStore: boolean,
};

export const ProductCard: React.FC<Props> = (props) => {

    const percent = Math.ceil((Number(props.price)/Number(props.originalPrice)) * 100);

    return (
        <>
            <a href={props.href} className="group text-sm">
                <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t bg-gray-100 group-hover:opacity-75">
                    <img
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        className="h-full w-full object-cover object-center"
                        style={{aspectRatio: 270/255}}
                    />
                    {
                        props.officialStore && (
                            <Image
                                src={require('./assets/official-store.svg')}
                                alt="official"
                                width={30}
                                height={26}
                                className="absolute top-0"
                            />
                        )
                    }
                </div>
                <div className="px-4">
                    <div className="mt-2 text-base text-primary font-semibold">{props.name}</div>
                    <div className="mt-2 mb-4 text-sm text-black">{props.description}</div>
                    <Tags>
                        <Tag label={props.categoryName} />
                        <Tag label={props.size} />
                    </Tags>
                    <div className="mt-4 flex justify-between text-xs">
                        <div className="flex gap-2">
                            <Image src={require('./assets/shop-icon.svg')} alt="icon" width={16} height={16} />
                            <span className="text-[#101112]">{props.supplierName}</span>
                        </div>
                        <span className="text-[#A1A5AB]">Còn {numberPretty(Number(props.price))}</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="text-primary font-semibold text-lg">
                            {numberPretty(Number(props.originalPrice))}{props.priceCurrency}
                        </div>
                        <div className="text-white bg-[#D81D1D] flex items-center p-1 rounded text-[10px]">
                            -{100 - percent}%
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}


const numberPretty = (data: number) => {
    return new Intl.NumberFormat().format(data)
}