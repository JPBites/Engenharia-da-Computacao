// Aguarda o carregamento do DOM antes de buscar os elementos.
document.addEventListener('DOMContentLoaded', function () {
    const botaoExercicio = document.getElementById('resolverExercicio');
    const mudandoTitulo = document.querySelector('.titulo');

    // Evita erro caso algum elemento não exista na página.
    if (!botaoExercicio || !mudandoTitulo) {
        return;
    }

    // Ao clicar no botão, atualiza o texto do título.
    botaoExercicio.addEventListener('click', function () {
        mudandoTitulo.textContent = 'Exercício resolvido!';
    });
});