const input = document.querySelector("#input-tarefa")
const button = document.querySelector("#btn-adicionar")
const taskList = document.querySelector("#lista-tarefas")

<<<<<<< HEAD
const CHAVE = "todo-aula15";

let tarefasTarefa = JSON.parse(localStorage.getItem(CHAVE)) || [];

function salvar() {
    localStorage.setItem(CHAVE, JSON.stringify(tarefasTarefa));
}
=======
let tarefas = [];
>>>>>>> 261734fae61aef26499d49532f49c736ae09a707

function adicionar() {
    const texto = input.value;
    if(!texto) return;
    
    const tarefaObj = {id : Date.now(), texto, concluida: false};
<<<<<<< HEAD
    tarefasTarefa.push(tarefaObj);
    salvar();
    renderizar(tarefaObj);

    input.value = "";
    input.focus();
=======
    listaTarefas.push(tarefaObj);
    renderizar(tarefaObj);
>>>>>>> 261734fae61aef26499d49532f49c736ae09a707
}

function renderizar(tarefa) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = tarefa.id;
    li.innerHTML = `<span class="texto"></span>
    <button class="btn btn-sm btn-outline-success" data-acao="concluir">OK</button>
    <button class="btn btn-sm btn-outline-danger" data-acao="excluir">X</button>`;

<<<<<<< HEAD

=======
>>>>>>> 261734fae61aef26499d49532f49c736ae09a707
li.querySelector(".texto").textContent = tarefa.texto;
}


<<<<<<< HEAD
btn.addEventListener("click", adicionar);

lista.addEventListener("click", (e)=> {
    const btnClicado = e.target.closest("button");
    if(!btnClicado) return;
    const li = btnClicado.closest("todo-item");
    const id = Number(li.dataset.id);

    if(btnClicado.dataset.acao === "concluir") {
        const tarefa = tarefasTarefa.find((tarefa) => tarefa.id === id);
        tarefa.concluida = !tarefa.concluida;
        salvar();
        li.classList.toggle("concluida", tarefa.concluida);
    }

    if(btnClicado.dataset.acao === "excluir") {
        tarefasTarefa = tarefasTarefa.filter((t) => t.id !== id);
        salvar();
        li.remove();
    }
});

tarefasTarefa.forEach(renderizar);
=======
btn.addEventListener("click", adicionar);
>>>>>>> 261734fae61aef26499d49532f49c736ae09a707
