import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer=({greeting})=>{

    const[productos,setProductos]=useState([])


    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch ("/productos.json")
                const data=await response.json()
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
            <h1 className="titulo">{greeting}</h1>


        

            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-12 input-div">
            <ItemList productos={productos}/>


        

            </div>
        </div>
    
        
    </section>
        

    )
}

export default ItemListContainer