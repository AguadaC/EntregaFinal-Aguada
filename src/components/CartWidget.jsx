import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IconButton } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const theme = createTheme();

const CartWidget = ({itemCount}) => {
  return (
    <ThemeProvider theme={theme}>
      <Badge color="secondary" badgeContent={itemCount} overlap="rectangular">
        <IconButton aria-label='Search database' icon={<ShoppingCartIcon />} />
      </Badge>
    </ThemeProvider>
  )
}

export default CartWidget