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
  Image
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex p="4" bg="darkblue" color="white">
      <Image src="./src/assets/logo.png" width="45px" alt="logo" />
      <Spacer />
      <Menu isLazy>
        <MenuButton as={Button} colorScheme='teal'>Desplegable</MenuButton>
        <MenuList bg="teal">
          <MenuItem bg="teal" fontWeight="bold">Zonas Disponibles</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">Zonas Seleccionadas</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">Combos Válidos</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <CartWidget />
    </Flex>
  )
}

export default NavBar