import { useState, useEffect } from "react";
import styles from "./Adicionador.module.css";

function Adicionador({ onAddPalavras, setPalavra, palavras }) {
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [palavraInput, setPalavraInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("A");
    palavraInput.toLowerCase();
    if (
      !palavraInput ||
      /[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/\s]/.test(palavraInput) ||
      /[A-Z]/.test(palavraInput)
    ) {
      setErro(true);
      setErrorMessage(
        "Apenas uma palavra, letra minuscula, sem números ou caracteres especiais"
      );
      return;
    }

    if (palavras.includes(palavraInput)) {
      setErro(true);
      setErrorMessage("Palavra duplicada");
      return;
    }

    onAddPalavras(palavraInput);

    setPalavra("");
    setPalavraInput("");
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
          value={palavraInput}
          onChange={(e) => setPalavraInput(e.target.value)}
        />
        <span className={erro ? styles.erro : styles.erroSem}>
          {errorMessage}
        </span>
      </div>
      <button className={styles.button} type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default Adicionador;
