// Array com dicas sobre sustentabilidade no campo
const dicasSustentaveis = [
    "🚜 Rotação de Culturas: Alternar as espécies plantadas ajuda a manter os nutrientes do solo e reduz pragas de forma natural.",
    "💧 Irrigação Gota a Gota: Economiza água direcionando a umidade direto para as raízes das plantas, evitando o desperdício.",
    "🌳 Integração Lavoura-Pecuária-Floresta (ILPF): Misturar plantações, gado e árvores na mesma área melhora o solo e dá sombra aos animais.",
    "🐝 Preservação de Polinizadores: Proteger abelhas e insetos locais garante uma polinização natural eficiente para as plantações.",
    "☀️ Energia Solar no Campo: Utilizar painéis solares para bombear água e alimentar cercas elétricas reduz a pegada de carbono da fazenda."
];

const botao = document.getElementById('btn-dica');
const painelDica = document.getElementById('revelar-dica');

botao.addEventListener('click', () => {
    // Sorteia uma dica aleatória do array
    const dicaAleatoria = dicasSustentaveis[Math.floor(Math.random() * dicasSustentaveis.length)];
    
    // Exibe o texto e remove a classe que esconde o elemento
    painelDica.textContent = dicaAleatoria;
    painelDica.classList.remove('hidden');
});
