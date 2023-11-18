import React from 'react';
import Item from './Item';
import { Flex, Box } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" alignItems="flex-start">
      {products.map((product, index) => (
        <Box key={product.id} mb={index < 4 ? 4 : 0} width={['100%', '48%', '48%', '23%']}>
          <Item product={product} />
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;
