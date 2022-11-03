import {AxiosInstance, AxiosResponse} from "axios";
import {Product} from "types";
import {httpClient} from "./httpClient";


type ProductFilter = {
    brand?: string,
    category?: string,
};

export class ProductsRepository {
    private client: AxiosInstance;

    constructor(client?: AxiosInstance) {
        this.client = client ?? httpClient;
    }

    getList(filter?: ProductFilter): Promise<AxiosResponse<Product[]>> {
        return this.client.get('/products', {
            params: {
                ...filter,
            }
        });
    }
}