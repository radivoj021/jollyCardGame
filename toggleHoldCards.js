toggleCards = () =>{

/*     let img0 = document.getElementById("img0");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4"); */

    let card0 = document.getElementById("card0");
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");
    let card4 = document.getElementById("card4");


    card0.addEventListener("click", function(){
        card0.classList.toggle("opacity");
    })
    card1.addEventListener("click", function(){
        card1.classList.toggle("opacity");
    })
    card2.addEventListener("click", function(){
        card2.classList.toggle("opacity");
    })
    card3.addEventListener("click", function(){
        card3.classList.toggle("opacity");
    })
    card4.addEventListener("click", function(){
        card4.classList.toggle("opacity");
    })

    /* img1.addEventListener("click", function(){
        img1.classList.toggle("opacity");
    })
    img2.addEventListener("click", function(){
        img2.classList.toggle("opacity");
    })
    img3.addEventListener("click", function(){
        img3.classList.toggle("opacity");
    })
    img4.addEventListener("click", function(){
        img4.classList.toggle("opacity");
    }) */
}
