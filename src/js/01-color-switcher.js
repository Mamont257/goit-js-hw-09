const body = document.querySelector('body');
let timerId = null;

body.addEventListener('click', onClick);

function onClick(evt) {
    if(evt.target.hasAttribute("data-start")){
        timerId = setInterval(()=>{body.style.backgroundColor = getRandomHexColor()},1000)

        setAtb(evt.target);
        remAtb(evt.target.nextElementSibling);
    } else {
        clearInterval(timerId);

        remAtb(evt.target.previousElementSibling);
        setAtb(evt.target);
    }
}

function setAtb(value) {
    value.setAttribute('disabled', '');
}

function remAtb(value) {
    value.removeAttribute('disabled');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}