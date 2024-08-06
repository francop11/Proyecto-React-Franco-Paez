import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'



function App() {
  

  return (
    <>
     <Navbar/>
      <ItemListContainer  greeting={"Bienvenidos a House Gamer"}/>
      <ItemCount initial={1} stock={10} onAdd={(Number)=>console.log("cantidad agregada ",Number)} />

    
    </>
  )
}

export default App
