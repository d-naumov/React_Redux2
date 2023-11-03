import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loadMemes } from "./memesAction"
import styles from "./Memes.module.css"

const Meme: FC = () => {
  const { memes, isLoading, error } = useAppSelector((state) => state.memes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadMemes())
  }, [])

  return (
    <div>
      <h1>Список мемов</h1>

      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Ошибка:{error}</h1>}
      <ul className={styles.memeList}>
        {memes &&
          memes?.map((el) => (
            <li className={styles.memeCard} key={el.id}>
              <div className={styles.imgContainer}>
                <img className={styles.image} src={el.url} alt="" />
              </div>
              {el.name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Meme
