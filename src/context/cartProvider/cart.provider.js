import React, { createContext, useState, useEffect } from 'react'

//  dP""b8    db    88""Yb 888888 888888 88   88 88b 88  dP""b8 888888 88  dP"Yb  88b 88 .dP"Y8
// dP   `"   dPYb   88__dP   88   88__   88   88 88Yb88 dP   `"   88   88 dP   Yb 88Yb88 `Ybo."
// Yb       dP__Yb  88"Yb    88   88""   Y8   8P 88 Y88 Yb        88   88 Yb   dP 88 Y88 o.`Y8b
//  YboodP dP""""Yb 88  Yb   88   88     `YbodP' 88  Y8  YboodP   88   88  YbodP  88  Y8 8bodP'

//addItemToCart mit NAME, NOTE sonst mit _ID wenn DB_Connect
const addItemToCart = (cart, item) => {
  const existingCartItem = cart.find(({ item: cartitem }) => cartitem.name === item.name)

  if (existingCartItem) {
    return cart.map((cartitem) =>
      cartitem.item.name === item.name
        ? { ...cartitem, quantity: cartitem.quantity * 1 + 1 }
        : cartitem
    )
  }

  return [...cart, { item, quantity: 1 }]
}
const removeItemFromCart = (cart, item) => {
  const existingCartItem = cart.find(({ item: cartitem }) => cartitem.name === item.name)

  if (!existingCartItem) return
  if (existingCartItem.quantity * 1 > 1) {
    return cart.map((cartitem) =>
      cartitem.item.name === item.name
        ? { ...cartitem, quantity: cartitem.quantity * 1 - 1 }
        : cartitem
    )
  }
  if (existingCartItem.quantity * 1 === 1 && cart.length === 1) {
    console.log('REMOVING LAST ITEM')
    return false
  }
  if (existingCartItem.quantity * 1 === 1) {
    return cart.filter((cartitem) => cartitem.item.name !== item.name)
  }

  return cart
}

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id)

// .#####...#####....####...##..##..######..#####...######..#####..
// .##..##..##..##..##..##..##..##....##....##..##..##......##..##.
// .#####...#####...##..##..##..##....##....##..##..####....#####..
// .##......##..##..##..##...####.....##....##..##..##......##..##.
// .##......##..##...####.....##....######..#####...######..##..##.

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  cartCount: 0,
  total: 0,
  clearItemFromCart: () => {},
})

const CartProvider = ({ children }) => {
  //State
  const [hidden, setHidden] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [total, setTotal] = useState(0)

  //Functions that change state
  const toggleHidden = () => setHidden(!hidden)
  const addItem = (item) => {
    setCartItems(addItemToCart(cartItems, item))
    console.log(
      `%c ## Added an Item to the Cart ##`,
      'background: purple; color: white; display: block;'
    )
  }
  const removeItem = (item) => {
    setCartItems(removeItemFromCart(cartItems, item))
    console.log(
      `%c ## Added an Item to the Cart ##`,
      'background: purple; color: white; display: block;'
    )
  }
  const clearItemFromCart = (item) => {
    if (cartItems.length === 1) {
      console.log('LAST ONE DELETING')
      setCartItems([])
    }
    setCartItems(cartItems.filter((cartitem) => cartitem.item.name !== item.name))
  }
  //useEffect updates on the Context
  useEffect(() => {
    setCartCount(
      cartItems.reduce((count, currentAmount) => {
        return count + currentAmount.quantity * 1
      }, 0)
    )
    setTotal(
      cartItems.reduce((total, current) => {
        return total + current.item.price * current.quantity
      }, 0)
    )
  }, [cartItems])

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } else if (localStorage.getItem('cartItems') && !cartItems.length) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    }
  })

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        cartCount,
        total,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
