// --- CONTROLES DE ACESSIBILIDADE ---
let currentFontSize = 100; // Porcentagem inicial do tamanho da fonte

// Aumentar o tamanho do texto
document.getElementById('btn-increase-text').addEventListener('click', () => {
    currentFontSize += 10;
    document.body.style.fontSize = currentFontSize + '%';
});

// Diminuir o tamanho do texto
document.getElementById('btn-decrease-text').addEventListener('click', () => {
    if (currentFontSize > 70) { // Limite mínimo de tamanho
        currentFontSize -= 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
});

// Alternar brilho do site (Abaixar / Normalizar)
document.getElementById('btn-toggle-brightness').addEventListener('click', () => {
    document.body.classList.toggle('low-brightness');
});


// --- VALIDAÇÃO DO QUIZ INTERATIVO ---
document.getElementById('btn-submit-quiz').addEventListener('click', () => {
    // Array com o nome dos grupos de inputs de cada pergunta
    const totalQuestions = 5;
    
    for (let i = 1; i <= totalQuestions; i++) {
        const questionBox = document.getElementById(`q1-box`.replace('1', i));
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);

        // Remove classes de validações anteriores para atualizar
        questionBox.classList.remove('correct-question', 'wrong-question');

        if (selectedOption) {
            if (selectedOption.value === 'correto') {
                // Se acertou, a pergunta inteira ganha a estilização verde
                questionBox.classList.add('correct-question');
            } else {
                // Se errou, a pergunta ganha a estilização vermelha
                questionBox.classList.add('wrong-question');
            }
        } else {
            // Se não respondeu, aplica a estilização de erro por padrão
            questionBox.classList.add('wrong-question');
        }
    }
});
