import styles from "./Tabela.module.css";

function Tabela({ palavras }) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  return (
    <table className={styles.tabelaPalavras}>
      <thead>
        <tr>
          <th>δ</th>
          {alfabeto.split("").map((letra) => (
            <th key={letra}>{letra}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {palavras.map((palavra, index) => (
          <tr key={index}>
            <td>{`q${index}`}</td>{" "}
            {alfabeto.split("").map((letraAlfabeto) => (
              <td
                key={letraAlfabeto}
                data-presente={palavra.includes(letraAlfabeto)}
              >
                {palavra.includes(letraAlfabeto) ? "X" : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
