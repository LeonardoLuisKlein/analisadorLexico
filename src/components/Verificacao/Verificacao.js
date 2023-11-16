import { useRef, useState } from "react";
import styles from "./Verificacao.module.css";

function Verificacao({ verifica, setVerifica, onVerificaPalavra }) {
  const [palavraVerificada, setPalavraVerificada] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const handleVerifica = (e) => {
    if (e.keyCode === 32) {
      const isValid = onVerificaPalavra(verifica);

      if (currentInput.trim() !== "") {
        setPalavraVerificada((prevPalavrasVerificadas) => [
          ...prevPalavrasVerificadas,
          { palavra: currentInput, isValid },
        ]);
        inputRef.current.blur();
      }

      if (inputRef.current && currentInput) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Digite o automato</p>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Espaço para terminar"
          value={verifica}
          onChange={(e) => {
            setCurrentInput(e.target.value);
            setVerifica(e.target.value);
          }}
          onKeyDown={handleVerifica}
        />
      </div>
      <div>
        <p>Palavras Testadas</p>
        <ul className={styles.lista}>
          {palavraVerificada.map((item, index) => (
            <li key={index}>
              {item.palavra} - {item.isValid ? "Válida" : "Inválida"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Verificacao;
