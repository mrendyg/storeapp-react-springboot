import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../interfaces/Interface";
import { deleteProduct, getProducts } from "../../api/product";


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
    }, []);

    const handleUpdate = (id: number) => {
        navigate(`/product/update/${id}`);
    }

    const handleDelete = async (id: number) => {
        if (!window.confirm('¿Estas seguro de eliminar este product?')) return;

        try {
            await deleteProduct(id);
            setProducts(products.filter(client => client.id !== id));
            alert('Producto eliminado correctamente');
        } catch (err) {
            alert('Error al eliminar Producto');
            console.error('Error deleting client', err);
        }
    }

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (products.length === 0) return <div>No se encontraron productos</div>

    return(
        <div className="p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Productos</h2>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Crear Producto
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Nombre</th>
                                <th className="py-2 px-4 border-b">Precio</th>
                                <th className="py-2 px-4 border-b">Stock</th>
                                <th className="py-2 px-4 border-b">Marca</th>
                                <th className="py-2 px-4 border-b">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b text-center">{product.id}</td>
                                    <td className="py-2 px-4 border-b">{product.name}</td>
                                    <td className="py-2 px-4 border-b text-right">${product.price}</td>
                                    <td className="py-2 px-4 border-b text-center">{product.stock}</td>
                                    <td className="py-2 px-4 border-b">{product.brand?.name || '-'}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <button 
                                            className="bg-[#0014dd] hover:bg-[#030b5b] text-white px-3 py-1 rounded text-sm mr-2"
                                            onClick={() => handleUpdate(product.id)}
                                        >
                                            Actualizar
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(product.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;