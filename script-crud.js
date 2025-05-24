// Encontrando o botão

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
// Para ficar mais fácil, vamos usar listaTarefas para não confundir com tarefas da part do textArea.
const listaTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
const ulTarefas = document.querySelector(".app__section-task-list");

function criarElementoTarefa(tarefa) {
  //devolver um html que represente essa tarefa;
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>    
  `;
  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;
  paragrafo.classList.add("app__section-task-list-item-description");

  const botao = document.createElement("button");
  const imagemDoBotao = document.createElement("img");
  imagemDoBotao.setAttribute("src", "/imagens/edit.png");
  botao.classList.add("app_button-edit");
  botao.onclick = () => {
    const novaDescricao = prompt("Qual o novo nome da tarefa?");
    paragrafo.textContent = novaDescricao;
    // Até esse ponto a gente atualiza no DOM mas não atualiza no localStorage. Precisamos corrigir isso.
  };

  botao.append(imagemDoBotao);
  li.append(svg);
  li.append(paragrafo);
  li.append(botao);

  return li;
}
btnAdicionarTarefa.addEventListener("click", () => {
  // Adicionar os elementos da tarefa
  formAdicionarTarefa.classList.toggle("hidden");
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textArea.value,
  };
  listaTarefas.push(tarefa);
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);

  // Usando o localStorage
  //localStorage.setItem("tarefas", listaTarefas); <--> Neste momento o objeto estaria do tipo: [{descricao: 'texto digitado'}].toString() e isso retorna um '[object Object]'. Que claramente foge do que queremos. Visto que o local Storage só armazena strings.
  localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
  textArea.value = "";
  formAdicionarTarefa.classList.add("hidden");
});

listaTarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});

// Manter no final do arquivo o texto abaixo

/*
Toda a função criarElementoTarefa foi feita usando o arquivo HTML "elemento li.html" de referência. Ficar atento nisso durante as revisões. Ele não foi tirado da flor de couro do Hermanoteu.

*/
