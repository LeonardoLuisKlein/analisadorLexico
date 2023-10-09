import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          href="https://github.com/LeonardoLuisKlein"
          className={styles.footerLink}
        >
          Leonardo Luis Klein
        </a>
      </p>
    </footer>
  );
}

export default Footer;
