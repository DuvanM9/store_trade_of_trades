import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPagination } from '../../interface/pagination';

const initialState: IPagination = {
    page: 1,
    size: 10,
    filter: '',
    totalPages: 1,
}

export const paginatorSlice = createSlice({
    name: 'paginator',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.page += 1
        },
        previusStep: (state) => {
            state.page -= 1
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
        setPage: (state, pages: PayloadAction<number>) =>{
            state.page = pages.payload
        },
        resetPaginator: (state) => {
            state.page = 1
            state.size = 8
            state.filter = ''
            state.totalPages = 1
        },
        sendFilter: (state, filter) =>{
            state.filter = filter.payload
        }

    },
})


export const { nextStep, previusStep, setTotalPages, resetPaginator, setPage, sendFilter } = paginatorSlice.actions
export default paginatorSlice.reducer