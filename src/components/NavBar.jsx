import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Spacer,
  Image,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex p="4" bg="darkblue" color="white">
      <Box>
        <Link to={"/"}>
          <Image src="https://www.zarla.com/images/zarla-top-almacn-1x1-2400x2400-20220204-tb467hvbv43d6fvm7wdc.png?crop=1:1,smart&width=250&dpr=2" width="45px" alt="logo" />
        </Link>
      </Box>
      <Spacer />
      <Menu isLazy>
        <MenuButton as={Button} colorScheme='teal'>Categorias de productos</MenuButton>
        <MenuList bg="teal">
          <Link to={"/category/bebidas"}>
            <MenuItem bg="teal" fontWeight="bold">Bebidas</MenuItem>
          </Link>
          <Link to={"/category/no_perecederos"}>
            <MenuItem bg="teal" fontWeight="bold">No perecederos</MenuItem>
          </Link>
          <Link to={"/category/verduras"}>
            <MenuItem bg="teal" fontWeight="bold">Verduras</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Spacer />
      <CartWidget itemCount={4}/>
    </Flex>
  )
}

export default NavBar