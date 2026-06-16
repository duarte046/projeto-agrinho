// Banco de dados complexo contendo muita informação sobre o tema do Agro Sustentável
const dadosSustentaveis = {
    dadosHidricos: {
        titulo: "Manejo Inteligente de Recursos Hídricos",
        texto: "A agricultura irrigada responde por uma grande fatia do consumo de água doce. Para equilibrar esse cenário, sistemas modernos utilizam o <strong>gotejamento subterrâneo</strong>, que aplica a água diretamente na raiz da planta, reduzindo as perdas por evaporação em até <strong>95%</strong>. Além disso, softwares integrados cruzam dados de previsão do tempo com sensores de solo para <strong>barrar irrigações desnecessárias</strong> em dias chuvosos."
    },
    dadosSolo: {
        titulo: "Recuperação de Pastagens e Plantio Direto",
        texto: "O segredo para não desmatar é otimizar o solo que já é usado. O sistema de <strong>Plantio Direto</strong> mantém os restos vegetais da colheita anterior sobre a terra, criando uma barreira protetora que <strong>evita a erosão em até 90%</strong> e mantém a umidade natural. Juntamente com a rotação de culturas, essa técnica armazena toneladas de <strong>carbono orgânico diretamente no solo</strong>, atuando contra o efeito estufa."
    },
    dadosBio: {
        titulo: "A Revolução Silenciosa dos Bioinsumos",
        texto: "Os defensivos químicos estão cedendo espaço para a biologia. O uso de <strong>bioinsumos</strong> envolve a aplicação de fungos, bactérias e insetos benéficos para combater pragas e fertilizar a lavoura de forma natural. Microrganismos como o <i>Bradyrhizobium</i> conseguem capturar o <strong>nitrogênio do próprio ar</strong> e transferi-lo para as plantas, diminuindo drasticamente a dependência de adubos sintéticos derivados do petróleo."
    },
    dadosTec: {
        titulo: "Agricultura de Precisão e Monitoramento por IA",
        texto: "Hardwares acoplados a tratores e drones sobrevoam as lavouras mapeando falhas nutricionais através de câmeras multiespectrais. A inteligência artificial gera mapas de aplicação com <strong>taxa variável</strong>. Isso garante que fertilizantes ou defensivos sejam aplicados com <strong>precisão milimétrica apenas nas plantas doentes</strong>, reduzindo o uso de químicos em até <strong>40%</strong> nas propriedades rurais."
    }
};

function mostrarDetalhes(pilar) {
    const painel = document.getElementById('painel-detalhes');
    const titulo = document.getElementById('detalhe-titulo');
    const texto = document.getElementById('detalhe-texto');

    // Substitui o conteúdo com base no card selecionado
    titulo.innerHTML = `<strong>${dadosSustentaveis[pilar].titulo}</strong>`;
    texto.innerHTML = dadosSustentaveis[pilar].texto;
    
    // Mostra a seção removendo a classe de ocultação do CSS
    painel.classList.remove('escondido');
    
    // Desloca a visão do usuário suavemente até o painel revelado
    painel.scrollIntoView({ behavior: 'smooth' });
}
