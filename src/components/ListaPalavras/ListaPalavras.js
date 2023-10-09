import Palavras from "../Palavras/Palavras";
import styles from "./ListaPalavras.module.css";

function ListaPalavras({ palavras, onDeletePalavra }) {
  if (palavras.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.listaTitle}>Palavras adicionadas</p>
        <ul className={styles.lista}>
          <p className={styles.descricao}>
            Adicione palavras para o analisador léxico
          </p>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.listaTitle}>Palavras adicionadas</p>
      <ul className={styles.lista}>
        <Palavras palavras={palavras} onDeletePalavra={onDeletePalavra} />
      </ul>
    </div>
  );
}

export default ListaPalavras;
