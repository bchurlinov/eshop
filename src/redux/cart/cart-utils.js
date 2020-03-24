export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => {
            return item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        })
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
}

export const removeItemFromCart = (cartItems, item) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id) ? true : false;
    console.log(item);

    if (existingCartItem) {
        if (item.quantity !== 0) {
            return cartItems.map(cartItem => {
                return cartItem.id === item.id ? { ...item, quantity: cartItem.quantity - 1 } : cartItem
            });
        } else {
            return cartItems.filter(cartItem => cartItem.id !== item.id)
        }
    }
}