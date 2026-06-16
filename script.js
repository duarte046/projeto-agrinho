// Banco de dados repleto de informações detalhadas sobre o tema
const informacoesAgro = {
    pilar1: {
        titulo: "Gestão Hídrica e Irrigação Inteligente",
        texto: "A agricultura moderna utiliza a <strong>irrigação por gotejamento subterrâneo</strong>, que direciona a água direto para as raízes, reduzindo a evaporação em até <strong>95%</strong>. Aliado a isso, sensores climáticos conectados via <strong>Internet das Coisas (IoT)</strong> calculam a umidade exata do solo em tempo real, garantindo que o sistema só seja ativado quando necessário, evitando o desperdício dos aquíferos."
    },
    pilar2: {
        titulo: "O Potencial das Pastagens Degradadas",
        texto: "Atualmente, o Brasil possui milhões de hectares de pastagens com algum grau de degradação. Transformar essas áreas em solo fértil evita o desmatamento de novas florestas. Utilizando a técnica de <strong>ILPF (Integração Lavoura-Pecuária-Floresta)</strong>, o produtor alterna grãos, gado e árvores na mesma área. Isso melhora a matéria orgânica do solo, otimiza o espaço e permite <strong>neutralizar a emissão de gases do efeito estufa</strong> através do crescimento das árvores."
    },
    pilar3: {
        titulo: "A Revolução dos Bioinsumos e Genética",
        texto: "A substituição de fertilizantes sintéticos por <strong>bioinsumos (bactérias e fungos benéficos)</strong> cresce a taxas aceleradas. Micro-organismos como o <i>Azospirillum</i> conseguem fixar o nitrogênio do ar diretamente na planta, eliminando a necessidade de adubos químicos poluentes. Além disso, a <strong>edição genética via CRISPR</strong> desenvolve sementes muito mais resistentes a secas prolongadas, garantindo safras cheias mesmo sob crises climáticas severas."
    }
};

function mostrarDetalhes(chave) {
    const painel = document.getElementById('painel-detalhes');
    const titulo = document.getElementById('detalhe-titulo');
    const texto = document.getElementById('detalhe-texto');

    // Alimenta os elementos com as informações detalhadas
    titulo.innerHTML = `<strong>${informacoesAgro[chave].titulo}</strong>`;
    texto.innerHTML = informacoesAgro[chave].texto;
    
    // Torna a seção visível removendo a classe de ocultação
    painel.classList.remove('escondido');
    
    // Roda a página de forma sutil até o conteúdo aberto
    painel.scrollIntoView({ behavior: 'smooth' });
}
