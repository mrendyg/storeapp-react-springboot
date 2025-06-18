import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../interfaces/Product";
import { getProducts } from "../api/product";


const ProductPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (err) {
                setError('Error al cargar los productos');
                console.error('Error fetching clients: ', err)
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [])

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (products.length === 0) return <div>No se encontraron productos</div>

    return(
        <div>
            <div>
                <h2>Productos</h2>

                <button>
                    crear
                </button>

                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.id} - {product.name} - {product.stock} - {product.price} - {product.brand?.name}
                            <div>
                                <button>
                                    Actualizar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductPage;