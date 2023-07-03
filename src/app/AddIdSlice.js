import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [ ],
};

const AddIdSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFab(state, action) {
      const productOne = action.payload;
      try {
        const exist = state.favorite.find(
          (product) => product.id === productOne.id && product.category === productOne.category
        );
        if (exist) {
          alert("Already in your Favorite");
        } else {
          state.favorite.push({
            id: productOne.id,
            cloth:productOne.cloth,
            price: productOne.price,
            amount: 1,
            category:productOne.category,
            totalPrice: productOne.price,
            product_head: productOne.product_head,
            variation: productOne?.variation||"",
            size: productOne.size,});
        }
        alert("Wishlist Added Successfully")
      } catch (error) {
        return error;
      }
    },
    removeFab(state, action) {
      const itemId = action.payload;
      const itemIndex = state.favorite.findIndex((product) => product.id === itemId);
      if (itemIndex !== -1) {
        state.favorite.splice(itemIndex, 1);
        alert('Item removed from favorites');
      }
    }
    
    
  },
});

export const {addFab,removeFab} = AddIdSlice.actions;
export const Favorite = (state) => state.favorite.favorite

const AddReducer=AddIdSlice.reducer;
export default AddReducer
