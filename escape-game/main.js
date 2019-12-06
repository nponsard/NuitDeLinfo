let timerElement = document.getElementById("timer")

const start = new Date()
const tempMax = new Date('0000-01-01T00:30:00');

function timer(){
  var end = new Date()
  var diff = new Date(end - start)
  var tempsRest = new Date(tempMax - diff)
  timerElement.innerHTML = tempsRest.getMinutes() + ":" + tempsRest.getSeconds();
}

setInterval(timer, 750);

//erreur
let erreurE1 = document.getElementById("erreurE1")
let erreurE2 = document.getElementById("erreurE2")

function clearErreur(){
  erreurE1.style.display = "none"
  erreurE2.style.display = "none"
}

function reset(){
    let div = document.getElementById("2")
    div.style.display = "none"
    div = document.getElementById("3")
    div.style.display = "none"
}

function e1() {
  let gps = document.getElementById("gps")
  if(gps.value === "43.514660,5.451033"){
    let div2 = document.getElementById("2")
    div2.style.display = "block"
    clearErreur()
  }
  else 
    erreurE1.style.display = "inline"
}

function e2true() {
    let div3 = document.getElementById("3")
    div3.style.display = "block"
    clearErreur()
}
function e2false() {
    erreurE2.style.display = "inline"
    reset();
}

//Enigme1  43.514660,5.451033
//Enigme2  panneau(3) chiffre 
//Enigme3  panneau(3) cesar
//Enigme4  panneau(4) altbash
//Enigme5  264537