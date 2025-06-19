export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    brand?: {
        id: number;
        name: string;
    };
}

export interface Brand {
    id: number;
    name: string;
}

