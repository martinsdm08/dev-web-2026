const input = document.querySelector("#input-tarefa")
const button = document.querySelector("#btn-adicionar")
const taskList = document.querySelector("#lista-tarefas")

const CHAVE = "todo-aula15";

let tarefasTarefa = JSON.parse(localStorage.getItem(CHAVE)) || [];

function salvar() {
    localStorage.setItem(CHAVE, JSON.stringify(tarefasTarefa));
}

function adicionar() {
    const texto = input.value;
    if(!texto) return;
    
    const tarefaObj = {id : Date.now(), texto, concluida: false};
    tarefasTarefa.push(tarefaObj);
    salvar();
    renderizar(tarefaObj);

    input.value = "";
    input.focus();
}

function renderizar(tarefa) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = tarefa.id;
    li.innerHTML = `<span class="texto"></span>
    <button class="btn btn-sm btn-outline-success" data-acao="concluir">OK</button>
    <button class="btn btn-sm btn-outline-danger" data-acao="excluir">X</button>`;


li.querySelector(".texto").textContent = tarefa.texto;
}


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