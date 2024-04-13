import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPagination } from "../../interface/pagination";
import { IProduct } from "../../interface/product";

interface IProductSlice {
  filter: string;
  list: IProduct[];
  productDetail: IProduct;
}

const initialState: IProductSlice = {
  filter: "",
  list: [],
  productDetail: {
    title: "default",
    description: "default",
    price: 0,
    shipping_price: 0,
    img: "default",
    ID: "default",
    tags: ["default"],
    discount: 0,
    apply_discount: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sendFilter: (state, filter) => {
      state.filter = filter.payload;
    },
    setProductDetail: (state, payload: PayloadAction<IProduct>) => {
      state.productDetail = payload.payload;
    },
  },
});

export const { sendFilter, setProductDetail } = productSlice.actions;
export default productSlice.reducer;
