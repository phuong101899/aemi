import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Categories, useCategories} from "../Category";
import {Brands, useBrands} from "../Brand";
import _ from "lodash";
import {Brand, Category} from "types";
import {FilterTag, Tags} from "ui/tags";
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";
import {OutlineButton, PrimaryButton} from "../../ui/buttons";

type Filter = {
    label: string,
    code: string,
};

interface iFilterTags {
    brand: string,
    category: string,
}

export const FilterTags: React.FC<iFilterTags> = ({brand, category}) => {

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


        filters = _.mapValues(filters, (item) => {
            let values = _.split(item, ',');

            values = _.filter(values, item => item !== code);
            return _.join(_.uniq(values), ',');
        });

        router.push('/', {
            query: {
                ...filters,
            },
        }, {
            scroll: false,
        });
    }


    return (
        <div>
            <div className="lg:hidden">
                <FiltersModal
                    trigger={
                        <label className="flex">
                            BỘ LỌC
                            <Image src={require('./assets/chev_down.svg')} alt="icon" width={24} height={24} />
                        </label>
                    }
                />
            </div>
            <div className="hidden lg:block">
                <Tags>
                    {
                        _.map(getTags(), (item) => (
                            <FilterTag key={item.code} label={item.label} onClose={() => onClose(item.code)} />
                        ))
                    }
                </Tags>
            </div>
        </div>
    );
}

interface iFiltersModal {
    trigger: JSX.Element,
}

export const FiltersModal: React.FC<iFiltersModal> = ({trigger}) => {
    let [isOpen, setIsOpen] = useState(false);
    const [brands, addBrands] = useState<string[]>([]);
    const [categories, addCategories] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        let queries = Object.fromEntries(new URLSearchParams(location.search));
        let _brands = _.get(queries, 'brand');
        if(_brands) {
            addBrands(
                _.split(_brands, ',')
            )
        }

        let _categories = _.get(queries, 'category');
        if(_categories) {
            addCategories(
                _.split(_categories, ',')
            )
        }

    }, [router]);

    const onPicked = (filter: {key: string, value: string}) => {
        if(filter.key === "brand") {
            if(_.includes(brands, filter.value)) {
                let _brands = _.filter(brands, item => item !== filter.value);
                addBrands([..._brands]);
            } else {
                addBrands([
                    ...brands,
                    filter.value,
                ]);
            }
        }
        else if(filter.key === "category") {
            if(_.includes(categories, filter.value)) {
                let _categories = _.filter(categories, item => item !== filter.value);
                addCategories([..._categories]);
            } else {
                addCategories([
                    ...categories,
                    filter.value,
                ]);
            }
        }
    };

    const clear = () => {
        addBrands([]);
        addCategories([]);
    };

    const apply = () => {

        setIsOpen(false);

        let query = {};
        _.set(query, 'brand', _.join(brands, ','));

        _.set(query, 'category', _.join(categories, ','));

        router.push('/', {
            query: _.omitBy(query, _.isEmpty),
        });

    };


    return (
        <>
            {
                React.cloneElement(trigger, {
                    onClick: () => setIsOpen(true),
                })
            }
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10">
                        <div className="min-h-full">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="transform bg-white shadow-xl transition-all w-full h-screen flex flex-col">
                                    <div className="bg-primary text-white flex px-6 py-4">
                                        <Image
                                            onClick={() => setIsOpen(false)}
                                            src={require('./assets/close_white.svg')}
                                            alt="icon"
                                        />
                                        <div className="w-full text-center">
                                            BỘ LỌC
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                            <div className="h-full py-5 overflow-y-auto">
                                                <div className="space-y-4">
                                                    <Brands
                                                        onChange={(code) => onPicked({key: 'brand', value: code})}
                                                        maxHeight={190}
                                                        selected={brands}
                                                    />
                                                    <Categories
                                                        onChange={(code) => onPicked({key: 'category', value: code})}
                                                        maxHeight={190}
                                                        selected={categories}
                                                    />
                                                </div>
                                            </div>
                                        <div className="p-3 gap-5 flex">
                                            <OutlineButton className="w-2/4" onClick={clear}>
                                                XOÁ TẤT CẢ
                                            </OutlineButton>
                                            <PrimaryButton
                                                className="w-2/4"
                                                onClick={apply}
                                            >
                                                ÁP DỤNG
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}