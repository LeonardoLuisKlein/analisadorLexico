import { useRef, useState } from "react";
import styles from "./Verificacao.module.css";

function Verificacao({ verifica, setVerifica, onVerificaPalavra }) {
  const [palavraVerificada, setPalavraVerificada] = useState([]);
  const [verificador, setVerificador] = useState("");
  const inputRef = useRef(null);
  const handleVerifica = (e) => {
    if (e.keyCode === 32) {
      const valido = onVerificaPalavra(verifica);
      if (verificador.trim() !== "") {
        setPalavraVerificada((prevPalavrasVerificadas) => [
          ...prevPalavrasVerificadas,
          { palavra: verificador, valido },
        ]);
      }
      setVerifica("");
      if (inputRef.current && verificador) {
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
            setVerificador(e.target.value);
            setVerifica(e.target.value);
          }}
          onKeyDown={handleVerifica}
        />
      </div>
      <div>
        <p>Palavras Testadas</p>
        <ul className={styles.lista}>
          {palavraVerificada.map((item, index) => (
            <li
              key={index}
              className={
                item.valido ? styles.palavraValida : styles.palavraInvalida
              }
            >
              {item.palavra} - {item.valido ? "Válida" : "Inválida"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Verificacao;
