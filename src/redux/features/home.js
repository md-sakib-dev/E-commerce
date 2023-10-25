import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allProducts = createAsyncThunk(
  "/allProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const allProduct = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    defaul: [],
    filerProduct: [],
    pagePerPost:9,
    currentPage:1,
    numOfPage:0,
    error: "",
  },
  reducers: {
    priceListOrder: (state, action) => {
      if (action.payload === "High To Low Price") {
        state.products = state.products.sort((a, b) => b.price - a.price);
      } else if (action.payload === "Low To High Price") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products = state.defaul;
      }
    },
    categoryOrder: (state, action) => {
      const item = action.payload;

      if (item === "Default") {
        state.products = state.filerProduct;
      } else {
        state.products = state.filerProduct.filter((i) => {
          console.log(i.category);
          return i.category === item;
        });
      }
    },
    PageSetUp:(state,action)=>{
      const pageNumber =action.payload;
      state.currentPage =pageNumber
     

    }
  },
  extraReducers: (builder) => {
    builder.addCase(allProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.defaul = action.payload;
      state.filerProduct = action.payload;
      state.error = "";
    });
    builder.addCase(allProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export const { priceListOrder, categoryOrder,PageSetUp} = allProduct.actions;

export default allProduct.reducer;
