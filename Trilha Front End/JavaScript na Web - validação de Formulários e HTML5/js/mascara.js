const cpf = document.getElementById('[data-tipo="cpf"]')

cpf.addEventListener('keypress', () => {
    let cpfTamanho = cpf.value.length

    if (cpfTamanho === 3 || cpfTamanho === 7) {
        cpf.value += '.'        
    } else if (cpfTamanho === 11) {
        cpf.value += '-'
    }
})