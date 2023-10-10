import { useState, useEffect } from "react";
import styles from "./Adicionador.module.css";

function Adicionador({
  onAddPalavras,
  palavra,
  setPalavra,
  palavras,
  setPalavras,
}) {
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("A");

    if (!palavra || /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\s]/.test(palavra)) {
      setErro(true);
      setErrorMessage(
        "Apenas uma palavra, sem números ou caracteres especiais"
      );
      return;
    }

    if (palavras.includes(palavra)) {
      setErro(true);
      setErrorMessage("Palavra duplicada");
      return;
    }

    onAddPalavras(palavra);

    setPalavra("");
    setErro(false);
  }

  useEffect(() => {
    console.log("Estado de palavras:", palavras);
  }, [palavras]);

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
        <span className={erro ? styles.erro : styles.erroSem}>
          {errorMessage}
        </span>
      </div>
      <button className={styles.button}>Adicionar</button>
    </form>
  );
}

export default Adicionador;
