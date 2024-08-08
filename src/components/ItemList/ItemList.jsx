import Item from "../Item/Item"

const ItemList=({productos})=>{
    return(
        <div>
            {/* aca usamos map para mostrar los productos atarvez del componente item */}
            {productos.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>

    )
}


export default ItemList