import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ productDetail }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} ${productDetail.title}(s) to cart`);
    // Aquí agregare la logica para agregar al carrito
  };

  return (
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
  );
};

export default ItemDetail;
