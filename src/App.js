import { useEffect, useState } from "react";
import "./App.css";
import Adicionador from "./components/Adicionador/Adicionador";
import ListaPalavras from "./components/ListaPalavras/ListaPalavras";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Verificacao from "./components/Verificacao/Verificacao";
import Tabela from "./components/Tabela/Tabela";

function App() {
  const [palavra, setPalavra] = useState("");
  const [palavras, setPalavras] = useState([]);
  const [verifica, setVerifica] = useState("");
  const [letras, setLetras] = useState([]);

  function handleAddPalavras(palavra) {
    if (!palavras.includes(palavra)) {
      setPalavras((palavras) => [...palavras, palavra]);
    }

    const letrasDaPalavra = palavra.split("");
    setLetras((letras) => [...letras, ...letrasDaPalavra]);
  }

  function handleDeletePalavra(index) {
    setPalavras((palavras) => palavras.filter((_, i) => i !== index));

    const novasLetras = [...letras];
    const letrasDaPalavra = palavras[index].split("");
    for (const letra of letrasDaPalavra) {
      const letraIndex = novasLetras.indexOf(letra);
      if (letraIndex !== -1) {
        novasLetras.splice(letraIndex, 1);
      }
    }
    setLetras(novasLetras);
  }

  function handleVerificaPalavra(input) {
    setVerifica(input);

    if (palavras.includes(input.trim())) {
      console.log("Palavra verificada: " + input);
    }
  }

  useEffect(() => {
    console.log(letras);
  }, [letras]);

  return (
    <div className="App">
      <Header />
      <div className="linhaPalavras">
        <Adicionador
          palavra={palavra}
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
          verifica={verifica}
          setVerifica={setVerifica}
          onVerificaPalavra={handleVerificaPalavra}
        />
        <Tabela palavras={palavras} letras={letras} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
