import { useEffect, useState } from "react";
import "./App.css";
import Adicionador from "./components/Adicionador/Adicionador";
import ListaPalavras from "./components/ListaPalavras/ListaPalavras";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Verificacao from "./components/Verificacao/Verificacao";
import Tabela from "./components/Tabela/Tabela";
import { criaTabela } from "./scripts/criaTabela";

function App() {
  const [palavra, setPalavra] = useState("");
  const [palavras, setPalavras] = useState([]);
  const [verifica, setVerifica] = useState("");
  let tabela = criaTabela(palavras);

  function handleAddPalavras(palavra) {
    if (!palavras.includes(palavra)) {
      setPalavras((palavras) => [...palavras, palavra]);
    }
  }

  function handleDeletePalavra(index) {
    setPalavras((palavras) => palavras.filter((_, i) => i !== index));
  }

  function handleVerificaPalavra(input) {
    setVerifica(input);
    const palavraLista = palavras.includes(input.trim());
    console.log("Palavra verificada: " + input);
    return palavraLista;
  }

  useEffect(() => {
    console.log(palavras);
  }, [palavras]);

  return (
    <div className="App">
      <Header />
      <div className="linhaPalavras">
        <Adicionador
          palavras={palavras}
          setPalavra={setPalavra}
          setPalavras={setPalavras}
          onAddPalavras={handleAddPalavras}
        />
        <ListaPalavras
          palavras={palavras}
          onDeletePalavra={handleDeletePalavra}
        />
      </div>
      <div className="linhaPalavras">
        <Verificacao
          palavra={palavra}
          verifica={verifica}
          setPalavras={setPalavras}
          setVerifica={setVerifica}
          onVerificaPalavra={handleVerificaPalavra}
        />
        <Tabela palavra={verifica} tabela={tabela} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
