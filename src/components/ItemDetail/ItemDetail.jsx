import ItemCount from "../ItemCount/ItemCount"
import  "../Item/Item.css"


// el componente itemdetail  recibe props como argumento
// utlizamos la desestructuración de objetos para extraer las porpiedades de las props

const ItemDetail = ({ nombre, precio, cantidad_stock, descripcion, imagen_url }) => {
    return (
      <div className="card-item">
        <h2 className="cards-title">{nombre}</h2>
        <p className="cards-desc">Descripción: {descripcion}</p>
        <img className="card-img" src={imagen_url} alt={nombre} />
        <p className="card-precio">Precio: {precio}</p>
        <p className="card-stock">Stock: {cantidad_stock}</p>
<section>
<ItemCount  stock={10} onAdd={(Number)=>console.log("cantidad agregada ",Number)} />
</section>
      
      </div>
      
    )
  }
  
  
  

export default ItemDetail