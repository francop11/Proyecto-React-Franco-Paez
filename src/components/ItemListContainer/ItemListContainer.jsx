import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"



// creamos a la landind del proyecto
const ItemListContainer=({greeting})=>{
    
    // usamos el estado para almacenar los productos
    const[productos,setProductos]=useState([])


    useEffect(()=>{
        // usamos una promesa asincrona para traer nuestro archivo json
        const fetchData=async()=>{
            try{
                const response=await fetch ("/productos.json")
                const data=await response.json()
                // guardamos el array de productos en nuestro estado
                setProductos(data)

            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    
    },[])

console.log(productos)
    return(
    
        
        
        <section className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-lg-12 input-div">
            {/* aca pasamos un prop al h1 */}
            <h1 className="titulo">{greeting}</h1>


        

            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-12 ">
                {/* pasamos el estado atravez de props al componente item list */}
            <ItemList productos={productos}/>


        

            </div>
        </div>
    
        
    </section>
        

    )
}

export default ItemListContainer