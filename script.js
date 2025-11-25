
const lightMode = document.getElementById('theme-switch');

const temaAtual = localStorage.getItem('theme');

if (temaAtual){
    document.documentElement.setAttribute('data-theme', temaAtual);
}

if (lightMode) {
    lightMode.addEventListener('click', function(){
    let novoTema;

    const temaAtual = document.documentElement.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        novoTema = 'light';
        lightMode.innerHTML = '🌙';
    } else {
        novoTema = 'dark';
        lightMode.innerHTML = '☀️';
    }

    document.documentElement.setAttribute('data-theme', novoTema);

    localStorage.setItem('theme', novoTema);
    });
}

const languages = document.getElementById('translate');