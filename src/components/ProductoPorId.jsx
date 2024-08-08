// este componente devolvera una promesa
const ProductoPorId = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // utilizamos fetch para obtener el archivo json
        fetch('/productos.json')
          .then(response => {
            
            return response.json()
          })
          .then(data => {
            //usamos el metodo find para buscar y retornar el primer elemento del array que cumpla con una condición específica
            const product = data.find((prod) => prod.id === Number(2))
            // buscamos un producto cuyo id sea 2 si lo encuentra se llama a resolve sino reject
            if (product) {
              resolve(product)
            } else {
              reject("producto no encontrado")
            }
          })
          .catch(error => reject(error))
      }, 500)
    })
  }
  
  export default ProductoPorId
  
