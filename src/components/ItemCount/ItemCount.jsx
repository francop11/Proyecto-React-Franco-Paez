import { useState } from "react"


const ItemCount=({stock,initial,onAdd})=>{
const[number,setNumber]=useState(1)


const sumar=()=>{
    if(number<stock
    )(
setNumber(number +1)
    )
}

const restar=()=>{
    if(number>1)(

    setNumber(number-1)

    )
}



return(
    <>
    <div className="container-fluid">

    <div className="row">
            <div className="col-sm-12 col-lg-12 input-div">
            <p>contador:{number}</p>
        <button onClick={restar}>restar</button>
        <button onClick={sumar}>sumar</button>
        <button onClick={() => onAdd(number)  } disabled={!stock}>agregar al carrito</button>

            </div>
        </div>
        
        
    </div>
    
    </>
)
}

export default ItemCount