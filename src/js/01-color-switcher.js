const body = document.querySelector('body');
let timerId = null;

body.addEventListener('click', onClick);

function onClick(evt){
    if(evt.target.hasAttribute("data-start")){
        timerId = setInterval(()=>{body.style.backgroundColor = getRandomHexColor()},1000)

        evt.target.setAttribute('disabled', '');
        evt.target.nextElementSibling.removeAttribute('disabled')
    } else {
        clearInterval(timerId);

        evt.target.previousElementSibling.removeAttribute('disabled');
        evt.target.setAttribute('disabled', '');
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}