import type { Product } from "../interfaces/Product";
import { axi } from "./useAxios";

//lista de productos
export const getProducts = async (): Promise<Product[]> => {
    const response = await axi.get('/product/list')
    return response.data;
}