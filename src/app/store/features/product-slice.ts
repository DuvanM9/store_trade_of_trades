import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPagination } from '../../interface/pagination';
import { IProduct } from '../../interface/product';

interface IProductSlice {
 filter: string,
 list: IProduct[]
}

const initialState: IProductSlice  = {
    filter: "",
    list: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        sendFilter: (state, filter) =>{
            state.filter = filter.payload
        }

    },
})


export const { sendFilter } = productSlice.actions
export default productSlice.reducer