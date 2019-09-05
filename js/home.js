//Verificação de idade com modal

const bgModal = document.getElementsByClassName('bgModal'); //Pega toda a div do modal
const modal = document.getElementById('modal'); //Pega apenas o modal

const yesButton = document.getElementsByClassName('yes');//Botão "sou maior de 18 anos"
const noButton = document.getElementsByClassName('no');//Botão "sou menor"

//Onclick do botão "sou maior de 18 anos"
//Aplica a animação de saída do modal e continua no site
yesButton[0].addEventListener('click', event => {
    //Evita o botão de dar refresh na pagina
    event.preventDefault();

    //Adiciona a animação de saída  
    modal.classList.remove('callAnimation');
    void modal.offsetWidth;
    modal.classList.add('byeAnimation');
    
    //Espera a animação ser concluida para adicionar a classe hidden
    //A animação dura exatamente 600ms
    setTimeout(()=>{ bgModal[0].classList.add('hidden') }, 600);
});

//Onclick do botão "sou menor"
//Redireciona para o google
noButton[0].addEventListener('click', event => {
    event.preventDefault();
    window.location.href = "http://google.com";
});


//Menu collapsado
const menu = document.getElementsByClassName('menuFullscreen');
const menulist = document.getElementById('menuList');
const closeButton = document.getElementById('close');

const callMenu = document.getElementById('callMenu');

callMenu.addEventListener('click', event => {
    event.preventDefault();

    closeButton.classList.remove('byeAnimation');
    menuList.classList.remove('byeAnimation');
    menu[0].classList.remove('hidden');
    menulist.classList.add('callAnimation');
    closeButton.classList.add('callAnimation');
})

closeButton.addEventListener('click', event => {
    event.preventDefault();

    menuList.classList.remove('callAnimation');
    void menuList.offsetWidth;
    menuList.classList.add('byeAnimation');

    closeButton.classList.remove('callAnimation');
    void closeButton.offsetWidth;
    closeButton.classList.add('byeAnimation');

    setTimeout(()=>{ menu[0].classList.add('hidden') }, 600);
});