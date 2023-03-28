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

export default BotaoConclui;