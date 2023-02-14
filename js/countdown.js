var totkOut = new Date("May 12, 2023 00:00:00").getTime();

function countdown() {
    var now = new Date().getTime();

    var wait = totkOut-now;

    var days = Math.floor(wait/(1000*60*60*24));
    var hours = Math.floor((wait%(1000*60*60*24))/(1000*60*60));
    var mins = Math.floor((wait%(1000*60*60))/(1000*60));
    var secs = Math.floor((wait%(1000*60))/(1000));

    document.getElementById("cdown").textContent = days+" jours "+hours+" heures "+mins+" minutes "+secs+" secondes";
}

setInterval(countdown,1000); 