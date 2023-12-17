import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Flex, Box, Center } from "@chakra-ui/react";
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
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
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
    <Center bg="teal" h="80px" color="white" fontWeight="bold">
      <Flex direction="column" flexWrap="wrap">
        <Box mx="auto">
        {cart.length ? (
        <Button type="submit">Confirmar pedido</Button>
        ) : (
        <>
          <h2 style={{ justifyContent: "center" }}>Id de la Compra:</h2>
          <br />
          <h4 style={{ justifyContent: "center" }}>{id}</h4>
        </>
        )}
        </Box>
      </Flex>
    </Center>
    </form>
    </Flex>
    </>
    
  );
};

export default ContactForm;
