import "./Item.css"

const Item=({item})=>{
    return(

        
            
            < div key={item.id} className="cards">
                    <h2  className="cards-title">{item.nombre}</h2>
                    <p>{item.precio}</p>
                    <p>{item.cantidad_stock}</p>
                    <p className="cards-desc">{item.descripcion }</p>
                    <img className="card-img" src={item.imagen_url} alt={item.nombre} />
                    

    
                </div>

        
    
        
    )
    
}

export default Item