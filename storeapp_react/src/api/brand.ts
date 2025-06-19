import type { Brand } from "../interfaces/Interface";
import { axi } from "./useAxios";


export const getBrands = async (): Promise<Brand[]> => {
    const response = await axi.get(`/brand/list`);
    return response.data;
}

export const getIdBrands = async (id: number): Promise<Brand> => {
    const response = await axi.get(`/brand/${id}`);
    return response.data;
}

export const createBrand = async (brandData: any) => {
    const response = await axi.post(`/brand/create`, brandData);
    return response.data;
}