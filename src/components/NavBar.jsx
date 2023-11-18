import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Spacer,
  Image,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex p="4" bg="darkblue" color="white">
      <Image src="https://www.zarla.com/images/zarla-top-almacn-1x1-2400x2400-20220204-tb467hvbv43d6fvm7wdc.png?crop=1:1,smart&width=250&dpr=2" width="45px" alt="logo" />
      <Spacer />
      <Menu isLazy>
        <MenuButton as={Button} colorScheme='teal'>Categorias de productos</MenuButton>
        <MenuList bg="teal">
          <MenuItem bg="teal" fontWeight="bold">Bebidas</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">No perecederos</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">Verduras</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <CartWidget itemCount={4}/>
    </Flex>
  )
}

export default NavBar