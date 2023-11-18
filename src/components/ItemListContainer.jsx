import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve, reject) => {
        const products = [
          {
            id: 1,
            title: "Tomate",
            description: "Tomate fresco de la huerta",
            price: 2500,
            category: "verduras",
          },
          {
            id: 2,
            title: "Arroz",
            description: "Arroz blanco, paquete de 1kg",
            price: 400,
            category: "no perecederos",
          },
          {
            id: 3,
            title: "Agua Mineral",
            description: "Botella de agua mineral, 500ml",
            price: 800,
            category: "bebidas",
          },
          {
            id: 4,
            title: "Lechuga",
            description: "Lechuga fresca de la huerta",
            price: 1200,
            category: "verduras",
          },
          {
            id: 5,
            title: "Atún enlatado",
            description: "Lata de atún al natural, 200g",
            price: 3000,
            category: "no perecederos",
          },
        ];
    
        // Simular una operación asincrónica (por ejemplo, una llamada a una API)
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });
    };
    
    // Uso de la promesa
    fetchProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
      });
  }, []);
  

  return (
      <ItemList products={products} />
  )
}

export default ItemListContainer