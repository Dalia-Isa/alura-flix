import styles from './Footer.module.css';
import logo from './logo_cha.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://github.com/Ale-pogo" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="Logo" className={styles.logo} />
    </a>
    <p>© 2025 CHA - Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
