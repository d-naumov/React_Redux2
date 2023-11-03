import { createSlice } from "@reduxjs/toolkit"
import ProductState from "./types/ProductState"
import { deleteProducts, loadProducts } from "./productAction"

// создали начальное значение для стейта
const initial: ProductState = {
  products: [],
  error: null,
  isLoading: false,
}
// написали сам файл slice с разными сценариями для asyncThunk (нашего асинхронного запроса)
export const productSlice = createSlice({
  name: "products", // уникальное имя
  initialState: initial, // начальное значение
  reducers: {}, // логика для синхронных операций (здесь их пока нет)
  extraReducers: (builder) => {
 
    builder
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true
      })

      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      // случай если пришла ошибка
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
      // новый случай, в этот раз если нужно удалить элемент
      .addCase(deleteProducts.fulfilled, (state, action) => {
        //фильтруем элементы в стейте по условию если элемент равен возвращенной id - мы его не берем в новый массив
        state.products = state.products.filter(
          (el) => el.id !== action.payload.id,
        )
      })
  },
})
