const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]'); //acessando o input
    const valor = input.value; //conteúdo do input

    const tarefa = document.querySelector('[data-task]'); //acessando o parágrafo do <li>

    const conteudo = `<p class="content">${valor}</p>`; //criando um novo parágrafo com conteúdo

    tarefa.innerHTML = conteudo; //adicionando o novo parágrafo criado no <li>

    input.value = " "; //limpa o input
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
