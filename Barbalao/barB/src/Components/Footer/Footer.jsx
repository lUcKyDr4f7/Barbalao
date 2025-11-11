import styles from '../Css/styles.Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2025 Barbalao. Todos os direitos reservados.</p>
          <div className={styles.socialLinks}>
            <a >Facebook</a>
            <a >Instagram</a>
            <a >Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
};
