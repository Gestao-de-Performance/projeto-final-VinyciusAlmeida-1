// Tema Escuro e Claro
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

// DropDown Escolha de Idioma
const dropdownBtn = document.getElementById('dropDownBtn');
const dropDownContent = document.getElementById('dropDownContent');

dropDownBtn.addEventListener('click', function(){
    dropDownContent.classList.toggle('show');
});

// Formulario

const formulario = document.getElementById('formContato');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if (validacao()) {
        showToast("Mensagem enviada com sucesso!", "success");
        formulario.reset();
    } else {
        showToast("Por favor, corrija os erros antes de enviar.", "error");
    }
});

function validacao(){
    let valido = true;

    const valorUsuario = usuario.value.trim();
    const valorEmail = email.value.trim();

    if (valorUsuario === ''){
        setError(usuario, 'O nome é obrigatório');
        valido = false;
    } else{
        setSucesso(usuario);
    }

    if (valorEmail === ''){
        setError(email, 'O e-mail é obrigatório');
        valido = false;
    } else if (emailValido(valorEmail)){
        setSucesso(email);
    } else {
        setError(email, 'Forneça um e-mail válido');
        valido = false;
    }

    return valido;
}

function setError(input, mensagem){
    const itemFormulario = input.parentElement;
    const mensagemErro = itemFormulario.querySelector('.mensagemErro');

    mensagemErro.innerText = mensagem;
    itemFormulario.classList.add('erro');
    itemFormulario.classList.remove('sucesso');
}

function setSucesso(input){
    const itemFormulario = input.parentElement;

    itemFormulario.classList.add('sucesso');
    itemFormulario.classList.remove('erro');

    const mensagemErro = itemFormulario.querySelector('.mensagemErro');
    mensagemErro.innerText = '';
}

function emailValido(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");

    const toast = document.createElement("div");
    toast.classList.add("toast", type);
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// Carrossel


const habilidadesGrid = document.getElementById("habilidadesGrid");

let scrollSpeed = 1;

// Duplicar os itens (cria efeito infinito real)
function duplicarItens() {
    const itens = [...habilidadesGrid.children];
    itens.forEach(item => {
        const clone = item.cloneNode(true);
        habilidadesGrid.appendChild(clone);
    });
}

duplicarItens();

function animarCarrossel() {
    habilidadesGrid.scrollLeft += scrollSpeed;

    // Se chegou no final, volta para o começo
    if (habilidadesGrid.scrollLeft >= habilidadesGrid.scrollWidth / 2) {
        habilidadesGrid.scrollLeft = 0;
    }

    requestAnimationFrame(animarCarrossel);
}

animarCarrossel();

// Pausar animação no hover
habilidadesGrid.addEventListener("mouseenter", () => {
    scrollSpeed = 0;
});

habilidadesGrid.addEventListener("mouseleave", () => {
    scrollSpeed = 1;
});
