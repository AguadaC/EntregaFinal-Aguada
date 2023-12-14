import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IconButton } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const theme = createTheme();

const CartWidget = () => {

  const { cart, addItem, removeItem, isInCart, getQuantityTotal } = useContext(CartContext);

  const itemNumber = getQuantityTotal()
  console.log(itemNumber)

  return (
    <ThemeProvider theme={theme}>
      <Badge color="secondary" badgeContent={itemNumber} overlap="rectangular">
        <IconButton aria-label='Search database' icon={<ShoppingCartIcon />} />
      </Badge>
    </ThemeProvider>
  )
}

export default CartWidget