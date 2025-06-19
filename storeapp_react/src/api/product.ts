import type { Product } from "../interfaces/Interface";
import { axi } from "./useAxios";

//lista de productos
export const getProducts = async (): Promise<Product[]> => {
    const response = await axi.get('/product/list')
    return response.data;
}

//Productos por id
export const getIdProduct = async (id: number): Promise<Product[]> => {
    const response = await axi.get(`/product/${id}`);
    return response.data;
}

//Creacion de un nuevo producto
export const createProduct = async (productData: any) => {
    const response = await axi.get(`/product/create`, productData);
    return response.data;
}

//borrar un producto
export const deleteProduct = async (id: number): Promise<void> => {
    await axi.delete(`/product/delete/${id}`);
}

//actualizar un producto
export const updateProduct = async (id: number, productData: Omit<Product, 'id'>):
Promise<Product> => {
    try {
        const response = await axi.put<Product>(`/client/update/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error("Error updating client: ", error);
        throw new Error("No se puedo actualizar el producto");
    }  
};