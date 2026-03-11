// Aguarda o carregamento do DOM antes de buscar os elementos.
document.addEventListener('DOMContentLoaded', function () {
    const botaoExercicio = document.getElementById('resolverExercicio');
    const mudandoTitulo = document.querySelector('.titulo');

    const botaoDestaque = document.getElementById('alterarParagrafo');
    const paragrafoDestaque = document.querySelector('.destaque');

    const botaoAumentar = document.getElementById('Aumentar');
    const botaoDiminuir = document.getElementById('Diminuir');
    const imagem = document.querySelector('img');

    const fundoColorido = document.getElementById('fundoColorido');

    const botaoFecharOuAbrir = document.getElementById('fecharOuAbrir');

    // Evita erro caso algum elemento não exista na página.
    if (!botaoExercicio || !mudandoTitulo) {
        return;
        }

    // Ao clicar no botão, atualiza o texto do título.
    botaoExercicio.addEventListener('click', function () {
        mudandoTitulo.textContent = 'Exercício resolvido!';
        }
    )

    if (!botaoDestaque || !paragrafoDestaque) {
        return;
    }
        botaoDestaque.addEventListener('click', function () {
            paragrafoDestaque.style.backgroundColor = '#FF0';
            paragrafoDestaque.style.color = '#f00';
            }
        )

    if (!botaoAumentar || !botaoDiminuir || !imagem) {
        return;
    }

    botaoAumentar.addEventListener('click', function () {
        const larguraAtual = imagem.width;
        imagem.width = larguraAtual + 20; // Aumenta a largura em 20 pixels
        }
    )

    botaoDiminuir.addEventListener('click', function () {
        const larguraAtual = imagem.width;
        imagem.width = larguraAtual - 20; // Diminui a largura em 20 pixels
        }
)

    if (!fundoColorido) {
        return;
    }

    function ajustarLarguraPelaAltura() {
        // Mede a altura total atual e aplica o mesmo valor na largura.
        const alturaAtual = fundoColorido.offsetHeight;
        fundoColorido.style.width = alturaAtual + 'px';
    }

    ajustarLarguraPelaAltura();
    window.addEventListener('resize', ajustarLarguraPelaAltura);

    fundoColorido.addEventListener('mouseenter', function () {
        fundoColorido.style.backgroundColor = '#09E'; // Cor de fundo ao passar o mouse
    });

    fundoColorido.addEventListener('mouseleave', function () {
        fundoColorido.style.backgroundColor = 'gray'; // Volta para a cor original ao sair
    });

    botaoExercicio.addEventListener('click', ajustarLarguraPelaAltura);
    botaoDestaque.addEventListener('click', ajustarLarguraPelaAltura);
    botaoAumentar.addEventListener('click', ajustarLarguraPelaAltura);
    botaoDiminuir.addEventListener('click', ajustarLarguraPelaAltura);

    if (!botaoFecharOuAbrir) {
        return;
    }

    botaoFecharOuAbrir.addEventListener('click', function () {
        if (fundoColorido.style.display === 'none') {
            fundoColorido.style.display = 'block';
            botaoFecharOuAbrir.textContent = 'Fechar';
        } else {
            fundoColorido.style.display = 'none';
            botaoFecharOuAbrir.textContent = 'Abrir';
        }

}) 
});
