
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
 


