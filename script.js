setTimeout(function(){

    document.getElementById('loadingScreen').remove();

}, 8000);

//*********************** */
// Changement de section

let cube = document.querySelector('.cube');
let radioGroup = document.querySelectorAll('.btn-section');
let currentClass = '';

radioGroup.forEach(function(item){

    item.addEventListener( 'click', function(e){

            //Modification de la section lecture
            let currentSection = document.querySelector('.section-display');
            currentSection.classList.remove('section-display');

            let newSection = document.querySelector('#section-' +  this.value);
            newSection.classList.add('section-display');

            //desactivation du previous button
            let curentPreviousButton = document.querySelector('.previous-button');
            if(curentPreviousButton){
                curentPreviousButton.classList.remove('previous-button');
            }
            
            // désactivation du bouton courant
            let currentButton = document.querySelector('.active-button');
            currentButton.classList.remove('active-button');

            //ajout de la classe bouton actif sur le bouton choisi + bouton previous
            this.classList.add('active-button');
            currentButton = document.querySelector('.active-button');
            
            if(currentButton.previousElementSibling){
                this.previousElementSibling.classList.add('previous-button');
            }

            // Modification du cube
            let showClass = 'show-' + this.value;
            if ( currentClass ) {
                cube.classList.remove( currentClass );
            }
            cube.classList.add( showClass );
            currentClass = showClass;

        });
});

document.querySelector('.btn-section').click();