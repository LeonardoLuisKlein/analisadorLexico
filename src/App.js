import { useEffect, useState } from "react";
import "./App.css";
import Adicionador from "./components/Adicionador/Adicionador";
import ListaPalavras from "./components/ListaPalavras/ListaPalavras";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Verificacao from "./components/Verificacao/Verificacao";

function App() {
  const [palavra, setPalavra] = useState("");
  const [palavras, setPalavras] = useState([]);
  const [verifica, setVerifica] = useState("");

  function handleAddPalavras(palavra) {
    console.log(palavras + "1");
    if (!palavras.includes(palavra)) {
      setPalavras((palavras) => [...palavras, palavra]);
      console.log(palavras + "2");
    }
    console.log(palavras + "3");
  }

  function handleDeletePalavra(index) {
    setPalavras((palavras) => palavras.filter((_, i) => i !== index));
  }

  function handleVerificaPalavra(verifica) {
    console.log("Verificado: " + verifica);
  }

  useEffect(() => {
    console.log(palavras);
  }, [palavras]);

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
      <Verificacao
        verifica={verifica}
        setVerifica={setVerifica}
        onVerificaPalavra={handleVerificaPalavra}
      />
      <Footer />
    </div>
  );
}

export default App;
