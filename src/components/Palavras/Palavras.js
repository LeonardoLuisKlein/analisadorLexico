import styles from "./Palavras.module.css";

function Palavras({ palavras, onDeletePalavra }) {
  return (
    <>
      {palavras.map((palavra, index) => (
        <li key={index} className={styles.card}>
          <span className={styles.cardText}>{palavra}</span>
          <button
            className={styles.deleteButton}
            onClick={() => onDeletePalavra(index)}
          >
            ❌
          </button>
        </li>
      ))}
    </>
  );
}

export default Palavras;
