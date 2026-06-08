// Função para mostrar informações detalhadas ao clicar nos cards
function mostrarDetalhes(pilar) {
    const painel = document.getElementById('painel-detalhes');
    const titulo = document.getElementById('titulo-detalhe');
    const texto = document.getElementById('texto-detalhe');

    // Remove a classe 'escondido' para exibir o painel
    painel.classList.remove('escondido');

    // Define o texto com base no card clicado
    if (pilar === 'tecnologia') {
        titulo.innerText = "⚡ Agricultura de Precisão";
        texto.innerText = "Utilizando inteligência artificial, drones e GPS agrícola, os produtores conseguem aplicar a quantidade exata de água e nutrientes que a planta precisa, evitando desperdícios e protegendo o solo.";
    } else if (pilar === 'preservacao') {
        titulo.innerText = "🌳 Preservação Ambiental";
        texto.innerText = "Produtores sustentáveis protegem as fontes de água (matas ciliares) e mantêm áreas de mata nativa intactas. Isso ajuda a preservar a fauna local e a combater as mudanças climáticas.";
    } else if (pilar === 'energia') {
        titulo.innerText = "☀️ Energia Renovável no Campo";
        texto.innerText = "O uso de painéis solares em galpões e a transformação de resíduos orgânicos em biogás fazem com que as propriedades rurais gerem sua própria energia limpa, reduzindo a pegada de carbono.";
    }
}

// Função para o simulador de sustentabilidade
function calcularSustentabilidade() {
    const chkPlantio = document.getElementById('chk-plantio').checked;
    const chkAgua = document.getElementById('chk-agua').checked;
    const chkEnergia = document.getElementById('chk-energia').checked;
    
    let pontos = 0;

    if (chkPlantio) pontos += 33;
    if (chkAgua) pontos += 33;
    if (chkEnergia) pontos += 34; // Soma 34 para fechar 100%

    // Atualiza o texto na tela
    const elementoPontuacao = document.getElementById('pontuacao');
    elementoPontuacao.innerText = pontos + "%";

    // Muda a cor do texto dependendo do nível
    if (pontos === 100) {
        elementoPontuacao.style.color = "#2e8b57"; // Verde forte
    } else if (pontos > 0) {
        elementoPontuacao.style.color = "#ffa500"; // Laranja
    } else {
        elementoPontuacao.style.color = "#333";
    }
}