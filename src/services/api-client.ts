import axios, { AxiosRequestConfig } from "axios";

interface Entity {
    id: number;
}

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3086eed65bdd42c2b0551444653d93ae'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);

    delete(id: number) {
        return axiosInstance.delete(`${this.endpoint}/${id}`);
    }

    update<T extends Entity>(entity: T) {
        return axiosInstance.patch(`${this.endpoint}/${entity.id}`, entity);
    }

    post = (data: T) => axiosInstance.post<T>(this.endpoint, data).then(res => res.data);

}

export default APIClient;