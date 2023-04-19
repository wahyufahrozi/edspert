import { createSlice } from "@reduxjs/toolkit";
import * as productAction from "./action";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      createdAt: "",
      id: "",
      title: "",
      description: "",
      price: "",
    },
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAction.getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getProducts.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action);

        state.entities = action.payload;
      })
      .addCase(productAction.getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      })
      .addCase(productAction.getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getProduct.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action);

        state.entity = action.payload;
      })
      .addCase(productAction.getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      });
  },
});

export default productSlice.reducer;
