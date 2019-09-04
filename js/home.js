const bgModal = document.getElementsByClassName('bgModal');
const modal = document.getElementById('modal');

const yesButton = document.getElementsByClassName('yes');
const noButton = document.getElementsByClassName('no');

yesButton[0].addEventListener('click', event => {
    event.preventDefault();

    modal.classList.remove('callAnimation');
    
    void modal.offsetWidth;

    modal.classList.add('byeAnimation');

    
    setTimeout(()=>{ bgModal[0].classList.add('hidden') }, 600);

});

noButton[0].addEventListener('click', event => {
    event.preventDefault();

    window.location.href = "http://google.com";
})


