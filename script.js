const number = document.querySelector("#number");

function Color() {

    if (number.value > 5) {
        alert("O Numero Digitado é Maior do que 5 !")
    } else {
        alert("O Numero Digitado é Menor ou Igual a 5 !")
    }

}

let cor = 'pink';
function changeColor(){
    
    const changeColor = document.querySelector('body');
 

    if (cor == 'pink'){
        changeColor.style.backgroundColor = 'blue';
        cor='blue';
    } else{
        changeColor.style.backgroundColor = 'pink';
        cor='pink';
    }
}

const numberAposta = document.querySelector("#sorte");

function Aposta(){
    const random = Math.floor(Math.random()*100)+1;

    if (numberAposta.value == random){
        alert("Parabens Você Ganhou !!")
    }else {
        alert("Mais Sorte na Proxima, Tomei Seu Dinheiro !!")
        alert(random)
    }
}