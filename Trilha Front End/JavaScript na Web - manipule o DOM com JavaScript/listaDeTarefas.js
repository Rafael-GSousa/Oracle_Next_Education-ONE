const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]'); //acessando o input
    const valor = input.value; //conteúdo do input

    const tarefa = document.createElement('li'); //criando a tag <li>
    tarefa.classList.add('task'); //adicionando uma classe na tag <li>
    const conteudo = `<p class="content">${valor}</p>`; //criando um novo parágrafo com conteúdo para adicionar na <li>

    tarefa.innerHTML = conteudo; //adicionando o parágrafo criado na tag <li> criada

    lista.appendChild(tarefa); //adicionando o elemento filho (tag <li>) com o parágrafo dentro do elemento pai (tag <ul>) 
    input.value = " "; //limpa o input
}

const novaTarefa = document.querySelector('[data-form-button]'); //acessando o botão do input

novaTarefa.addEventListener('click', criarTarefa); //chama o evento criar tarefa ao clicar no botão do input
