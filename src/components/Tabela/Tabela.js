import styles from "./Tabela.module.css";

function Tabela({ letras }) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  return (
    <table className={styles.tabelaPalavras}>
      <thead>
        <tr>
          <th className={styles.labelaColuna}>δ</th>
          {alfabeto.split("").map((letra) => (
            <th key={letra} className={styles.labelaColuna}>
              {letra}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {letras.map((letra, index) => (
          <tr key={index}>
            <td>{`q${index}`}</td>{" "}
            {alfabeto.split("").map((letraAlfabeto) => (
              <td
                key={letraAlfabeto}
                className={
                  letra.includes(letraAlfabeto)
                    ? styles["letra-correspondente"]
                    : styles["letra-nao-correspondente"]
                }
              >
                {letra.includes(letraAlfabeto) ? `q${index + 1}` : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
