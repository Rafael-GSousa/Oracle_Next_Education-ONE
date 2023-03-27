(() => {/*todas as funções estão dentro de uma função anônima e não mais como global, isso impede acesso a 
    elas pelo console do browser. Ou seja, o JavaScript foi encapsulado*/

    const criarTarefa = (evento) => { //função de adicionar um elemento na lista ao clicar no botão do input

        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]'); //acessando o input
        const valor = input.value; //conteúdo do input

        const tarefa = document.createElement('li'); //criando a tag <li>
        tarefa.classList.add('task'); //adicionando uma classe na tag <li>
        const conteudo = `<p class="content">${valor}</p>`; //criando um novo parágrafo com conteúdo para adicionar na <li>

        tarefa.innerHTML = conteudo; //adicionando o parágrafo criado na tag <li> criada

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa); //adicionando o elemento filho (tag <li>) com o parágrafo dentro do elemento pai (tag <ul>) 
        input.value = " "; //limpa o input
    }

    const novaTarefa = document.querySelector('[data-form-button]'); //acessando o botão do input

    novaTarefa.addEventListener('click', criarTarefa); //chama o evento criar tarefa ao clicar no botão do input


    const BotaoConclui = () => {//criado como componente, por isso começa com maíuscula
        const botaoConclui = document.createElement('button'); //cria o botão

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = "concluir";
        botaoConclui.addEventListener('click', concluirTarefa); //evento de click do botão


        return botaoConclui;
    }


    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target;

        const tarefaCompleta = botaoConclui.parentElement;

        tarefaCompleta.classList.toggle('done');
    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button');

        botaoDeleta.innerText = 'deletar';
        botaoDeleta.addEventListener('click', deletarTarefa)
        return botaoDeleta;
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = evento.target;
        
        const tarefaCompleta = botaoDeleta.parentElement;

        tarefaCompleta.remove();

        return botaoDeleta;
    }
})()