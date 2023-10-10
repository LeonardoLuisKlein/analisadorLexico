import styles from "./Verificacao.module.css";

function Verificacao({ verifica, setVerifica, onVerificaPalavra }) {
  const handleVerifica = (e) => {
    if (e.keyCode === 32) {
      onVerificaPalavra(verifica);
      setVerifica("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Digite o automato</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Espaço para terminar"
          value={verifica}
          onChange={(e) => {
            setVerifica(e.target.value);
            console.log(verifica);
          }}
          onKeyDown={handleVerifica}
        />
      </div>
      <div>
        <p>Palavras Testadas</p>
        <ul className={styles.lista}>
          <li>Teste</li>
          <li>Testando</li>
          <li>Testansky</li>
          <li>Testezin</li>
        </ul>
      </div>
    </div>
  );
}

export default Verificacao;
