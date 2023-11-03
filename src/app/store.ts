import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { productSlice } from '../features/products/productSlice'
import { memesSlice } from "../features/memes/memesSlice"
import { characterSlice } from "../features/characters/characterSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //по ключу, который сами выбираем кладем данные в store
    //импортируем productSlice.reducer из productSlice
    products: productSlice.reducer,
     memes: memesSlice.reducer,
     characters:characterSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
