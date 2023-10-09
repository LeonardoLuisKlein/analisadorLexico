function Palavras({
  palavra,
  palavras,
  setPalavra,
  setPalavras,
  onDeletePalavra,
}) {
  return (
    <>
      {palavras.map((palavra, index) => (
        <li key={index}>
          {palavra}
          <button onClick={() => onDeletePalavra(index)}>❌</button>
        </li>
      ))}
    </>
  );
}

export default Palavras;
