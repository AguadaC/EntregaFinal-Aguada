import React from 'react';
import Item from './Item';
import { Flex, Box } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
      {products.map((product, index) => (
        <Box key={product.id} mx={2} mb={4} width={['100%', '48%', '48%', '23%']}>
          <Item product={product} />
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;
