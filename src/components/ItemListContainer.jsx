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
            image: "https://www.cocinatis.com/archivos/202304/tomates-fruta-verdura-1280x720x80xX.jpg"
          },
          {
            id: 2,
            title: "Arroz",
            description: "Arroz blanco, paquete de 1kg",
            price: 400,
            category: "no perecederos",
            image: "https://www.lafallera.es/wp-content/uploads/2023/04/Coccio%CC%81n-para-el-arroz-largo-pasos-y-trucos.jpg"
          },
          {
            id: 3,
            title: "Agua Mineral",
            description: "Botella de agua mineral, 500ml",
            price: 800,
            category: "bebidas",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/273002-800-auto?v=638116617863100000&width=800&height=auto&aspect=true"
          },
          {
            id: 4,
            title: "Lechuga",
            description: "Lechuga fresca de la huerta",
            price: 1200,
            category: "verduras",
            image: "https://recetasdecocina.elmundo.es/wp-content/uploads/2023/02/lechuga.jpg"
          },
          {
            id: 5,
            title: "Atún enlatado",
            description: "Lata de atún al natural, 200g",
            price: 3000,
            category: "no perecederos",
            image: "https://i.blogs.es/b72848/istock-978062568/1366_2000.jpeg"
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