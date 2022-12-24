const body = document.querySelector('body');
console.dir(body);
const id = 0;

body.addEventListener('click', onClick);

function onClick(evt){
    console.dir(evt.target.hasAttribute("data-start"));
    if(evt.target.hasAttribute("data-start")){
        id = setInterval(()=>{body.style.backgroundColor = getRandomHexColor();},1000)
        console.log(id);
        // body.style.backgroundColor = getRandomHexColor();
        // setAttribute(disabled);
        body.children[1].setAttribute('disabled','');
        body.children[2].removeAttribute('disabled');
        // evt.setAttribute('disabled','');
    } else {
        clearInterval(id);
    }
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());
