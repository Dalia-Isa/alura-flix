import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './aluraMetal_b.svg';
import Botones from '../Botones/index';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Logo" className={styles.logo} />
    {/* <h1 className="text-lg font-bold"></h1> */}
    <nav>
      <Botones />
    </nav>
  </header>
);

export default Header;
