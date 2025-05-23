import { axi } from "./useAxios";

//lista de productos
export const getListProduct = async (id: number) => {
    const res = await axi.get(`product/list`)
    return res.data
}