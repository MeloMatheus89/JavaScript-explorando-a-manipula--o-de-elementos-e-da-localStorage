// Encontrando o botão

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
// Para ficar mais fácil, vamos usar listaTarefas para não confundir com tarefas da part do textArea.
const listaTarefas = [];
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
  // Usando o localStorage
  //localStorage.setItem("tarefas", listaTarefas); <--> Neste momento o objeto estaria do tipo: [{descricao: 'texto digitado'}].toString() e isso retorna um '[object Object]'. Que claramente foge do que queremos. Visto que o local Storage só armazena strings.
  localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
});
