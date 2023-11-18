import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'

const Item = ({ product }) => {
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to={`/item/${product.id}`}>
            <Button variant='ghost' colorScheme='blue'>
              Detalle
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
