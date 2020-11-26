let couleurBleu = ['#3498db','#2980b9','#27ae60','#2ecc71','#16a085','#1abc9c','#25CCF7','#1B9CFC','#474787'];
let couleurJaune = ['#f1c40f','#f39c12','#e67e22','#d35400'];

let motsNuageBleu = document.querySelectorAll('.bleu');

motsNuageBleu.forEach(function(item){

    let randomNumber = Math.floor(Math.random() * 9);
    item.style.color = couleurBleu[randomNumber];
    randomElement(item);
});

let motsNuageJaune = document.querySelectorAll('.jaune');

motsNuageJaune.forEach(function(item){

    let randomNumber = Math.floor(Math.random() * 4);
    item.style.color = couleurJaune[randomNumber];
    randomElement(item);
});

function randomElement(item){
    
    let randomNumber = 2 - Math.random() * 1;
    item.style.fontSize = randomNumber + 'em';

    let position = Math.round(Math.random());

    if(position == 1) {
        item.style.textAlign = 'left';
    }
    else{
        item.style.textAlign = 'right';
    }
    
    let marginTop = Math.floor(Math.random() * 50);
    
    item.style.marginTop = marginTop +'px';
}