import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteProducts, loadProducts } from "./productAction"
// import cn from 'classnames'
import styles from "./Products.module.css"
import MyButton from "../../components/myButtom/MyButton"
import { Link } from "react-router-dom"

const products: FC = () => {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products,
  )
  const { value } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <div>
      <h1>Что сейчас в counter: {value}</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Ошибка:{error}</h1>}
      <ul className={styles.productList}>
        {products.map((el) => (
          <li className={styles.productCard} key={el.id}>
            <span className={styles.title}>{el.title}</span>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.image} alt="" />
            </div>
            <MyButton
              onClick={() => dispatch(deleteProducts(el.id))}
              text="delete"
            />
            <Link to={String(el.id)}>
              <MyButton text="To product" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default products
