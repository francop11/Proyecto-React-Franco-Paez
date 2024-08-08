// importamos el css de cartwidget
import "./CarWidget.css"
// importamos el icono del carrito
import { FaShoppingCart } from "react-icons/fa";


const CartWidget=()=>{
    return(
        <div>
            {/* aca simulamos el carrito de compras */}
            <p className="carrito">11</p>
            {/* importamos el componente del icono del carrito */}
            <FaShoppingCart />

        </div>

    )
}

export default CartWidget