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
          <MenuItem bg="teal" fontWeight="bold">Opcion 1</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">Opcion 2</MenuItem>
          <MenuItem bg="teal" fontWeight="bold">Opcion 3</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <CartWidget />
    </Flex>
  )
}

export default NavBar