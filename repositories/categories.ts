import {AxiosInstance, AxiosResponse} from "axios";
import {Category} from "../types";
import {httpClient} from "./httpClient";

export class CategoriesRepository {
    private client: AxiosInstance;

    constructor(client?: AxiosInstance) {
        this.client = client ?? httpClient;
    }

    getList(): Promise<AxiosResponse<Category[]>> {
        return this.client.get('/categories');
    }
}