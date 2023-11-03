import { FC } from 'react';
import { Outlet } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Layout.module.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const Layout: FC = () => (
  <div className={styles.container}>

    <Header />
    {/* на место outlet (специальный компонент импортируемый из react-router-dom) будут подставляться компоненты из App.tsx, прописанные в Route */}
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
