import { useEffect, useState } from "react";
import "./App.css";
import Adicionador from "./components/Adicionador/Adicionador";
import ListaPalavras from "./components/ListaPalavras/ListaPalavras";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [palavra, setPalavra] = useState("");
  const [palavras, setPalavras] = useState([]);

  function handleAddPalavras(palavra) {
    setPalavras((palavras) => [...palavras, palavra]);
  }

  function handleDeletePalavra(index) {
    setPalavras((palavras) => palavras.filter((_, i) => i !== index));
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
          onAddPalavras={handleAddPalavras}
        />
        <ListaPalavras
          palavras={palavras}
          onDeletePalavra={handleDeletePalavra}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
