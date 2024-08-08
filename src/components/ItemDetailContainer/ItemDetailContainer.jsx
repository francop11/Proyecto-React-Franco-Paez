import { useState, useEffect } from "react"
import ProductoPorId from "../ProductoPorId";
import ItemDetail from "../ItemDetail/ItemDetail"


// este componente se encargar atravez del estado mostrar solo uno de los productos
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)


  useEffect(() => {
    ProductoPorId()
      .then(response => {
        setProduct(response)
      
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  
  return (
    <div>
      {product ? <ItemDetail {...product} /> : <div>Producto no encontrado</div>}
      {/* si producto exite renderiza item detail sino muestra el div  */}
      {/* usamos un sprred por que si producto no es null itemdetail recibira las propiedades del objeto producto */}
    </div>
  );
};

export default ItemDetailContainer;
