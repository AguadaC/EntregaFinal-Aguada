import React from 'react';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'

const CartItem = ({ product, removeItem }) => {

    const handleRemoveFromCart = () => {
        removeItem(product.id);
      };

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src= {product.image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.title}</Heading>
          <Text>
            {product.description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $ {product.price}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Cantidad: {product.quantity}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
            <Button variant='ghost' colorScheme='red' onClick={handleRemoveFromCart}>
              Eliminar Producto
            </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
