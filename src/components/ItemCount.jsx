import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const ItemCount = ({ initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <Flex align="center" justify="center" direction="column" w="100%">
      <Flex align="center" justify="center" mb={4}>
        <Button onClick={handleDecrement} mr={2}>
          -
        </Button>
        <Text fontSize="xl" fontWeight="bold">
          {count}
        </Text>
        <Button onClick={handleIncrement} ml={2}>
          +
        </Button>
      </Flex>
      <Button colorScheme="blue" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Flex>
  );
};

export default ItemCount;
