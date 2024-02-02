const { configureStore, createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      let newCart = state;
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
      }
      state = newCart;
    },
  },
});

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addToFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourite: (state, action) => {
      const indexToRemove = state.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favourite: favouriteSlice.reducer,
  },
});

export const cartTotal = (state) =>
  state.cart.reduce((sum, item) => sum + item.price, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default Store;
