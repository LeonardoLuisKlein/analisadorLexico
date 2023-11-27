export function criaTabela(tokens) {
  let estados = [[]];
  let passos = 0;

  for (let i = 0; i < tokens.length; i++) {
    let currentpassos = 0;
    let palavra = tokens[i];

    for (let j = 0; j < palavra.length; j++) {
      let letra = palavra[j];

      if (typeof estados[currentpassos][letra] === "undefined") {
        let nextpassos = passos + 1;

        estados[currentpassos][letra] = nextpassos;
        estados[nextpassos] = [];

        passos = currentpassos = nextpassos;
      } else {
        currentpassos = estados[currentpassos][letra];
      }

      if (j === palavra.length - 1) {
        estados[currentpassos]["end"] = true;
      } else {
        estados[currentpassos]["end"] = false;
      }
    }
  }
  return estados;
}
