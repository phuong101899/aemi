import {AxiosInstance, AxiosResponse} from "axios";
import {Product} from "types";
import {httpClient} from "./httpClient";

export class ProductsRepository {
    private client: AxiosInstance;

    constructor(client?: AxiosInstance) {
        this.client = client ?? httpClient;
    }

    getList(): Promise<AxiosResponse<Product[]>> {
        return this.client.get('/products');
    }
}