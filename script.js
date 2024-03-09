document.addEventListener('DOMContentLoaded', (event) => {
    const titulo = document.getElementById('titulo');
    const listaNaoOrdenada = document.querySelector('ul');
    const link = document.querySelector('a');
    const listaOrdenada = document.getElementById('lista-ordenada');

    titulo.innerText = 'Título Exemplo';
    link.innerText = 'Proz Educação';

    listaNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    `;

    listaOrdenada.innerHTML = `
        <li><a href="https://github.com/WBorges1984" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/willian-borges-60b7b068/" target="_blank">Linkedin</a></li>
        <li><a href="https://www.globo.com/" target="_blank">Globo.com</a></li>
    `;
});
