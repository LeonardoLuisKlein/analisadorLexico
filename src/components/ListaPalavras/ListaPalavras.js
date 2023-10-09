import Palavras from "../Palavras/Palavras";
import styles from "./ListaPalavras.module.css";

function ListaPalavras({ palavras, onDeletePalavra }) {
  return (
    <div className={styles.lista}>
      <ul>
        <Palavras palavras={palavras} onDeletePalavra={onDeletePalavra} />
      </ul>
    </div>
  );
}

export default ListaPalavras;
