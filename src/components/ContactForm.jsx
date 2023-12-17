import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ContactForm = () => {
  const { cart, addItem, removeItem, isInCart, getQuantityTotal, cleanCart } = useContext(
    CartContext
  );
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore()

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    addDoc(orderCollection, order).then(({ id }) => 
      setId(id))
      cleanCart()
  }

  const order = {
      name,
      email,
      phone,
      cart
  }

  const orderCollection = collection(db, "orders")

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Emails</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Numero de telefono</FormLabel>
        <Input
          placeholder="01115777789"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit">Confirmar pedido</Button>
    </form>
    <p>Id de la Compra: {id} </p>
    </>
    
  );
};

export default ContactForm;
