/* Ucitavanje poledjine karata i pokretanje igre*/



start = () => {
    window.onload = function(){
        for(let i = 0; i < 5; i++){

            
            const cardField = document.getElementById("cardField");
            const card = document.createElement("div"); 
            
            card.id = "card" + i;
            card.innerHTML = "<img class = 'img' src='cards/back.png'>"
        
            cardField.appendChild(card);    
        }
    }
}

//Deal cards function
start();

//definisanje nizova
let cardArray = []; //niz za karte koje su podeljene prvim klikom na deal
let newArray = [];

//Credit value
const credit = document.getElementById("credit");
credit.innerHTML = 200;

//chip value
const chip = document.getElementById("chip");
chip.innerHTML = 20;


//kreiranje karata

[]
// HOLD TOGGLE funkcija


//deljenje karata

dealCards = () => {

    //erasing previous card array, for getting new one
    cardArray = [];
    newArray = [];
    //kreiranje 5 kartata na talonu
    for(let i = 0; i < 5; i++){       

        cardArray.push(createCard());   
    }

    

    for(let i = 0; i < cardArray.length; i++){
        
        const cardField = document.getElementById("cardField");
        const card = document.getElementById("card" + i);

        if(card.classList.contains("opacity")){
            card.classList.remove("opacity");
            cardArray.push(card[i]);

        }
        else{
            card.innerHTML = "<img id='img" + [i] + "' src='cards/" + cardArray[i] + ".png '>";
            cardField.appendChild(card);
           
        }
         
       

        
    }

   
    //ocitavanje niza
    console.log(cardArray);

    // HOLD CARDS FUNTION 
    toggleCards();
    credit.innerHTML -= chip.innerHTML;
    if(credit.innerHTML == 0){
        alert("game over");
        location.reload();
    }
}

for(let i = 0; i < cardArray.length; i++){

}

/* newArray = map.cardArray(myFunction);
myFunction = () =>{
    for(i = 0; i < 5; i++){
        console.log("aaa");
    }
} */

console.log(newArray);

/* dealCards2 = () =>{ 

    for(let i = 0; i < 5; i++){
        const img = document.getElementById("img" + i);
        const test = img.classList.contains("opacity");
        if(test){
            console.log("Postoji klasa opacity" + " " + "img" + i);
            cardArray[i] = "x";
        }
        else{
            console.log("Ne postoji opacity" + " " + "img" + i);
            const cardField = document.getElementById("cardField");
            const card = document.getElementById("card" + i);
            if(cardArray[i] != "x"){
                cardArray[i] = createCard();
            }
                card.innerHTML = "<img id='img" + [i] + "' src='cards/" + cardArray[i] + ".png '>";
                cardField.appendChild(card); 

        }
        img.classList.remove("opacity");
    }

    //ocitavanje niza
    console.log(cardArray);
    //console.log(cardArray);
    toggleCards();
} */




/* const pkr = document.getElementById("poker");
const test = pkr.classList.contains("posker");

if(test){
    console.log("postoji klasa poker");
} */