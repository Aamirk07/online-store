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
    getProductRemove: (state) => {
      state.products = null;
      state.loading = false;
      state.error = false;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteProductSucess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSucess,
  getProductFailure,
  getProductRemove,
  deleteProductStart,
  deleteProductSucess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
