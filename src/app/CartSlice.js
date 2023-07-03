import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    add(state, action) {
      const productId = action.payload;
      try {
        const existingProduct = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color &&
            product.category === productId.category
        );
        if (existingProduct) {
          const updatedProduct = {
            ...existingProduct,
            amount: existingProduct.amount + 1,
            totalPrice: existingProduct.totalPrice + parseInt(productId.price),
          };
          state.cart = state.cart.map((product) =>
            product.id === existingProduct.id &&
            product.size === existingProduct.size &&
            product.color === existingProduct.color &&
            product.category === existingProduct.category
              ? updatedProduct
              : product
          );
          state.totalAmount++;
          state.totalPrice += parseInt(productId.price);
          alert("Cart updated");
        } else {
          const newProduct = {
            id: productId.id,
            img: productId.cloth,
            price: productId.price,
            amount: productId.amount,
            totalPrice: parseInt(productId.price),
            category: productId.category,
            name: productId.product_head,
            color: productId.color || "",
            size: productId.size,
          };
          state.cart.push(newProduct);
          state.totalAmount++;
          state.totalPrice += parseInt(productId.price);
          alert("Item added to the cart successfully");
        }
      } catch (error) {
        return error;
      }
    },
    remove(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.cart[itemId];
      if (itemToRemove) {
        if (itemToRemove.amount > 1) {
          // Decrease the quantity of the existing item
          const updatedItem = {
            ...itemToRemove,
            amount: itemToRemove.amount - 1,
            // totalPrice: itemToRemove.totalPrice - parseInt(itemToRemove.price),
          };
          state.cart[itemId] = updatedItem;
          state.totalAmount--;
          state.totalPrice -= parseInt(itemToRemove.price);
        } else {
          // Remove the item from the cart if the quantity is 1
          const updatedCart = state.cart.filter((item, index) => index !== itemId);
          state.cart = updatedCart;
          state.totalAmount -= itemToRemove.amount;
          state.totalPrice -= itemToRemove.totalPrice;
        }
        alert("Item removed from the cart");
      }
    },
  },
});
export const { add, remove } = CartSlice.actions;
export const CartList = (state) => state.cart.cart;
export default CartSlice.reducer;
