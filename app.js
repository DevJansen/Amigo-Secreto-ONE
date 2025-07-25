
let listaDeNomes = [];

function adicionarAmigo() {
  
  const inputNome = document.getElementById('amigo');
  const nomeNovo = inputNome.value.trim();

  if (nomeNovo!== '') {

    listaDeNomes.push(nomeNovo);
    inputNome.value = '';
    atualizarListaNaTela();

  } else {
    alert('Por favor, digite um nome antes de adicionar!');
  }

}

function atualizarListaNaTela() {
  const listaHtml = document.getElementById('listaAmigos');
  listaHtml.innerHTML = '';

  listaDeNomes.forEach(nome => {

  const listItem = document.createElement('li');
  listItem.textContent = nome;
  listaHtml.appendChild(listItem);

  });
}

function sortearAmigo(){
  if (listaDeNomes.length === 0) {
    alert('Adicione nomes à lista antes de sortear!');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
  const nomeSorteado = listaDeNomes[indiceSorteado];
  console.log(nomeSorteado);

  const resultado = document.getElementById('resultado');
  if (resultado) {
    resultado.textContent = `Nome sorteado é: ${nomeSorteado}`;
   }
}
 


