const cataia = document.querySelector('.cataia');
const cachaca = document.querySelector('.cachaca');
const aguardente = document.querySelector('.aguardente');


cataia.addEventListener('click', event => {
    event.preventDefault();

    window.location.href = 'https://produto.mercadolivre.com.br/MLB-1325448343-cachaca-artesanal-mineira-com-cataia-whisky-caicara-_JM';
});

cachaca.addEventListener('click', event => {
    event.preventDefault();

    window.location.href = 'https://produto.mercadolivre.com.br/MLB-1331271675-cachaca-mineira-artesanal-bi-destilada-_JM'
});

aguardente.addEventListener('click', event => {
    event.preventDefault();

    window.location.href = 'https://produto.mercadolivre.com.br/MLB-1331268398-aguardente-de-cana-artesanal-mineira-_JM'
});