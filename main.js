const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você conhece alguém especial em uma festa. Como você se aproxima dessa pessoa?",
        alternativas: [
            {
                texto: "Ir direto e se apresentar",
                afirmacao: "Você vai até a pessoa e se apresenta. A conversa flui bem e vocês começam a se conhecer melhor.",
                caminho: 1
            },
            {
                texto: "Esperar que a pessoa venha até você",
                afirmacao: "Você decide esperar. A pessoa não vem e você perde a oportunidade de iniciar uma conversa.",
                caminho: 2
            }
        ]
    },
    {
        enunciado: "Você marca um encontro com a pessoa que conheceu. Onde vocês devem ir?",
        alternativas: [
            {
                texto: "Para um jantar em um restaurante elegante",
                afirmacao: "O jantar é agradável e vocês têm uma ótima conversa. A noite termina com uma sensação de que algo especial está começando.",
                caminho: 3
            },
            {
                texto: "Para um passeio em um parque",
                afirmacao: "O passeio é divertido e descontraído. Vocês conversam bastante e acabam descobrindo interesses em comum.",
                caminho: 4
            }
        ]
    },
    {
        enunciado: "Após alguns encontros, você percebe que está apaixonado. Como você revela seus sentimentos?",
        alternativas: [
            {
                texto: "Falar diretamente sobre seus sentimentos",
                afirmacao: "Você é honesto sobre seus sentimentos. A pessoa fica tocada e também revela que sente o mesmo por você.",
                caminho: 5
            },
            {
                texto: "Dar sinais sutis e esperar que a pessoa perceba",
                afirmacao: "Você tenta mostrar seus sentimentos indiretamente. A pessoa demora para entender e você fica ansioso com a incerteza.",
                caminho: 6
            }
        ]
    },
    {
        enunciado: "Agora que vocês estão juntos, como você faz para manter o relacionamento saudável?",
        alternativas: [
            {
                texto: "Comunicando-se abertamente e fazendo planos juntos",
                afirmacao: "A comunicação aberta e o planejamento conjunto ajudam a fortalecer o relacionamento e manter a conexão.",
                caminho: 7
            },
            {
                texto: "Dando espaço e esperando que o relacionamento se desenvolva naturalmente",
                afirmacao: "Dando espaço, vocês mantêm a individualidade, mas precisam se esforçar para manter a conexão emocional.",
                caminho: 8
            }
        ]
    },
    {
        enunciado: "Após um ano de relacionamento, vocês decidem dar um próximo passo. Qual é a escolha?",
        alternativas: [
            {
                texto: "Mudar para a mesma cidade ou apartamento",
                afirmacao: "Vocês se mudam juntos e o relacionamento fica ainda mais forte com o tempo que passam juntos diariamente.",
                caminho: 9
            },
            {
                texto: "Continuar morando separados, mas fazer planos para o futuro",
                afirmacao: "Vocês continuam com seus próprios espaços, mas o planejamento do futuro mantém o relacionamento sólido e promissor.",
                caminho: 10
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim do quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();