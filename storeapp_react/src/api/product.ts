import type { Product } from "../interfaces/Product";
import { axi } from "./useAxios";

//lista de productos
export const getClients = async (): Promise<Product[]> => {
    const response = await axi.get('/clients/list')
    return response.data;
}