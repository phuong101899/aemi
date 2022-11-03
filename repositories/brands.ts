import {AxiosInstance, AxiosResponse} from "axios";
import {Brand} from "types";
import {httpClient} from "./httpClient";

export class BrandsRepository {
    private client: AxiosInstance;

    constructor(client?: AxiosInstance) {
        this.client = client ?? httpClient;
    }

    getList(): Promise<AxiosResponse<Brand[]>> {
        return this.client.get('/brands');
    }
}