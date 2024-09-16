import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  loading: false,
  error: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getProductSucess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSucess, getProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
