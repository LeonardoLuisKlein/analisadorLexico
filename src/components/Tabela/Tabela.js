import React from "react";
import styles from "./Tabela.module.css";

function Tabela({ palavra, tabela }) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const alfabetoArray = Array.from(alfabeto);

  const dadosTabela = tabela.map((itemTabela) =>
    alfabetoArray.map((letra) => itemTabela[letra] || "")
  );
  let currentRow = 0;

  function palavraValida() {
    if (palavra.length === 1) {
      currentRow = 0;
      return dadosTabela[0][palavra.charCodeAt(0) - "a".charCodeAt(0)] !== "";
    }

    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra[i];
      const number = letra.charCodeAt(0) - "a".charCodeAt(0);

      if (dadosTabela[currentRow] && dadosTabela[currentRow][number] === "") {
        return false;
      }

      if (i < palavra.length - 1) {
        currentRow = dadosTabela[currentRow][number];
      }
    }

    return true;
  }

  var valido = palavraValida();

  return (
    <div className={styles.containerTabela}>
      <table className={styles.tabelaPalavras}>
        <thead>
          <tr>
            <th className={styles.labelaColuna}>δ</th>
            {alfabetoArray.map((letra) => (
              <th key={letra} className={styles.labelaColuna}>
                {letra}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dadosTabela.map((rowData, i) => (
            <tr
              key={i}
              className={`${styles.cell} ${
                i === currentRow && palavra && !valido
                  ? styles.letraErrada
                  : styles.letraNula
              }`}
            >
              <th scope="row">{tabela[i].end === true ? `q${i}*` : `q${i}`}</th>
              {rowData.map((cellData, j) => (
                <td
                  key={j}
                  className={`${styles.cell} ${
                    i === currentRow &&
                    valido &&
                    palavra[palavra.length - 1] === alfabetoArray[j] &&
                    cellData
                      ? styles.letraCerta
                      : styles.letraNula
                  }`}
                >
                  {cellData ? `q${cellData}` : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
