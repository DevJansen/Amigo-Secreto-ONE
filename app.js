
let listaDeNomes = [];

function adicionarAmigo() {
  
  const inputNome = document.getElementById('amigo');
  const novoNome = inputNome.value.trim();

  if (novoNome !== '') {

    listaDeNomes.push(novoNome);

    inputNome.value = '';

    atualizarListaNaTela();
  } else {
    alert('Por favor, digite um nome antes de adicionar!');
  }
  
}


 


