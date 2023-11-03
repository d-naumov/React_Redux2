import { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Header.module.css';

const Header: FC = () => {
  console.log('Отрендрился хедер!');
  return (
    <div className={styles.navbar}>
      <NavLink to="/">mem</NavLink>
      <NavLink to="products">products</NavLink>
      <NavLink to="characters">characters</NavLink>
     
    </div>
  );
};

export default Header;
