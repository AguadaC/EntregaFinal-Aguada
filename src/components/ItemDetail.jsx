import React from 'react';
import { Flex, Box, Heading, Text, Image} from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemDetail = ({ productDetail }) => {

  const { cart, addItem, removeItem, isInCart, getQuantityTotal, cleanCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} ${productDetail.title}(s) to cart`);
    addItem(productDetail, quantity)
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={productDetail.image} alt={productDetail.title} />
      <Box p="6">
        <Heading as="h4" size="md" mb={2}>
          {productDetail.title}
        </Heading>
        <Text mb={2}>{productDetail.description}</Text>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Price: ${productDetail.price}
        </Text>
        <ItemCount initial={0} onAdd={handleAddToCart} />
      </Box>
    </Box>
    </Flex>
    
  );
};

export default ItemDetail;
