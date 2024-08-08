import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  

  return (
    <>
     <Navbar/>
      <ItemListContainer  greeting={"Bienvenidos a House Gamer"}/>
      <ItemDetailContainer />
    

    
    </>
  )
}

export default App
