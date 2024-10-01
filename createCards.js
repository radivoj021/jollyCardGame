createCard = () => {

    const cardNum = Math.floor(Math.random() * 12) + 2;

    const nameNum = Math.floor(Math.random() * 4) + 2;
    let name = "";

    if(nameNum == 2){
        name = "spades";
    }
    else if(nameNum == 3){
        name = "hearts";
    }
    else if(nameNum == 4){
        name = "clubs";
    }
    else if(nameNum == 5){
        name = "diamonds";
    }    

    const card = cardNum + name;
    return card;
}