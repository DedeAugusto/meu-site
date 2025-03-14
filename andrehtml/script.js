// Função para alterar o tamanho da fonte
function alterarFonte(acao) {
    const corpo = document.body;
    let fonteAtual = window.getComputedStyle(corpo).fontSize;

    // Converter a fonte para número
    fonteAtual = parseInt(fonteAtual);

    if (acao === 'aumentar') {
        corpo.style.fontSize = (fonteAtual + 2) + 'px'; // Aumenta a fonte
    } else if (acao === 'diminuir') {
        corpo.style.fontSize = (fonteAtual - 2) + 'px'; // Diminui a fonte
    }
}

// Função para alternar entre o modo claro e escuro
function alternarModo() {
    const corpo = document.body;
    corpo.classList.toggle('modo-escuro'); // Adiciona ou remove a classe 'modo-escuro'
}
