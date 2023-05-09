var totkOut = new Date("May 12, 2023 00:00:00").getTime();

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

var isOutWrote = false; 

function countdown() {
    var now = new Date().getTime();
    var wait = totkOut-now;

    if(wait<0 && !isOutWrote){
        let countdown = document.getElementById("countdown"); 
        let isOut = document.createTextNode('Le jeu est sorti !');
        countdown.prepend(isOut);
        isOutWrote = true; 
        days.remove(); 
        hours.remove();
        mins.remove();
        secs.remove(); 
    }else{
        var tdays = Math.floor(wait/(1000*60*60*24));
        var thours = Math.floor((wait%(1000*60*60*24))/(1000*60*60));
        var tmins = Math.floor((wait%(1000*60*60))/(1000*60));
        var tsecs = Math.floor((wait%(1000*60))/(1000));

        days.textContent = tdays+" jours ";
        hours.textContent = thours+" heures "
        mins.textContent = tmins+" minutes ";
        secs.textContent = tsecs+" secondes";
    }
}

setInterval(countdown,1000);