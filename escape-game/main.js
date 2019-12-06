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