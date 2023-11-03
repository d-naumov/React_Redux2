import "./App.css"
import { Route, Routes } from "react-router-dom"
import Products from "./features/products/Products"
import Meme from "./features/memes/Memes"
import Layout from "./layouts/Layouts"
import ProductItem from "./components/productItem/ProductItem"
import Characters from "./features/characters/Characters"
import CharacterInfo from "./characterInfo/CharacterInfo"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/React_Redux" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductItem />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterInfo />} />
          <Route index element={<Meme />} />
          <Route path="*" element={<p>Ошибка</p>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
