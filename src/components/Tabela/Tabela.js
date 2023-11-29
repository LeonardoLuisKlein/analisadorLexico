import React from "react";
import styles from "./Tabela.module.css";

function Tabela({ palavra, tabela }) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const alfabetoArray = Array.from(alfabeto);

  const dadosTabela = tabela.map((itemTabela) =>
    alfabetoArray.map((letra) => itemTabela[letra] || "")
  );
  let linhaAtual = 0;

  function palavraValida() {
    if (palavra.length === 1) {
      linhaAtual = 0;
      return dadosTabela[0][palavra.charCodeAt(0) - "a".charCodeAt(0)] !== "";
    }

    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra[i];
      const posicaoEstado = letra.charCodeAt(0) - "a".charCodeAt(0);

      if (dadosTabela[linhaAtual] && dadosTabela[linhaAtual][posicaoEstado] === "") {
        return;
      }

      if (i < palavra.length - 1) {
        linhaAtual = dadosTabela[linhaAtual][posicaoEstado];
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
          {dadosTabela.map((dadoLinha, i) => (
            <tr
              key={i}
              className={`${
                i === linhaAtual && palavra && !valido
                  ? styles.letraErrada
                  : styles.letraNula
              }`}
            >
              <th scope="row">{tabela[i].end === true ? `q${i}*` : `q${i}`}</th>
              {dadoLinha.map((dadoTabela, j) => (
                <td
                  key={j}
                  className={`${
                    i === linhaAtual &&
                    valido &&
                    palavra[palavra.length - 1] === alfabetoArray[j] &&
                    dadoTabela
                      ? styles.letraCerta
                      : styles.letraNula
                  }`}
                >
                  {dadoTabela ? `q${dadoTabela}` : "-"}
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
