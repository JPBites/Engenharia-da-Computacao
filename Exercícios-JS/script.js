const botaoExercicio = document.getElementById('resolverExercicio');

botaoExercicio.addEventListener('click', function() {
    const mudandoTitulo = document.querySelector('.titulo');
    mudandoTitulo.textContent = 'Exercício resolvido!';
});