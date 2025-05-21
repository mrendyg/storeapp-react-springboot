import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
        <div className="h-20">
            <Link to={'/'}
                className="text-[#0c0c0c] text.center self-center p-2 px-4 rounded-lg hover:bg-[#d6d6d6]">
                Inicio
            </Link>

            <Link to={'/product'}
                className="text-[#0c0c0c] text.center self-center p-2 px-4 rounded-lg hover:bg-[#d6d6d6]">
                Productos
            </Link>

            <Link to={'/brand'}
                className="text-[#0c0c0c] text.center self-center p-2 px-4 rounded-lg hover:bg-[#d6d6d6]">
                Marcas
            </Link>

            <Link to={'/client'}
                className="text-[#0c0c0c] text.center self-center p-2 px-4 rounded-lg hover:bg-[#d6d6d6]">
                Client
            </Link>

            <Link to={'/sales'}
                className="text-[#0c0c0c] text.center self-center p-2 px-4 rounded-lg hover:bg-[#d6d6d6]">
                Ventas
            </Link>
        </div>
        </>        
    );

}

export default Header;