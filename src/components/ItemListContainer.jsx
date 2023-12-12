import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {

  const { id } = useParams()
  console.log(id)

  const [prods, setProducts] = React.useState([]);

  React.useEffect(() => {

    const db = getFirestore()
    const itemsProds = collection(db, "productor")
    getDocs(itemsProds).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
    })

  }, []);

  const filtered_prod = prods.filter((prod) => prod.category == id)

  return (
        <ItemList products={filtered_prod.length ? filtered_prod : prods} />
  );
}

export default ItemListContainer