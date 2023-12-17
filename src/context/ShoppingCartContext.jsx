import { createContext, useState } from "react";

export const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {  
        if (quantity == 0) {
            console.log('La cantidad debe ser mayor a 0')
            return
        }
        // Buscamos el item en el carrito
        const index = cart.findIndex((i) => i.id === item.id);
    
        // Si el item no existe, lo agregamos
        if (index === -1) {
          setCart((prevCart) => [
            ...prevCart,
            {
              ...item,
              quantity: quantity,
            },
          ]);
        } else {
          // Si el item existe, actualizamos su cantidad
          setCart((prevCart) =>
            prevCart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            )
          );
        }
      };
    
    const removeItem = (itemId) => {
        // Buscamos el item en el carrito
        const index = cart.findIndex((i) => i.id === itemId);
    
        // Si el item no existe, no hacemos nada
        if (index === -1) {
          return;
        }
    
        // Eliminamos el item del carrito
        setCart((prevCart) => prevCart.filter((i) => i.id !== itemId));
      };
    
    const isInCart = (id) => {
        return cart.some((i) => i.id === id);
      };

    const getQuantityTotal = () => {
        const quantityTotal = cart.reduce((total, item) => total + item.quantity, 0);
        return quantityTotal;
      };
    
    const cleanCart = () => {
      setCart([])
    }
      
    
      return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, getQuantityTotal, cleanCart }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider