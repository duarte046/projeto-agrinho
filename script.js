// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    const botaoExplorar = document.getElementById('btnAcao');
    const secaoPilares = document.getElementById('pilares');

    // Adiciona evento de clique para rolagem suave
    botaoExplorar.addEventListener('click', () => {
        secaoPilares.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

});
