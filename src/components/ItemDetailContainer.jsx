import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams()
  console.log(id)

  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {

    const db = getFirestore()
    const itemsProds = collection(db, "productor")
    getDocs(itemsProds).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProduct(docs)
      console.log(docs)
    })

  }, []);

  const filtered_prod = products.find((prod) => prod.id == id)
  console.log(filtered_prod)

  return (
      filtered_prod ? <ItemDetail key={filtered_prod.id} productDetail={filtered_prod} /> : <br />
  )
}

export default ItemDetailContainer
