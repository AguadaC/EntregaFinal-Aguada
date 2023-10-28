import React from 'react'
import Badge from "@material-ui/core/Badge";
import { IconButton } from '@chakra-ui/react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const CartWidget = () => {
  return (
      <Badge color="secondary" badgeContent={4} overlap="rectangular">
        <IconButton aria-label='Search database' icon={<ShoppingCartIcon />} />
      </Badge>
  )
}

export default CartWidget