import { createSlice } from "@reduxjs/toolkit";

const addCart = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: [],
    subTotal: 0,
    shipment: 5,
    tax: 1,
    total: 0,
    error: "",
  },
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      let itemExist = state.cartItems.find((i) => i.id === item.id);
      if (itemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.qty += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    increment: (state, action) => {
      state.cartItems.forEach((i) => {
        let item = action.payload;
        if (i.id === item.id) i.qty += 1;
      });
    },
    decrement: (state, action) => {
      state.cartItems.forEach((i) => {
        let item = action.payload;
        if (i.id === item.id) {
          i.qty === 0 ? (i.qty = 0) : (i.qty -= 1);
        }
      });
    },
    deleteHandler: (state, action) => {
      console.log("delete");
      let item = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
      console.log("delete");
    },
    totalPrice: (state, action) => {
      state.subTotal = state.cartItems.reduce((accu, i) => {
        return (accu = accu + i.qty * i.price);
      }, 0);

      state.total = state.shipment + state.tax + state.subTotal;
    },
  },
});
export const { addToCart, increment, decrement, deleteHandler, totalPrice } =
  addCart.actions;

export default addCart.reducer;
