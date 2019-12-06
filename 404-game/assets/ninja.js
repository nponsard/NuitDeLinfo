var xpos = 10
var ypos = 400
var score = 0.0
var deplacement = -2
var posxwalls = []
var posywalls = []
var state = "play"

var c = document.getElementById("canvas")
var ctx = c.getContext("2d")
var img = document.getElementById("ninja")
var wall = document.getElementById("wall")
var wall2 = document.getElementById("wall2)

document.addEventListener('keydown', logKey);
document.addEventListener('click' , logKey);


function drawninja() {
  
  ctx.drawImage(img, xpos, ypos)
  xpos+= deplacement
  if (xpos >= 288)
    xpos=288
  if (xpos <= 0)
    xpos=0
  }

function scrolling() {
    if (Math.floor(score)%100 == 0){
      posxwalls.push(Math.floor(Math.random() * 19)*16)
      posywalls.push(0)

    }
    for (var i = 0; i < posxwalls.length; ++i){
      posywalls[i] += score/5000 + 1
      if (posywalls[i] >= 500) {
        posywalls.shift()
        posxwalls.shift()
      }
      if (score % 30 <15)
        ctx.drawImage(wall, posxwalls[i], posywalls[i])
      else 
        ctx.drawImage(wall2, posxwalls[i], posywalls[i])
    }
}

function collidetest() {
  for (var i = 0; i < posxwalls.length && state == "play"; ++i){
    state = "lose"
    if ((xpos >= (posxwalls[i] + wall.width)) || ((xpos + ninja.width) <= posxwalls[i]) || (ypos >= (posywalls[i] + wall.height)) || ((ypos + ninja.height) <= posywalls[i]))
      state = "play"
  }
}

function update() {
  if (state == "play"){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawninja()
    scrolling()
    document.getElementById('score').innerHTML = Math.floor(score/20)
    collidetest()
    ++score
  }
  if (state == "lose")
    document.getElementById('score').innerHTML = "Dommage, vous avez perdu ... Mais votre score est tout de même de " + Math.floor(score/20) + " !"
}

setInterval(update, 10)

function logKey(e) {
  if (state == "play") {
    if (deplacement == -2 && xpos == 0){
      deplacement = 2;
    }
      
      
    if (deplacement == 2 && xpos == 288){
      deplacement = -2;
    }
  }

  if (state == "lose") {
    xpos = 10
    ypos = 400
    score = 0.0
    deplacement = -2
    posxwalls = []
    posywalls = []
    state = "play"
  }
    
}