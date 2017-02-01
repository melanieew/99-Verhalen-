// Hier maak ik alle benodigde variabelen aan //

var like,
    i,
    filter,
    filterSection,
    main,
    likesCount,
    likesAmount,
    number,
    bookmarker;

// Dit is het stuk code dat de class "press" toevoegd aan de hartjes. Alle hartjes worden geselecteerd met behulp van getElementsByClassName, omdat alle hartjes dezelfde class dragen. Omdat getElementsByClassname alle elementen met de genoemde class selecteert en deze in een array zit is het nodig om een for loop te gebruiken om te bepalen op welk hartje er geklikt wordt. De funtie "toggle" zorgt er met 'this' voor dat dat er een nieuwe class aan het geklikte hartje gekoppeld wordt. Door gebruik te maken van toggle zorg ik ervoor dat bij de volgende klik de class weer verdwijnt.//

like = document.querySelectorAll('article div:first-of-type'); // variabele 'like' defineren
likesCount = 0;


function toggle() { // functie voor het toevoegen en verwijderen van de class (opgemaakt in css)
    number = this.querySelector('p');
    likesAmount = this.innerText;
    
    if (this.className === 'liked') {
        this.classList.toggle('liked');
        likesAmount--;
        number.innerHTML = likesAmount;
    } else {
        this.classList.toggle('liked');
        likesAmount++;
        number.innerHTML = likesAmount;
    }
}

for (i = 0; i < like.length; i += 1) { // for loop om te bepalen op welk hartje er geklikt wordt
    like.item(i).onclick = toggle;
}

// Onderstaande code wordt gebruikt voor het animeren van de filter. Hierbij woorden ook eerst drie variabelen gedefineerd. Vervolgens wordt er met behulp van het '.onclick' event de functie 'filterToggle' gestart. Deze functie zet voor twee elementen een nieuwe class aan of uit. //

filter = document.querySelector('section');
filterSection = document.querySelector('section.filter');
main = document.querySelector('main');

function filterToggle() {
    filterSection.classList.toggle('clicked');
    main.classList.toggle('opacity');
}

filter.onclick = filterToggle;

// //
bookmarker = document.querySelectorAll('article div:nth-of-type(2)');

function fill () {    
    this.classList.toggle('filled');
}

for (i = 0; i < like.length; i += 1) { // for loop om te bepalen op welk hartje er geklikt wordt
    bookmarker.item(i).onclick = fill;
}