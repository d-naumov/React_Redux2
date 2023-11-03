import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products"
import Meme from "./features/memes/Memes"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  
)
