import React from 'react'
import { Card, CardBody, Text } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Card bg="purple.100">
      <CardBody >
        <Text fontWeight="bold" color="blue.500" textAlign="center">
          {greeting}
        </Text>
      </CardBody>
    </Card>
  )
}

export default ItemListContainer