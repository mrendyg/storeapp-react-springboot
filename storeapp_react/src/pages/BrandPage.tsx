import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Brand } from "../interfaces/Interface";
import { getBrands } from "../api/brand";


const BrandPage = () => {
    const navigate = useNavigate();
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const brandsData = await getBrands();
                setBrands(brandsData);
            } catch (err) {
                setError('Error al cargar las marcas');
                console.error('Error fetching brands: ', err);
            } finally {
                setLoading(false);
            }
        };
        fetchBrands();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>
    if (brands.length === 0) return <div>No se encuantran marcas</div>
    return(
        <div className="p-4">
            <div className="max-w-6x1 mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Brands</h2>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Crear marca
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border boder-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Nombre</th>
                                <th className="py-2 px-4 border-b">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map(brand => (
                                <tr key={brand.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b text-center">{brand.id}</td>
                                    <td className="py-2 px-4 border-b text-center">{brand.name}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <button 

                                            className="bg-[#0014dd] hover:bg-[#030b5b] text-white px-3 py-1 rounded text-sm mr-2"
                                        >
                                            Editar
                                        </button>
                                        <button 
                                           
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

export default BrandPage;