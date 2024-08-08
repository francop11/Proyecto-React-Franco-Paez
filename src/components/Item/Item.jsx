import "./Item.css"

const Item=({item})=>{

    return(

    // aca recibimos cada uno de los datos a mostrar de nuestro archivo json    
            
            < div key={item.id} className="cards">
                    <h2  className="cards-title">{item.nombre}</h2>
                    <p className="cards-desc">{item.descripcion }</p>
                    <img className="card-img" src={item.imagen_url} alt={item.nombre} />
                    <p className="card-precio">Precio: {item.precio}</p>
                    <p className="card-stock">Stock: {item.cantidad_stock}</p>
                    

    
                </div>

        
    
        
    )
    
}

export default Item