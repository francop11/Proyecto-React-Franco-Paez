import { useState } from "react"
import "./ItemCount.css"
// iconos importados de react icons
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";


// creamos el itemcount que sera el contador con botones

const ItemCount=({stock,onAdd})=>{
    // estado que almacenara la cantidad del contador
const[number,setNumber]=useState(1)


const sumar=()=>{
    // mientras number sea menor al stcock incremtara 1
    if(number<stock
    )(
setNumber(number +1)
    )
}

const restar=()=>{
    // mientras number mayor a 1 restara 1 porducto del carrito
    if(number>1)(

    setNumber(number-1)

    )
}



return(
    <>
    <div className="container-fluid">

    <div className="ItemCount">
        

       <button className="restar"  onClick={restar}><VscChromeMinimize />  </button>
        <p className="productos"> {number}</p>
        <button  className="sumar" onClick={sumar}><VscAdd /></button>
        
        </div>
        <div>

        <button className="carritoCompras" onClick={() => onAdd(number)  } disabled={!stock}>agregar al carrito</button> y
        {/* ejecutamos como call back la funcion recibida por el props onadd y recibe como argumento la cantidad del estado
        en caso de no tener estado disabled impedira que se ejecute la funcion */}
        </div>
        
        
    </div>
    
    </>
)
}

export default ItemCount