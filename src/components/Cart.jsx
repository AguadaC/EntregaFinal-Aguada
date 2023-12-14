import React from 'react';
import CartItem from './CartItem';
import { Flex, Box, Center, Button, Divider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartDetail = () => {
  const { cart, addItem, removeItem, isInCart, getQuantityTotal } = useContext(
    CartContext
  );

  if (cart.length === 0) {
    return (
        <Center bg="teal" h="100px" color="white" fontWeight="bold">
          <Flex direction="column" flexWrap="wrap">
            <Box>
              Por favor, agregue productos al carrito.
            </Box>
            <Box mx="auto">
              <Link to="/">
                <Button>Volver al catálogo</Button>
              </Link>
            </Box>
          </Flex>
        </Center>
      );     
  }

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
      {cart.map((product, index) => (
        <Box key={product.id} mx={2} mb={4} width={['100%', '48%', '48%', '23%']}>
          <CartItem product={product} removeItem={removeItem} />
        </Box>
      ))}
    </Flex>
  );
};

export default CartDetail;
