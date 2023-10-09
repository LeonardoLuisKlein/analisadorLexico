import { useState } from "react";
import styles from "./Adicionador.module.css";

function Adicionador({ onAddPalavras, palavra, setPalavra }) {
  const [erro, setErro] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!palavra || /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\s]/.test(palavra)) {
      setErro(true);
      return;
    }

    const novaPalavra = [palavra];

    onAddPalavras(novaPalavra);

    setPalavra("");
    setErro(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Adicione palavras para o banco do analisador</p>
        <input
          className={!erro ? styles.input : styles.inputError}
          type="text"
          placeholder="Digite uma palavra"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />
        {erro ? (
          <span className={styles.erro}>
            Apenas uma palavra, sem números ou caracteres especiais
          </span>
        ) : (
          <span></span>
        )}
      </div>
      <button className={styles.button}>Adicionar</button>
    </form>
  );
}

export default Adicionador;
